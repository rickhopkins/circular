import { Component } from '../../../src/decorators/component';

@Component({
	selector: 'my-title',
	template: `<h1>I'm A Custom Title Component</h1>`,
	styleUrl: require('./my-title.component.scss')
	// styles: ':host > h1 { font-size: 11px; }'
})
export class MyTitleComponent { }