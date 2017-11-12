import { debug } from "util";

/** attributes we look for */
var circularAttrs = {
	'cr-for': '',
	'cr-if': '',
	'cr-class': '',
	'cr-click': ''
};

export function templateParser(component) {
	/** search for circular attributes */
	var container = document.createElement('template');

	/** check for styles */
	var innerHTML = '';
	if (component.styles && component.styles !== null) innerHTML = `<style>${component.styles}</style>`;
	innerHTML += component.template;

	/** take a first pass at template value replacement */
	innerHTML = firstPass(innerHTML, component);

	/** set the container html */
	container.innerHTML = innerHTML;
	
	/** look for cr-for attributes */
	var crFor = container.content.querySelector('[cr-for]');
	if (crFor && crFor !== null) {
		container.innerHTML = crForIterate(crFor, innerHTML, component);
	}

	/** return the component html */
	return container.innerHTML;
}

/** replace all component property values */
function firstPass(html, component) {
	/** get the component properties */
	var properties = Object.keys(component);

	/** replace property values */
	properties.forEach((p) => {
		html = html.replace(`{{${p}}}`, component[p]);
	});

	/** return the html */
	return html;
}

/** iterate over items in cr-for */
function crForIterate(crFor, html, component) {
	/** get the cr-for attribute value expression */
	var crForAttrVal = crFor.getAttribute('cr-for').split(' ');
	var entityRef = crForAttrVal[0];
	var entityProp = crForAttrVal[2];

	/** cycle over the property */
	var crForHTML = '';
	
	/** check the entityProperty type */
	if (Array.isArray(component[entityProp])) {
		component[entityProp].forEach((row, i) => {
			/** add html for the iteration */
			var rowHTML = crFor.cloneNode(true).outerHTML;

			/** search the row properties */
			var regex = new RegExp(`{{${entityRef}.([\\w]*)}}?`, 'gmi');
			var m;
			while ((m = regex.exec(rowHTML)) !== null) {
				/** replace the properties */
				rowHTML = rowHTML.replace(m[0], row[m[1]]);
			}

			/** add the html to the crForHtml */
			crForHTML += rowHTML;
		});
	}

	/** replace the crFor element with the rows */
	return html.replace(crFor.outerHTML, crForHTML);
}