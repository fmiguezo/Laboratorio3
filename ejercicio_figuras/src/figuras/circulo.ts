import Figura from "./figura";

export default class Circulo extends Figura {
  public set radio(radio: number) {
    super.lado = radio;
  }

  public get radio(): number {
    return this._lado;
  }

  // Métodos
  public getArea(): number {
    return Math.PI * Math.pow(this._lado, 2);
  }

  public getPerimetro(): number {
    return Math.PI * this._lado * 2;
  }
}
