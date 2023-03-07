
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
    <p> 📆 Date:${data[i].date} </p>
    <p> 🕋 Place:${data[i].place} </p>
    <p> 🚻 Capacity:${data[i].capacity} </p>
    <p> ✔️Estimate:${data[i].estimate} </p>
    <p> ✔️Assistance:${data[i].assistance} </p>
    <div class="btn button-pink ">
      <a href="./html/details.html"> ${data[i].category}</a>
    </div>
    <button class="btn-danger">Buy: $USD ${data[i].price}</button>
  </div>
`;
   }
   tagToUpDate.innerHTML = body;
   console.log("jajajaj");
 }

 paintDOM(data.events)