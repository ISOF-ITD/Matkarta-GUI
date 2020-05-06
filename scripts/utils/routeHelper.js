import RouteParser from 'route-parser';

const searchRoute = '(/text_ids/:text_ids)(/search/:search)(/search_field/:search_field)(/category/:category)(/has_metadata/:has_metadata)';
const placesRoute = '/places(/text_ids/:text_ids)(/search/:search)(/search_field/:search_field)(/category/:category)(/has_metadata/:has_metadata)';
const placeRoute = '/places/:place_id(/text_ids/:text_ids)(/search/:search)(/search_field/:search_field)(/category/:category)(/has_metadata/:has_metadata)';
const recordRoute = '/records/:record_id(/text_ids/:text_ids)(/search/:search)(/search_field/:search_field)(/category/:category)(/has_metadata/:has_metadata)';

export default {
	createPlacePathFromPlaces(placeId, placesPath) {
		var router = new RouteParser(placesRoute);
		var routeParams = router.match(placesPath) || {};

		routeParams.place_id = placeId;
		router = new RouteParser(placeRoute);

		return router.reverse(routeParams);
	},

	createPlacesPathFromPlace(placePath) {
		var router = new RouteParser(placeRoute);
		var routeParams = router.match(placePath) || {
		};

		if (routeParams.place_id) {
			delete routeParams.place_id;
		}

		router = new RouteParser(placesRoute);

		return router.reverse(routeParams);
	},

	createPlacesPathFromRecord(recordId) {
		var router = new RouteParser(recordRoute);
		var routeParams = router.match(recordId) || {
		};

		if (routeParams.record_id) {
			delete routeParams.record_id;
		}

		router = new RouteParser(placesRoute);

		return router.reverse(routeParams);
	},

	createSearchRoute(params) {
		var router = new RouteParser(searchRoute);

		return router.reverse(params) || '';
	}
}
