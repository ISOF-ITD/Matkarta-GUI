export default {
	localLibraryName: 'matkarta_library',

	/*
		Params som skulle alltid skickas till API:et, här krävs type=matkarta och mark_metadata=sitevision_url för att kunna
		markera alla postar som har en sitevision sida kopplat till sig
	*/
	requiredParams: {
		type: 'matkarta',
		mark_metadata: 'sitevision_url,matkarta_edited',
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

		copyrightContent: '<a rel="license" target="_blank" href="https://creativecommons.org/licenses/by-nd/2.5/se/"><img alt="Creative Commons-licens" style="border-width:0" src="https://i.creativecommons.org/l/by-nd/2.5/se/88x31.png" /></a><br />Detta verk är licensierat under en <a rel="license" target="_blank" href="https://creativecommons.org/licenses/by-nd/2.5/se/">Creative Commons Erkännande-IngaBearbetningar 2.5 Sverige Licens</a>.',

		contributeInfoText: 'Har du hittat några fel i Matkartan? Har du kompletterande information? Eller vill du hjälpa till med att skriva rent uppteckningar som vi kan lägga ut på Matkartan? Kontakta oss gärna!'
	},

	// Webbsida som kommer visas i en popup-ruta när folk kommer först till kartan
	startPageUrl: 'https://www.isof.se/om-oss/kartor/matkartan/om-matkartan---for-popup-ruta-pa-sjalva-kartan.html',

	country: 'sweden',

	imageUrl: 'https://www4.isof.se/Folkminnen/Svenska_sagor_filer/',
	audioUrl: 'https://www4.isof.se/Folkminnen/Svenska_sagor_filer/dialekter/',

	// appUrl: 'https://matkartan-test.isof.se/',
	appUrl: 'https://kartan.matkult.se/',
	// appUrl: 'https://frigg.isof.se/static/js-apps/matkartan/',
	// appUrl: 'https://frigg-test.isof.se/static/js-apps/matkartan/',
	// Old site:
	//siteUrl: 'https://www.isof.se/matkult/kartan.html',
	siteUrl: 'https://www.matkult.se/matkartan',

	apiUrl: 'https://garm.isof.se/folkeservice/api/es/',
	// apiUrl: 'https://frigg-test.isof.se/TradarkSearchServiceES7/api/es/',
	restApiUrl: 'https://garm.isof.se/folkeservice/api/',
	isofHomepageUrl: 'https://garm.isof.se/folkeservice/api/isofhomepage/'
};