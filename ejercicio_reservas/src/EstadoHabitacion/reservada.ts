import EstadoHabitacion from "../Abstracciones/estadohabitacion";
import Disponible from "./disponible";

export default class Reservada implements EstadoHabitacion {
  private estado: EstadoHabitacion = new Reservada();

  public setEstado(estado: EstadoHabitacion): void {
    this.estado = estado;
  }

  public seleccionar(): void {
    throw new Error("No se puede seleccionar una habitación reservada");
  }
  public cambiarEstado(): void {
    this.estado = new Disponible();
  }
}
