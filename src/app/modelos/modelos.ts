export interface Educacion {
  instituto: string;
  curso: string;
  duracion: string;
  localidad: string;
}

export interface ExperienciaLaboral {
  puesto: string;
  empresa: string;
  duracion: string;
}

export interface Habilidad {
  nombre: string;
  nivel: string;
  porcentaje: number;
}

export interface Proyecto {
  titulo: string;
  descripcion: string;
  imgUrl: string;
  proyectoUrl: string;
}
