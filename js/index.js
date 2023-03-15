// Constantes capturadas y variables







// Eventos

/*
input.addEventListener('input', superFilter)
contenedorChecks.addEventListener('change', superFilter)


function superFilter(){
    let arrayFiltrado1 = eventsFiltrados(events, searchInput.value)
    let arrayFiltrado2 = filtrarPorCheks(arrayFiltrado1)
    paintDOM(arrayFiltrado2)
}


*/

///FUNCION DE PINTAR TARJETAS


  function paintDOM(data){
   let body = ``;

   const tagToUpDate = document.getElementById("root");
   console.log("tagToUpdate", tagToUpDate);

   for (let i = 0; i < data.length; i++){
    
    body += `
    <div class="card1 d-flex flex-column align-items-center justify-content-center flex-wrap">
    <h3>${data[i].name}</h3>
    <img src="${data[i].image}" alt="">
    <p class="card_p">${data[i].description} </p>
    <div class="btn button-pink ">
      <a href="./html/details.html">More</a>
    </div>
    <button class="">Buy: $USD ${data[i].price}</button>
  </div>
`;
    
   }
   tagToUpDate.innerHTML = body;
   console.log("jajajaj");
 }

 paintDOM(data.events)





/*

 function filtrarPorCheks(arrayDatos){
  let checkBoxes = document.querySelectorAll(".form-check-input");
  let arrayChecks = Array.from(checkBoxes)
  let checksChecked = arrayChecks.filter(check => check.checked);
  if(checked.length == 0){
      return arrayDatos
  }
  let checkValues = checksChecked.map(check => check.value) //
  let arrayFiltrado = arrayDatos.filter(elemento =>checkValues.includes(elemento.categoria))
  return arrayFiltrado
}






 var searchText = "";
 const searchInput = document.getElementById("search");

 searchInput.addEventListener("keyup", (event) => {
   searchText = event.target.value;
   eventsFiltrados();
});


function eventsFiltrados() {
 let datos = [];
  if (checksSelected.length > 0 && searchText !== "") {
      checksSelected.map(categoria => datos.push(...events.filter(event => event.name.toLowerCase().includes(searchText.trim().toLowerCase()) && event.category == categoria)));
  } else if (checksSelected.length > 0 && searchText == "") {
   checksSelected.map(categoria => datos.push(...events.filter(event => event.category == categoria)));
  } else{
   datos.push(...events);
  }
  paintDOM(datos);
 }
 eventsFiltrados();

*/