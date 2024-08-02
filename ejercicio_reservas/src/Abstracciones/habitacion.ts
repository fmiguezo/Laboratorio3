import EstadoHabitacion from "./estadohabitacion";
import RegimenAlimenticio from "./regimentalimenticio";

export default abstract class Habitacion {
  protected maxPersonas: number = 0;
  protected estado: EstadoHabitacion;
  protected regimen: RegimenAlimenticio;
  protected precio: number = 0;

  constructor(maxPersonas: number, estado: EstadoHabitacion, regimen: RegimenAlimenticio, precio: number) {
    this.maxPersonas = maxPersonas;
    this.estado = estado;
    this.regimen = regimen;
    this.precio = precio;
  }

  public setEstado(estado: EstadoHabitacion): void {
    this.estado = estado;
  }

  public setRegimen(regimen: RegimenAlimenticio): void {
    this.regimen = regimen;
  }

  public getPrecio(): number {
    return this.precio;
  }

  public getEstado(): EstadoHabitacion {
    return this.estado;
  }

  public getRegimen(): RegimenAlimenticio {
    return this.regimen;
  }

  public seleccionar(): void {
    this.estado.seleccionar();
  }
}
