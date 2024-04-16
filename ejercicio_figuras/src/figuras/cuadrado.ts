import Figura from "./figura";

export default class Cuadrado extends Figura {
  // Métodos
  public getArea(): number {
    return Math.pow(this._lado, 2); // this._lado * this._lado;
  }

  public getPerimetro(): number {
    return this._lado * 4;
  }
}
