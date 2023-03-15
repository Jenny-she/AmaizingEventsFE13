
let events = data.events
console.log(events);

const containerDetails = document.getElementById("deta")

const querySearch = window.location.search
console.log(querySearch);

const param = new URLSearchParams(querySearch).get('_id');

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
  
