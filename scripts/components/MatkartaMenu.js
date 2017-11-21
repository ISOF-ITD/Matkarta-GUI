import React from 'react';

import MatkartaCategoryMenu from './MatkartaCategoryMenu';
import SearchBox from './SearchBox';

export default class MatkartaMenu extends React.Component {
	constructor(props) {
		super(props);

		this.searchBoxSizeChangeHandler = this.searchBoxSizeChangeHandler.bind(this);

		window.matkartaMenu = this;

		this.state = {
			selectedCategory: null,
			expanded: window.innerWidth > 450,
			advanced: false
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
			searchGender: this.props.searchGender
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
			searchGender: props.searchGender
		});
	}

	searchBoxSizeChangeHandler(event) {
		this.setState({
			expanded: event.expanded,
			advanced: event.advanced
		});
	}

	render() {
		return (
			<div className={'menu-wrapper'+(this.state.expanded ? ' menu-expanded' : '')+(this.state.advanced ? ' advanced-menu-view' : '')}>

				<a className="categories-button" onClick={function() {this.setState({expanded: !this.state.expanded})}.bind(this)}></a>

				{/*<SearchBox ref="searchBox" 
					onSizeChange={this.searchBoxSizeChangeHandler} />*/}

				<MatkartaCategoryMenu />

			</div>
		);
	}
}