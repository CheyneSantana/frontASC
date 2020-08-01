import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitulosIndividuaisComponent } from './titulos/titulos-individuais/titulos-individuais.component';


const routes: Routes = [
  { path: 'titulosindividuais', component: TitulosIndividuaisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
