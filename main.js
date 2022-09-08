

let button = document.querySelector('button') 

const baseURL = 'https://swapi.dev/api/planets?search=Alderaan'

const residentialCallback = ({ data:people }) => console.log(people)
const errCallback = err => console.log(err) 

const buttonClicked = () => { axios.get(baseURL).then(residentialCallback).catch(errCallback)

}


button.addEventListener('click', buttonClicked)
