/** get the html template parser */
import { parse } from '../parser';

/** export the decorator */
export function Component(config) {
	return function(componentDef) {
		/** create the class */
		var component = class extends HTMLElement {
			/** static array of observed attributes */
			static get observedAttributes() { return config.attributes || []; }

			/** constructor */
			constructor() {
				/** initialize the base class */
				super();

				/** attach the shadow dom */ 
				this.attachShadow({ mode: 'open' });

				/** public properties */
				this.selector = config.selector;
				this.templateUrl = config.templateUrl || null;
				this.template = config.template || null;
				this.styleUrl = config.styleUrl || null;

				/** add a static reference to the component */
				componentDef.prototype.componentRef = this;
				componentDef.prototype.template = config.template;
				this.componentDef = new componentDef();
			}

			/** respond to attribute changes */
			attributeChangedCallback(attr, oldValue, newValue) {
				//console.log([attr, oldValue, newValue]);
				this.componentDef.build();
			}
		}

		/** add methods to the component definition */
		componentDef.prototype.template = null;
		componentDef.prototype.componentRef = null;
		componentDef.prototype.getAttribute = function(attr) {
			return this.componentRef.attributes.getNamedItem(attr).value;
		}
		componentDef.prototype.shadowRoot = function() {
			return this.componentRef.shadowRoot;
		}
		componentDef.prototype.build = function() {
			var html = parse(this.componentRef.template, this);
			this.shadowRoot().innerHTML = html;
		}
		componentDef.prototype.empty = function() {
			while (this.shadowRoot().firstChild) {
				this.shadowRoot().removeChild(this.shadowRoot().firstChild);
			}
		}

		/** register the custom component */
		customElements.define(config.selector, component);
	}
}