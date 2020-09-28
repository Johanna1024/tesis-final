import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsuarioModel } from './../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { JsonServerService } from 'src/app/services/json-server.service';
import { SpringServerService } from 'src/app/services/spring-server.service';

@Component({
  selector: 'app-usuario-actualizar',
  templateUrl: './usuario-actualizar.component.html',
  styleUrls: ['./usuario-actualizar.component.css'],
})
export class UsuarioActualizarComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  alertActualizaUser: boolean = false;
  //usuario = {};

  constructor(
    private rutaActiva: ActivatedRoute,
    private jsonServer: JsonServerService,
    private springServer: SpringServerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuario = {
      id: this.rutaActiva.snapshot.params.id,
      name: this.rutaActiva.snapshot.params.name,
      email: this.rutaActiva.snapshot.params.email,
      perfil: this.rutaActiva.snapshot.params.perfil,
      password: this.rutaActiva.snapshot.params.password,
    };
  }

  actualizar(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        //console.log(control);
        control.markAsTouched();
      });
      return;
    }

    console.log(form.value);

    let authData = {
      id: this.usuario.id,
      password: this.usuario.password,
      ...form.value,
    };

    console.log(authData);

    // Actualizar Usuario
    this.springServer
      .actualizarUsuario(authData, this.usuario.id)
      .subscribe((res) => {
        console.log(res);
        this.alertActualizaUser = true;
        this.router.navigate(['usuarios/lista']);
      });
    /*this.jsonServer
      .actualizarUsuario(authData, this.usuario.id)
      .subscribe((res) => {
        console.log(res);
        this.alertActualizaUser = true;
        this.router.navigate(['usuarios/lista']);
      });*/
  }
}
