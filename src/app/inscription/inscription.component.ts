import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
	moduleId: module.id,
	templateUrl: 'inscription.component.html'
})

export class InscriptionComponent {
	model: any = {};
	loading = false;

	constructor(
		private router: Router,
		private userService: UserService,
		private alertService: AlertService) { }

	inscription() {
		this.loading = true;
		console.log(this.model);
		this.userService.create(this.model)
		.subscribe(
			data => {
				this.alertService.success('Inscription ok', true);
				this.router.navigate(['/login']);
			},
			error => {
				console.log("ICI");
				console.log(error);
				this.alertService.error(error);
				this.loading = false;
			}
		);
	}
}
