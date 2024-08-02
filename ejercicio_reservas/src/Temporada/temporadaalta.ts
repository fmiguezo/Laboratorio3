import Habitacion from "../Abstracciones/habitacion";
import Temporada from "../Abstracciones/temporada";

export default class TemporadaAlta implements Temporada {
  private multiplicador: number = 1.2;

  public calcularPrecio(habitaciones: Habitacion[], dias: number): number {
    let precio = 0;
    for (let habitacion of habitaciones) {
      precio += habitacion.getPrecio() + habitacion.getRegimen().calcularPrecio();
    }
    return precio * dias * this.multiplicador;
  }
}
