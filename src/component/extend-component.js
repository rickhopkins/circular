/** get the html template parser */
import { templateParser } from './template-parser';
import { debug } from 'util';

/** extend a component */
export function extendComponent(component) {
	/** public properties */
	component.prototype.template = null;
	component.prototype.styles = null;
	component.prototype.componentEl = null;

	/** public methods */
	
	/** retrieve an attribute value */
	component.prototype.getAttribute = function(attr) {
		return this.componentEl.attributes.getNamedItem(attr).value;
	}

	/** get the root of the element */
	component.prototype.root = function() {
		return this.componentEl.shadowRoot;
	}

	/** build the component html */
	component.prototype.build = function() {
		var html = templateParser(this);
		this.root().innerHTML = html;
	}

	/** empty the component */
	component.prototype.empty = function() {
		while (this.root().firstChild) {
			this.root().removeChild(this.root().firstChild);
		}
	}
}