import template from './app.html';
import './app.styl';

let appComonent = ()=>{
	return {
		template, // because we have a variable name template we can use the shorcut here
		restrict: 'E'
	};
};

export default appComonent;
