import Celular from "./celular";

export default class iPhone extends Celular {
  // Constructor
  constructor() {
    super("iPhone");
  }

  // Métodos
  public realizarLlamado(): void {
    if (this.encendido && this.bateria > 0) {
      this.bateria -= this.bateria * 0.01;
    } else if (this.encendido && this.bateria <= 0) {
      this.apagar();
    }
  }
}
