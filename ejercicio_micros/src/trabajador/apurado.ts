import Micro from "../micro/micro";
import Trabajador from "./trabajador";

export default class Apurado extends Trabajador {
  public quiereSubir(micro: Micro): boolean {
    return true;
  }
}
