import { Component, OnInit } from "@angular/core";
import { Livro } from "../../model/livro";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
    selector: 'cadastro-livro',
    styleUrls: ['cadastro-livro.scss'],
    templateUrl: 'cadastro-livro.html'
})
export class CadastroLivro implements OnInit{

    public livro: Livro = new Livro();
    public form: FormGroup;

    constructor(private router: Router, private fb: FormBuilder){
        //super(router);
    }

    ngOnInit(){
        this.form = this.fb.group({
            nome: [],
            autor: [],
            numRegistro: [],
            locado: [null]
        });
    }
}