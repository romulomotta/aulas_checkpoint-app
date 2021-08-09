import { Anime } from './animes/anime';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  baseUrl : string = 'http://localhost:8080/api/animes';

  constructor( private http: HttpClient) {}

  salvar( anime: Anime ) : Observable<Anime> {
    return this.http.post<Anime>('http://localhost:8080/api/animes', anime);
  }

  getAnimes() : Observable<Anime[]> {
    return this.http.get<Anime[]>(this.baseUrl);
  }

  // getAnimes() : Anime[] {
  //   let anime = new Anime();
  //   anime.id = 1;
  //   anime.nome = "Fulano";
  //   anime.dataCadastro = '18/04/2020';
  //   anime.cpf = '12345678910';
  //   return [anime];
  // }
}
