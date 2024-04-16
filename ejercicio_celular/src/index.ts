import iPhone from "./iphone";
import MotorolaG5 from "./motorolaG5";
import Persona from "./persona";

const juliana: Persona = new Persona("Juliana");
const catalina: Persona = new Persona("Catalina");
const motorolaG5: MotorolaG5 = new MotorolaG5();
const iphone: iPhone = new iPhone();

juliana.setCelular(motorolaG5);
catalina.setCelular(iphone);

juliana.getCelular().encender();
catalina.getCelular().encender();
//System.out.println(catalina.getCelular().isEncendido());
//System.out.println(juliana.getCelular().getBateria());

//System.out.println(motorolaG5.getBateria());

juliana.llamar(catalina);
juliana.finalizarLlamada(catalina);

//catalina.llamar(juliana);
//catalina.finalizarLlamada(juliana);
