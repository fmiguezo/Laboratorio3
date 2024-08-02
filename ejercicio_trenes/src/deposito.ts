import Formacion from "./formacion";
import Locomotora from "./locomotora";
import Vagon from "./vagon/vagon";

export default class Deposito {
  private formaciones: Formacion[];
  private locomotoras: Locomotora[];

  constructor() {
    this.formaciones = new Array<Formacion>();
    this.locomotoras = new Array<Locomotora>();
  }

  public agregarFormacion(formacion: Formacion): void {
    this.formaciones.push(formacion);
  }

  public obtenerConjuntoMasPesado(): Vagon[] {
    let conjuntoMasPesado = new Array<Vagon>();
    let pesoMasPesado = 0;
    for (let formacion of this.formaciones) {
      let pesoFormacion = 0;
      for (let vagon of formacion.getVagones()) {
        pesoFormacion += vagon.calcularPesoMaximo();
      }
      if (pesoFormacion > pesoMasPesado) {
        pesoMasPesado = pesoFormacion;
        conjuntoMasPesado = formacion.getVagones();
      }
    }
    return conjuntoMasPesado;
  }

  public agregarLocomotora(formacion: Formacion, locomotora: Locomotora): void {
    if (formacion.estaEnMarcha()) {
      throw new Error("No se pueden agregar locomotoras a formaciones en marcha");
    }
    if (locomotora.calcularArrastreUtil() >= formacion.obtenerKilosDeEmpuje()) {
      formacion.getLocomotoras().push(locomotora);
    } else {
      throw new Error("La locomotora no puede arrastrar la formación");
    }
  }

  public necesitaConductorExperimentado(): boolean {
    let totalFormacionesComplejas = this.formaciones.filter((formacion) => formacion.esCompleja()).length;
    return totalFormacionesComplejas > 0;
  }
}
