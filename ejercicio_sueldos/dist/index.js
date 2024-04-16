"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const administrativo_1 = __importDefault(require("./administrativo"));
const gerente_1 = __importDefault(require("./gerente"));
const cadete_1 = __importDefault(require("./cadete"));
const operador_1 = __importDefault(require("./operador"));
const gerente = new gerente_1.default();
const administrativo = new administrativo_1.default();
const cadete = new cadete_1.default();
const operador = new operador_1.default();
const sueldoGerente = gerente.calcularSueldo(0, 1.0);
const sueldoAdministrativo = administrativo.calcularSueldo(1, 0.8);
const sueldoCadete = cadete.calcularSueldo(3, 0.7);
const sueldoOperador = operador.calcularSueldo(0, 0.8);
console.log(`Sueldo Gerente: ${sueldoGerente}`);
console.log(`Sueldo Administrativo: ${sueldoAdministrativo}`);
console.log(`Sueldo Cadete: ${sueldoCadete}`);
console.log(`Sueldo Operador: ${sueldoOperador}`);
//# sourceMappingURL=index.js.map