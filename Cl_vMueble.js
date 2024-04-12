
import Cl_mMueble from "./Cl_mMueble.js";

export default class Cl_vMueble {
  constructor(app) {
    this.app = app;
    this.vista = document.getElementById("FormMueble");
    this.vista.hidden = true;
    /** Indicar entradas clase menor */
    this.inFactura = document.getElementById("FormMuebleinFactura");
    this.inMadera = document.getElementById("FormMuebleinMadera");
    this.inTela = document.getElementById("FormMuebleinTela");
    this.btAceptar = document.getElementById("btAceptarMueble");
    this.btAceptar.onclick = () => this.agregarMueble();
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  agregarMueble() {
    let Mueble = new Cl_mMueble(
      this.inFactura.value,
      this.inMadera.value,
      this.inTela.value
    );

    this.app.mMuebleria.procesar(Mueble);
    this.app.vMuebleria.reportarMobiliario(Mueble);
    this.ocultar();
    this.app.vMuebleria.mostrar();
  }
}

/*this.vista = document.getElementById("salida");
    this.vista = document.getElementById("FormMueble");
    this.vista.hidden = true;
    this.inFactura = document.getElementById("FormMueble.inFactura");
    this.inMadera = document.getElementById("FormMueble.inMadera");
    this.inTela = document.getElementById("FormMueble.inTela");

    this.inbtAceptar = document.getElementById("FormMueble.inbtAceptar");
    this.inbtAceptar.onclick = () => this.AgregarMueble();
  }
  mostrar() {
    this.vista.hidden = false;
  }

  ocultar() {
    this.vista.hidden = true;
  }
  AgregarMueble() {
    let Mueble = new Cl_mMueble({
      Factura: this.inFactura.value,
      TipoMadera: this.inMadera.value,
      Sillas: this.inSillas.value,
    });
    this.app.mMobiliario.procesar(Mueble);
    this.app.vMobiliario.reportarMobiliario(Mueble);
    this.ocultar();
    this.app.vMueble.mostrar();
  }
}
*/
