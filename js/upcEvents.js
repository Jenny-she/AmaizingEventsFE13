
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

 console.log(data)
 
 function filterEvents(dataApi){
  let aux = [];

  for (const event of data) {
    if (event.date > dataApi.currentDate ){
      aux.push(event)
    }
  
  }
  return aux 
 }

 function paintDOM(dataApi){
         
     let body = ``
     let template = ``

           
          const tagToUpDate = document.getElementById("upc");
          console.log("tagToUpdate", tagToUpDate);
         
           for (let i = 0; i < dataApi.length; i++){
        
            
            body += `
           <div class="card1 d-flex flex-column  align-items-center justify-content-center flex-wrap">
           <h3>${dataApi[i].name}</h3>
           <img src="${dataApi[i].image}">
           <p class="card_p"><b>${dataApi[i].description}</b></p>
           <div class="btn button-pink"> <a href="/html/details.html"> <b>More</b></a></div>
           <button class="buy">Buy: $USD ${dataApi[i].price}</button>
         </div>
           `;
          }
  
     tagToUpDate.innerHTML = body;
     console.log("jajajaj");
    
    }
 

const upcEvents = filterEvents(dataApi)

paintDOM(upcEvents);


  }
  getData()

/* <p class="card_p">📆 Date:${data[i].date}</p>
<p class="card_p">🕋 Place:${data[i].place}</p>
<p class="card_p">🚻 Capacity:${data[i].capacity}</p>
<p class="card_p">✔️Estimate:${data[i].estimate}</p>
<p class="card_p">✔️Assistance:${data[i].assistance} </p>
<p class="card_p">✔️Category:${data[i].category} </p> */