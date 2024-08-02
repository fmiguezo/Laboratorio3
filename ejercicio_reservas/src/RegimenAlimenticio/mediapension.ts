import Habitacion from "../Abstracciones/habitacion";
import RegimenAlimenticio from "../Abstracciones/regimentalimenticio";

export default class MediaPension extends RegimenAlimenticio {
  constructor(habitacion: Habitacion, precio: number) {
    super(habitacion, precio);
  }
}
