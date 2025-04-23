// pokemonRepository that stores the pokemonList array, the getAll and add functions.
let pokemonRepository = ( function(){
  let repository = [
    {
      name: 'Charmander', 
      height: 2, 
      type: ['Fire']
    },
    {
      name: 'Bulbasaur', 
      height: 2.1, 
      type: ['Grass', 'Poison']
    },
    {
      name: 'Squirtle', 
      height: 1.1, 
      type: ['Water']
    }
  ];
  
  // function that logs the pokemon object to console
  function showDetails(pokemon){
    console.log(pokemon);
  };

  // function that creates a list element and button for each pokemon
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    pokemonList.appendChild(listItem);
    listItem.appendChild(button);
    button.innerText = pokemon.name;
    button.classList.add("button");

    // button that on click will invoke a function that invokes the showDetails function
    button.addEventListener('click', function (){
      showDetails(pokemon);});
  };

  // This just returns the repository
  function getAll(){
    return repository;
  }

  // This is a function that adds pokemon to the repository and checks that the parameter is an object and contain both 'name' & 'height' keys.
  function add(pokemon){if (typeof pokemon === 'object' && 'name' in pokemon && 'height' in pokemon){
    pokemonList.push(pokemon);
  }}

  // This Allows the getAll and add function to be accessable globally.
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
  }
})();

// function that invokes the addListItem function with the repository as its parameter
pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});