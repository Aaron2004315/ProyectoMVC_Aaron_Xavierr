import Cl_mComedor from "./Cl_mComedor.js";
export default class Cl_vComedor {
  constructor(app) {
    this.app = app;

    this.vista = document.getElementById("FormComedor");
    this.vista.hidden = true;
    this.inFactura = document.getElementById("FormComedorinFactura");
    this.inMadera = document.getElementById("FormComedorinMadera");
    this.inSillas = document.getElementById("FormComedorinSillas");
    this.inbtAceptar = document.getElementById("btAceptarComedor");
    this.inbtAceptar.onclick = () => this.AgregarComedor();
  }

  mostrar() {
    this.vista.hidden = false;
  }

  ocultar() {
    this.vista.hidden = true;
  }
  AgregarComedor() {
    let Comedor = new Cl_mComedor(
      this.inFactura.value,
      this.inMadera.value,
      this.inSillas.value
    );
    this.app.mMuebleria.procesar(Comedor);
    this.app.vMuebleria.reportarMobiliario(Comedor);
    this.ocultar();
    this.app.vMuebleria.mostrar();
  }
}
/*this.vista = document.getElementById("salida");
    this.vista = document.getElementById("FormComedor");
    this.vista.hidden = true;
    this.inFactura = document.getElementById("FormComedor.inFactura");
    this.inMadera = document.getElementById("FormComedor.inMadera");
    this.inSillas = document.getElementById("FormComedor.inSillas");

    this.inbtAceptar = document.getElementById("FormComedor.inbtAceptar");
    this.inbtAceptar.onclick = () => this.AgregarComedor();
  }
  mostrar() {
    this.vista.hidden = false;
  }

  ocultar() {
    this.vista.hidden = true;
  }
  AgregarComedor() {
    let Comedor = new Cl_mComedor({
      Factura: this.inFactura.value,
      TipoMadera: this.inMadera.value,
      Sillas: this.inSillas.value,
    });
    this.app.mMobiliario.procesar(Comedor);
    this.app.vMobiliario.reportarMobiliario(Comedor);
    this.ocultar();
    this.app.vComedor.mostrar();
  }
}
*/
