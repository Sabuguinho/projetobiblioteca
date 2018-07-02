import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
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
            numeroMatricula: [],
            nome: [],
            cpf: [],
            telefone: [],
            rg: [],
            rua: [],
            numero: []
        })
    }
}