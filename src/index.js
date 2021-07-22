function displayCard(pokemon){
  let card=document.createElement("div")
  card.classList.add("pokemon-card")
  card.innerHTML=`<div class="pokemon-card">
  <div class="pokemon-frame">
    <h1 class="center-text">${pokemon.name}</h1>
    <div class="pokemon-image">
      <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
    </div>
    </div>
  </div>`
  function flipCard(){
    imgTag=card.querySelector("img")
    imgTag.src = imgTag.src==pokemon.sprites.front? pokemon.sprites.back : pokemon.sprites.front
  }
  card.addEventListener("click", flipCard)
  let pokemonContainer=document.querySelector("#pokemon-container")
  pokemonContainer.append(card)
}

function toggle(card, searchQuery){
  //debugger
  if(card.querySelector('h1').textContent.indexOf(searchQuery)!=-1){
    card.style.display="block"
  }else{
    card.style.display="none"
  }
}
function filterCards(event){
  // let pokemonContainer=document.querySelector("#pokemon-container")
  let noneFound=document.querySelector("#pokemon-container > center")
  noneFound.style.display="block"

  let pokemons=document.querySelectorAll("#pokemon-container div.pokemon-card")
  //debugger
  pokemons.forEach((element) => toggle(element, event.target.value))

  for (let i=0;i<pokemons.length;i++){
    if(pokemons[i].style.display=="block"){
      noneFound.style.display="none"
      break
    }
  }


}


document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  //YOUR CODE HERE
  POKEMON.forEach(displayCard)

  let noneFound=document.querySelector("#pokemon-container > center")
  noneFound.style.display="none"
  let formInput=document.querySelector("form#pokemon-search-form input")
  console.log(formInput)
  formInput.addEventListener("keyup", filterCards)
})
