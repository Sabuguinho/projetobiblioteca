import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { Livro } from '../model/livro';


@Injectable()
export class LivroService {

  private livroUrl = 'http://localhost:8080/trabalho/livro'

  constructor(private http: HttpClient) { }

  salvar(livro : Livro) : Observable<Livro>{
    return this.http.post<Livro>(this.livroUrl, livro);
  }

  buscar(): Observable<Array<Livro>>{
    return this.http.get<Array<Livro>>(this.livroUrl);
  }
}
 