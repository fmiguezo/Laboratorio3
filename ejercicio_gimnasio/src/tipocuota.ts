import CalculadorDescuento from "./calculadordescuento";
import Socio from "./socio";

export default abstract class TipoCuota {
  protected socio: Socio;

  constructor(socio: Socio) {
    this.socio = socio;
  }

  public abstract getPrecio(): number;
  public abstract obtenerDescuento(calc: CalculadorDescuento): number;
}
