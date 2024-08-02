import Habitacion from "./Abstracciones/habitacion";
import RegimenAlimenticio from "./Abstracciones/regimentalimenticio";
import Temporada from "./Abstracciones/temporada";
import Cliente from "./cliente";

export default class Reserva {
  private fechaIngreso: Date;
  private fechaEgreso: Date;
  private cliente: Cliente;
  private habitaciones;
  private precio;
  private cantidadDias;
  private temporada;

  constructor(
    fechaIngreso: Date,
    fechaEgreso: Date,
    cliente: Cliente,
    habitaciones: Habitacion[],
    precio: number,
    cantidadDias: number,
    temporada: Temporada
  ) {
    this.fechaIngreso = fechaIngreso;
    this.fechaEgreso = fechaEgreso;
    this.cliente = cliente;
    this.habitaciones = habitaciones;
    this.precio = precio;
    this.cantidadDias = cantidadDias;
    this.temporada = temporada;
  }
}
