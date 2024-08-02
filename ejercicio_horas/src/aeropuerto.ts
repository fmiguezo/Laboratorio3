import Destino from "./destino";

export default class Aeropuerto {
  private nombre: String;
  private horaLocal: Date;
  private zonaHoraria: number;
  private destinos: Array<Destino>;

  constructor(nombre: String, horaLocal: Date, zonaHoraria: number) {
    this.nombre = nombre;
    this.horaLocal = horaLocal;
    this.zonaHoraria = zonaHoraria;
    this.destinos = [];
  }

  public notificarDestinos(): void {
    this.destinos.forEach((destino) => {
      destino.obtenerHoraLocal(this.horaLocal, this.zonaHorariariopuerto);
    });
  }
}
