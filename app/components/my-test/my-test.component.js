import { Component } from '../../../src/decorators/component';

@Component({
	selector: 'my-test',
	templateUrl: require('./my-test.component.html'),
	styleUrl: require('./my-test.component.css'),
	attributes: ['name']
})
export class MyTestComponent {
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