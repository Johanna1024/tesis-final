import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';
import { LoginComponent } from './components/login/login.component';

//Rutas
import { USUARIO_ROUTES } from './components/usuario/usuario.route';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'integrantes', component: IntegrantesComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'usuarios',
    component: UsuarioComponent,
    children: USUARIO_ROUTES,
    canActivate: [AuthGuard],
  },
  {
    path: 'archivos',
    component: UsuarioComponent,
    children: USUARIO_ROUTES,
    canActivate: [AuthGuard],
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
