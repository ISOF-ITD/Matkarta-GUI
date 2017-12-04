import React from 'react';
import { Router, hashHistory } from 'react-router';

import MatkartaCategoryMenu from './MatkartaCategoryMenu';
import SearchBox from './SearchBox';

export default class MatkartaMenu extends React.Component {
	constructor(props) {
		super(props);

		this.searchBoxSizeChangeHandler = this.searchBoxSizeChangeHandler.bind(this);
		this.pointTypeOptionClickHandler = this.pointTypeOptionClickHandler.bind(this);
		this.categoryChangeHandler = this.categoryChangeHandler.bind(this);

		window.matkartaMenu = this;

		this.state = {
			selectedCategory: null,
			expanded: window.innerWidth > 450,
			advanced: false,
			pointTypeOption: 1
		};
	}

	componentDidMount() {
		this.setState({
			selectedCategory: this.props.selectedCategory,
			searchValue: this.props.searchValue,
			searchField: this.props.searchField,
			searchYearFrom: this.props.searchYearFrom,
			searchYearTo: this.props.searchYearTo,
			searchPersonRelation: this.props.searchPersonRelation,
			searchGender: this.props.searchGender,
			pointTypeOption: this.props.searchMetadata == 'sitevision_url' ? 2 : 1
		});
	}

	componentWillReceiveProps(props) {
		this.setState({
			selectedCategory: props.selectedCategory,
			searchValue: props.searchValue,
			searchField: props.searchField,
			searchYearFrom: props.searchYearFrom,
			searchYearTo: props.searchYearTo,
			searchPersonRelation: props.searchPersonRelation,
			searchGender: props.searchGender,
			pointTypeOption: props.searchMetadata == 'sitevision_url' ? 2 : 1
		});
	}

	searchBoxSizeChangeHandler(event) {
		this.setState({
			expanded: event.expanded,
			advanced: event.advanced
		});
	}

	pointTypeOptionClickHandler(event) {
		this.setState({
			pointTypeOption: event.currentTarget.dataset.option
		}, function() {
			this.updateRoute();
		}.bind(this));
	}

	categoryChangeHandler(event) {
		this.setState({
			selectedCategory: event.selectedCategory
		}, function() {
			this.updateRoute();
		}.bind(this));
	}

	updateRoute() {
		hashHistory.push('/places'+(this.state.selectedCategory ? '/category/'+this.state.selectedCategory : '')+(this.state.pointTypeOption == 2 ? '/has_metadata/sitevision_url' : ''));
	}

	render() {
		return (
			<div className={'menu-wrapper'+(this.state.expanded ? ' menu-expanded' : '')+(this.state.advanced ? ' advanced-menu-view' : '')}>

				<a className="hamburger-button" onClick={function() {this.setState({expanded: !this.state.expanded})}.bind(this)}></a>

				{/*<SearchBox ref="searchBox" 
					onSizeChange={this.searchBoxSizeChangeHandler} />*/}

				<div className={'point-type-options option-'+this.state.pointTypeOption}>

					<a className="option-item" data-option="1" onClick={this.pointTypeOptionClickHandler}>
						<span className="icon icon-marker-normal"></span>
						<span className="label">Alla punkter</span>
					</a>

					<a className="option-item" data-option="2" onClick={this.pointTypeOptionClickHandler}>
						<span className="icon icon-marker-curated"></span>
						<span className="label">Kurerade</span>
					</a>

					<span className="selected-line"></span>

				</div>

				<MatkartaCategoryMenu onChange={this.categoryChangeHandler} />

			</div>
		);
	}
}