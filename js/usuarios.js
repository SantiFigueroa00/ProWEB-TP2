let formUser = document.getElementById('form-user');
let numUser = document.getElementById('search-input');
let sectionCards = document.getElementById('section-cards');

const consultaAPI = async (e) =>{
    e.preventDefault();
    try {
        const response = await fetch(`https://randomuser.me/api/?results=${numUser.value}`);
        const jsonData = await response.json();
        let lista = jsonData.results;
        dibujarCards(lista);
    }catch(error) {
        console.log(error)
    }finally{
        console.log('Siempre se ejecuta al final' )
    }
}

const dibujarCards = (usuarios) =>{
    console.log(usuarios)
    sectionCards.innerHTML=''
    usuarios.map(usuario =>{
        sectionCards.innerHTML+=`<div class="col">
        <div class="nosotros card text-bg-dark">
          <img id="img-usuario" class="card-img-top" src="${usuario.picture.large}" alt="Imagen de usuario random" />
          <div class="card-body">
            <h5 class="card-title">${usuario.name.first} ${usuario.name.last}</h5>
            <h6 class="card-subtitle mb-2">email: ${usuario.email}</h6>
            <h6 class="card-subtitle mb-2">telefono: ${usuario.phone}</h6>
          </div>
        </div>
      </div>`
    })
}

formUser.addEventListener("submit",consultaAPI);

