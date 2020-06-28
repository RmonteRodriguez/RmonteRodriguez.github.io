var count = 0;

function decreaseFunction(){
    document.getElementById("demo").innerHTML = --count;
}

function resetFunction(){
  count = 0; document.getElementById("demo").innerHTML = count;
}

function increaseFunction(){
    document.getElementById("demo").innerHTML = ++count;
}