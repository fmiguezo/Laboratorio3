export class MetodoSinImplementarException extends Error {
  constructor(metodo: string) {
    super(metodo);
  }

  public getMessage(): string {
    return `El método ${this.message} no fue implementado`;
  }
}
