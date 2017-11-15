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
		// Inaktivera länker till personer, visa bara namnet
		disablePersonLinks: true
	},

	// Webbsida som kommer visas i en popup-ruta när folk kommer först till kartan
	startPageUrl: 'http://www.sprakochfolkminnen.se/om-oss/kartor/matkartan/om-matkartan---for-popup-ruta-pa-sjalva-kartan.html',

	country: 'sweden',

	imageUrl: 'http://www4.sprakochfolkminnen.se/Folkminnen/Svenska_sagor_filer/',
	audioUrl: 'http://www4.sprakochfolkminnen.se/Folkminnen/Svenska_sagor_filer/inspelningar/',

	appUrl: 'http://www4.sprakochfolkminnen.se/matkarta/',
	siteUrl: 'http://www.sprakochfolkminnen.se/om-oss/kartor/sagenkartan.html',

	apiUrl: 'http://frigg-test.sprakochfolkminnen.se/sagendatabas/api/es/',
	djangoApiUrl: 'http://frigg-test.sprakochfolkminnen.se/sagendatabas/api/'
};