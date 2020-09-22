import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuarioModel } from './../../models/usuario.model';
import { JsonServerService } from './../../services/json-server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  alertErrorAuth: boolean = false;

  constructor(
    private jsonServer: JsonServerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        //console.log(control);
        control.markAsTouched();
      });
      return;
    }

    //Datos de autenticacion
    console.log(form.value);

    const authData = {
      ...form.value,
    };

    console.log(authData);

    // Autenticar Usuario
    this.jsonServer.autenticar(authData).subscribe((res) => {
      console.log(res);

      //verifica si existe el usuario
      for (const usuario in res) {
        //console.log(`${usuario}: ${res[usuario].name}`);

        if (
          res[usuario].email == this.usuario.email &&
          res[usuario].password == this.usuario.password
        ) {
          console.log(`existe el usuario ${res[usuario].name}`);
          this.alertErrorAuth = false;

          const usuarioLocal = {
            loggedIn: true,
            usuario: this.usuario.email,
          };

          //guardar informacion en el localstorage
          localStorage.setItem('loggedIn', JSON.stringify(usuarioLocal));
          //window.location.reload();
          this.router.navigate(['/home']);

          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          this.alertErrorAuth = true;
        }
      }
      //this.router.navigate(['home']);
      //this.alertUsuarioNuevo = true;
    });

    console.log(`Login`);
  }
}
