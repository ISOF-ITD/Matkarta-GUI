import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Redirect } from 'react-router-dom'

import Application from './components/Application';
import RecordListWrapper from './../ISOF-React-modules/components/views/RecordListWrapper';
import RecordView from './../ISOF-React-modules/components/views/RecordView';

console.log(`Matkartan running React.js version ${React.version} and ReactDOM version ${ReactDOM.version}`);

/*
Object.assign polyfill
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
*/
if (typeof Object.assign != 'function') {
	// Must be writable: true, enumerable: false, configurable: true
	Object.defineProperty(Object, "assign", {
		value: function assign(target, varArgs) { // .length of function is 2
			'use strict';
			if (target == null) { // TypeError if undefined or null
				throw new TypeError('Cannot convert undefined or null to object');
			}

			var to = Object(target);

			for (var index = 1; index < arguments.length; index++) {
				var nextSource = arguments[index];

				if (nextSource != null) { // Skip over if undefined or null
					for (var nextKey in nextSource) {
						// Avoid bugs when hasOwnProperty is shadowed
						if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
							to[nextKey] = nextSource[nextKey];
						}
					}
				}
			}
			return to;
		},
		writable: true,
		configurable: true
	});
}

// IE 11 backwards compatibility, Promise och Fetch
import 'whatwg-fetch';
import Promise from 'promise-polyfill';

if (!window.Promise) {
	window.Promise = Promise;
}

// Initalisera stöd för flerspråkighet
import Lang from './../ISOF-React-modules/lang/Lang';
window.Lang = Lang;
window.l = Lang.get;

// Initalisera React.js Router som bestämmer vilken "sida" användaren ser baserad på url:et
ReactDOM.render(

	<HashRouter>
		<Route exact path="/">
			<Redirect to="/places" />
		</Route>
		<Route exact path="/record/:record_id" render={({ match }) => (
			<Redirect to={`/records/${match.params.record_id}`} />
		)} />
		<Route exact path="/place/:place_id([0-9]+)" render={({ match }) => (
			<Redirect to={`/places/${match.params.place_id}`} />
		)} />
		<Route 
			path={[
				"/places/:place_id([0-9]+)/record_ids/:record_ids",
				"/places/record_ids/:record_ids",
				"/places/search/:search/category/:category,:subcategory/(has_metadata)?/:has_metadata?",
				"/places/search/:search/category/:category/(has_metadata)?/:has_metadata?",
				"/places/search/:search/(has_metadata)?/:has_metadata?",
				"/places/:place_id([0-9]+)/category/:category,:subcategory/(has_metadata)?/:has_metadata?",
				"/places/:place_id([0-9]+)/category/:category/(has_metadata)?/:has_metadata?",
				"/places/category/:category,:subcategory/(has_metadata)?/:has_metadata?",
				"/places/category/:category/(has_metadata)?/:has_metadata?",
				"/places/:place_id([0-9]+)/search/:search/category/:category,:subcategory/(has_metadata)?/:has_metadata?",
				"/places/:place_id([0-9]+)/search/:search/category/:category/(has_metadata)?/:has_metadata?",
				"/places/:place_id([0-9]+)/search/:search/(has_metadata)?/:has_metadata?",
				"/places/:place_id([0-9]+)/(has_metadata)?/:has_metadata?",
				"/places/(has_metadata)?/:has_metadata?", // this has to be the last item in order to match the other routes, 
				// otherwise it will match longer paths as well
				"/records/:record_id/search/:search/category/:category,:subcategory/(has_metadata)?/:has_metadata?",
				"/records/:record_id/search/:search/category/:category/(has_metadata)?/:has_metadata?",
				"/records/:record_id/search/:search/(has_metadata)?/:has_metadata?",
				"/records/:record_id/category/:category,:subcategory/(has_metadata)?/:has_metadata?",
				"/records/:record_id/category/:category/(has_metadata)?/:has_metadata?",
				"/records/:record_id/(has_metadata)?/:has_metadata?",
			]}
			render={(props) =>
				<Application
					popup={<RecordListWrapper 
						{...props} 
						manuallyOpenPopup={true}
						highlightRecordsWithMetadataField="sitevision_url" 
						openButtonLabel="Visa sökträffar som lista"
						disableRouterPagination={true}
						/>}
					{...props}	
				/>
			}
			/>
	</HashRouter>,
	document.getElementById('app')

);