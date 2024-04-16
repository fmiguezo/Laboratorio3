export default class Persona {
  //private _nombre: string | null = null;
  private _nombre: string;
  private _edad: number;

  constructor();
  constructor(n: string);
  constructor(e: number);
  constructor(n: string, e: number);
  constructor(n?: string | number, e?: number) {
    this._nombre = "";
    if (n !== undefined) {
      if (typeof n === "string") {
        this._nombre = n;
      }
      if (typeof n === "number") {
        this._edad = n;
      }
    }

    this._edad = -1;
    if (e !== undefined) {
      this._edad = e;
    }
  }

  /*
   constructor(nombre: string, edad: number) {
    this._nombre = nombre;
    this._edad = edad;
  }
  */

  public set nombre(v: string) {
    this._nombre = v;
  }

  public get nombre(): string {
    return this._nombre;
  }

  public set edad(v: number) {
    this._edad = v;
  }

  public get edad(): number {
    return this._edad;
  }
}
