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
	if (component.styles !== null) innerHTML = `<style>${component.styles}</style>`;
	innerHTML += component.template;
	container.innerHTML = innerHTML;

	// var crFor = container.content.querySelector('[cr-for]');
	// console.log(crFor);

	// var crForAttrVal = crFor.getAttribute('cr-for');
	// console.log(crForAttrVal);

	console.log(component);

	return container.innerHTML;
}