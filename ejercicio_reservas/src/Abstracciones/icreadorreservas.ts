import CalculadorPrecio from "../calculadorprecio";
import Cliente from "../cliente";
import Habitacion from "./habitacion";
import RegimenAlimenticio from "./regimentalimenticio";

export default interface ICreadorReservas {
  setFechaIngreso(fecha: Date): void;
  setFechaEgreso(fecha: Date): void;
  setCliente(cliente: Cliente): void;
  setCantidadDias(): void;
  setTemporada(): void;
  agregarHabitacion(habitacion: Habitacion, regimen: RegimenAlimenticio): void;
  eliminarHabitacion(habitacion: Habitacion): void;
  setHabitaciones(habitaciones: Habitacion[]): void;
  setPrecio(calc: CalculadorPrecio): void;
  reiniciar(): void;
  reiniciar(): void;
}
