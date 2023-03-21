let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
// let dataArray;

// fetch(urlApi)
// .then(response => response.json())
// .then(datos => console.log(datos))

 async function getData(){
  await fetch(urlApi)
   .then(respuesta => respuesta.json())
   .then(json => dataApi = json)

 let dataArray = dataApi.events;

  let cardDate = dataApi.currentDate
  let arrayPast = dataArray.filter(e => cardDate > e.date)
  let arrayFuture = dataArray.filter(e => cardDate < e.date)

  //Primer tabla -> Porcentajes de mi arrayPast 
  let porcentajes = []
  arrayPast.map(eventos => {
    porcentajes.push({
      eventos: eventos.name,
      xAssistance: (eventos.assistance*100/eventos.capacity)
    })
  })
  
  console.log(porcentajes)

  let max = porcentajes.sort((a,b) => b.xAssistance - a.xAssistance)[0]
  console.log(max);

 let min = porcentajes.sort((a,b) => a.xAssistance - b.xAssistance)[0]
console.log(min);

let capacity = arrayPast.filter(e=> e.capacity).sort((a,b)=> b.capacity - a.capacity)[0]
console.log(capacity);


//ARRAY FUTURO

const categoryAssistFuture = arrayFuture.map(eventos => eventos.category)
const categorySetFuture = new Set(categoryAssistFuture) //Saco las categories repetidas de mi arrayFutere
const categorysFuture = [...categorySetFuture]

const categoryValueFuture = []

categorysFuture.map(category =>
  categoryValueFuture.push({
    category:category,
    eventos: arrayFuture.filter(evento =>evento.category === category),
  })
  )
  console.log(categoryValueFuture);

  let estimateAndCapacityFuture = []  //A mi array le pusheo category, estimate, capacity y Revenue para luego recorrerlo y trabajar con eso.
    categoryValueFuture.map(datos => {
        estimateAndCapacityFuture.push({
            category: datos.category,
            estimate: datos.eventos.map(item => item.estimate),
            capacity: datos.eventos.map(item => item.capacity),
            estimateRevenue: datos.eventos.map(item => item.estimate * item.price)
    })
})
console.log(estimateAndCapacityFuture);

estimateAndCapacityFuture.forEach(category =>{
  let totalEstimate = 0
  category.estimate.forEach(estimate => totalEstimate += Number(estimate))
  category.estimate = totalEstimate

  let totalcapacityFut = 0
  category.capacity.forEach(capacity => totalcapacityFut += Number(capacity))
  category.capacity = totalcapacityFut

  let  totalEstimateRevenue = 0
  category.estimateRevenue.forEach(estimateRevenue => totalEstimateRevenue += Number(estimateRevenue))
  category.estimateRevenue = totalEstimateRevenue

  category.porcentaje = ((totalEstimate * 100)/ totalcapacityFut).toFixed(2)
})



// ARRAY PASADO

const categoryAssist = arrayPast.map(eventos=>eventos.category)
const categorySet = new Set(categoryAssist)
const categorys = [...categorySet]


const categoryValue = []
categorys.map(category =>
    categoryValue.push({
            category:category,
            eventos: arrayPast.filter(evento =>evento.category=== category),
            
        })
    )
console.log(categoryValue);


let assistAndCapacityPast = []
    categoryValue.map(datos => {
        assistAndCapacityPast.push({
            category: datos.category,
            assistance: datos.eventos.map(item => item.assistance),
            capacity: datos.eventos.map(item => item.capacity),
            revenue: datos.eventos.map(item => item.assistance * item.price)
    })
})
console.log(assistAndCapacityPast);

assistAndCapacityPast.forEach(category =>{
    let totalAssit = 0
    category.assistance.forEach(assistance => totalAssit += Number(assistance))
    category.assistance = totalAssit

    let totalcapacity = 0
    category.capacity.forEach(capacity => totalcapacity += Number(capacity))
    category.capacity = totalcapacity

    let  totalRevenue = 0
    category.revenue.forEach(revenue => totalRevenue += Number(revenue))
    category.revenue = totalRevenue

    category.porcentaje = ((totalAssit * 100)/totalcapacity).toFixed(2)
})
console.log(assistAndCapacityPast);
console.log(categoryValue);

//Impresion de tablas

function displayTable(){
    let caja = `
    <td>${max.eventos} with <b>${max.xAssistance}%</b> of assistance </td>
    <td>${min.eventos} with <b>${min.xAssistance}%</b> of assistance </td>
    <td>${capacity.name}: ${capacity.capacity}</td>
    `
    document.getElementById("tableEventsStatistics").innerHTML = caja
}
displayTable()

function displayTableDos(){
    let caja = `                    
<tr>
    <td><b>Categories<b></td>
    <td><b>Revenues<b></td>
    <td><b>% of attendance<b></td>
</tr>
`
estimateAndCapacityFuture = estimateAndCapacityFuture.sort((x,d)=> d.estimateRevenue - x.estimateRevenue )
    estimateAndCapacityFuture.forEach(e => {
        e.estimateAndCapacityFuture
        caja += `
    <tr>
        <td>${e.category}</td>
        <td> $${e.estimateRevenue}</td>
        <td>${e.porcentaje}%</td>
    </tr>
    `
    })
    document.getElementById("tableDos").innerHTML = caja
}
displayTableDos()

function displayTableTres(){
    let caja = `                    
<tr>
    <td><b> Categories <b> </td>
    <td><b> Revenues <b></td>
    <td><b> % of attendance <b></td>
</tr>
`
assistAndCapacityPast = assistAndCapacityPast.sort((x,d)=> d.revenue - x.revenue)
    assistAndCapacityPast.forEach(e => {
        e.assistAndCapacityPast
        caja += `
    <tr>
        <td>${e.category}</td>
        <td>$${(new Intl.NumberFormat('de-DE').format(e.revenue))}</td>
        <td>${e.porcentaje}%</td>
    </tr>
    `
    })
    document.getElementById("tableTres").innerHTML = caja
}
displayTableTres()

}
getData()

