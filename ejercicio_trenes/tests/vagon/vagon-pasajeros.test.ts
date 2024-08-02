import VagonDePasajeros from "../../src/vagon/vagon-pasajeros";

describe("Test de vagon de pasajeros", () => {
  let instance: VagonDePasajeros;

  describe("Test de vagon de pasajeros angosto", () => {
    beforeEach(() => {
      instance = new VagonDePasajeros(1, 1);
    });

    it("Verifica que la instancia sea del tipo Vagon de Pasajeros", () => {
      expect(instance).toBeInstanceOf(VagonDePasajeros);
    });

    it("Verifica que la cantidad de pasajeros sea distinto de 0 (cero)", () => {
      expect(instance.calcularMaximoPasajeros()).not.toBe(0);
    });

    it("Verifica que la cantidad de pasajeros sea 8", () => {
      expect(instance.calcularMaximoPasajeros()).toBe(8);
    });

    it("Verifica que el peso máximo de un vagon sea la cantidad máxima de pasajeros por el peso por persona", () => {
      expect(instance.calcularPesoMaximo()).toBe(8 * 80);
    });
  });

  describe("Test de vagon de pasajeros ancho", () => {
    beforeEach(() => {
      instance = new VagonDePasajeros(1, 3);
    });

    it("Verifica que la instancia sea del tipo Vagon de Pasajeros", () => {
      expect(instance).toBeInstanceOf(VagonDePasajeros);
    });

    it("Verifica que la cantidad de pasajeros sea distinto de 0 (cero)", () => {
      expect(instance.calcularMaximoPasajeros()).not.toBe(0);
    });

    it("Verifica que la cantidad de pasajeros sea 10", () => {
      expect(instance.calcularMaximoPasajeros()).toBe(10);
    });

    it("Verifica que el peso máximo de un vagon sea la cantidad máxima de pasajeros por el peso por persona", () => {
      expect(instance.calcularPesoMaximo()).toBe(10 * 80);
    });
  });
});
