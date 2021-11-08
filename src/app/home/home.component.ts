import { AnimeNews } from './animenews';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Anime } from '../animes/anime';
import { AnimesService } from '../animes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarioLogado: string = '';
  baseUrl: string = "http://localhost:8080/api/animes/last";
  animes: Anime[] = [];


  nameNews: string = "";
  linkNews: string = "";
  homeNews: AnimeNews[] = [];


  constructor(
    private authService: AuthService,
    private service: AnimesService
  ) { }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();
    this.showNews();
    this.showLast2();
  }

  showNews(): void {
    this.service
      .showNews()
      .subscribe( response => {
        this.homeNews = response.articles;
        console.log(this.homeNews)
      })
  }

  showLast2(): void {
    this.service.showLast2Animes().subscribe( response => {
      this.animes = response;
    })
  }

}
