// pokemonRepository that stores the pokemonList array, the getAll and add functions.
let pokemonRepository = ( function(){
  let pokemonList = [
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
  
  function getAll(){
    return pokemonList;
  }

  // This is a function that adds pokemon to pokemonList and checks that the parameter is an object and contain both 'name' & 'height' keys.
  function add(pokemon){if (typeof pokemon === 'object' && 'name' in pokemon && 'height' in pokemon){
    pokemonList.push(pokemon);
  }}

  // This Allows the getAll and add function to be accessable globally.
  return {
    add: add,
    getAll: getAll
  }
})();

// This is a function that prints the pokemonList elements and checks if they exceed a certain height. If they do, a message will appear next to their information noting their large stature.
pokemonRepository.getAll().forEach(function(list){
  if (list.height > 2) {
    sizeAlert = ` - Wow, that's big!`;
  } else {
    sizeAlert = ''; 
  } document.write(`<p> ${list.name} (Height: ${list.height}) ${sizeAlert} </p>`);
});