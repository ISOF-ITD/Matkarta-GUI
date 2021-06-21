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
			category: 'MK-10',
			label: 'Kokboken',
			class: 'recept',
			image: 'https://frigg.isof.se/static/js-apps/matkartan/img/categories/kokbok.jpg',
			url: 'https://www.matkult.se/kokboken.html',
			subCategories: [
				{
					category: 'MK-6',
					label: 'Baljväxter'
				},
				{
					category: 'MK-3',
					label: 'Bröd'
				},
				{
					category: 'MK-2',
					label: 'Bär och frukt'
				},
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
				},
				{
					category: 'MK-12',
					label: 'Kött'
				},
			]
		},
		{
			category: 'MK-6',
			label: 'Baljväxter',
			image: 'https://frigg.isof.se/static/js-apps/matkartan/img/categories/baljvaxter.jpg',
			url: 'https://www.matkult.se/baljvaxter.html'
		},
		{
			category: 'MK-3',
			label: 'Bröd',
			image: 'https://frigg.isof.se/static/js-apps/matkartan/img/categories/brod.jpg',
			url: 'https://www.matkult.se/brod.html'
		},
		{
			category: 'MK-2',
			label: 'Bär och frukt',
			image: 'https://frigg.isof.se/static/js-apps/matkartan/img/categories/barochfrukt.jpg',
			url: 'https://www.matkult.se/bar-och-frukt.html'
		},
		{
			category: 'MK-14',
			label: 'Fisk',
			image: 'https://www.isof.se/images/18.78abb6c61764bda823bcf6a/1607688211799/43790761-river-fish-with-red-fins-and-silver-scales-lies-on.jpg',
			url: 'https://www.matkult.se/fisk.html'
		},
		{
			category: 'MK-9',
			label: 'Grödor och spannmål',
			image: 'https://frigg.isof.se/static/js-apps/matkartan/img/categories/grodorochspannmal.jpg',
			url: 'https://www.matkult.se/jordbruket-och-maten.html'
		},
		{
			category: 'MK-5',
			label: 'Honung',
			image: 'https://frigg.isof.se/static/js-apps/matkartan/img/categories/honung.jpg',
			url: 'https://www.matkult.se/honung.html'
		},
		{
			category: 'MK-7',
			label: 'Kål',
			image: 'https://frigg.isof.se/static/js-apps/matkartan/img/categories/kal.jpg',
			url: 'https://www.matkult.se/kal.html'
		},
		{
			category: 'MK-12',
			label: 'Kött',
			image: 'https://www.isof.se/images/18.759da6c1177103a284a38de7/1611218558374/kottkategori.jpg',
			url: 'https://www.matkult.se/kott'
		},
		{
			category: 'MK-1',
			label: 'Mjölk',
			image: 'https://frigg.isof.se/static/js-apps/matkartan/img/categories/mjolk.jpg',
			url: 'https://www.matkult.se/mjolk.html'
		},
		{
			category: 'MK-11',
			label: 'Mjölrätter',
			image: 'https://www.isof.se/images/18.78c830061631a67c264c895e/1529494038502/12807-ragaker.jpg',
			url: 'https://www.matkult.se/jordbruket-och-maten.html'
		},
		{
			category: 'MK-8',
			label: 'Potatis',
			image: 'https://frigg.isof.se/static/js-apps/matkartan/img/categories/potatis.jpg',
			url: 'https://www.matkult.se/potatis.html'
		},
		{
			category: 'MK-4',
			label: 'Öl och svagdricka',
			image: 'https://frigg.isof.se/static/js-apps/matkartan/img/categories/olochsvagdricka.jpg',
			url: 'https://www.matkult.se/ol-och-svagdricka.html'
		},
		// {
			// 	category: 'MK-15',
			// 	label: 'Ägg',
			// 	image: 'https://www.isof.se/images/18.759da6c1177103a284a38de8/1611218558425/agg-kategori.jpg',
			// 	url: ''
			// },
		{
			category: 'MK-13',
			label: 'Maten som kulturarv',
			image: 'https://www.isof.se/images/18.759da6c1177103a284a38de9/1611218558485/kulturarv-kategori.jpg',
			url: 'https://www.matkult.se/maten-som-kulturarv.html'
		},
	]
}
