import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AnimesRoutingModule } from './animes-routing.module';
import { AnimesFormComponent } from './animes-form/animes-form.component';
import { AnimesListaComponent } from './animes-lista/animes-lista.component';


@NgModule({
  declarations: [
    AnimesFormComponent,
    AnimesListaComponent
  ],
  imports: [
    CommonModule,
    AnimesRoutingModule,
    FormsModule
  ], exports: [
    AnimesFormComponent
  ]
})
export class AnimesModule { }
