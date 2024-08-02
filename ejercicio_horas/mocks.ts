import Aeropuerto from "./src/aeropuerto";

export const aeropuerto: Aeropuerto = {
  nombre: "Aeropuerto",
  horaLocal: new Date(),
  zonaHoraria: 0,
  destinos: [],

  notificarDestinos: jest.fn(),
};
