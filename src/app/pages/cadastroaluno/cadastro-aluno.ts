import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Pessoa } from "../../model/pessoa";
import { Router } from "@angular/router";


@Component({
    selector: 'cadastro-aluno',
    templateUrl: 'cadastro-aluno.html',
    styleUrls: ['cadastro-aluno.scss']
})
export class CadastroAluno implements OnInit{

    public pessoa: Pessoa = new Pessoa();
    public form: FormGroup;

    constructor(private fb: FormBuilder, private router: Router){
    }

    ngOnInit(){
        this.form = this.fb.group({
            numeroMatricula: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
            nome: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(250)])],
            cpf: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
            telefone: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(25)])],
            rg: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
            rua: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
            numero: ['', Validators.compose([Validators.required, Validators.maxLength(10)])]
        })
    }
}