/** attributes we look for */
var circularAttrs = {
	'cr-for': '',
	'cr-if': '',
	'cr-class': '',
	'cr-click': ''
};

export function templateParser(template, component) {
	/** search for circular attributes */
	var container = document.createElement('template');
	container.innerHTML = template;

	var crFor = container.content.querySelector('[cr-for]');
	console.log(crFor);

	var crForAttrVal = crFor.getAttribute('cr-for');
	console.log(crForAttrVal);

	console.log(component);

	return container.innerHTML;
}