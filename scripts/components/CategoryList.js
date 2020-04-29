import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import categories from './../utils/matkartaCategories.js';

export default class CategoryList extends React.Component {
	constructor(props) {
		super(props);

		this.itemClickHandler = this.itemClickHandler.bind(this);
		this.selectionChangeHandler = this.selectionChangeHandler.bind(this);

	}

	itemClickHandler(event) {
		event.stopPropagation();

		const selectedCategory = {
			selectedCategory: categories.categories[event.currentTarget.dataset.index].category,
			selectedCategoryName: categories.categories[event.currentTarget.dataset.index].label,
			selectedSubcategory: null
		};

		if (event.currentTarget.dataset.subindex != null) {
			selectedCategory.selectedSubcategory = categories.categories[event.currentTarget.dataset.index].subCategories[event.currentTarget.dataset.subindex].category;
		}
		if (this.props.onItemClick) {
			this.props.onItemClick(selectedCategory);
		}
	}

	selectionChangeHandler(event) {
		const value = event.target.value;
		let selectedCategories = this.props.selectedCategories;

		if (selectedCategories.indexOf(value) == -1) {
			selectedCategories.push(value);
		}
		else {
			selectedCategories.splice(selectedCategories.indexOf(value), 1);
		}

		
		if (this.props.onChange) {
			this.props.onChange(selectedCategories);
		}
		
	}

	render() {
		const items = categories.categories.map(function(item, index) {
			if (this.props.multipleSelect) {
				return <label key={index} data-index={index} className="item"><input value={item.category} onChange={this.selectionChangeHandler} type="checkbox"/>{item.label}</label>;
			}
			else {
				return <a key={index} 
					data-index={index} 
					className={'item'+(item.category == this.props.selectedCategory ? ' selected' : '')} 
					onClick={this.itemClickHandler}>

					{
						item.image &&
						<span className="image" style={{backgroundImage: 'url("'+item.image+'")'}} />
					}

					<span className="label">{item.label}</span>

					{
						item.subCategories &&
						<div className="extra-links">
							{
								item.subCategories.map(function(link, subIndex) {
				
									return <span className={'extra-item'+(item.category == this.props.selectedCategory && link.category == this.props.selectedSubcategory ? ' selected' : '')} 
									data-index={index}
									data-subindex={subIndex}
									onClick={this.itemClickHandler}
									key={index+'-'+subIndex}>{link.label}</span>
								}.bind(this))
							}
						</div>
					}

					{
						item.url &&
						<span className="info-link" onClick={function(event) {
							event.preventDefault();
							window.location.href = item.url;
						}}>Mer</span>
					}

				</a>;
			}
		}.bind(this));

		return (
			<div className="matkarta-categories">
				{items}
			</div>
		);
	}
}