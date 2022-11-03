let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let legajo = document.querySelector("#legajo");
let nota = document.querySelector("#nota");
let tablaEstudiante = document.querySelector("#tablaEstudiante");
let formEstudiante = document.querySelector("#formEstudiante");

formEstudiante.addEventListener("submit", dibujarTabla);

console.log(tablaEstudiante)
function dibujarTabla (e) {
  e.preventDefault();
  tablaEstudiante.innerHTML = "";
  tablaEstudiante.innerHTML += ` <tr>
    <th scope="row">${legajo.value}</th>
    <td>${apellido.value}</td>
    <td>${nombre.value}</td>
    <td>${nota.value}</td>
    <td><button class="btn btn-danger"><i class="bi bi-trash"></i></button></td>
  </tr>`;
};
