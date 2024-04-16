import Empleado from "./empleado";

export default class Administrativo extends Empleado {
  constructor() {
    super();
    this.sueldoNeto = 10500;
  }
}
