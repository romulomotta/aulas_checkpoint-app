import { Anime } from './animes/anime';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  baseUrl : string = 'http://localhost:8080/api/animes';

  apiKey: string = "248a1735910941e9af95afff145dc0de";
  newsUrl: string = `https://newsapi.org/v2/everything?q=anime brasil&from=2021-10-07&sortBy=publishedAt&apiKey=${this.apiKey}`;

  msApiKey: string = "82010f78d80f6678b5d63465f5b94d2d";
  mSUrl: string = `http://localhost:8080/api/media`;

  jikanUrl: string = "http://localhost:8080/api/jikan";

  constructor( private http: HttpClient) {}

  salvar( anime: Anime ) : Observable<Anime> {
    return this.http.post<Anime>('http://localhost:8080/api/animes', anime);
  }

  atualizar( anime: Anime ) : Observable<any> {
    return this.http.put<Anime>(`http://localhost:8080/api/animes/${anime.id}`, anime);
  }

  getAnimes() : Observable<Anime[]> {
    return this.http.get<Anime[]>(this.baseUrl);
  }

  getAnimeById(id: number) : Observable<Anime> {
    return this.http.get<any>(`http://localhost:8080/api/animes/${id}`);
  }

  deletar(anime: Anime) : Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${anime.id}`);
  }

  getLast2Animes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.baseUrl + "/last");
  }

  getNews(): Observable<any> {
    return this.http.get<any>(this.newsUrl);
  }

  getMSNews(): Observable<any> {
    return this.http.get<any>(this.mSUrl);
  }

  getTop10(): Observable<any> {
    return this.http.get<any>(this.jikanUrl);
  }

}
