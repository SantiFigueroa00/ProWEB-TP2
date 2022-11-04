let formUser = document.getElementById('form-user');
let nomShow = document.getElementById('search-input');
let sectionCards = document.getElementById('section-cards');

const consultaAPI = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${nomShow.value}`);
        const jsonData = await response.json();
        let lista = jsonData.results;
        dibujarCards(jsonData);
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Siempre se ejecuta al final')
    }
}

const dibujarCards = (progs) => {
    console.log(progs)
    sectionCards.innerHTML = ''
    progs.map(prog => {
        let rating;
        let estrella = '<i class="bi bi-star-fill ml-2"></i>';
        if (prog.show.rating.average != null) {
            rating = prog.show.rating.average;
        } else {
            estrella = "";
            rating = "Sin calificar";
        }

        sectionCards.innerHTML += `<div class="col">
        <div class="shows card text-bg-dark">
          <img id="img-show" class="card-img-top" src="${prog.show.image.medium}" alt="Poster Show" />
          <div class="card-body">
            <h4 class="titulo card-title">${prog.show.name}</h4>
            <h5 class="card-subtitle mb-2 mt-2">Calificación</h5>
            <p>${rating} ${estrella}</p>
            <h5 class="card-subtitle mb-2 mt-2">Resumen</h5>
            <p>${prog.show.summary}</p>
            <h5 class="card-subtitle mb-2">Tipo</h5>
            <p>${prog.show.type}</p>
            <h5 class="card-subtitle mb-2">Idioma</h5>
            <p>${prog.show.language}</p>
            <h5 class="card-subtitle mb-2">Generos</h5>
            <p>${prog.show.genres}</p>
            <h5 class="card-subtitle mb-2">Estado</h5>
            <p>${prog.show.status}</p>
          </div>
        </div>
      </div>`
    })
}

formUser.addEventListener("submit", consultaAPI);