import { Routes } from '@angular/router';

//hijas de archivos
import { ArchivosSubirComponent } from './archivos-subir.component';
import { ArchivosListComponent } from './archivos-list.component';
import { GraficoUnoComponent } from './../grafico-uno/grafico-uno.component';
import { GraficoDosComponent } from './../grafico-dos/grafico-dos.component';
import { GraficoTresComponent } from './../grafico-tres/grafico-tres.component';

export const ARCHIVO_ROUTES: Routes = [
  { path: 'subir', component: ArchivosSubirComponent },
  { path: 'listar', component: ArchivosListComponent },
  { path: 'grafico-uno', component: GraficoUnoComponent },
  { path: 'grafico-dos', component: GraficoDosComponent },
  { path: 'grafico-tres', component: GraficoTresComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'subir' },
];
