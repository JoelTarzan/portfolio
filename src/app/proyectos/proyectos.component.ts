import {Component, OnInit} from '@angular/core';
import {Proyecto} from "../modelos/modelos";

@Component({
  selector: 'proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[] = [
    {
      titulo: 'To Do List',
      descripcion: 'Proyecto hecho en Laravel, con un sistema de Login y un Crud para añadir y editar distintas tareas.',
      imgUrl: '../../assets/todoCrud.jpg',
      proyectoUrl: ''
    },
    {
      titulo: 'Aplicación del clima',
      descripcion: 'Proyecto hecho en React, permite buscar una ciudad y saber el tiempo que hace, además de una predicción de 7 días.',
      imgUrl: '../../assets/appClima.jpg',
      proyectoUrl: ''
    },
    {
      titulo: 'Aplicación de chat',
      descripcion: 'Proyecto hecho en Angular con WebSockets, permite abrir varias salas de chat para poder comunicarse con otra persona en tiempo real.',
      imgUrl: '../../assets/appChat.jpg',
      proyectoUrl: ''
    },
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
