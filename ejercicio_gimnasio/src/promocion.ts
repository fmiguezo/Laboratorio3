import Actividad from "./actividad";

export default class Promocion {
  private nombre: string;
  private actividades: Actividad[] = new Array<Actividad>();
  private descuento: number;

  constructor(nombre: string, descuento: number) {
    this.nombre = nombre;
    this.descuento = descuento;
  }

  public agregarActividad(actividad: Actividad): void {
    this.actividades.push(actividad);
  }

  public eliminarActividad(actividad: Actividad): void {
    this.actividades = this.actividades.filter((act) => act !== actividad);
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getDescuento(): number {
    return this.descuento;
  }

  public getActividades(): Actividad[] {
    return this.actividades;
  }
}
