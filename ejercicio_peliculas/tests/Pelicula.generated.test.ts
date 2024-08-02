import { MetodoSinImplementarException } from "../src/exceptions/MetodoSinImplementarException";
import Pelicula from "../src/Pelicula";

describe("Pelicula", () => {
  let instance: Pelicula;

  beforeEach(() => {
    instance = new Pelicula();
  });

  it("instance should be an instanceof Pelicula", () => {
    expect(instance instanceof Pelicula).toBeTruthy();
  });

  describe("Test de metodo visualizar", () => {
    it("Deberia verificar que la cantidad de visualizaciones se incremente en 1", () => {
      instance.visualizar();
      const valorEsperado = 1;
      expect(instance.visualizaciones).toBe(valorEsperado);
    });
  });

  it("should have a method getPuntaje()", () => {
    try {
      instance.getPuntaje();
    } catch (error) {
      expect(error).toBeInstanceOf(MetodoSinImplementarException);
      const err = error as MetodoSinImplementarException;
      //expect(error.message).toBeInstanceOf("MetodoSinImplementarException");
      expect(err.getMessage()).toBe("El método getPuntaje no fue implementado");
    }
  });
});
