import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { JsonServerService } from './../../services/json-server.service';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css'],
})
export class UsuarioListaComponent implements OnInit {
  alertBorrado: boolean = false;
  usuariosRegistrados: any[] = [];

  constructor(private jsonServer: JsonServerService, private router: Router) {
    jsonServer.listarUsuarios().subscribe((data: any) => {
      console.log(data);
      this.usuariosRegistrados = data;
    });
  }

  borrar(usuario: UsuarioModel) {
    console.log(usuario);
    this.jsonServer.borrarUsuario(usuario).subscribe();
    this.alertBorrado = true;
    window.location.reload();
  }

  actualizar(usuario: UsuarioModel) {
    console.log(usuario);
    this.router.navigate(['usuarios/actualizar']);
  }

  ngOnInit(): void {}
}
