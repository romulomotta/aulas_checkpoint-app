import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import  { Anime } from '../anime';
import { AnimesService } from '../../animes.service'

@Component({
  selector: 'app-animes-form',
  templateUrl: './animes-form.component.html',
  styleUrls: ['./animes-form.component.css']
})
export class AnimesFormComponent implements OnInit {

  anime: Anime;
  success: boolean = false;
  errors: string = '';
  id: number = 0;

  constructor(
    private service: AnimesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
    this.anime = new Anime();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id){
        this.service
          .getAnimeById(this.id)
          .subscribe(
          response => this.anime = response,
          errorResponse => this.anime = new Anime()
        )
      }
    })
  }

  onSubmit(){
    if(this.id) {
      this.service
      .atualizar(this.anime)
      .subscribe( response => {
        this.success = true;
        this.errors = '';
      }, errorResponse => {
        this.errors = 'Erro ao atualizar o anime.';
      })
    }else{
      this.service
      .salvar(this.anime)
      .subscribe( response => {
        this.success = true;
        this.errors = '';
        this.anime = response;
      }, errorResponse => {
        this.errors = errorResponse.error.errors[0].defaultMessage;
      })
    }
  }
}
