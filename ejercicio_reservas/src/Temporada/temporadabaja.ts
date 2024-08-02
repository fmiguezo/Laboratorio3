import Habitacion from "../Abstracciones/habitacion";
import Temporada from "../Abstracciones/temporada";

export default class TemporadaBaja implements Temporada {
  private multiplicador: number = 1.1;

  public calcularPrecio(habitaciones: Habitacion[], dias: number): number {
    let precio = 0;
    for (let habitacion of habitaciones) {
      precio += habitacion.getPrecio() + habitacion.getRegimen().calcularPrecio() / 2;
    }
    return precio * dias * this.multiplicador;
  }
}
