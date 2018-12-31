import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, Validators,FormControl, FormBuilder } from '@angular/forms';
import { ClientService } from 'app/service/client/client.service';
import {Client} from '../model/client/client'
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
@Injectable()
export class SignupComponent implements OnInit {
    test : Date = new Date()
    submitted = false
    registerForm: FormGroup
    errorMessage : String
    message : String
    constructor(private formBuilder: FormBuilder, private clientService : ClientService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password :['', [Validators.required]]
        });
    }
    onSubmit() {
        this.submitted = true;
        console.log(this.registerForm.controls.email.value)
        let  client : Client= {
            nom:null,
            prénom:null,
            email: this.registerForm.controls.email.value,
            password:this.registerForm.controls.password.value
        }
         // stop here if form is invalid
         if (this.registerForm.invalid) {
            return;
        }
        this.clientService.signIn(client).subscribe(
           data => {
             client = data
             if(client == null){
                this.message = " your email and password doesn t match"
                return ;
             }
        },
           error => {this.errorMessage = error 
            console.error(error)
        }
        )
       
    }
    get f() { return this.registerForm.controls; }

}
