import Celular from "./celular";

export default class MotorolaG5 extends Celular {
  // Constructor
  constructor() {
    super("Motorola G5");
  }

  // Métodos
  public realizarLlamado(): void {
    if (this.encendido && this.bateria > 0) {
      this.bateria -= 0.25;
    } else if (this.isEncendido() && this.getBateria() <= 0) {
      this.apagar();
    }
  }
}
