import { Routes } from '@angular/router';

//hijas de usuarios
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioListaComponent } from './usuario-lista.component';
import { UsuarioActualizarComponent } from './usuario-actualizar.component';

export const USUARIO_ROUTES: Routes = [
  { path: 'nuevo', component: UsuarioNuevoComponent },
  {
    path: 'actualizar/:id/:email/:name/:perfil/:password',
    component: UsuarioActualizarComponent,
  },
  { path: 'lista', component: UsuarioListaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'lista' },
];
