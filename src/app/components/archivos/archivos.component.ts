import { Component, OnInit } from '@angular/core';

import { SpringServerService } from 'src/app/services/spring-server.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.css'],
})
export class ArchivosComponent implements OnInit {
  file: string = '';
  constructor() {}

  ngOnInit(): void {}

  public subir(form: NgForm) {
    console.log(form);

    console.log(form.value);

    const authData = {
      ...form.value,
    };

    console.log(authData);
  }
}
