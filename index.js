let output = document.querySelector(".output");

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let clock;
let check = true;

let counter = 0.00;
start.addEventListener("click", function(){
    if(check){
        clock = setInterval(function(){
            counter = (parseFloat(counter) + 0.01).toFixed(2);
            output.innerHTML = counter;
        }, 10);
        check = false;
    }
});

stop.addEventListener("click", function(){
    clearInterval(clock);
    check = true;
});

reset.addEventListener("click", function(){
    clearInterval(clock);
    counter = 0.00;
    output.innerHTML = counter;
    check = true;
});