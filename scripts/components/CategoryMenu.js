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

		this.state = {
			menuOpen: false,
			selectedCategory: null,
			selectedSubcategory: null,
			includeNordic: false,
			minimized: document.documentElement.clientWidth < 500 || false
		};
	}

	categoryItemClickHandler(event) {
		var selectedCategory;
		var selectedSubcategory;

		if (event.selectedCategory == this.state.selectedCategory && !event.selectedSubcategory && !this.state.selectedSubcategory) {
			selectedCategory = null;
			selectedSubcategory = null;
		}
		else {
			selectedCategory = event.selectedCategory;

			if (event.selectedSubcategory) {
				selectedSubcategory = event.selectedSubcategory;
			}
		}

		this.setState({
			selectedCategory: selectedCategory,
			selectedSubcategory: selectedSubcategory
		}, function() {
			if (this.props.onChange) {
				this.props.onChange({
					selectedCategory: this.state.selectedCategory,
					selectedSubcategory: this.state.selectedSubcategory
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
					<CategoryList onItemClick={this.categoryItemClickHandler} ref="categoryList" selectedCategory={this.state.selectedCategory} selectedSubcategory={this.state.selectedSubcategory} />
				</div>
			</div>
		);
	}
}