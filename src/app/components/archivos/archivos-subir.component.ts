import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { SpringServerService } from 'src/app/services/spring-server.service';
import { CargaArchivosService } from 'src/app/services/carga-archivos.service';
import { FileItem } from './../../models/file-item';

import { NgForm } from '@angular/forms';

export interface Item {
  nombre: string;
  url: string;

}

@Component({
  selector: 'app-archivos-subir',
  templateUrl: './archivos-subir.component.html',
  styleUrls: ['./archivos-subir.component.css']
})
export class ArchivosSubirComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  estaSobreElemento: boolean = false;
  archivos: FileItem[] = [];

  file: string = '';


  constructor( 
    private springServer: SpringServerService,
    public cargaArchivosService: CargaArchivosService,
    public afs: AngularFirestore
  ) 
  {
      this.itemsCollection = afs.collection<Item>('files');
      this.items = this.itemsCollection.valueChanges();

      /*this.itemsCollection.valueChanges().subscribe((data) => {
        console.log(data);
      });

      console.log('items = ', this.items);*/
  }

  ngOnInit(): void {
  }

  public subir(form: NgForm) {
    console.log(form);

    console.log(form.value);

    const authData = {
      ...form.value,
    };

    console.log(authData);

    // Guardar Archivo
    this.springServer.guardarArchivo(authData).subscribe((res) => {
      console.log(res);
      //this.alertNuevoUser = true;
      //this.router.navigate(['usuarios/lista']);
    });
  }

  cargarArchivos() {
    this.cargaArchivosService.cargarArchivosFirebase(this.archivos);
  }

  pruebaSobreElemento(event) {
    console.log(event);
  }

  limpiarArchivos() {
    this.archivos = [];
  }

}
