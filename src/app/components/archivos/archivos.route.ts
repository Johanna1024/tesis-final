import { Routes } from '@angular/router';

//hijas de archivos
import { ArchivosSubirComponent } from './archivos-subir.component';

export const ARCHIVO_ROUTES: Routes = [
  { path: 'subir', component: ArchivosSubirComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'subir' },
];
