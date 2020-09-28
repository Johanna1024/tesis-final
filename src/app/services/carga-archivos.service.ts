import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root',
})
export class CargaArchivosService {
  private CARPETA_IMAGENES = 'img';

  constructor(private db: AngularFirestore) {}

  private guardarArchivo(archivo: { nombre: string; url: string }) {
    this.db.collection(`/${this.CARPETA_IMAGENES}`).add(archivo);
  }

  cargarArchivosFirebase(archivos: FileItem[]) {
    console.log(archivos);

    const storageRef = firebase.storage().ref();

    for (const item of archivos) {
      item.estaSubiendo = true;
      if (item.progreso >= 100) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask = storageRef
        .child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`)
        .put(item.archivo);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) => {
          item.progreso =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.error(`Error al subir`, error);
        },
        () => {
          console.log(`Imagen cargada correctamente`);
          item.url = uploadTask.snapshot.downloadURL;
          item.estaSubiendo = false;
          this.guardarArchivo({ nombre: item.nombreArchivo, url: item.url });
        }
      );
    }
  }
}
