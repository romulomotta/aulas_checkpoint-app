import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimesFormComponent } from './animes-form/animes-form.component';
import { AnimesListaComponent } from './animes-lista/animes-lista.component';

const routes: Routes = [
  { path: 'animes-form', component: AnimesFormComponent},
  { path: 'animes-lista', component: AnimesListaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimesRoutingModule { }
