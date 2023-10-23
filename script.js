// Variáveis e seleção de itens 

//const pokemonURL = `https://pokeapi.co/api/v2/pokemon/`
const btnOpenBall = document.querySelector("#btn");
const pokeballOpen = document.querySelector("#pokeball");
const pokeballClosed = document.querySelector("#pokeball")
const switchTitle = document.querySelector("#title");
const namePokemonFromAPI = document.querySelector("#namepokemon");
const typePokemonFromAPI = document.querySelector("#type");
const imagePokemonFromAPI = document.querySelector("#pokemon-image");
const pokemonContainer = document.getElementById("#show-pokemon");

let backPoke = document.querySelector('#show-pokemon')

let type;


// Funções
function switchImageAndTitle (){
    pokeballOpen.setAttribute("src", "./assets/pokebalopen.png");
    
    
    setTimeout (switchPokeball, 1500)
    
}

const getPokemon = async () => {
    const pokeURL = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 150)}`

    fetch (pokeURL)
        .then(response => response.json())
        .then(data => {

            type = data.types[0].type.name

            switchTitle.innerText = 'Você capturou ' + data.name;
            namePokemonFromAPI.innerText =  'Name: ' + data.name;
            typePokemonFromAPI.innerText =  'Type: ' + data.types.map(typeinfo => typeinfo.type.name).join(' | ');
            
            imagePokemonFromAPI.setAttribute("src", `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`)

            console.log(data)
            console.log(type)
            console.log(data.types.map(typeinfo => typeinfo.type.name).join(' | '))
            
            backPoke.classList.add(type)
            imagePokemonFromAPI.classList.remove('hide')
            console.log(backPoke)

        })
}

function switchPokeball () {
    pokeballClosed.setAttribute("src", "./assets/Poké_Ball_icon.svg.png");
    pokeballClosed.classList.add('pokeball')
    switchTitle.innerHTML = 'Click novamente e descubra um novo Pokemòn!'
    return pokeballClosed;
}


// Eventos botão
btnOpenBall.addEventListener("click", () => {
    switchImageAndTitle();
    getPokemon();
    backPoke.classList.remove(type)
})

