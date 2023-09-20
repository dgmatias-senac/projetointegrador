import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarrosselComponent } from './home/carrossel/carrossel.component';
import { DestaqueComponent } from './home/carrossel/destaque/destaque.component';
import { HeaderComponent } from './home/carrossel/header/header.component';
import { EventosComponent } from './eventos/eventos.component';
import { BannerComponent } from './eventos/banner/banner.component';
import { ResultadoComponent } from './eventos/resultado/resultado.component';
import { EventoComponent } from './eventos/resultado/evento/evento.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrosselComponent,
    DestaqueComponent,
    HeaderComponent,
    EventosComponent,
    BannerComponent,
    ResultadoComponent,
    EventoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
