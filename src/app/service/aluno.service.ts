import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../model/pessoa';
import { Observable } from 'rxjs';

@Injectable()
export class AlunoService {

  private alunoUrl = 'http://localhost:8080/livro'
  constructor(private http: HttpClient) { }

  salvar(aluno : Pessoa) : Observable<Pessoa>{
    return this.http.post<Pessoa>(this.alunoUrl, aluno);
  }

  buscar(): Observable<Array<Pessoa>>{
    return this.http.get<Array<Pessoa>>(this.alunoUrl);
  }

}
