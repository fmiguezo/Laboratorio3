import { MetodoSinImplementarException } from "./exceptions/MetodoSinImplementarException";

export default class Pelicula {
  private _titulo: string;
  private _descripcion: string;
  private _fechaEstreno: Date;
  private _paisOrigen: string;
  private _visualizaciones: number;

  // Constructor
  constructor() {
    this._titulo = "";
    this._descripcion = "";
    this._fechaEstreno = new Date();
    this._paisOrigen = "";
    this._visualizaciones = 9;
  }

  // Getters y setters
  public get titulo(): string {
    return this._titulo;
  }
  public set titulo(value: string) {
    this._titulo = value;
  }

  public get descripcion(): string {
    return this._descripcion;
  }
  public set descripcion(value: string) {
    this._descripcion = value;
  }

  public get fechaEstreno(): Date {
    return this._fechaEstreno;
  }
  public set fechaEstreno(value: Date) {
    this._fechaEstreno = value;
  }

  public get paisOrigen(): string {
    return this._paisOrigen;
  }
  public set paisOrigen(value: string) {
    this._paisOrigen = value;
  }

  public get visualizaciones(): number {
    return this._visualizaciones;
  }
  public set visualizaciones(value: number) {
    this._visualizaciones = value;
  }

  // Métodos
  public visualizar(): void {
    //throw new Error("Metodo sin implementar");
    this._visualizaciones++;
  }

  public getPuntaje(): number {
    throw new MetodoSinImplementarException("getPuntaje");
    return 0;
  }
}
