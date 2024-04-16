"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const iphone_1 = __importDefault(require("./iphone"));
const motorolaG5_1 = __importDefault(require("./motorolaG5"));
const persona_1 = __importDefault(require("./persona"));
const juliana = new persona_1.default("Juliana");
const catalina = new persona_1.default("Catalina");
const motorolaG5 = new motorolaG5_1.default();
const iphone = new iphone_1.default();
juliana.setCelular(motorolaG5);
catalina.setCelular(iphone);
juliana.getCelular().encender();
catalina.getCelular().encender();
juliana.llamar(catalina);
juliana.finalizarLlamada(catalina);
//# sourceMappingURL=index.js.map