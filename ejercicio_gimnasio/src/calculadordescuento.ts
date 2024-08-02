import Promocion from "./promocion";
import Socio from "./socio";

export default class CalculadorDescuento {
  private promo: Promocion;
  private totalActividadesEnPromo: number = 0;

  constructor(promo: Promocion) {
    this.promo = promo;
  }

  public setTotalActividades(socio: Socio): void {
    let totalActividadesEnPromo = 0;
    for (let actividad of socio.getActividades()) {
      if (this.promo.getActividades().includes(actividad)) {
        totalActividadesEnPromo++;
      }
    }
    this.totalActividadesEnPromo = totalActividadesEnPromo;
  }

  public calcularDescuento(): number {
    if (this.totalActividadesEnPromo >= 2) {
      return this.promo.getDescuento();
    }
    return 0;
  }

  public setPromo(promo: Promocion): void {
    this.promo = promo;
  }
}
