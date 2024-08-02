import EstadoHabitacion from "../Abstracciones/estadohabitacion";

export default class Disponible implements EstadoHabitacion {
  private estado: EstadoHabitacion = new Disponible();

  public setEstado(estado: EstadoHabitacion): void {
    this.estado = estado;
  }

  public seleccionar(): void {
    this.cambiarEstado();
  }
  public cambiarEstado(): void {
    this.estado = new Disponible();
  }
}
