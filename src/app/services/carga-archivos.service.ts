import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

//Model
import { FileItem } from '../models/file-item';

@Injectable({
  providedIn: 'root',
})
export class CargaArchivosService {
  private CARPETA_IMAGENES = 'files';//'img';

  constructor(private db: AngularFirestore) {}

  cargarArchivosFirebase(archivos: FileItem[]) {
    console.log(archivos);

    const storageRef = firebase.storage().ref();
    //let urltemp = '';


    //Recorro cada archivo
    for (const item of archivos) {

      item.estaSubiendo = true;

      //Archivo subido
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
          console.log(`Archivo cargado correctamente`);

          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            item.url = downloadURL;
            console.log('URL:' + item.url);
            console.log(item.url);
            item.estaSubiendo = false;

            //Guardo archivo en firebase
            this.guardarArchivo({ 
              nombre: item.nombreArchivo, 
              url: item.url,
              size: item.size,
              type: item.type,
              lastModified: item.lastModified
            });
          });
        }
      );
    }
  }

  private guardarArchivo(archivo: { nombre: string; url: string, size: number, type: string, lastModified: number }) {
    this.db.collection(`/${this.CARPETA_IMAGENES}`).add(archivo);
  }

}
