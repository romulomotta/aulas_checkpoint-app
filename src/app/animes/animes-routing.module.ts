import { AuthGuard } from './../auth.guard';
import { LayoutComponent } from './../layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimesFormComponent } from './animes-form/animes-form.component';
import { AnimesListaComponent } from './animes-lista/animes-lista.component';

const routes: Routes = [
  { path: 'animes', component: LayoutComponent,
    canActivate: [AuthGuard], children: [

    { path: 'form', component: AnimesFormComponent},
    { path: 'form/:id', component: AnimesFormComponent},
    { path: 'lista', component: AnimesListaComponent},
    { path: '', redirectTo : '/animes/lista', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimesRoutingModule { }
