import {Greeter} from './greeter';
/*
for (let i=0; i<=10; i++){
  if(i%2==0){
    console.log(i);
  }
}
*/

// Write TypeScript code!
let title: string = "MeuApp";
let paragraph: string = "Blablabla...";

let counter = 0;

let intervalId = setInterval(()=>{
  counter = counter + 1;
  const appParagraph: HTMLElement = document.getElementById('app.counter');
  appParagraph.innerHTML = counter+'';
},1000);

const btn = document.getElementById("app.btn");
btn.addEventListener("click", alertMethod);
function alertMethod(this: HTMLElement, ev: Event){
  alert("Alertando pelo typescript");
}

const appTitle: HTMLElement = document.getElementById('app.title');
appTitle.innerHTML = title;

let greeter = new Greeter("Impiedoso");
const appParagraph: HTMLElement = document.getElementById('app.paragraph');
appParagraph.innerHTML = greeter.getGreeting();

/* appDiv.innerHTML = `
<h1>${title}</h1>
<p>${paragraph}</p>
`;
*/