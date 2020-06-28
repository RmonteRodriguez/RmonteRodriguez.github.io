var color = [
    'red',
    'blue',
    'orange',
    'yellow',
    'green',
    'purple',
    'pink'
]
function test()
{
    var randomNumber = Math.floor(Math.random() * (color.length));
    if (randomNumber == 1){
        document.body.style.backgroundColor = "red"; 
        document.getElementById('text').innerHTML = "Background Color: Red";
        document.getElementById('text').style.color = "red";
        document.getElementById('button').style.color = "red";
    }else if (randomNumber == 2){
        document.body.style.backgroundColor = "blue";
        document.getElementById('text').innerHTML = "Background Color: Blue";
        document.getElementById('text').style.color = "blue";
        document.getElementById('button').style.color = "blue";
    }else if (randomNumber == 3){
        document.body.style.backgroundColor = "orange";
        document.getElementById('text').innerHTML = "Background Color: Orange";
        document.getElementById('text').style.color = "orange";
        document.getElementById('button').style.color = "orange";
    }else if (randomNumber == 4){
        document.body.style.backgroundColor = "yellow";
        document.getElementById('text').innerHTML = "Background Color: Yellow";
        document.getElementById('text').style.color = "yellow";
        document.getElementById('button').style.color = "yellow";
    }else if (randomNumber == 5){
        document.body.style.backgroundColor = "green";
        document.getElementById('text').innerHTML = "Background Color: Green";
        document.getElementById('text').style.color = "green";
        document.getElementById('button').style.color = "green";
    }else if (randomNumber == 6){
        document.body.style.backgroundColor = "purple";
        document.getElementById('text').innerHTML = "Background Color: Purple";
        document.getElementById('text').style.color = "purple";
        document.getElementById('button').style.color = "purple";
    }else {
        document.body.style.backgroundColor = "pink";
        document.getElementById('text').innerHTML = "Background Color: Pink";
        document.getElementById('text').style.color = "pink";
        document.getElementById('button').style.color = "pink";
    }
}