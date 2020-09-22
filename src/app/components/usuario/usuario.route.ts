import { Routes } from '@angular/router';

//hijas de usuarios
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioListaComponent } from './usuario-lista.component';

export const USUARIO_ROUTES: Routes = [
  { path: 'nuevo', component: UsuarioNuevoComponent },
  { path: 'lista', component: UsuarioListaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'lista' },
];
