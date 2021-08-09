import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimesRoutingModule } from './animes-routing.module';
import { AnimesListaComponent } from './animes-lista/animes-lista.component';


@NgModule({
  declarations: [
    AnimesListaComponent
  ],
  imports: [
    CommonModule,
    AnimesRoutingModule
  ]
})
export class AnimesModule { }
