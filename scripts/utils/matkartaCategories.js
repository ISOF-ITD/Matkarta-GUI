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
			image: 'http://frigg.sprakochfolkminnen.se/static/js-apps/matkartan/img/categories/baljvaxter.jpg',
			url: 'http://www.sprakochfolkminnen.se/matkult/baljvaxter.html'
		},
		{
			category: 'MK-3',
			label: 'Bröd',
			image: 'http://frigg.sprakochfolkminnen.se/static/js-apps/matkartan/img/categories/brod.jpg',
			url: 'http://www.sprakochfolkminnen.se/matkult/brod.html'
		},
		{
			category: 'MK-2',
			label: 'Bär och frukt',
			image: 'http://frigg.sprakochfolkminnen.se/static/js-apps/matkartan/img/categories/barochfrukt.jpg',
			url: 'http://www.sprakochfolkminnen.se/matkult/bar-och-frukt.html'
		},
		{
			category: 'MK-5',
			label: 'Honung',
			image: 'http://frigg.sprakochfolkminnen.se/static/js-apps/matkartan/img/categories/honung.jpg',
			url: 'http://www.sprakochfolkminnen.se/matkult/honung.html'
		},
		{
			category: 'MK-7',
			label: 'Kål',
			image: 'http://frigg.sprakochfolkminnen.se/static/js-apps/matkartan/img/categories/kal.jpg',
			url: 'http://www.sprakochfolkminnen.se/matkult/kal.html'
		},
		{
			category: 'MK-1',
			label: 'Mjölk',
			image: 'http://frigg.sprakochfolkminnen.se/static/js-apps/matkartan/img/categories/mjolk.jpg',
			url: 'http://www.sprakochfolkminnen.se/matkult/mjolk.html'
		},
		{
			category: 'MK-8',
			label: 'Potatis',
			image: 'http://frigg.sprakochfolkminnen.se/static/js-apps/matkartan/img/categories/potatis.jpg',
			url: 'http://www.sprakochfolkminnen.se/matkult/potatis.html'
		},
		{
			category: 'MK-4',
			label: 'Öl och svagdricka',
			image: 'http://frigg.sprakochfolkminnen.se/static/js-apps/matkartan/img/categories/olochsvagdricka.jpg',
			url: 'http://www.sprakochfolkminnen.se/matkult/ol-och-svagdricka.html'
		},
		{
			category: 'MK-9',
			label: 'Grödor och spannmål',
			image: 'http://frigg.sprakochfolkminnen.se/static/js-apps/matkartan/img/categories/grodorochspannmal.jpg',
			url: 'http://www.sprakochfolkminnen.se/matkult/jordbruket-och-maten.html'
		},
		{
			category: 'MK-10',
			label: 'Kokboken',
			image: 'http://frigg.sprakochfolkminnen.se/static/js-apps/matkartan/img/categories/kokbok.jpg',
			url: 'http://www.sprakochfolkminnen.se/matkult/kokboken.html',
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
