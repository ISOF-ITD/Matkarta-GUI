import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import { hashHistory } from 'react-router';

import CategoryList from './CategoryList';
import categories from './../utils/matkartaCategories.js';

export default class CategoryMenu extends React.Component {
	constructor(props) {
		super(props);

		this.menuButtonClick = this.menuButtonClick.bind(this);
		this.toggleMinimize = this.toggleMinimize.bind(this);
		this.categoryItemClickHandler = this.categoryItemClickHandler.bind(this);

		if (window.eventBus) {
			window.eventBus.addEventListener('application.searchParams', this.receivedSearchParams.bind(this))
		}

		this.state = {
			menuOpen: false,
			selectedCategory: null,
			includeNordic: false,
			minimized: document.documentElement.clientWidth < 500 || false
		};
	}

	categoryItemClickHandler(event) {
		if (event.selectedCategory == this.state.selectedCategory) {
			var selectedCategory = null;
		}
		else {
			var selectedCategory = event.selectedCategory;
		}

		this.setState({
			selectedCategory: selectedCategory
		}, function() {
			if (this.props.onChange) {
				this.props.onChange({
					selectedCategory: this.state.selectedCategory
				});
			}
		}.bind(this));
	}

	menuButtonClick() {
		this.setState({
			menuOpen: !this.state.menuOpen
		});
	}

	toggleMinimize() {
		this.setState({
			minimized: !this.state.minimized
		});
	}

	receivedSearchParams(event) {
		this.setState({
			selectedCategory: event.target.selectedCategory,
			includeNordic: event.target.includeNordic
		});
	}

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.selectedCategory != nextState.selectedCategory || this.state.minimized != nextState.minimized;
	}

	render() {
		return (
			<div ref="container" className={'heading-list-wrapper'+(this.state.minimized ? ' minimized' : '')}>
				<div className="list-heading panel-heading">
					<span className="heading-label">{l('Kategorier')}<span className="selected-category">
						{
							this.state.selectedCategory &&
							<span>: <strong>{categories.getCategoryName(this.state.selectedCategory)}</strong></span>
						}
					</span></span>

					<button onClick={this.toggleMinimize} className="minimize-button"><span>Minimera</span></button>
				</div>

				<div className={'list-container minimal-scrollbar'}>
					<CategoryList onItemClick={this.categoryItemClickHandler} ref="categoryList" selectedCategory={this.state.selectedCategory} />
				</div>
			</div>
		);
	}
}