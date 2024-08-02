export default interface IDestino {
  obtenerHoraLocal(horaAeropuerto: Date, zonaHorariaBase: number): Date;
}
