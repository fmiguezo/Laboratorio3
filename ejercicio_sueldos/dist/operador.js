"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empleado_1 = __importDefault(require("./empleado"));
class Administrativo extends empleado_1.default {
    constructor() {
        super();
        this.sueldoNeto = 10500;
    }
}
exports.default = Administrativo;
//# sourceMappingURL=operador.js.map