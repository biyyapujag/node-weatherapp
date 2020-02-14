console.log("Hi ")
fetch('http://puzzle.mead.io/puzzle').then((response)=>{
console.log(response);
response.json().then((data)=>{
console.log(data);
})
});

fetch('http://localhost:3000/wheather?addess=Rajahmundry').then((response)=>{
response.json((data)=>{
    if(data.error){
console.log("There is an error")
    }else{
console.log(data.forecast);
    }
})
})

const weForm = document.querySelector('form');
const search = document.querySelector('input');
weForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = search.value;
    const sUrl = 'http://localhost:3000/wheather?addess='+location+"'";
    fetch(sUrl).then((response)=>{
response.json().then((data)=>{
    if(data.error){
console.log("There is an error")
    }else{
console.log(data.forecast);
    }
})
})
})