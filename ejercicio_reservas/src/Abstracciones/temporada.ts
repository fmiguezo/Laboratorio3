import Reserva from "../reserva";
import Habitacion from "./habitacion";

export default interface Temporada {
  calcularPrecio(habitaciones: Habitacion[], dias: number): number;
}
