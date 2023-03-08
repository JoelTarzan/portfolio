import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.css']
})
export class InformacionPersonalComponent implements OnInit {
  misDatos: any = {
    'Nombre': 'Joel Tarzán',
    'Fecha de Nacimiento': '24-07-2000',
    'Localidad': 'España, Vila-Seca',
    'LinkedIn': 'https://www.linkedin.com/in/joeltarzan/',
    'GitHub': 'https://github.com/JoelTarzan'
  }
  sobreMi: string[] = [
    'Hola, soy un estudiante de Desarrollo Web.',
    'He hecho prácticas como desarrollador fullstack, desarrollando un panel de control para los trabajadores con diversas herramientas y un portal para los clientes, destinado al control del stock en las máquinas de tabaco de estancos, hoteles, etc.',
    'Actualmente estoy buscando trabajo como desarrollador junior.'
  ]

  constructor() {

  }

  ngOnInit(): void {

  }

  returnZero() {
    return 0;
  }
}
