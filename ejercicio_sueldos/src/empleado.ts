export default class Empleado {
  // Atributos
  protected sueldoNeto: number;
  protected bonoPresentismo: number;
  protected bonoResultado: number;
  protected ausencias: number;

  // Constructor
  constructor() {
    this.sueldoNeto = 0;
    this.bonoPresentismo = 0;
    this.bonoResultado = 0;
    this.ausencias = 0;
  }

  // Getters
  public getSueldoNeto(): number {
    return this.sueldoNeto;
  }

  public getBonoPresentismo(): number {
    return this.bonoPresentismo;
  }

  public getBonoResultado(): number {
    return this.bonoResultado;
  }

  public getAusencias(): number {
    return this.ausencias;
  }

  // Setters
  public setSueldoNeto(sueldoNeto: number): void {
    this.sueldoNeto = sueldoNeto;
  }

  public setBonoPresentismo(): void {
    switch (this.ausencias) {
      case 0:
        this.bonoPresentismo = 1000;
        break;
      case 1:
        this.bonoPresentismo = 450;
        break;
      default:
        this.bonoPresentismo = 0;
    }
  }

  public setBonoResultado(pctObjetivo: number): void {
    if (pctObjetivo === 1.0) {
      this.bonoResultado = this.sueldoNeto * 0.1;
    } else if (pctObjetivo >= 0.8 && pctObjetivo < 1.0) {
      this.bonoResultado = 800;
    } else {
      this.bonoResultado = 0;
    }
  }

  public setAusencias(ausencias: number): void {
    this.ausencias = ausencias;
  }

  // Métodos
  public calcularSueldo(): number;
  public calcularSueldo(pctObjetivo: number): number;
  public calcularSueldo(ausencias: number, pctObjetivo: number): number;
  public calcularSueldo(ausencias?: number, pctObjetivo?: number): number {
    if (pctObjetivo === undefined) {
      pctObjetivo = 0;
    }
    if (ausencias !== undefined) {
      this.setAusencias(ausencias);
    }
    this.setBonoPresentismo();
    this.setBonoResultado(pctObjetivo);
    return this.sueldoNeto + this.bonoPresentismo + this.bonoResultado;
  }

  public toString(): string {
    return `Sueldo: $${this.sueldoNeto} \nAusencias: ${this.ausencias} \nBono por presentismo: $${this.bonoPresentismo} \nBono por resultado: $${this.bonoResultado}`;
  }
}
