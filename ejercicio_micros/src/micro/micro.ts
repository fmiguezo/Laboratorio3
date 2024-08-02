import Trabajador from "../trabajador/trabajador";

export default class Micro {
  // private capacidadParados: number;
  // private capacidadSentados: number;
  // private volumen: number;
  // private patente: string;
  // private pasajeros: Array<Trabajador>;
  // private primerPasajero: Trabajador;

  public subirTrabajador(trabajador: Trabajador): void {
    throw new Error("Method not implemented.");
  }
  public bajarTrabajador(trabajador: Trabajador): void {
    throw new Error("Method not implemented.");
  }

  public getLugaresDisponibles(): number {
    throw new Error("Method not implemented.");
  }

  public getAsientosDisponibles(): number {
    throw new Error("Method not implemented.");
  }

  public getParadosDisponibles(): number {
    throw new Error("Method not implemented.");
  }
  public getPrimerPasajero(): Trabajador {
    throw new Error("Method not implemented.");
  }
}
