export default class Figura {
  // Atributos
  protected _nombre: string; // protected: para que acceder las clases hijas
  protected _color: string;
  protected _lado: number;

  // Constructor
  constructor() {
    this._nombre = "";
    this._color = "";
    this._lado = 0;
  }

  // Setters
  /*
  public setNombre(v: string): void {
    this._nombre = v;
  }
  */

  public set nombre(nombre: string) {
    this._nombre = nombre;
  }

  public set color(color: string) {
    this._color = color;
  }

  public set lado(lado: number) {
    if (lado < 0) {
      console.error("Lado no puede ser menor a 0");
      lado = 0;
    }
    this._lado = lado;
  }

  // Getters
  public get nombre(): string {
    return this._nombre;
  }

  public get color(): string {
    return this._color;
  }

  public get lado(): number {
    return this._lado;
  }

  // Métodos
  public getArea(): number {
    return 0;
  }

  public getPerimetro(): number {
    return 0;
  }
}
