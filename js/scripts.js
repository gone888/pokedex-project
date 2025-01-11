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

// Loop that first checks their their height and then writes their name & height on the page and in addition if they are big enough they will also get a message next to their stats
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 2) {
    sizealert = `- Wow, that's big!`;
  } else {
    sizealert = ''; 
  } document.write(`<p> ${pokemonList[i].name} (Height: ${pokemonList[i].height}) ${sizealert} </p>`);
}