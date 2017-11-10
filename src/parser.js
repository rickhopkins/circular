export function parse(template, componentRef) {
	debugger;

	/** search for circular attributes */
	var container = document.createElement('template');
	container.innerHTML = template;

	var crFor = container.content.querySelector('[cr-for]');
	console.log(crFor);

	var crForAttrVal = crFor.getAttribute('cr-for');
	console.log(crForAttrVal);

	return container.innerHTML;
}