import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css'],
})
export class IntegrantesComponent implements OnInit {
  titulo: string = 'integrantes';

  constructor() {}

  ngOnInit(): void {}
}
