alert("this page wants to know your location")
const searchbox=document.querySelector("#search input");
const searchbtn=document.querySelector("#search button");
searchbtn.addEventListener("click",()=>{
  if(searchbox.value=="coronavirus"){
  let final="https://www.who.int/health-topics/coronavirus#tab=tab_1";
  window.open(final);
  }
  if(searchbox.value=="dengue"){
    let final="https://en.wikipedia.org/wiki/Dengue_fever";
    window.open(final);
  }
  else{
    let final="https://www.healthline.com/health/"+searchbox.value;
    window.open(final);
  }
  searchbox.value="";
})
const First=document.querySelector("#dak");
First.addEventListener("click",()=>{
    let go="http://localhost:3000/messages";
    window.open(go);
})
const second=document.querySelector("#prashant");
second.addEventListener("click",()=>{
  let go="http://localhost:3000/messages";
  window.open(go,"_self");
})
const quizz=document.querySelector("#Quizz");
quizz.addEventListener("click",()=>{
  let go="http://localhost:3000/quizz";
  window.open(go);
})
const webinars=document.querySelector("#anjali");
webinars.addEventListener("click",()=>{
  let go="http://localhost:3000/webinars";
  window.open(go);
})
const appoint=document.getElementById("appoint");
appoint.addEventListener("click",()=>{
  let went="http://localhost:3000/response";
  window.open(went);
})
