import Cuadrado from "../../src/figuras/cuadrado";

describe("Test clase Cuadrado", () => {
  let instance: Cuadrado;

  beforeEach(() => {
    instance = new Cuadrado();
  });

  afterEach(() => {});

  describe("Test de getters y setters", () => {
    it("Debe verificar el constructor default", () => {
      expect(instance).toBeInstanceOf(Cuadrado);
    });
  });

  describe("Test de perimetro", () => {
    it("Verifica que el perimetro sea 0 (cero) si el lado es 0 (cero)", () => {
      instance.lado = 0;
      const resultado = instance.getPerimetro();
      expect(resultado).toBe(0);
    });
  });

  describe("Test de perimetro", () => {
    it("Verifica que el perimetro sea 16 si el lado es 4", () => {
      instance.lado = 4;
      const resultado = instance.getPerimetro();
      expect(resultado).toBe(16);
    });
  });

  describe("Test de perimetro", () => {
    it("Debe settear un 0 si el lado es menor a 0", () => {
      instance["lado"] = -4;
      expect(instance.lado).toBe(0);
    });
  });

  describe("Test de area", () => {});
});
