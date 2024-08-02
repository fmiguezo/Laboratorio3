import Habitacion from "./habitacion";

export default abstract class RegimenAlimenticio {
  protected habitacion: Habitacion;
  protected precio: number;

  constructor(habitacion: Habitacion, precio: number) {
    this.habitacion = habitacion;
    this.precio = precio;
  }

  public calcularPrecio(): number {
    return this.habitacion.getPrecio() * this.precio;
  }
}
