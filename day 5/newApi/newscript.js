// function fatchAPI(){
//     fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=9F6K2W8MEV2VQEXSZQGT4UKBP')
    
//    .then((res) => res.json())
//    .then((data) => weather(data))
// };

// fatchAPI()
// function weather(data){

//     console.log(data);

// const url ='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=9F6K2W8MEV2VQEXSZQGT4UKBP';

// const weather =(()=>{
//     fatch(url)
//     .then((res) => res.json())
//     .then((data) => weather(data))
//     .catch((err) => console.log(err))
// })();


// const weatherAPI =(()=>{
//     const root = document.getElementById("root");
//     for(let i=0; i<10; i++){
//         console.log(data.day[i]);
//         const dt = data.days[i];
//         const row = document.createElement('tr');
//     }
// })





// const row = document.createElement('tr');

// const cell1 = document.createElement('th');
// cell1.innerText ='Date';
// row.appendChild(cell1);

// const cell2 = document.createElement('th');

// cell2.innerText = 'maximum Temperature';

// row.appendChild(cell2);

// const cell3 = document.createElement('th');

// cell3.innerText = 'Minimum Temperature';

// row.appendChild(cell3);

// root.appendChild(row);

console.log("app started");

let weatherApi =(()=>{
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=9F6K2W8MEV2VQEXSZQGT4UKBP")
    .then((res) => res.json())
    .then((data) =>renderUI(data))
    .catch((err) => console.log(err))

})();


const renderUI=(data)=>{
    const root = document.getElementById("root");
    for(let i=0; i<15;i++)
    {
        console.log(data.days[i]);
        const dt = data.days[i];

        const row = document.createElement('tr');
        
    


  let cell1 = document.createElement('th');
   cell1.innerText =dt.datetime;
row.appendChild(cell1);

let cell2 = document.createElement('th');

cell2.innerText = dt.tempmax;

row.appendChild(cell2);

let cell3= document.createElement('th');

cell3.innerText = dt.tempmin;

row.appendChild(cell3);

let cell4= document.createElement('th');

cell4.innerText = dt.conditions;

row.appendChild(cell4);


root.appendChild(row);
    }

};
