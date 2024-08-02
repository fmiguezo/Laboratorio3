export default class Actividad {
  private nombre: string;
  private descripcion: string;
  private precio: number;
  private instructor: string;
  private dias: string[];
  private horarios: string[];

  constructor(
    nombre: string,
    descripcion: string,
    precio: number,
    instructor: string,
    dias: string[],
    horarios: string[]
  ) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.instructor = instructor;
    this.dias = dias;
    this.horarios = horarios;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getDescripcion(): string {
    return this.descripcion;
  }

  public getPrecio(): number {
    return this.precio;
  }

  public getInstructor(): string {
    return this.instructor;
  }

  public getDias(): string[] {
    return this.dias;
  }

  public getHorarios(): string[] {
    return this.horarios;
  }
}
