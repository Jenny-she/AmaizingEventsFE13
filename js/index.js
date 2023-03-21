// let data = []
// async function getData(){
//     await fetch("https://amazing-events.herokuapp.com/api/events")
//         .then(Response => Response.json())
//         .then(json=> data = json)
// let eventos = data
// return eventos
// }
// data =  await getData()
// console.log(data)

let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
// let dataArray;

// fetch(urlApi)
// .then(response => response.json())
// .then(datos => console.log(datos))

 async function getData(){
  await fetch(urlApi)
   .then(respuesta => respuesta.json())
   .then(json => dataApi = json)

 let data = dataApi.events;

 
// Constantes capturadas y variables
const contenedor = document.getElementById('root') //si, es 'root'
const contenedorChecks = document.getElementById('checkContainer') //el container de los ckecksboxes
const input = document.getElementById('search') //el input de search

// let events = data.events <- Se bocha xq es del data.js


// Eventos

input.addEventListener('input',superFiltro)

contenedorChecks.addEventListener('change',superFiltro)

// Llamadas de funciones

pintarTarjetas(data)
crearCheckboxes(data)


// Funciones

function superFiltro(){
    let arrayFiltrado1 = filtrarPorTexto(data, input.value)
    let arrayFiltrado2 = filtrarPorPais(arrayFiltrado1)
    pintarTarjetas(arrayFiltrado2)
}

function crearCheckboxes(arrayInfo){
    let checks = ''
    let categoriasRepetidas = arrayInfo.map(elemento => elemento.category)
    let categorias = new Set(categoriasRepetidas.sort((a,b)=>{
        if(a>b){
            return 1
        }
        if(a<b){
            return -1
        }
        return 0
    }))
    categorias.forEach(elemento =>{
        checks += `
        <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="${elemento}" value="${elemento}">
         <label class="form-check-label" for="${elemento}">${elemento}</label>
        </div>
         `
    })
    contenedorChecks.innerHTML = checks
}

function pintarTarjetas(arrayDatos) {
    if(arrayDatos.length == 0){
        contenedor.innerHTML = "<h2 class='display-1 fw-bolder'>No hay coincidencias😔</h2>"
        return
    }
    let tarjetas = ''
    arrayDatos.forEach(elemento => {
        tarjetas += `
        <div class="card1 d-flex flex-column align-items-center justify-content-center flex-wrap">
        <h3>${elemento.name}</h3>
        <img src="${elemento.image}" alt="">
        <p class="card_p"><b>${elemento.description} </b></p>
        <div class="btn button-pink ">
          <a href="./html/details.html?_id=${elemento._id}"><b>More</b></a>
        </div>
        <button class="buy">Buy: $USD ${elemento.price}</button>
      </div>
     `;
    })
    contenedor.innerHTML = tarjetas
}

function filtrarPorTexto(arrayDatos, texto){
    let arrayFiltrado = arrayDatos.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
    return arrayFiltrado
}

function filtrarPorPais(arrayInfo){
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    console.log(checkboxes);
    let arrayChecks = Array.from(checkboxes)
    console.log(arrayChecks);
    let checksChecked = arrayChecks.filter(check => check.checked)
    console.log(checksChecked);
    if(checksChecked.length == 0){
        return arrayInfo
    }
    let checkValues = checksChecked.map(check => check.value)
    console.log(checkValues);
    let arrayFiltrado = arrayInfo.filter(elemento => checkValues.includes(elemento.category))
    console.log(arrayFiltrado);
    return arrayFiltrado
}
}
getData()
