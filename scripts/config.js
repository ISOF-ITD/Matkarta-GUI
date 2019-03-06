export default {
	localLibraryName: 'matkarta_library',

	/*
		Params som skulle alltid skickas till API:et, här krävs type=matkarta och mark_metadata=sitevision_url för att kunna
		markera alla postar som har en sitevision sida kopplat till sig
	*/
	requiredParams: {
		type: 'matkarta',
		mark_metadata: 'sitevision_url',
	},

	siteOptions: {
		recordList: {
			// Döljd materialtyp i RecordList, används för matkartan
			hideMaterialType: true,

			// Vilka kategorier vi vill visa i listan, här vill vi bara visa matkarta kategorier men dölja frågolista-kategorier
			visibleCategories: ['matkarta']
		},

		recordView: {
			// Döljd materialtyp i RecordView, används för matkartan
			hideMaterialType: true
		},

		// Inaktivera länker till personer, visa bara namnet
		disablePersonLinks: true,

		feedbackText: 'Har du hittat några fel i kartan? Har du kompletterande information om frågelistsvaren eller personerna som nämns? Kontakta oss gärna!',
		feedbackEmail: 'matkult',

		copyrightContent: '<a rel="license" target="_blank" href="https://creativecommons.org/licenses/by-nd/2.5/se/"><img alt="Creative Commons-licens" style="border-width:0" src="https://i.creativecommons.org/l/by-nd/2.5/se/88x31.png" /></a><br />Detta verk är licensierat under en <a rel="license" target="_blank" href="https://creativecommons.org/licenses/by-nd/2.5/se/">Creative Commons Erkännande-IngaBearbetningar 2.5 Sverige Licens</a>.'
	},

	// Webbsida som kommer visas i en popup-ruta när folk kommer först till kartan
	startPageUrl: 'https://www.sprakochfolkminnen.se/om-oss/kartor/matkartan/om-matkartan---for-popup-ruta-pa-sjalva-kartan.html',

	country: 'sweden',

	imageUrl: 'https://www4.sprakochfolkminnen.se/Folkminnen/Svenska_sagor_filer/',
	audioUrl: 'https://www4.sprakochfolkminnen.se/Folkminnen/Svenska_sagor_filer/dialekter/',

	appUrl: 'https://frigg.sprakochfolkminnen.se/static/js-apps/matkartan/',
	siteUrl: 'https://www.sprakochfolkminnen.se/matkult/kartan.html',

	apiUrl: 'https://frigg.sprakochfolkminnen.se/sagendatabas/api/es/',
	restApiUrl: 'https://frigg.sprakochfolkminnen.se/sagendatabas/api/'
};