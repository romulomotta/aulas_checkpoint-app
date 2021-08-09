import { Component, OnInit } from '@angular/core';

import  { Anime } from '../anime';
import { AnimesService } from '../../animes.service'

@Component({
  selector: 'app-animes-form',
  templateUrl: './animes-form.component.html',
  styleUrls: ['./animes-form.component.css']
})
export class AnimesFormComponent implements OnInit {

  anime: Anime;

  constructor( private service: AnimesService) {
    this.anime = new Anime();

  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service
      .salvar(this.anime)
      .subscribe( response => {
        console.log(response);
      })
  }
}
