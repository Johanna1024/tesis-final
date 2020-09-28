import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpringServerService {
  private url = `http://localhost:8090/api/v1/`;

  constructor(private http: HttpClient) {}

  public login(authData: Object) {
    return this.http.post(`${this.url}login`, authData).pipe(
      map((resp) => {
        return resp;
      })
    );
  }

  public listarUsuarios() {
    return this.http.get(`${this.url}users`).pipe(
      map((resp) => {
        return resp;
      })
    );
  }

  public guardarUsuario(usuario: UsuarioModel) {
    return this.http.post(`${this.url}register-user`, usuario).pipe(
      map((resp) => {
        return resp;
      })
    );
  }

  public borrarUsuario(usuario: UsuarioModel) {
    const id = usuario.id;

    //Borrar Usuario
    return this.http.delete(`${this.url}delete-user/${id}`).pipe(
      map((resp) => {
        return resp;
      })
    );
  }

  public actualizarUsuario(usuario: UsuarioModel, id: string) {
    return this.http.put(`${this.url}update-user/${id}`, usuario).pipe(
      map((resp) => {
        return resp;
      })
    );
  }
}
