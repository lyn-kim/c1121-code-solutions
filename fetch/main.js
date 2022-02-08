const fetchResponsePromise = fetch('https://pokeapi.co/api/v2/pokemon/175')
  .then(response => response.json())
  .then(pokemon => console.log(pokemon))
;
console.log('fetchResponsePromise:', fetchResponsePromise);
