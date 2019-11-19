import _ from 'underscore';

export default {
	getCategoryName(categorycategory) {
		if (categorycategory) {
			var categoryObj = _.find(this.categories, function(item) {
				return item.category.toLowerCase() == categorycategory.toLowerCase();
			}.bind(this));

			return categoryObj ? categoryObj.label : '(Ingen kategori)';
		}
		else {
			return '';
		}
	},

	categories: [
		{
			category: 'MK-6',
			label: 'Baljväxter',
			image: 'https://frigg.isof.se/static/js-apps/matkartan/img/categories/baljvaxter.jpg',
			url: 'https://www.isof.se/matkult/baljvaxter.html'
		},
		{
			category: 'MK-3',
			label: 'Bröd',
			image: 'https://frigg.isof.se/static/js-apps/matkartan/img/categories/brod.jpg',
			url: 'https://www.isof.se/matkult/brod.html'
		},
		{
			category: 'MK-2',
			label: 'Bär och frukt',
			image: 'https://frigg.isof.se/static/js-apps/matkartan/img/categories/barochfrukt.jpg',
			url: 'https://www.isof.se/matkult/bar-och-frukt.html'
		},
		{
			category: 'MK-5',
			label: 'Honung',
			image: 'https://frigg.isof.se/static/js-apps/matkartan/img/categories/honung.jpg',
			url: 'https://www.isof.se/matkult/honung.html'
		},
		{
			category: 'MK-7',
			label: 'Kål',
			image: 'https://frigg.isof.se/static/js-apps/matkartan/img/categories/kal.jpg',
			url: 'https://www.isof.se/matkult/kal.html'
		},
		{
			category: 'MK-1',
			label: 'Mjölk',
			image: 'https://frigg.isof.se/static/js-apps/matkartan/img/categories/mjolk.jpg',
			url: 'https://www.isof.se/matkult/mjolk.html'
		},
		{
			category: 'MK-8',
			label: 'Potatis',
			image: 'https://frigg.isof.se/static/js-apps/matkartan/img/categories/potatis.jpg',
			url: 'https://www.isof.se/matkult/potatis.html'
		},
		{
			category: 'MK-4',
			label: 'Öl och svagdricka',
			image: 'https://frigg.isof.se/static/js-apps/matkartan/img/categories/olochsvagdricka.jpg',
			url: 'https://www.isof.se/matkult/ol-och-svagdricka.html'
		},
		{
			category: 'MK-9',
			label: 'Grödor och spannmål',
			image: 'https://frigg.isof.se/static/js-apps/matkartan/img/categories/grodorochspannmal.jpg',
			url: 'https://www.isof.se/matkult/jordbruket-och-maten.html'
		},
		{
			category: 'MK-10',
			label: 'Kokboken',
			image: 'https://frigg.isof.se/static/js-apps/matkartan/img/categories/kokbok.jpg',
			url: 'https://www.isof.se/matkult/kokboken.html',
			subCategories: [
				{
					category: 'MK-6',
					label: 'Baljväxter'
				},
				{
					category: 'MK-3',
					label: 'Bröd'
				},
				/*
				{
					category: 'MK-2',
					label: 'Bär och frukt'
				},
				*/
				{
					category: 'MK-5',
					label: 'Honung'
				},
				{
					category: 'MK-7',
					label: 'Kål'
				},
				{
					category: 'MK-1',
					label: 'Mjölk'
				},
				{
					category: 'MK-8',
					label: 'Potatis'
				},
				{
					category: 'MK-4',
					label: 'Öl och svagdricka'
				}
			]
		}
	]
}
