let pokemonRepository = ( function(){
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  function add(pokemon){
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon 
    ) {
    pokemonList.push(pokemon);
    } else {
      console.log('pokemon is not correct');
    }
  }

  function getAll(){
    return pokemonList;
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    pokemonList.appendChild(listItem);
    listItem.appendChild(button);
    button.innerText = pokemon.name;
    button.classList.add("button");
    button.addEventListener('click', function(){
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon); 
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showModal(title, text, img){
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.innerHTML = '';
    modalContainer.classList.add('is-visible')
    let modal = document.createElement('div');
    modal.classList.add('modal')
    let closeListButton = document.createElement('button');

    closeListButton.classList.add('modal-close');
    closeListButton.innerText = 'Close';
    closeListButton.addEventListener('click', hideModal);

    let pokemonName = document.createElement('h1');
    pokemonName.innerText = title;
    let pokemonHeight = document.createElement('p');
    pokemonHeight.innerText = text;
    let pokemonImage = document.createElement('img');
    pokemonImage.classList.add('pokemon-image');
    pokemonImage.src = img;

    modal.appendChild(closeListButton);
    modal.appendChild(pokemonName);
    modal.appendChild(pokemonHeight);
    modal.appendChild(pokemonImage);
    modalContainer.appendChild(modal);

    modalContainer.addEventListener('click', (e) =>{
      let target = e.target;
      if (target === modalContainer){
        hideModal();
      }
    }); 
  }

  function hideModal(){
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }
  
  function showDetails(pokemon){
    loadDetails(pokemon).then(function(){
      showModal(pokemon.name, `Height: ${pokemon.height}`, pokemon.imageUrl)
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  }
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});