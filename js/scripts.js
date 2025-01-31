// Pokemon repository
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

// Function that prints the pokemonList elements and checks if they exceed a certain height. If they do, a message will appear next to their information noting their large stature.
pokemonList.forEach(function(list){
  if (list.height > 2) {
    sizeAlert = ` - Wow, that's big!`;
  } else {
    sizeAlert = ''; 
  } document.write(`<p> ${list.name} (Height: ${list.height}) ${sizeAlert} </p>`);
});