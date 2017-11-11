/** get the component extender */
import { extendComponent } from '../component/extend-component';

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
				this.selector = config.selector;
				this.templateUrl = config.templateUrl || null;
				this.template = config.template || null;
				this.styleUrl = config.styleUrl || null;

				/** add reference to the component and template */
				component.prototype.componentEl = this;
				component.prototype.template = config.template;

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