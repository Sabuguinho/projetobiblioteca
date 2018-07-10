import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Pessoa } from "../../model/pessoa";
import { AlunoService } from "../../service/aluno.service";


@Component({
    selector: 'cadastro-aluno',
    templateUrl: 'cadastro-aluno.html', 
    styleUrls: ['cadastro-aluno.scss'],
})
export class CadastroAluno implements OnInit{

    public pessoa: Pessoa = new Pessoa();
    public form: FormGroup;

    constructor(private fb: FormBuilder, public alunoService: AlunoService){
    }

    ngOnInit(){
        this.form = this.fb.group({
            numeroMatricula: [null, Validators.required],
            nome: [null, Validators.required],
            cpf: [null, Validators.required],
            telefone: [null, Validators.required],
            rg: [null, Validators.required],
            rua: [null, Validators.required],
            numero: [null, Validators.required]
        })
    }

    public salvar(){
        console.log();
        this.alunoService.salvar(this.pessoa).subscribe(res => console.log(res));
        alert('Aluno Salvo');
    }
}