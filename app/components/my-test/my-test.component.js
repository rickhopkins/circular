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
			{ 'id': 0, 'name': 'John Doe', age: 38, selected: true },
			{ 'id': 1, 'name': 'Jane Doe', age: 38, selected: true },
			{ 'id': 2, 'name': 'Billy Doe', age: 14, selected: true },
			{ 'id': 3, 'name': 'Samantha Doe', age: 12, selected: true },
			{ 'id': 4, 'name': 'Jeremiah Doe', age: 11, selected: true },
			{ 'id': 5, 'name': 'Susie Doe', age: 9, selected: true },
			{ 'id': 6, 'name': 'Ezekiel Doe', age: 7, selected: true },
			{ 'id': 7, 'name': 'Molly Doe', age: 6, selected: true }
		];
	}
}