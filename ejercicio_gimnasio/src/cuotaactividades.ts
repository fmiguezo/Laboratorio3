import CalculadorDescuento from "./calculadordescuento";
import TipoCuota from "./tipocuota";

export default class CuotaActividades extends TipoCuota {
  public getPrecio(): number {
    let precio = 0;
    for (let actividad of this.socio.getActividades()) {
      precio += actividad.getPrecio();
    }
    return precio;
  }

  public obtenerDescuento(calc: CalculadorDescuento): number {
    calc.setTotalActividades(this.socio);
    return calc.calcularDescuento();
  }
}
