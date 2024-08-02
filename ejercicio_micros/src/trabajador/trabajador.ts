import Micro from "../micro/micro";
import { EstadoTrabajador } from "../types/estado-trabajador";

export default abstract class Trabajador {
  protected legajo: number = undefined as unknown as number;
  protected estado: EstadoTrabajador = EstadoTrabajador.A_PIE;
  protected jefe: Trabajador | undefined;

  constructor(legajo: number, jefe?: Trabajador) {
    this.jefe = jefe;
    this.legajo = legajo;
  }

  public abstract quiereSubir(micro: Micro): boolean;

  public esJefe(): boolean {
    return this.jefe === undefined;
  }

  public ocuparLugar(micro: Micro): void {
    if (micro.getAsientosDisponibles()) {
      this.estado = EstadoTrabajador.SENTADO;
    } else {
      this.estado = EstadoTrabajador.PARADO;
    }
  }

  public bajar(): void {
    this.estado = EstadoTrabajador.A_PIE;
  }

  public getEstado(): EstadoTrabajador {
    return this.estado;
  }
}
