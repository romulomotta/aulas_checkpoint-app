import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl : string = 'http://localhost:8080/api/clientes';

  constructor( private http: HttpClient) {}

  salvar( cliente: Cliente ) : Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }

  getClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  // getClientes() : Cliente[] {
  //   let cliente = new Cliente();
  //   cliente.id = 1;
  //   cliente.nome = "Fulano";
  //   cliente.dataCadastro = '18/04/2020';
  //   cliente.cpf = '12345678910';
  //   return [cliente];
  // }
}
