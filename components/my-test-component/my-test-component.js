import { Component } from '../../src/decorators/component';

@Component({
	selector: 'my-test-component',
	templateUrl: './my-test-component.html',
	styleUrl: './my-test-component.css',
	attributes: ['name']
})
class MyTestElement {
	constructor() {
		/** public properties */
		this.name = this.getAttribute('name');

		var span = document.createElement('span');
		span.innerText = `Hello My Name Is ${this.name}`;
		this.shadowRoot().appendChild(span);
	}
}