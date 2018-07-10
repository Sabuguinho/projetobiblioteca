import { Component, OnInit } from "@angular/core";
import { Livro } from "../../model/livro";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LivroService } from "../../service/livro.service";

@Component({
    selector: 'cadastro-livro',
    styleUrls: ['cadastro-livro.scss'], 
    templateUrl: 'cadastro-livro.html',
})
export class CadastroLivro implements OnInit{

    public livro: Livro = new Livro();
    public form: FormGroup;

    constructor(private fb: FormBuilder, public livroService: LivroService){
        //super(router);
    }

    ngOnInit(){
        this.form = this.fb.group({
            nome: [null,Validators.required],
            autor: [null, Validators.required],
            numRegistro: [null, Validators.required],
            locado: [false]
        });
    }

    public salvar(){
        this.livroService.salvar(this.livro).subscribe(res => console.log(res));
        alert('Livro Salvo');
    }

}