import Celular from "./celular";
export default class Persona {
  // Atributos
  private nombre: string;
  private celular: Celular;

  // Constructor
  constructor(nombre: string);
  constructor(nombre: string, celular?: Celular) {
    this.nombre = nombre;
    if (celular === undefined) {
      this.celular = new Celular();
    } else {
      this.celular = celular;
    }
  }

  // Métodos
  public getNombre(): string {
    return this.nombre;
  }

  public getCelular(): Celular {
    return this.celular;
  }

  public setCelular(celular: Celular): void {
    this.celular = celular;
  }

  public llamar(receptor: Persona): void {
    if (this.celular.isEncendido()) {
      this.celular.realizarLlamado();
      console.log(`Estableciendo llamada con ${receptor.getNombre()}.`);
      receptor.getCelular().recibirLlamado();
    } else {
      console.log("No se puede realizar la llamada.");
    }
  }

  public finalizarLlamada(receptor: Persona): void {
    console.log(`Finalizando llamada con ${receptor.getNombre()}.`);
    console.log(`Nivel de batería actual es de ${this.celular.getBateria()} puntos.`);
    if (receptor.getCelular().isEncendido()) {
      console.log(`El celular de ${receptor.getNombre()} sigue encendido.`);
    } else {
      console.log(`El celular de ${receptor.getNombre()} está apagado.`);
    }
    this.celular.cargarBateria();
  }

  public toString(): string {
    return `Nombre: ${this.nombre} \nCelular: ${this.celular.getModelo()}`;
  }
}
