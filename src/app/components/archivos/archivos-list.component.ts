import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { faFilePdf, faFileAlt, faFileExcel, faFileWord } from '@fortawesome/free-solid-svg-icons';

export interface Item { 
  nombre: string; 
  url: string; 
  size: number; 
  type: string; 
  lastModified: number; 
}

@Component({
  selector: 'app-archivos-list',
  templateUrl: './archivos-list.component.html',
  styles: [
  ]
})
export class ArchivosListComponent implements OnInit {

  faFilePdf = faFilePdf;
  faFileAlt = faFileAlt;
  faFileExcel = faFileExcel;
  faFileWord = faFileWord;

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
      this.itemsCollection = afs.collection<Item>('files');
      this.items = this.itemsCollection.valueChanges();

   }

  ngOnInit(): void {
  }

}
