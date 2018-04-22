import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	template: `
		<header>
			<h1>Plate Chat (Beta)</h1>
		</header>
	`,
	styles	: [`
		h1 {
			text-align: center;
		}
	`]
})
export class HeaderComponent {

}