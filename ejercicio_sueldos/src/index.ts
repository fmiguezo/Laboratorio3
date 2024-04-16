import Administrativo from "./administrativo";
import Gerente from "./gerente";
import Cadete from "./cadete";
import Operador from "./operador";

const gerente: Gerente = new Gerente();
const administrativo: Administrativo = new Administrativo();
const cadete: Cadete = new Cadete();
const operador: Operador = new Operador();

const sueldoGerente: number = gerente.calcularSueldo(0, 1.0);
const sueldoAdministrativo: number = administrativo.calcularSueldo(1, 0.8);
const sueldoCadete: number = cadete.calcularSueldo(3, 0.7);
const sueldoOperador: number = operador.calcularSueldo(0, 0.8);

console.log(`Sueldo Gerente: ${sueldoGerente}`);
console.log(`Sueldo Administrativo: ${sueldoAdministrativo}`);
console.log(`Sueldo Cadete: ${sueldoCadete}`);
console.log(`Sueldo Operador: ${sueldoOperador}`);
