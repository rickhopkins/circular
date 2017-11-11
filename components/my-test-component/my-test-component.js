import { Component } from '../../src/decorators/component';

@Component({
	selector: 'my-test-component',
	// templateUrl: './my-test-component.html',
	template: `
		<div cr-for="d in data">
			Hello! My name is {{d.name}}: {{d.id}}
		</div>
	`,
	// styleUrl: './my-test-component.css',
	attributes: ['name']
})
class MyTestElement {
	constructor() {
		/** public properties */
		this.name = this.getAttribute('name');
		this.data = [
			{ 'id': 0, 'name': 'Rick Hopkins', selected: true },
			{ 'id': 1, 'name': 'Nicole Hopkins', selected: true },
			{ 'id': 2, 'name': 'Derek Hopkins', selected: true },
			{ 'id': 3, 'name': 'Grace Hopkins', selected: true },
			{ 'id': 4, 'name': 'Jack Hopkins', selected: true },
			{ 'id': 5, 'name': 'Nevaeh Hopkins', selected: true },
			{ 'id': 6, 'name': 'Brock Hopkins', selected: true },
			{ 'id': 7, 'name': 'Mya Hopkins', selected: true }
		];
	}
}