import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimesService } from '../../animes.service'

@Component({
  selector: 'app-animes-lista',
  templateUrl: './animes-lista.component.html',
  styleUrls: ['./animes-lista.component.css']
})
export class AnimesListaComponent implements OnInit {

  animes: Anime[] = [];

  constructor(private service: AnimesService) { }

  ngOnInit(): void {
    this.service
      .getAnimes()
      .subscribe( response => {
        this.animes = response;
      })
  }

}
