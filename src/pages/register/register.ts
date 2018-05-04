import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { 
    FormGroup,
    FormControl,
    Validators
 } from "@angular/forms";


@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage {
    form;

    constructor(public alertCtrl: AlertController) {
        this.form= new FormGroup({
            email: new FormControl("", Validators.required),
            password : new FormControl("", Validators.required)
        })

    }
    processForm() {
        let alert = this.alertCtrl.create({
            title: "Account Created",
            message : "Account has been created for : " +this.form.value.email, 
            buttons : [{
                text: 'Ok',
            }]
        });
        if ( this.form.status == 'VALID' ){
            alert.present
        }
    }

}