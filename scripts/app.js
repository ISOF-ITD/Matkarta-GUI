import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, Redirect } from 'react-router'

import Application from './components/Application';
import RecordListWrapper from './../ISOF-React-modules/components/views/RecordListWrapper';
import RecordView from './../ISOF-React-modules/components/views/RecordView';
import PlaceView from './../ISOF-React-modules/components/views/PlaceView';
import PersonView from './../ISOF-React-modules/components/views/PersonView';

console.log('Matkartan running React.js version '+React.version);

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