import Habitacion from "./Abstracciones/habitacion";
import CalculadorPrecio from "./calculadorprecio";
import Reserva from "./reserva";

export default class Hotel {
  private habitaciones: Habitacion[] = new Array<Habitacion>();
  private reservas: Reserva[] = new Array<Reserva>();
  private calculadorPrecio: CalculadorPrecio = new CalculadorPrecio();

  public agregarHabitacion(habitacion: Habitacion): void {
    this.habitaciones.push(habitacion);
  }

  public agregarReserva(reserva: Reserva): void {
    this.reservas.push(reserva);
  }

  public eliminarReserva(reserva: Reserva): void {
    this.reservas = this.reservas.filter((r) => r !== reserva);
  }

  public getReservas(): Reserva[] {
    return this.reservas;
  }

  public getPrecioReserva(reserva: Reserva): number {
    return this.calculadorPrecio.calcularPrecio(reserva);
  }
}
