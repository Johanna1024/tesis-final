import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'integrantes', component: IntegrantesComponent },
  {
    path: 'protegida',
    component: ProtegidaComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
