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
  animeSelecionado: Anime = new Anime;
  mensagemSucesso: string = '';
  mensagemErro: string = '';

  constructor(private service: AnimesService) { }

  ngOnInit(): void {
    this.service
      .getAnimes()
      .subscribe( response => {
        this.animes = response;
      })
  }

  paraDeletar(anime: Anime) {
    this.animeSelecionado = anime;
  }

  deletarAnime() {
    this.service
      .deletar(this.animeSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Anime excluído com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro na exclusão!'
        )
  }
}
