export default class Celular {
  // Atributos
  protected modelo: string;
  protected encendido: boolean;
  protected bateria: number;

  // Constructor
  constructor(modelo?: string) {
    if (modelo === undefined) {
      this.modelo = "";
    } else {
      this.modelo = modelo;
    }
    this.encendido = false;
    this.bateria = 5.0;
  }

  // Métodos
  public encender(): void {
    this.encendido = true;
  }

  public apagar(): void {
    this.encendido = false;
  }

  public cargarBateria(): void {
    this.bateria = 5;
  }

  public realizarLlamado(): void {
    if (this.encendido && this.bateria > 0) {
      this.bateria -= 0;
    } else if (this.encendido && this.bateria <= 0) {
      this.apagar();
    }
  }

  public recibirLlamado(): void {
    if (this.encendido && this.bateria > 0) {
      this.bateria -= 0;
      console.log("Llamada establecida.");
    } else if (!this.encendido || this.bateria <= 0) {
      this.apagar();
      console.log("El abonado no se encuentra disponible.");
    }
  }

  public getModelo(): string {
    return this.modelo;
  }

  public isEncendido(): boolean {
    return this.encendido;
  }

  public getBateria(): number {
    return this.bateria;
  }

  public toString(): string {
    return `${this.modelo}: Bateria: ${this.bateria}`;
  }
}
