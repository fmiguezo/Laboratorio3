import Habitacion from "../Abstracciones/habitacion";
import RegimenAlimenticio from "../Abstracciones/regimentalimenticio";

export default class PensionCompleta extends RegimenAlimenticio {
  public calcularPrecio(): number {
    throw new Error("Method not implemented.");
  }
}
