import React from 'react';
import { Router } from 'react-router-dom';
//import history from './../../ISOF-React-modules/components/History';

import CategoryMenu from './CategoryMenu';
import SearchBox from './SearchBox';

export default class MatkartaMenu extends React.Component {
	constructor(props) {
		super(props);

		this.searchBoxSizeChangeHandler = this.searchBoxSizeChangeHandler.bind(this);
		this.pointTypeOptionClickHandler = this.pointTypeOptionClickHandler.bind(this);
		this.categoryChangeHandler = this.categoryChangeHandler.bind(this);
		this.searchBoxSearchHandler = this.searchBoxSearchHandler.bind(this);

		window.matkartaMenu = this;

		this.state = {
			// selectedSubcategory: null,
			expanded: window.innerWidth > 450,
			advanced: false,
			pointTypeOption: 1,
			searchValue: '',
		};
	}

	componentDidMount() {
		this.setState({
			pointTypeOption: this.props.searchMetadata == 'sitevision_url' ? 2 : 1
		});
	}

	UNSAFE_componentWillReceiveProps(props) {
		var state = {
			pointTypeOption: props.searchMetadata == 'sitevision_url' ? 2 : 1
		};

		this.setState(state);
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
		this.updateRoute(event.selectedCategory, event.selectedSubcategory);
	}

	searchBoxSearchHandler(event) {
		this.setState({
			searchValue: event.searchValue
		}, function() {
			this.updateRoute();
		}.bind(this));
	}

	updateRoute(selectedCategory, selectedSubcategory) {
		this.props.history.push('/places'+(this.state.searchValue && this.state.searchValue != '' ? '/search/'+this.state.searchValue : '')+(selectedCategory ? '/category/'+selectedCategory+(selectedSubcategory ? ','+selectedSubcategory : '') : '')+(this.state.pointTypeOption == 2 ? '/has_metadata/sitevision_url' : ''));
	}

	render() {
		let _props = this.props
		return (
			<div className={'menu-wrapper'+(this.state.expanded ? ' menu-expanded' : '')+(this.state.advanced ? ' advanced-menu-view' : '')}>

				<a className="hamburger-button" onClick={function() {this.setState({expanded: !this.state.expanded})}.bind(this)}></a>

				{/*<SearchBox ref="searchBox" 
					onSizeChange={this.searchBoxSizeChangeHandler} />*/}

				<a href="https://www.isof.se/matkult" className="matkult-header"></a>

				{/* removed point-type-switcher for now */}
				{/* <div className={'point-type-options option-'+this.state.pointTypeOption}>

					<a className="option-item" data-option="1" onClick={this.pointTypeOptionClickHandler}>
						<span className="icon icon-marker-normal"></span>
						<span className="label">Alla punkter</span>
					</a>

					<a className="option-item" data-option="2" onClick={this.pointTypeOptionClickHandler}>
						<span className="icon icon-marker-curated"></span>
						<span className="label">Utvalda</span>
					</a>

					<span className="selected-line"></span>

				</div> */}

				<SearchBox ref="searchBox" 
					onSizeChange={this.searchBoxSizeChangeHandler}
					onSearch={this.searchBoxSearchHandler} 
					{..._props}
				/>

				<CategoryMenu onChange={this.categoryChangeHandler} {..._props} selectedSubcategory={this.props.selectedSubcategory} />

			</div>
		);
	}
}