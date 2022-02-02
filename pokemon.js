let input = "";
let pokemonArrayOf100 =[];
let userPokemon = [];

const saveInput = (userInput) => {
    input = userInput;
    console.log(input);
}
const get100Pokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
        .then(response => response.json())
        .then(data => pokemonArrayOf100.push(data.results));
}

const show100Pokemon = () => {
    for(let i=0; i<pokemonArrayOf100[0].length; i++) {
        const name = pokemonArrayOf100[0][i].name;
        const li = document.createElement('li');
        document.getElementById('show-100-pokemon').appendChild(li);
        const pokemonList = document.createTextNode(`${name}`);
        li.appendChild(pokemonList);
    }
}


const getUserPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(response => response.json())
        .then(data => userPokemon.push(data));

}

const showUserPokemon = () => {

    document.getElementById("user-pokemon-card").style.display = "grid";

    let img = document.createElement('img');
    img.src = userPokemon[0].sprites.front_default;
    document.getElementById('pokemon-img').appendChild(img);

    let h1 = document.getElementById('name');
    h1.innerHTML = userPokemon[0].name;

    let ability = document.getElementById('abilities');
    ability.innerHTML = 'Ability: ' + userPokemon[0].abilities[0].ability.name

    let type = document.getElementById('type');
    type.innerHTML = 'Type: ' + userPokemon[0].types[0].type.name;

    let hp = document.getElementById('hp');
    hp.innerHTML = 'HP: ' + userPokemon[0].stats[0].base_stat

    let attack = document.getElementById('attack');
    attack.innerHTML = 'Attack: ' + userPokemon[0].stats[1].base_stat

    let defense = document.getElementById('defense');
    defense.innerHTML = 'Defense: ' + userPokemon[0].stats[2].base_stat

    let specialAttack = document.getElementById('special-attack');
    specialAttack.innerHTML = 'Special Attack: ' + userPokemon[0].stats[3].base_stat

    let specialDefense = document.getElementById('special-defense');
    specialDefense.innerHTML = 'Special Defense: ' + userPokemon[0].stats[4].base_stat

    let speed = document.getElementById('speed');
    speed.innerHTML = 'Speed: ' + userPokemon[0].stats[5].base_stat

}

