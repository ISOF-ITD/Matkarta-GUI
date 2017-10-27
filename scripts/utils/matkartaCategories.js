import _ from 'underscore';

export default {
	getCategoryName(categoryLetter) {
		if (categoryLetter) {
			var categoryObj = _.find(this.categories, function(item) {
				return item.letter.toLowerCase() == categoryLetter.toLowerCase();
			}.bind(this));

			return categoryObj ? categoryObj.label : categoryLetter.indexOf(';') > -1 ? 'Flera kategorier' : '(Ingen kategori)';
		}
		else {
			return null;
		}
	},

	categories: [
		{
			letter: 'MK-1',
			label: 'Mjölk'
		},
		{
			letter: 'MK-2',
			label: 'Bär och frukt'
		},
		{
			letter: 'MK-3',
			label: 'Bröd'
		}
	]
}
