import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JsonServerService {
  private url = `http://localhost:4200/api/`;

  constructor(private http: HttpClient) {}

  autenticar(usuario: UsuarioModel) {
    return this.http.get(`${this.url}users`).pipe(
      map((resp) => {
        return resp;
      })
    );
  }

  cargarStorage() {
    if (localStorage.getItem('loggedIn')) {
      return JSON.parse(localStorage.getItem('loggedIn'));
    } else {
      return {};
    }
  }

  listarUsuarios() {
    return this.http.get(`${this.url}users`).pipe(
      map((resp) => {
        //console.log('entro en el map');
        return resp;
      })
    );
  }

  borrarUsuario(usuario: UsuarioModel) {
    const id = usuario.id;

    //Borrar Usuario
    return this.http.delete(`${this.url}users/${id}`).pipe(
      map((resp) => {
        return resp;
      })
    );
  }

  guardarUsuario(usuario: UsuarioModel) {
    return this.http.post(`${this.url}users`, usuario).pipe(
      map((resp) => {
        return resp;
      })
    );
  }

  actualizarUsuario(usuario: UsuarioModel, id: string) {
    return this.http.put(`${this.url}users/${id}`, usuario).pipe(
      map((resp) => {
        return resp;
      })
    );
  }

  salir() {
    localStorage.removeItem('loggedIn');
  }
}
