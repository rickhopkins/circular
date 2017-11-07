/** export the decorator */
export function Component(config) {
	return function(componentDef) {
		/** add methods to the component definition */
		componentDef.componentRef = null;
		componentDef.prototype.getAttribute = function(attr) {
			return componentDef.componentRef.attributes.getNamedItem(attr).value;
		}
		componentDef.prototype.shadowRoot = function() {
			return componentDef.componentRef.shadowRoot;
		}

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
				componentDef.componentRef = this;
				this.componentDef = new componentDef();
			}

			/** respond to attribute changes */
			attributeChangedCallback(attr, oldValue, newValue) {
				console.log([attr, oldValue, newValue]);
			}

			/** empty the element */
			empty() {
				while (this.shadowRoot.firstChild) {
					this.removeChild(this.shadowRoot.firstChild);
				}
			}
		}

		/** register the custom component */
		customElements.define(config.selector, component);
	}
}