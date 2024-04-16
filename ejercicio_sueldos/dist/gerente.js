"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empleado_1 = __importDefault(require("./empleado"));
class Gerente extends empleado_1.default {
    constructor() {
        super();
        this.sueldoNeto = 100000;
    }
}
exports.default = Gerente;
//# sourceMappingURL=gerente.js.map