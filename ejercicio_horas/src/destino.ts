import IDestino from "./idestino";

export default class Destino implements IDestino {
  private nombre: String;
  private zonaHoraria: number;

  constructor(nombre: String, zonaHoraria: number) {
    this.nombre = nombre;
    this.zonaHoraria = zonaHoraria;
  }

  public obtenerHoraLocal(horaAeropuerto: Date, zonaHorariaBase: number): Date {
    const horaDestino = horaAeropuerto;
    horaDestino.setHours(horaAeropuerto.getHours() + this.zonaHoraria - zonaHorariaBase);
    console.log(horaDestino);
    return horaDestino;
  }
}
