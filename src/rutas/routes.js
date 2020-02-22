import Inicio from "../vistas/inicio";
import Formulario from "../vistas/formulario/form.js";

const Rutas = [
  //0
  {
    base_url: "",
    url: "/",
    vistaNombre: "Inicio",
    icon: '',
    component: Inicio,
    layout: "template1"
  },
  //0
  {
    base_url: "",
    url: "/form",
    vistaNombre: "Formulario",
    icon: '',
    component: Formulario,
    layout: "template1"
  }
];

export default Rutas;