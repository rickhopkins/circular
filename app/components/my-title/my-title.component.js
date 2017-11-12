import { Component } from '../../../src/decorators/component';

@Component({
	selector: 'my-title',
	template: `<h1>The {{title}} Family</h1>`,
	styleUrl: './my-title.component.scss',
	attributes: ['title']
	// styles: ':host > h1 { font-size: 11px; }'
})
export class MyTitleComponent {
	constructor() {
		this.title = this.getAttribute('title');
	}
}