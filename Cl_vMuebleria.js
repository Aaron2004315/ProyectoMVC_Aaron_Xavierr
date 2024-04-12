

/*
export default class Cl_vMuebleria {
constructor(app){
    this.app = app
    this.salida = document.getElementById("salida")
this.PorcComedores=document.getElementById("PorcentajeComedores")
this.MontoTotalVendido=document.getElementById("MontoTotalVendido")
}
reportarMobiliario (Mobiliario1) {
 
this.salida.innerHTML += "Mobiliario : " + Mobiliario1.PrecioComedor() + "<br>";
this.PorcComedores.innerHTML = this.app.mMuebleria.PorcComedores();
this.MontoTotalVendido.innerHTML = this.app.mMuebleria.MontoTotal();
}
}
/*
*/
export default class Cl_vMuebleria {
  constructor(app) {
    this.app = app;
    this.vista = document.getElementById("formMuebleria");
    this.tabla = document.getElementById("formMuebleriaTabla");
    this.btAgregar = document.getElementById("formMuebleriaBtAgregar");
    this.btAgregarComedor = document.getElementById("BtAgregarComedor");
    this.btAgregarMueble = document.getElementById("btAgregarMueble");
    /** declarar etiquetas de salidas clase Muebleria */
    this.lblPorcComedores = document.getElementById(
      "formMuebleriaLblPorcComedor"
    );
    this.lblMontoTotalVendido = document.getElementById(
      "formMuebleriaLblMontoTotalVendido"
    );
    this.lblProductoMasVendido = document.getElementById(
      "formLblProductoMasVendido"
    );

    this.btAgregarMueble.onclick = () => {
      this.ocultar();
      this.app.vMueble.mostrar();
      this.app.vComedor.ocultar();
    };

    this.btAgregarComedor.onclick = () => {
      this.ocultar();
      this.app.vComedor.mostrar();
      this.app.vMueble.ocultar();
    };
  }

  mostrar() {
    this.vista.hidden = false;
  }

  ocultar() {
    this.vista.hidden = true;
  }

  /** Cambiar nombre de "menor" por el nombre correcto */
  reportarMobiliario(Mobiliario) {
    /**
     * Renombrar parámetro "menor"
     * Indicar campos de la tabla
     * */
    this.tabla.innerHTML += `
      <tr>
      <td>${Mobiliario.Factura}</td>
      <td>${Mobiliario.TipoMadera}</td>
      <td>${Mobiliario.Sillas ?? "NA"}</td>
      <td>${Mobiliario.Tela ?? "NA"}</td>
      </tr>`;

    /** Asignar valores a etiquetas de salida */
    this.lblPorcComedores.innerHTML = this.app.mMuebleria.PorcComedores();
    this.lblMontoTotalVendido.innerHTML = this.app.mMuebleria.MontoTotal();
    this.lblProductoMasVendido.innerHTML =
      this.app.mMuebleria.ProductoMasVendido();
  }
}
