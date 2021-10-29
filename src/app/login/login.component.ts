import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";
  loginError: boolean = false;
  cadastrando: boolean = false;
  mensagemSucesso: string = "";
  mensagemErro: string = "";

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit() {
    if (this.cadastrando == false) {
      this.authService
      .tentarLogar(this.username, this.password)
      .subscribe(response => {
        const access_token = JSON.stringify(response);
        localStorage.setItem('access_token', access_token)
        this.router.navigate(['/home'])
      }, errorResponse => {
        this.loginError = true;
        this.mensagemErro = 'Usuário e/ou senha incorreto(s).'
        this.username = '';
        this.password = '';
      })
    }else{
      this.mensagemSucesso = "";
    }

  }

  toRegister(event: any) {
    event.preventDefault();
    this.loginError = false;
    this.cadastrando = true;
    this.username = '';
    this.password = '';
  }

  stopRegister(){
    this.cadastrando = false;
    this.username = '';
    this.password = '';
    this.loginError = false;
  }

  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
      .salvar(usuario)
      .subscribe( response => {
        this.mensagemSucesso = "Cadastro realizado com sucesso!"
        this.loginError = false;
        this.username = '';
        this.password = '';
        this.cadastrando = false;
        this.mensagemErro = '';
      }, errorResponse => {
        this.loginError = true;
          if (usuario.username === "" ||
            usuario.password === "") {
            this.mensagemErro =
              "Campo de Usuário e Senha devem ser preenchidos."
          }else{
            this.mensagemErro = errorResponse.error.message;
          }
        this.mensagemSucesso = '';
        this.password = '';
      })
  }
}
