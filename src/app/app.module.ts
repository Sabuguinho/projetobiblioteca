import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroAluno } from './pages/cadastroaluno/cadastro-aluno';
import { CadastroLivro } from './pages/livro/cadastro-livro';

@NgModule({
  declarations: [
    AppComponent, CadastroLivro
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
