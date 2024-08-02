import Vagon from "./vagon";
import {
  MULTIPLICADOR_ANGOSTO,
  MULTIPLICADOR_ANCHO,
  VAGON_ANCHO_PROMEDIO,
  PESO_PROMEDIO_PERSONA,
} from "../types/constantes";

export default class VagonDePasajeros extends Vagon {
  private largo: number;
  private anchoUtil: number;

  constructor(largo: number, anchoUtil: number) {
    super();
    this.largo = largo;
    this.anchoUtil = anchoUtil;
  }

  public calcularMaximoPasajeros(): number {
    return (this.anchoUtil <= VAGON_ANCHO_PROMEDIO ? MULTIPLICADOR_ANGOSTO : MULTIPLICADOR_ANCHO) * this.largo;
  }

  public calcularPesoMaximo(): number {
    return this.calcularMaximoPasajeros() * PESO_PROMEDIO_PERSONA;
  }
}
