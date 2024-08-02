import { PESO_PROMEDIO_PERSONA } from "../types/constantes";
import Vagon from "./vagon";

export default class VagonDeCarga extends Vagon {
  private cargaMaxima: number;
  private readonly CANTIDAD_GUARDAS = 2;

  constructor(cargaMaxima: number) {
    super();
    this.cargaMaxima = cargaMaxima;
  }

  public calcularPesoMaximo(): number {
    return this.cargaMaxima + PESO_PROMEDIO_PERSONA * this.CANTIDAD_GUARDAS;
  }
}
