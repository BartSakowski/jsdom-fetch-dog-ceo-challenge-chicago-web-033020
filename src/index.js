console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

let dogContainer = document.querySelector('#dog-image-container')


function fetchDogs() {
  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderDogs(json.message));
}


function renderDogs(dogImages) {
  dogImages.forEach(image => 
    dogContainer.innerHTML += `<a> <img src=${image}> </a>`)
}

// ***Challenge 2*** //

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let breedList = document.getElementById('dog-breeds')


const fetchBreed = () => {
  return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
      console.log(json)
    renderBreeds(json.message)
    })
  }

    

function renderBreeds(dogBreeds){
  console.log(dogBreeds)
  for (const key in dogBreeds) {
    
    if (dogBreeds[key].length === 0) {

      const liString = `<li> ${key} </li>`
     breedList.innerHTML += liString
    } else {
      dogBreeds[key].forEach(breed => {
        const liString = `<li> ${breed} ${key}</li>`
        breedList.innerHTML += liString 
      }

      )
      
    }
  }
}

//if key has an empty array, then make a new li out of the key
//if key has full array, loop over array, access each element, then make li element + key

fetchDogs()
fetchBreed()