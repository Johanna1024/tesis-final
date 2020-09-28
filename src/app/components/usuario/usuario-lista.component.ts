import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { SpringServerService } from 'src/app/services/spring-server.service';
import { JsonServerService } from './../../services/json-server.service';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css'],
})
export class UsuarioListaComponent implements OnInit {
  alertBorrado: boolean = false;
  usuariosRegistrados: any[] = [];

  constructor(
    private jsonServer: JsonServerService,
    private springServer: SpringServerService,
    private router: Router
  ) {
    this.springServer.listarUsuarios().subscribe((data: any) => {
      console.log(data);
      this.usuariosRegistrados = data;
    });

    /*jsonServer.listarUsuarios().subscribe((data: any) => {
      console.log(data);
      this.usuariosRegistrados = data;
    });*/
  }

  borrar(usuario: UsuarioModel) {
    console.log(usuario);
    this.springServer.borrarUsuario(usuario).subscribe();
    //this.jsonServer.borrarUsuario(usuario).subscribe();
    this.alertBorrado = true;
    window.location.reload();
  }

  actualizar(usuario: UsuarioModel) {
    console.log(usuario);
    this.router.navigate(['usuarios/actualizar']);
  }

  ngOnInit(): void {}
}
