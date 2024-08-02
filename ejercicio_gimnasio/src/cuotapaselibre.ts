import CalculadorDescuento from "./calculadordescuento";
import TipoCuota from "./tipocuota";

export default class CuotaPaseLibre extends TipoCuota {
  private precio: number = 0;

  public setPrecio(precio: number): void {
    this.precio = precio;
  }

  public getPrecio(): number {
    return this.precio;
  }

  public obtenerDescuento(calc: CalculadorDescuento): number {
    return 0;
  }
}
