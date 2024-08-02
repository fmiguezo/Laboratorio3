import Actividad from "./actividad";
import Promocion from "./promocion";
import Socio from "./socio";
import CalculadorDescuento from "./calculadordescuento";

export default class Gimnasio {
  private actividades: Actividad[] = new Array<Actividad>();
  private socios: Socio[] = new Array<Socio>();
  private promociones: Promocion[] = new Array<Promocion>();
  private promoDelMes: Promocion = new Promocion("Promo del mes", 0);
  private cuotasSocios: Map<Socio, number> = new Map<Socio, number>();
  private calculadorDescuento = new CalculadorDescuento(this.promoDelMes);

  public agregarActividad(actividad: Actividad): void {
    this.actividades.push(actividad);
  }

  public agregarSocio(socio: Socio): void {
    this.socios.push(socio);
  }

  public agregarPromocion(promocion: Promocion): void {
    this.promociones.push(promocion);
  }

  public setPromoDelMes(promo: Promocion): void {
    this.promoDelMes = promo;
  }

  public getPromoDelMes(): Promocion {
    return this.promoDelMes;
  }

  public calcularCuotas(): void {
    for (let socio of this.socios) {
      let cuota = socio.getTipoCuota().getPrecio();
      let descuento = socio.getTipoCuota().obtenerDescuento(this.calculadorDescuento);
      this.cuotasSocios.set(socio, cuota - descuento);
    }
  }
}
