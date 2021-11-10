import { AnimeInformation } from './animeinformation';
import { AnimeNews } from './animenews';
import { Anime } from '../animes/anime';

import { AuthService } from './../auth.service';
import { AnimesService } from '../animes.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarioLogado: string = '';
  baseUrl: string = "http://localhost:8080/api/animes/last";

  animes: Anime[] = [];
  animesInfo: AnimeInformation[] = [];
  // homeNews: AnimeNews[] = [];
  homeMSNews: AnimeNews[] = [];


  constructor(
    private authService: AuthService,
    private service: AnimesService,
  ) { }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioAutenticado();

    this.showLast2();
    this.showMSNews();
    this.showTop10();
  }

  // showNews(): void {
  //   this.service
  //     .getNews()
  //     .subscribe( response => {
  //       this.homeNews = response.articles;
  //     })
  // }

  showLast2(): void {
    this.service.getLast2Animes().subscribe( response => {
      this.animes = response;
    })
  }

  showMSNews(): void {
    this.service
      .getMSNews()
      .subscribe( response => {
        this.homeMSNews = response.data;
        console.log(this.homeMSNews);
      })
  }

  showTop10() {
    this.service.getTop10()
      .subscribe( response => {
        for (let i = 0; i < 10; i++) {
          this.animesInfo[i] = response.top[i];
          console.log(this.animesInfo);
        }
      })
  }

}
