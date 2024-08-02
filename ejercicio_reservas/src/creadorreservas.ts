import Habitacion from "./Abstracciones/habitacion";
import ICreadorReservas from "./Abstracciones/icreadorreservas";
import Cliente from "./cliente";
import Temporada from "./Abstracciones/temporada";
import TemporadaAlta from "./Temporada/temporadaalta";
import CalculadorPrecio from "./calculadorprecio";
import RegimenAlimenticio from "./Abstracciones/regimentalimenticio";
import TemporadaBaja from "./Temporada/temporadabaja";
import Reserva from "./reserva";

export default class CreadorReservas implements ICreadorReservas {
  private fechaIngreso: Date = new Date();
  private fechaEgreso: Date = new Date();
  private cliente: Cliente = new Cliente();
  private habitaciones: Habitacion[] = [];
  private precio: number = 0;
  private cantidadDias: number = 0;
  private temporada: Temporada = new TemporadaAlta();

  public setFechaIngreso(fecha: Date): void {
    this.fechaIngreso = fecha;
  }

  public setFechaEgreso(fecha: Date): void {
    this.fechaEgreso = fecha;
  }

  public setCliente(cliente: Cliente): void {
    this.cliente = cliente;
  }

  public setCantidadDias(): void {
    this.cantidadDias = (this.fechaEgreso.getTime() - this.fechaIngreso.getTime()) / (1000 * 60 * 60 * 24);
  }

  public setTemporada(): void {
    if (this.fechaIngreso.getMonth() >= 4 && this.fechaEgreso.getMonth() <= 9) {
      this.temporada = new TemporadaBaja();
    } else {
      this.temporada = new TemporadaAlta();
    }
  }

  public agregarHabitacion(habitacion: Habitacion, regimen: RegimenAlimenticio): void {
    try {
      habitacion.setRegimen(regimen);
      this.habitaciones.push(habitacion);
    } catch (error) {
      error.message;
    }
  }

  public eliminarHabitacion(habitacion: Habitacion): void {
    this.habitaciones = this.habitaciones.filter((h) => h !== habitacion);
  }

  public setHabitaciones(habitaciones: Habitacion[]): void {
    this.habitaciones = habitaciones;
  }

  public setPrecio(calc: CalculadorPrecio): void {
    this.precio = calc.calcularPrecio(this.habitaciones, this.cantidadDias, this.temporada);
  }

  public reiniciar(): void {
    this.fechaIngreso = new Date();
    this.fechaEgreso = new Date();
    this.cliente = new Cliente();
    this.habitaciones = [];
    this.precio = 0;
    this.cantidadDias = 0;
    this.temporada = new TemporadaAlta();
  }

  public crearReserva(): Reserva {
    return new Reserva(
      this.fechaIngreso,
      this.fechaEgreso,
      this.cliente,
      this.habitaciones,
      this.precio,
      this.cantidadDias,
      this.temporada
    );
  }
}
