import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';

@Component({
	moduleId: module.id,
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
	model: any = {}
	loading = false;
	returnUrl: string;

	constructor(
		private route: ActivatedRoute,
		private authenticationService: AuthenticationService,
		private router: Router,
		private alertService: AlertService) {}

	ngOnInit(){
		this.authenticationService.logout();
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}

	login(){
		this.loading = true;
		this.authenticationService.login(this.model.pseudo, this.model.password)
		.subscribe(
			data =>{
				this.router.navigate([this.returnUrl]);
			},
			error => {
				this.alertService.error(error);
				this.loading = false;
			}
		);
	}
}