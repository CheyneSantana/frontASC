import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TitulosIndividuaisComponent } from './titulos/titulos-individuais/titulos-individuais.component';
import { CadastrarTituloIndividualComponent } from './titulos/titulos-individuais/cadastrar-titulo-individual/cadastrar-titulo-individual.component';
import { ListarTitulosIndividuaisComponent } from './titulos/titulos-individuais/listar-titulos-individuais/listar-titulos-individuais.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TitulosIndividuaisComponent,
    CadastrarTituloIndividualComponent,
    ListarTitulosIndividuaisComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
