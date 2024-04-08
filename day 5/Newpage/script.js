// console.log("......APP Started");

// function callAPI(){

//     fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=ba0b66d84e164c68b6fe87c11234de1d");

//     console.log(res);
    
// }



// function renderUI(){
//     const root = document.getElementById("root");

//     const div = document.createElement("div");
//     div.innerText = "card";

//     root.appendChild(div);

// }
// renderUI();

// console.log("app started....");

// let callApi = () => {
//   fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=ba0b66d84e164c68b6fe87c11234de1d")
//   .then((res) =>  res.json())
//     .then((data) =>renderUI(data))
// }
  

// function renderUI(data){
//     const root = document.getElementById("root");

//     // got the article from data
//     const articles = data.articles;
//     // single article from the arry of articles
//     console.log(articles);
//     const art1 = articles[99];
//     // created parent div
//     // console.log(art1);
   
//     const div = document.createElement("div");

//     const h3= document.createElement("h3");
//     h3.innerText = art1.title;

//     const img = document.createElement("img");
//     img.src = art1.urlToImage;

//     root.appendChild(h3);
//     root.appendChild(img);
//     root.appendChild(div);

// }
// callApi();


console.log("app started....");

let callApi = () => {
  fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=ba0b66d84e164c68b6fe87c11234de1d")
  .then((res) =>  res.json())
    .then((data) =>renderUI(data))
}
  
const root = document.getElementById("root");
function renderUI(data){

    

    // got the article from data
    const articles = data.articles;
    for ( let i = 0; i < articles.length; i++ ){
    const art1 = articles[i];

    const div = document.createElement("div");
    div.setAttribute("class", "newcard");
    // single article from the arry of articles
    // console.log(articles);
    // const art1 = articles[99];
    // created parent div
    // console.log(art1);
   
   

    const h3= document.createElement("h3");
    h3.innerText = art1.title;
    root.appendChild(h3);

    const img = document.createElement("img");
    img.src = art1.urlToImage;
    root.appendChild(img);
    root.appendChild(div);

    }

}
callApi();