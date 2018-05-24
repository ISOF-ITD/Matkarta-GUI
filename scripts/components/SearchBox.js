import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';

import DropdownMenu from './../../ISOF-React-modules/components/controls/DropdownMenu';

export default class SearchBox extends React.Component {
	constructor(props) {
		super(props);

		// Bind all event handlers to this (the actual component) to make component variables available inside the functions
		this.inputKeyPressHandler = this.inputKeyPressHandler.bind(this);
		this.searchValueChangeHandler = this.searchValueChangeHandler.bind(this);
		this.executeSimpleSearch = this.executeSimpleSearch.bind(this);
		this.searchBoxClickHandler = this.searchBoxClickHandler.bind(this);
		this.languageChangedHandler = this.languageChangedHandler.bind(this);

		this.searchSuggestions = [
			'tunnbröd',
//			'mandel',
			'krydda',
			'kolbulle',
			'knäckebröd',
			'nödbröd',
			'surdeg',
//			'ostkaka ',
//			'ölsupa',
//			'brynost',
//			'nävgröt',
			'kroppkakor',
			'kanel'
		];

		this.state = {
			searchValue: '',
			expanded: false
		};

		window.searchBox = this;
	}

	inputKeyPressHandler(event) {
		if (event.key == 'Enter') {
			this.executeSimpleSearch();
		}
	}

	executeSimpleSearch() {
//		hashHistory.push('/places'+(this.state.searchValue != '' ? '/search/'+this.state.searchValue : ''));
		if (this.props.onSearch) {
			console.log('execute onSearch')
			this.props.onSearch({
				searchValue: this.state.searchValue
			});
		}
	}

	searchValueChangeHandler(event) {
		if (event.target.value != this.state.searchValue) {
			this.setState({
				searchValue: event.target.value
			});
		}
	}

	searchBoxClickHandler() {
		if (!this.state.expanded) {
			this.setState({
				expanded: true
			}, function() {
				if (this.props.onSizeChange) {
					this.props.onSizeChange(this.state)
				}
			}.bind(this));
			
			this.refs.searchInput.focus();
		}

	}

	languageChangedHandler() {
		console.log('language changed');
		this.forceUpdate();
	}

	componentDidMount() {
		document.getElementById('app').addEventListener('click', this.windowClickHandler.bind(this));

		if (window.eventBus) {
			window.eventBus.addEventListener('Lang.setCurrentLang', this.languageChangedHandler)
		}

		this.updateSuggestions();
	}

	componentWillUnmount() {
		if (window.eventBus) {
			window.eventBus.removeEventListener('Lang.setCurrentLang', this.languageChangedHandler)
		}
	}

	updateSuggestions() {
		this.setState({
			searchSuggestion: 't.ex. '+this.searchSuggestions[Math.floor(Math.random()*this.searchSuggestions.length)]
		});

		this.updateSuggetionInterval = setInterval(function() {
			if (this.state.expanded) {
				this.setState({
					searchSuggestion: 't.ex. '+this.searchSuggestions[Math.floor(Math.random()*this.searchSuggestions.length)]
				});
			}
		}.bind(this), 10000);
	}

	windowClickHandler(event) {
		var componentEl = ReactDOM.findDOMNode(this.refs.container);

		if (!componentEl.contains(event.target)) {
			this.setState({
				expanded: false
			}, function() {
				if (this.props.onSizeChange) {
					this.props.onSizeChange(this.state)
				}
			}.bind(this));
		}
	}

/*
	componentWillReceiveProps(props) {
		if (this.props.searchValue !== props.searchValue || 
			this.props.searchField !== props.searchField || 
			this.props.searchYearFrom !== props.searchYearFrom || 
			this.props.searchYearTo !== props.searchYearTo || 
			this.props.searchPersonRelation !== props.searchPersonRelation || 
			this.props.searchGender !== props.searchGender
		) {
			var advandedSearch = props.searchYearFrom || props.searchYearTo || props.searchPersonRelation || props.searchGender;

			this.setState({
				searchValue: props.searchValue || '',
				searchField: props.searchField || 'record',
				searchYearFrom: props.searchYearFrom,
				searchYearTo: props.searchYearTo,
				searchPersonRelation: props.searchPersonRelation || '',
				searchGender: props.searchGender || '',
				expanded: advandedSearch,
				advanced: advandedSearch
			}, function() {
				if (this.props.onSizeChange) {
					this.props.onSizeChange(this.state)
				}
			}.bind(this));
		}
	}
*/

	render() {
		return (
			<div ref="container" 
				onClick={this.searchBoxClickHandler} 
				className={'search-box map-floating-control'+(this.state.expanded ? ' expanded' : '')}
			>
				<input ref="searchInput" type="text" 
					value={this.state.searchValue} 
					// placeholder={'t.ex. '+this.searchSuggestions[Math.floor(Math.random()*this.searchSuggestions.length)]}
					onChange={this.searchValueChangeHandler} 
					onKeyPress={this.inputKeyPressHandler}
				></input>

				<div className={'search-placeholder'+(this.state.searchValue.length == 0 ? ' visible' : '')}>{this.state.expanded ? this.state.searchSuggestion : 'Sök'}</div>

				<button className="search-button" onClick={this.executeSimpleSearch}></button>
			</div>
		);
	}
}