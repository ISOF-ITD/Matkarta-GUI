import React from 'react';
import { Route, Switch } from 'react-router-dom';
import _ from 'underscore';
import L from 'leaflet';

import MatkartaMenu from './MatkartaMenu';
import MapView from './../../ISOF-React-modules/components/views/MapView';
import PlaceView from './../../ISOF-React-modules/components/views/PlaceView';
import RoutePopupWindow from './../../ISOF-React-modules/components/controls/RoutePopupWindow';
import LocalLibraryView from './../../ISOF-React-modules/components/views/LocalLibraryView';
import ImageOverlay from './../../ISOF-React-modules/components/views/ImageOverlay';
import FeedbackOverlay from './../../ISOF-React-modules/components/views/FeedbackOverlay';
import ContributeInfoOverlay from './../../ISOF-React-modules/components/views/ContributeInfoOverlay';
import TranscriptionOverlay from './../../ISOF-React-modules/components/views/TranscriptionOverlay';
import PopupNotificationMessage from './../../ISOF-React-modules/components/controls/PopupNotificationMessage';
import OverlayWindow from './../../ISOF-React-modules/components/controls/OverlayWindow';
import GlobalAudioPlayer from './../../ISOF-React-modules/components/views/GlobalAudioPlayer';
import SitevisionContent from './../../ISOF-React-modules/components/controls/SitevisionContent';

import routeHelper from './../utils/routeHelper';
import WindowScroll from './../../ISOF-React-modules/utils/windowScroll';

import config from './../config.js';

import EventBus from 'eventbusjs';

export default class Application extends React.Component {
	constructor(props) {
		super(props);

		// Lägg till globalt eventBus variable för att skicka data mellan moduler
		window.eventBus = EventBus;

		/* Global applicationSettings, includeNordic = false betyder att vi inkluderar inte norskt material som standard
			includeNordic används av ISOF-React-modules/components/collections/MapCollection.js och
			ISOF-React-modules/components/collections/RecordsCollection.js i Nordisk_sägenkarta branchen.
		*/
		window.applicationSettings = {
			includeNordic: false
		};

		// Lissna på event när ljudspelare syns, lägger till .has-docked-control till body class
		window.eventBus.addEventListener('audio.playervisible', this.audioPlayerVisibleHandler.bind(this));

		// Bind event handlers till "this" (själva Application instance)
		this.mapMarkerClick = this.mapMarkerClick.bind(this);
		this.popupCloseHandler = this.popupCloseHandler.bind(this);
		this.popupWindowHideHandler = this.popupWindowHideHandler.bind(this);
		this.popupWindowShowHandler = this.popupWindowShowHandler.bind(this);
 
		this.languageChangedHandler = this.languageChangedHandler.bind(this);

		// DefaultMarker
		this.defaultMarkerIcon = L.icon({
			iconUrl: config.appUrl+'img/map-marker-blue-location-smaller.png',
			shadowUrl: config.appUrl+'img/marker-shadow.png',

			iconSize:     [20, 26],	// size of the icon
			shadowSize:   [41, 41],	// size of the shadow
			iconAnchor:   [10, 26],	// point of the icon which will correspond to marker's location
			shadowAnchor: [12, 40],  // the same for the shadow
			popupAnchor:  [-1, -15] // point from which the popup should open relative to the iconAnchor
		});

		this.state = {
			selectedCategory: null,
			selectedSubcategory: null,

			searchValue: '',
			searchField: '',
			searchMetadata: false,
			popupVisible: false
		};
	}

	audioPlayerVisibleHandler() {
		// När GlobalAudioPlayer visas lägger vi till class till document.body för att
		// få utrymme för ljudspelaren i gränssnittet
		document.body.classList.add('has-docked-control');
	}

	mapMarkerClick(placeId) {
		// När användaren klickar på en prick, lägger till #places/[id] till url:et,
		// detta kommer att hanteras av application router
		this.props.history.push(routeHelper.createPlacePathFromPlaces(placeId, this.props.location.pathname));
	}

	popupCloseHandler() {
		// Lägg till rätt route när användaren stänger popuprutan
		if (this.props.location.pathname.indexOf('record/') > -1) {
			this.props.history.push(routeHelper.createPlacesPathFromRecord(this.props.location.pathname));
		}
		else if (this.props.location.pathname.indexOf('places/') > -1) {
			this.props.history.push(routeHelper.createPlacesPathFromPlace(this.props.location.pathname));
		}
		else {
			this.props.history.push('/places');
		}
	}

	popupWindowShowHandler() {
		// När popup-rutan är synlig, lägg till popupVisible: true till state,
		// i render() lägger detta till has-overlay class till <div id="app" />
		setTimeout(function() {
			this.setState({
				popupVisible: true
			});
		}.bind(this), 10);
	}

	popupWindowHideHandler() {
		// När popup-rutan är döljd, lägg till popupVisible: false till state
		setTimeout(function() {
			this.setState({
				popupVisible: false
			});
		}.bind(this), 10);
	}

	languageChangedHandler() {
		// force render när språk har ändras
		this.forceUpdate();
	}

	componentDidMount() {
		this.setState({
			selectedCategory: this.props.match.params.category,
			selectedSubcategory: this.props.match.params.subcategory,
			searchValue: this.props.match.params.search,
			searchField: this.props.match.params.search_field,
			searchYearFrom: this.props.match.params.year_from,
			searchYearTo: this.props.match.params.year_to,
			searchPersonRelation: this.props.match.params.person_relation,
			searchGender: this.props.match.params.gender,
			searchMetadata: this.props.match.params.has_metadata,
		}, function() {
			this.updateDocumentClass();

			setTimeout(function() {
				// Väntar en sekund, lägger till app-initialized till body class,
				// detta kör css transition som animerar gränssnittet i början
				document.body.classList.add('app-initialized');
			}.bind(this), 1000);
		}.bind(this));

		this.initSitevisonMenu();
	}

	componentWillReceiveProps(props) {
		// När application tar emot parametrar från url:et, skicka dem via eventBus
		// MapView, RecordsList och sökfält tar emot dem
		if (window.eventBus) {
			eventBus.dispatch('application.searchParams', {
				selectedCategory: props.match.params.category,
				selectedSubategory: props.match.params.category,
				searchValue: props.match.params.search,
				searchField: props.match.params.search_field,
				searchYearFrom: props.match.params.year_from,
				searchYearTo: props.match.params.year_to,
				searchPersonRelation: props.match.params.person_relation,
				searchGender: props.match.params.gender,
				searchMetadata: props.match.params.has_metadata
			});
		}

		this.setState({
			selectedCategory: props.match.params.category,
			selectedSubcategory: props.match.params.subcategory,
			searchValue: props.match.params.search,
			searchField: props.match.params.search_field,
			searchYearFrom: props.match.params.year_from,
			searchYearTo: props.match.params.year_to,
			searchPersonRelation: props.match.params.person_relation,
			searchGender: props.match.params.gender,
			searchMetadata: props.match.params.has_metadata,
		}, function() {
			this.updateDocumentClass();
		}.bind(this));
	}

	initSitevisonMenu() {
		if (document.getElementById('Meny')) {
			var menu = document.getElementById('Meny').parentElement;
			menu.onmouseover = function() {
				menu.classList.add('menu-expanded');
			};
			menu.onmouseout = function() {
				menu.classList.remove('menu-expanded');
			};
		}
	}

	updateDocumentClass() {
		// Lägger till kategory id till body class
		_.each(document.body.classList, function(className) {
			if (className && className.substr(0, 13) == 'map-category-') {
				document.body.classList.remove(className);
			}
		});

		if (this.state.selectedCategory) {
			document.body.classList.add('map-category-'+this.state.selectedCategory);
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		// Checkar om gränssnittet skulle uppdateras med att jämföra nya parametrar med förre parametrar
		return (JSON.stringify(nextState) != JSON.stringify(this.state));
	}

	render() {
		// Innehåll av RoutePopupWindow, kommer från application route i app.js
		const _props = this.props;
		const match = this.props.match;

		return (
				<div className={'app-container'+(this.state.popupVisible ? ' has-overlay' : '')}>

					<Switch>
						<Route 
							path="/places/:place_id([0-9]+)"
							render={(_props) =>
								<RoutePopupWindow
								onShow={this.popupWindowShowHandler}
									onHide={this.popupWindowHideHandler}
									onClose={this.popupCloseHandler}
									router={this.context.router}>
										<PlaceView {..._props} match={match}/>
								</RoutePopupWindow>
							}
						/>
						<Route 
							path="/places"
							render={() =>
								<RoutePopupWindow
									onShow={this.popupWindowShowHandler}
									onHide={this.popupWindowHideHandler}
									onClose={this.popupCloseHandler}
									router={this.context.router}>
										{_props.popup}
								</RoutePopupWindow>
						}/>
						<Route
							path="/record"
							render={() =>
								<RoutePopupWindow
									onShow={this.popupWindowShowHandler}
									onHide={this.popupWindowHideHandler}
									onClose={this.popupCloseHandler}
									router={this.context.router}>
										{_props.popup}
								</RoutePopupWindow>
						}/>
					</Switch>

					<MapView
						searchParams={this.props.match.params}
						onMarkerClick={this.mapMarkerClick}
						defaultMarkerIcon={this.defaultMarkerIcon}
						hideMapmodeMenu={true}
					>

						<MatkartaMenu
							searchMetadata={this.state.searchMetadata}
							selectedCategory={this.state.selectedCategory}
							selectedSubcategory={this.state.selectedSubcategory}
							{..._props}
						/>

						<LocalLibraryView headerText={l('Mina sägner')} {..._props} />

						<GlobalAudioPlayer />

					</MapView>

					

					<div className="map-progress"><div className="indicator"></div></div>

					<ImageOverlay />
					<FeedbackOverlay />
					<ContributeInfoOverlay />
					<TranscriptionOverlay />
					<PopupNotificationMessage />

				</div>
		);
	}
}