let clock = document.getElementById("clock");
let date = document.getElementById("date");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

let day = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

date.innerHTML = day;
clock.innerHTML = time;

let ref = setInterval(()=>{
    let timeChange = new Date().toLocaleTimeString();
    clock.innerHTML = timeChange;
},1000)

btn1.addEventListener('click', ()=>{
    clearInterval(ref);
})

btn2.addEventListener('click', ()=>{
    setInterval(()=>{
        let timeChanges = new Date().toLocaleTimeString();
        clock.innerHTML = timeChanges;
    },1000)
})
