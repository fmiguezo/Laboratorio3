import Empleado from "./empleado";

export default class Gerente extends Empleado {
  constructor() {
    super();
    this.sueldoNeto = 100000;
  }
}
