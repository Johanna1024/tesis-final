import { Component, OnInit } from '@angular/core';
import { JsonServerService } from './../../services/json-server.service';

import { NgForm } from '@angular/forms';
import { UsuarioModel } from './../../models/usuario.model';
import { Router } from '@angular/router';
import { SpringServerService } from 'src/app/services/spring-server.service';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.css'],
})
export class UsuarioNuevoComponent implements OnInit {
  alertNuevoUser: boolean = false;
  //forma: FormGroup;
  usuario: UsuarioModel = new UsuarioModel();

  constructor(
    private jsonServer: JsonServerService,
    private springServer: SpringServerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  guardar(form: NgForm) {
    //console.log(form);

    if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        //console.log(control);
        control.markAsTouched();
      });
      return;
    }

    //var myNumeroAleatorio = Math.floor(Math.random() * 101);

    let authData = {
      id: Math.floor(Math.random() * 101),
      ...form.value,
    };

    //authData.id = myNumeroAleatorio;

    console.log(authData);

    // Guardar Usuario
    this.springServer.guardarUsuario(authData).subscribe((res) => {
      console.log(res);
      this.alertNuevoUser = true;
      this.router.navigate(['usuarios/lista']);
    });

    // Autenticar Usuario
    /*this.jsonServer.guardarUsuario(authData).subscribe((res) => {
      console.log(res);
      this.alertNuevoUser = true;
      this.router.navigate(['usuarios/lista']);
    });*/

    //Datos de autenticacion
    //console.log(form.value);
  }
}
