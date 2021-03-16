import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

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
			// includeNordic: false, //not used here. remove? /rico
			minimized: document.documentElement.clientWidth < 500 || false
		};
	}
	categoryItemClickHandler(event) {
		let selectedCategory;
		let selectedSubcategory;

		if (event.selectedCategory == this.props.selectedCategory && !event.selectedSubcategory && !this.props.selectedSubcategory) {
			selectedCategory = null;
			selectedSubcategory = null;
		}
		else {
			selectedCategory = event.selectedCategory;

			if (event.selectedSubcategory) {
				selectedSubcategory = event.selectedSubcategory;
			}
		}

		
		if (this.props.onChange) {
			this.props.onChange({
				selectedCategory: selectedCategory,
				selectedSubcategory: selectedSubcategory
			});
		}

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

	render() {
		return (
			<div ref="container" className={'heading-list-wrapper'+(this.state.minimized ? ' minimized' : '')}>
				<div className="list-heading panel-heading">
					<span className="heading-label">{l('Kategorier')}<span className="selected-category">
						{
							this.props.selectedCategory &&
							<span>: <strong>{categories.getCategoryName(this.props.selectedCategory)}</strong></span>
						}
					</span></span>

					<button onClick={this.toggleMinimize} className="minimize-button"><span>Minimera</span></button>
				</div>

				<div tabIndex={-1} className={'list-container minimal-scrollbar'}>
					<CategoryList onItemClick={this.categoryItemClickHandler} ref="categoryList" selectedCategory={this.props.selectedCategory} selectedSubcategory={this.props.selectedSubcategory} />
				</div>
			</div>
		);
	}
}