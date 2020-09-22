import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';
import { FooterComponent } from './components/footer/footer.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { LoginComponent } from './components/login/login.component';
import { UsuarioListaComponent } from './components/usuario/usuario-lista.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    IntegrantesComponent,
    FooterComponent,
    DomseguroPipe,
    LoginComponent,
    UsuarioListaComponent,
    UsuarioNuevoComponent,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
