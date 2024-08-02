import Locomotora from "../../src/locomotora";

describe("Test de locomotora", () => {
  let instance: Locomotora;

  describe("Test de vagon de pasajeros angosto", () => {
    beforeEach(() => {
      instance = new Locomotora(1000, 2000, 100);
    });

    it("Verifica que la instancia sea del tipo Locomotora", () => {
      expect(instance).toBeInstanceOf(Locomotora);
    });

    it("Verifica que el peso de la locomotora sea 1000", () => {
      expect(instance.obtenerPeso()).toBe(1000);
    });

    it("Verifica que el peso maximo de la locomotora sea 2000", () => {
      expect(instance.obtenerPesoMaximo()).toBe(2000);
    });

    it("Verifica que la velocidad maxima de la locomotora sea 100", () => {
      expect(instance.obtenerVelocidadMaxima()).toBe(100);
    });

    it("Verifica que el arrastre util de la locomotora sea el peso máximo de arrastre menos el peso (1000)", () => {
      expect(instance.calcularArrastreUtil()).toBe(1000);
    });
  });
});
