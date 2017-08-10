import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AlertService } from '../_services/index';

@Component({
	moduleId: module.id,
	selector: 'alert',
	templateUrl: 'alert.component.html'
})

export class AlertComponent {
	//    private subscription: Subscription;
	message: any;

	constructor(private alertService: AlertService) { 
		// subscribe to alert messages
		//this.subscription = alertService.getMessage().subscribe(message => { this.message = message; });
	}

	ngOnInit(){
		this.alertService.getMessage().subscribe(message => {this.message = message; });
	}
}