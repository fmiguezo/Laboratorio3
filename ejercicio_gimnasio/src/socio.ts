import Actividad from "./actividad";
import TipoCuota from "./tipocuota";

export default class Socio {
  private nombre: string;
  private apellido: string;
  private dni: string;
  private direccion: string;
  private telefono: string;
  private email: string;
  private tipoCuota: TipoCuota;
  private actividades: Actividad[] = new Array<Actividad>();

  constructor(
    nombre: string,
    apellido: string,
    dni: string,
    direccion: string,
    telefono: string,
    email: string,
    tipoCuota: TipoCuota
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.direccion = direccion;
    this.telefono = telefono;
    this.email = email;
    this.tipoCuota = tipoCuota;
  }

  public agregarActividad(actividad: Actividad): void {
    this.actividades.push(actividad);
  }

  public eliminarActividad(actividad: Actividad): void {
    this.actividades = this.actividades.filter((act) => act !== actividad);
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getApellido(): string {
    return this.apellido;
  }

  public getDni(): string {
    return this.dni;
  }

  public getDireccion(): string {
    return this.direccion;
  }

  public getTelefono(): string {
    return this.telefono;
  }

  public getEmail(): string {
    return this.email;
  }

  public getTipoCuota(): TipoCuota {
    return this.tipoCuota;
  }

  public getActividades(): Actividad[] {
    return this.actividades;
  }

  public setTipoCuota(tipoCuota: TipoCuota): void {
    this.tipoCuota = tipoCuota;
  }
}
