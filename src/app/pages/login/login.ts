import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Pessoa } from "../../model/pessoa";


@Component({
    selector: 'login',
    templateUrl: 'login.html',
    styleUrls: ['login.scss'] 
})
export class Login implements OnInit{

    public pessoa: Pessoa = new Pessoa();
    public form: FormGroup;
    
    constructor(public router: Router, private fb: FormBuilder){   
    }

    ngOnInit(){
        this.form = this.fb.group({
          login:['', Validators.compose([Validators.required, Validators.minLength(4)])],
          senha:['', Validators.compose([Validators.required,Validators.minLength(6)])],
          email:['', Validators.compose([Validators.required, Validators.minLength(10)])]  
        })
    }

    public salvar(){
        console.log();
    }
}