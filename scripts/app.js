import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, Redirect } from 'react-router'

import Application from './components/Application';
import RecordListWrapper from './../ISOF-React-modules/components/views/RecordListWrapper';
import RecordView from './../ISOF-React-modules/components/views/RecordView';
import PlaceView from './../ISOF-React-modules/components/views/PlaceView';
import PersonView from './../ISOF-React-modules/components/views/PersonView';

console.log('Matkartan running React.js version '+React.version);

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
	<Router history={hashHistory}>
		<Redirect from="/" to="/places"/>
		<Route path="/" component={Application}>

			<Route path="/places(/text_ids/:text_ids)(/search/:search)(/search_field/:search_field)(/category/:category)(/has_metadata/:has_metadata)(/page/:page)" 
				manuallyOpenPopup={true} openButtonLabel="Visa sökträffar som lista" highlightRecordsWithMetadataField="sitevision_url" components={{popup: RecordListWrapper}}/>

			<Route path="/place/:place_id(/text_ids/:text_ids)(/search/:search)(/search_field/:search_field)(/category/:category)(/has_metadata/:has_metadata)" 
				 highlightRecordsWithMetadataField="sitevision_url" components={{popup: PlaceView}}/>

			<Route path="/person/:person_id" 
				components={{popup: PersonView}}/>

			<Route path="/record/:record_id(/text_ids/:text_ids)(/search/:search)(/search_field/:search_field)(/category/:category)(/has_metadata/:has_metadata)" 
				fullWidthContentArea={true} components={{popup: RecordView}}/>

		</Route>
	</Router>,
	document.getElementById('app')
);