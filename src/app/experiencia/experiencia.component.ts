import {Component, OnInit} from '@angular/core';
import {ExperienciaLaboral} from "../modelos/modelos";

@Component({
  selector: 'experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaLista: ExperienciaLaboral[] = [
    {
      puesto: 'Desarrolador Web (Prácticas)',
      empresa: 'Europea de Registro y Control, S.L.U',
      duracion: 'Mayo 2022 - Diciembre 2022'
    },
    {
      puesto: 'Técnico Informático (Prácticas)',
      empresa: 'Ferretería Martí',
      duracion: 'Octubre 2020 - Mayo 2021'
    },
    {
      puesto: 'Auxiliar Administrativo (Prácticas)',
      empresa: 'PortAventura S.A.',
      duracion: 'Junio 2018 - Febrero 2019'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
