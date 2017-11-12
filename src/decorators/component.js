/** get the component extender */
import { extendComponent } from '../component/extend-component';
import { debug } from 'util';

/** export the decorator */
export function Component(config) {
	return function(component) {
		/** extend the component */
		extendComponent(component);

		/** create the class */
		var componentEl = class extends HTMLElement {
			/** static array of observed attributes */
			static get observedAttributes() { return config.attributes || []; }

			/** constructor */
			constructor() {
				/** initialize the base class */
				super();

				/** attach the shadow dom */ 
				this.attachShadow({ mode: 'open' });

				/** public properties */
				this.styleUrl = config.styleUrl || null;

				/** add reference to the component */
				component.prototype.componentEl = this;

				/** set the template */
				if (config.template && config.template !== null) {
					component.prototype.template = config.template;
				} else if (config.templateUrl && config.templateUrl !== null) {
					component.prototype.template = config.templateUrl;
				} else {
					throw 'No template specified for component';
				}

				/** set styles */
				if (config.styles && config.styles !== null) {
					component.prototype.styles = config.styles;
				} else if (config.styleUrl && config.styleUrl !== null) {
					component.prototype.styles = config.styleUrl;
				}

				/** initialize the component and build */
				this.component = new component();
				this.component.build();
			}

			/** respond to attribute changes */
			attributeChangedCallback(attr, oldValue, newValue) {
				console.log(`Attribute "${attr}" updated from ${oldValue} to ${newValue}`);
			}
		}

		/** register the custom component */
		customElements.define(config.selector, componentEl);
	}
}