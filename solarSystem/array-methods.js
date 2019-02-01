const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

const planetEl = document.getElementById("planets")
planets.forEach((planet) => {
  DOMcomponent =
  `<div>
   <h1>${planet}</h1>
   </div>`
  planetEl.innerHTML += DOMcomponent
})

let capitalizeFirstLetterArray = planets.map(function(planet){
  return planet.charAt(0).toUpperCase()+ planet.slice(1)
})
planetEl.innerHTML += capitalizeFirstLetterArray

letterEArray = []
planets.forEach( (planet) => {
  if(planet.includes("e")) {
    letterEArray.push(planet)
  }
})

const withE = planets.filter(planet => planet.includes("e"))
planetEL.innerHTML += withE
