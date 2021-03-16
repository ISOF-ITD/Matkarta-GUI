import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import categories from './../utils/matkartaCategories.js';

export default class CategoryList extends React.Component {
	constructor(props) {
		super(props);

		this.itemClickHandler = this.itemClickHandler.bind(this);
		this.itemKeyUpHandler = this.itemKeyUpHandler.bind(this);
		this.selectionChangeHandler = this.selectionChangeHandler.bind(this);

	}

	itemKeyUpHandler(event){
		if(event.keyCode == 13){
			this.itemClickHandler(event);
		} 
	}

	itemClickHandler(event) {
		event.stopPropagation();

		const selectedCategory = {
			selectedCategory: categories.categories[event.currentTarget.dataset.index].category,
			selectedCategoryName: categories.categories[event.currentTarget.dataset.index].label,
			selectedSubcategory: null
		};

		if (event.currentTarget.dataset.subindex && event.currentTarget.dataset.subindex != null) {
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
				return <div key={index}
					tabIndex={0}
					data-index={index} 
					className={
						'item'+
						(this.props.selectedCategory && item.category.toUpperCase() == this.props.selectedCategory.toUpperCase() ? ' selected' : '')+
						(item.class ? ` ${item.class}` : '')
					} 
					onClick={this.itemClickHandler} onKeyUp={this.itemKeyUpHandler}>

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
				
									return <span className={'extra-item'+(this.props.selectedCategory && item.category.toUpperCase() == this.props.selectedCategory.toUpperCase() && this.props.selectedSubcategory && link.category.toUpperCase() == this.props.selectedSubcategory.toUpperCase() ? ' selected' : '')} 
									data-index={index}
									data-subindex={subIndex}
									onClick={this.itemClickHandler}
									onKeyUp={this.itemKeyUpHandler}
									tabIndex={0}
									key={index+'-'+subIndex}>{link.label}</span>
								}.bind(this))
							}
						</div>
					}

					{
						item.url &&
						<a href={item.url} title="Mer" className="info-link" >Mer</a>
					}

				</div>;
			}
		}.bind(this));

		return (
			<div className="matkarta-categories">
				{items}
			</div>
		);
	}
}