

 console.log(data)
 
 function filterEvents(data){
  let aux = [];

  for (const event of data.events) {
    if (event.date > data.currentDate ){
      aux.push(event)
    }
  
  }
  return aux 
 }

 function paintDOM(data){
         
     let body = ``
     let template = ``

           
          const tagToUpDate = document.getElementById("upc");
          console.log("tagToUpdate", tagToUpDate);
         
           for (let i = 0; i < data.length; i++){
        
            
            body += `
           <div class="card1 d-flex flex-column  align-items-center justify-content-center flex-wrap">
           <h3>${data[i].name}</h3>
           <img src="${data[i].image}">
           <p class="card_p">${data[i].description}</p>
           <div class="btn button-pink"> <a href="/html/details.html"> More</a></div>
           <button class="">Buy: $USD ${data[i].price}</button>
         </div>
           `;
          }
  
     tagToUpDate.innerHTML = body;
     console.log("jajajaj");
    
    }
 

const upcEvents = filterEvents(data)

paintDOM(upcEvents);

/* <p class="card_p">📆 Date:${data[i].date}</p>
<p class="card_p">🕋 Place:${data[i].place}</p>
<p class="card_p">🚻 Capacity:${data[i].capacity}</p>
<p class="card_p">✔️Estimate:${data[i].estimate}</p>
<p class="card_p">✔️Assistance:${data[i].assistance} </p>
<p class="card_p">✔️Category:${data[i].category} </p> */