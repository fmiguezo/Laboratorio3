import Figura from "./figura";

export default class Triangulo extends Figura {
  // Atributos
  private _altura: number;

  // Constructor
  constructor() {
    super();
    this._altura = 0;
  }

  // Setters
  public set base(base: number) {
    super.lado = base;
  }

  public set altura(altura: number) {
    if (altura < 0) {
      console.error("base no puede ser menor a 0");
      altura = 0;
    }
    this._altura = altura;
  }

  // Getters
  public get base(): number {
    return this._lado;
  }

  public get altura(): number {
    return this._altura;
  }

  // Métodos
  public getArea(): number {
    return (this._lado * this._altura) / 2;
  }

  public getPerimetro(): number {
    return this._lado * 3;
  }
}
