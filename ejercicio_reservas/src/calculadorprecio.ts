import Habitacion from "./Abstracciones/habitacion";
import Temporada from "./Abstracciones/temporada";

export default class CalculadorPrecio {
  public calcularPrecio(habitaciones: Habitacion[], dias: number, temporada: Temporada): number {
    return temporada.calcularPrecio(habitaciones, dias);
  }
}
