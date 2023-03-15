 //FILTRADO DE CATEGORIAS Y ELIMINACION DE DUPLICADOS:

let events = data.events
let todasLasCategorias = events.map(event => event.category);
let categoriasNoDuplicadas = new Set(todasLasCategorias);
let categorias = [...categoriasNoDuplicadas];


function showCheckBox() {
  let checkContainer = "";
  categorias.forEach(categoria => {
      checkContainer += `
      <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
       <label class="form-check-label" for="inlineCheckbox1">${categoria}</label>
      </div>
       `; });
       document.getElementById("categorias").innerHTML = checkContainer;

      }
      showCheckBox();

// Instancio un array vacio para alojar los eventos de clickeo y desclikeo
 var checksSelected = [];
    const checkBoxes = document.querySelectorAll(".form-check-input");

    checkBoxes.forEach(checks => {
      checks.addEventListener("click", (event) => {
          var checked = event.target.checked;
          if (checked) {
              checksSelected.push(event.target.value);
              eventosFiltrados();
          } else {
              checksSelected = checksSelected.filter(uncheck => uncheck !== event.target.value);
              eventosFiltrados();
          }
      });
  });

  // Agrego escuchador de  eventos a la BARRA SEARCH: 
  // Instancio variable vacia tipo string, donde alojo mi evento KEYUP(me toma letra x letra, pero no toda la palabra).
  // Para que me tome toda la palabra ingreso al atributo target y de ahi al atributo value. 
  // Luego llamo y guardo el elemento "search" EN UNA CONSTANTE (SEARCHINPUT) PARA USARLOS EN LA FUNCION
  //Por ultimo llamo a la funcion de EVENTOS FILTRADOS que me muestra las TARJETAS FILTRADAS.

  var searchText = "";
  const searchInput = document.getElementById("search");

  searchInput.addEventListener("keyup", (event) => {
    searchText = event.target.value;
    eventosFiltrados();
});




////


 function eventosFiltrados() {
  let datos = [];
   if (checksSelected.length > 0 && searchText !== "") {
       checksSelected.map(categoria => datos.push(...events.filter(event => event.name.toLowerCase().includes(searchText.trim().toLowerCase()) && event.category == categoria)));
   } else if (checksSelected.length > 0 && searchText == "") {
        checksSelected.map(categoria => datos.push(...events.filter(event => event.category == categoria)));
   } else if (checksSelected.length == 0 && searchText !== "") {
       datos.push(...events.filter(event => event.name.toLowerCase().includes(searchText.trim().toLowerCase()) ||
           event.category.toLowerCase().includes(searchText.trim().toLowerCase())));
   } else {
       datos.push(...events);
   }
 
 paintDOM(datos);
 }
eventosFiltrados();
