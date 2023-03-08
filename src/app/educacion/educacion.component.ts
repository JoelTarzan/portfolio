import {Component, OnInit} from '@angular/core';
import {Educacion} from "../modelos/modelos";

@Component({
  selector: 'educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  listaEducacion: Educacion[] = [
    {
      instituto: 'Instituto Baix Camp',
      curso: 'CFGS: Desarrollo de Aplicaciones Web',
      duracion: '2021-Cursando',
      localidad: 'Reus'
    },
    {
      instituto: 'Instituto Vidal i Barraquer',
      curso: 'CFGM: Sistemas Microinformaticos y redes',
      duracion: '2019-2021',
      localidad: 'Tarragona'
    },
    {
      instituto: 'Instituto Ramón Barbat i Miracle',
      curso: 'CFGM: Comercio y Marketing',
      duracion: '2017-2019',
      localidad: 'Vila-Seca'
    },
    {
      instituto: 'Instituto Ramón Barbat i Miracle',
      curso: 'ESO',
      duracion: '2013-2017',
      localidad: 'Vila-Seca'
    },
  ]

  constructor() {
  }

  ngOnInit() {
  }
}
