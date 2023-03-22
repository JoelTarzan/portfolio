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
      imgUrl: '../../assets/proyecto_todo.png',
      proyectoUrl: 'https://todo.joeltarzan.es'
    },
    {
      titulo: 'Aplicación del clima',
      descripcion: 'Proyecto hecho en React, permite buscar una ciudad y saber el tiempo que hace, además de una predicción de 7 días.',
      imgUrl: '../../assets/proyecto_clima.png',
      proyectoUrl: 'https://clima.joeltarzan.es'
    },
    {
      titulo: 'Aplicación de chat',
      descripcion: 'Proyecto hecho en Angular y Firebase, permite abrir salas de chat para poder comunicarse con otra persona en tiempo real.',
      imgUrl: '../../assets/proyecto_chat.png',
      proyectoUrl: 'https://chat.joeltarzan.es'
    },
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
