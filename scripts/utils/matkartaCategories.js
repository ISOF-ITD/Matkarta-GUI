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
			image: 'https://www.matkult.se/images/18.6736d8cd18d8738c53c6541/1707467374144/kokbok.jpg',
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
			image: 'https://www.matkult.se/images/18.6736d8cd18d8738c53c6545/1707467420028/baljvaxter.jpg',
			url: 'https://www.matkult.se/baljvaxter.html'
		},
		{
			category: 'MK-3',
			label: 'Bröd',
			image: 'https://www.matkult.se/images/18.6736d8cd18d8738c53c6547/1707467447077/brod.jpg',
			url: 'https://www.matkult.se/brod.html'
		},
		{
			category: 'MK-2',
			label: 'Bär och frukt',
			image: 'https://www.matkult.se/images/18.6736d8cd18d8738c53c6549/1707467505831/barochfrukt.jpg',
			url: 'https://www.matkult.se/bar-och-frukt.html'
		},
		{
			category: 'MK-14',
			label: 'Fisk',
			image: 'https://www.matkult.se/images/18.463ffe2f17978f40c25c50fa/1607688211799/43790761-river-fish-with-red-fins-and-silver-scales-lies-on.jpg',
			url: 'https://www.matkult.se/fisk.html'
		},
		{
			category: 'MK-9',
			label: 'Grödor och spannmål',
			image: 'https://www.matkult.se/images/18.6736d8cd18d8738c53c6552/1707467569765/grodorochspannmal.jpg',
			url: 'https://www.matkult.se/jordbruket-och-maten.html'
		},
		{
			category: 'MK-5',
			label: 'Honung',
			image: 'https://www.matkult.se/images/18.6736d8cd18d8738c53c6554/1707467614035/honung.jpg',
			url: 'https://www.matkult.se/honung.html'
		},
		{
			category: 'MK-7',
			label: 'Kål',
			image: 'https://www.matkult.se/images/18.6736d8cd18d8738c53c6560/1707467644468/kal.jpg',
			url: 'https://www.matkult.se/kal.html'
		},
		{
			category: 'MK-12',
			label: 'Kött',
			image: 'https://www.matkult.se/images/18.463ffe2f17978f40c25c565e/1611218558374/kottkategori.jpg',
			url: 'https://www.matkult.se/kott'
		},
		{
			category: 'MK-1',
			label: 'Mjölk',
			image: 'https://www.matkult.se/images/18.6736d8cd18d8738c53c6565/1707467684285/mjolk.jpg',
			url: 'https://www.matkult.se/mjolk.html'
		},
		{
			category: 'MK-11',
			label: 'Mjölrätter',
			image: 'https://www.matkult.se/images/18.463ffe2f17978f40c25b83e5/1529494383288/12807-ragaker.jpg',
			url: 'https://www.matkult.se/jordbruket-och-maten.html'
		},
		{
			category: 'MK-8',
			label: 'Potatis',
			image: 'https://www.matkult.se/images/18.6736d8cd18d8738c53c65bb/1707467709020/potatis.jpg',
			url: 'https://www.matkult.se/potatis.html'
		},
		{
			category: 'MK-4',
			label: 'Öl och svagdricka',
			image: 'https://www.matkult.se/images/18.6736d8cd18d8738c53c65be/1707467734876/olochsvagdricka.jpg',
			url: 'https://www.matkult.se/ol-och-svagdricka.html'
		},
		// {
			// 	category: 'MK-15',
			// 	label: 'Ägg',
			// 	image: 'https://www.matkult.se/images/18.463ffe2f17978f40c25c565d/1611218558425/agg-kategori.jpg',
			// 	url: ''
			// },
		{
			category: 'MK-13',
			label: 'Maten som kulturarv',
			image: 'https://www.matkult.se/images/18.463ffe2f17978f40c25c565c/1611218558485/kulturarv-kategori.jpg',
			url: 'https://www.matkult.se/maten-som-kulturarv.html'
		},
	]
}
