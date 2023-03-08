import {Component, OnInit} from '@angular/core';
import {Habilidad} from "../modelos/modelos";

@Component({
  selector: 'habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidadesLista: Habilidad[] = [
    {
      nombre: 'HTML, CSS',
      nivel: 'Experto',
      porcentaje: 85
    },
    {
      nombre: 'JavaScript',
      nivel: 'Intermedio',
      porcentaje: 65
    },
    {
      nombre: 'PHP, Laravel',
      nivel: 'Intermedio',
      porcentaje: 60
    },
    {
      nombre: 'Java',
      nivel: 'Intermedio',
      porcentaje: 50
    },
    {
      nombre: 'Angular',
      nivel: 'Principiante',
      porcentaje: 25
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
