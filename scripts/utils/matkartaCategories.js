import _ from 'underscore';

export default {
	getCategoryName(categoryLetter) {
		if (categoryLetter) {
			var categoryObj = _.find(this.categories, function(item) {
				return item.letter.toLowerCase() == categoryLetter.toLowerCase();
			}.bind(this));

			return categoryObj ? categoryObj.label : '(Ingen kategori)';
		}
		else {
			return '';
		}
	},

	categories: [
		{
			letter: 'MK-6',
			label: 'Baljväxter',
			url: 'http://www.sprakochfolkminnen.se/matkult/baljvaxter.html'
		},
		{
			letter: 'MK-3',
			label: 'Bröd',
			url: 'http://www.sprakochfolkminnen.se/matkult/brod.html',
			image: 'img/category-brod.png'
		},
		{
			letter: 'MK-2',
			label: 'Bär och frukt',
			image: 'img/category-frukt.png',
			url: 'http://www.sprakochfolkminnen.se/matkult/bar-och-frukt.html'
		},
		{
			letter: 'MK-5',
			label: 'Honung',
			url: 'http://www.sprakochfolkminnen.se/matkult/honung.html'
		},
		{
			letter: 'MK-7',
			label: 'Kål',
			url: 'http://www.sprakochfolkminnen.se/matkult/kal.html'
		},
		{
			letter: 'MK-1',
			label: 'Mjölk',
			image: 'img/category-mjolk.png',
			url: 'http://www.sprakochfolkminnen.se/matkult/mjolk.html'
		},
		{
			letter: 'MK-8',
			label: 'Potatis',
			url: 'http://www.sprakochfolkminnen.se/matkult/potatis.html'
		},
		{
			letter: 'MK-4',
			label: 'Öl och svagdricka',
			url: 'http://www.sprakochfolkminnen.se/matkult/ol-och-svagdricka.html'
		},
		{
			letter: 'MK-10',
			label: 'Kokboken',
			image: 'img/category-kokbok.png',
			url: 'http://www.sprakochfolkminnen.se/matkult/kokboken.html'
		}
	]
}
