import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JsonServerService } from 'src/app/services/json-server.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  authUser: object = {};

  constructor(
    public auth: AuthService,
    public jsonServer: JsonServerService,
    private router: Router
  ) {
    this.authUser = this.jsonServer.cargarStorage();
  }

  ngOnInit(): void {}

  login() {
    console.log(`Hola`);
  }

  logout() {
    this.jsonServer.salir();
    this.router.navigate(['login']);

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
