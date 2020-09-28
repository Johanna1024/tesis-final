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
import { UsuarioActualizarComponent } from './components/usuario/usuario-actualizar.component';
import { ArchivosComponent } from './components/archivos/archivos.component';
import { ArchivosSubirComponent } from './components/archivos/archivos-subir.component';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

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
    UsuarioActualizarComponent,
    ArchivosComponent,
    ArchivosSubirComponent,
    NgDropFilesDirective,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
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
