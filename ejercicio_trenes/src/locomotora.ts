export default class Locomotora {
  private peso: number;
  private pesoMaximo: number;
  private velocidadMaxima: number;

  constructor(peso: number, pesoMaximo: number, velocidadMaxima: number) {
    this.peso = peso;
    this.pesoMaximo = pesoMaximo;
    this.velocidadMaxima = velocidadMaxima;
  }

  public obtenerPeso(): number {
    return this.peso;
  }

  public obtenerPesoMaximo(): number {
    return this.pesoMaximo;
  }

  public obtenerVelocidadMaxima(): number {
    return this.velocidadMaxima;
  }

  public calcularArrastreUtil(): number {
    return this.pesoMaximo - this.peso;
  }
}
