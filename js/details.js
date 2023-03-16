/*
let events = data.events
console.log(events);

const containerDetails = document.getElementById("deta")

const querySearch = window.location.search
console.log(querySearch);

const param = new URLSearchParams(querySearch).get("_id");

const nose = events.find( esto => esto._id == param)


 if(nose){

containerDetails.innerHTML = `
      <div class="container  d-flex flex-column align-items-center justify-content-center ">
         <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0 ">
            <div class="col-md-4">
              <img src="${nose.image}" class="img-fluid rounded-start" alt="...">
             </div>
             <div class="col-md-8">
                 <h3>Data</h3>
                 <ul class="list-group list-group-flush">
                  <li class="list-group-item">${nose.name}</li>
                  <li class="list-group-item">${nose.capacity} </li>
                  <li class="list-group-item">${nose.assistance} </li>
                  <li class="list-group-item">${nose.category} </li>
                 </ul>
                 <div class="btn button-pink ">
                   <a href="./html/details.html?_id=${esto._id}"> More</a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
   `
   }else{
       containerDetails.innerHTML = `
       <h3>No hay detalles...</h3>

       `
   }
*/
let events = data.events;
console.log(events);

const queryString = window.location.search

const params = new URLSearchParams(queryString)

const id = params.get("_id")


const nose = events.find( esto => esto._id == id)


const div = document.getElementById("deta")
div.innerHTML = `
<div class="container  d-flex flex-column align-items-center justify-content-center">
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0 ">
  <img src="${nose.image}" alt="">
          <h3>${nose.name}</h3>
          <p class="card_p">${nose.description}</p>
          <p class="card_p">📆 Date:${nose.date}</p>
          <p class="card_p">🕋 Place:${nose.place}</p>
          <p class="card_p">🚻 Capacity:${nose.capacity}</p>
          <p class="card_p">✔️Assistance:${nose.assistance} </p>
          <p class="card_p">✔️Category:${nose.category} </p>
          <div class="btn button-pink ">
            <a href="./html/details.html?_id=${nose._id}"></a>
          </div>
          <button class="btn-danger">💰Price: $USD ${nose.price}</button>
        </div>
`

