import { Estudiante } from "./classEstudiante.js";

let estudiante1 = new Estudiante('Elio', 'Lazarte', 52550, 4);
let estudiante2 = new Estudiante('Lautaro', 'Rodriguez', 53555, 8);
let estudiante3 = new Estudiante('Agucho', 'Mortadelli', 52147, 1);

let listaEstudiante = [estudiante1, estudiante2, estudiante3];
let tablaEstudiante = document.querySelector("#tablaEstudiante");

cargaTabla();

let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let legajo = document.querySelector("#legajo");
let nota = document.querySelector("#nota");
let formEstudiante = document.querySelector("#formEstudiante");

formEstudiante.addEventListener("submit", agregarEstudiante);

function cargaTabla() {
tablaEstudiante.innerHTML ='';
  listaEstudiante.map((estudiante) => {
    tablaEstudiante.innerHTML += ` <tr>
    <th scope="row">${estudiante.legajo}</th>
    <td>${estudiante.apellido}</td>
    <td>${estudiante.nombre}</td>
    <td>${estudiante.nota}</td>
    <td><button class="btn btn-danger"><i class="bi bi-trash"></i></button></td>
  </tr>`;
  });
}

console.log(tablaEstudiante);
function agregarEstudiante(e) {
  e.preventDefault();
  let nuevoEst = new Estudiante(nombre.value, apellido.value, legajo.value, nota.value);
  listaEstudiante.push(nuevoEst);
  cargaTabla();
  formEstudiante.reset();
}
