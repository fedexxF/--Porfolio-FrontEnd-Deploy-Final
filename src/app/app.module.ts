import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { FormsModule } from '@angular/forms';
import { EducacionComponent } from './componets/educacion/educacion.component';
import { HomeComponent } from './componets/home/home.component';
import { BodyComponent } from './componets/body/body.component';
import { ExperienciaComponent } from './componets/experiencia/experiencia.component';
import { ProyectosComponent } from './componets/proyectos/proyectos.component';
import { FooterComponent } from './componets/footer/footer.component';
import { HabilidadComponent } from './componets/habilidad/habilidad.component';
import { PorfolioComponent } from './componets/porfolio/porfolio.component';
import { LoginComponent } from './componets/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducacionComponent,
    HomeComponent,
    BodyComponent,
    ExperienciaComponent,
    ProyectosComponent,
    FooterComponent,
    HabilidadComponent,
    PorfolioComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
