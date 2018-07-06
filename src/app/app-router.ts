import { Component, NgModule } from "@angular/core";
import { RouterModule, Router, Routes } from "@angular/router";
import { CadastroAluno } from "./pages/cadastroaluno/cadastro-aluno";
import { CadastroLivro } from "./pages/livro/cadastro-livro";
import { PesquisaLivro } from "./pages/livro/pesquisa-livro";
import { Login } from "./pages/login/login";

export const appRoutes: Routes = [
    {
        path: 'cadastro-aluno', component: CadastroAluno
    },
    {
        path: 'cadastro-livro', component: CadastroLivro
    },
    {
        path: 'pesquisa-livro', component: PesquisaLivro
    },
    {
        path: 'login', component: Login
    }
]


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRouter{
    constructor(router: Router){

    }
}