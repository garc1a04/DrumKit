var button = document.getElementsByClassName("drum");

document.addEventListener("keypress", function(e){
    playSound(e.key);
    animation(e.key);
})

for(let i = 0;i < button.length;i++){
    button[i].addEventListener("click",(e)=>{
        var name = button[i].innerHTML;
        playSound(name);
        animation(name);
    })
}

function playSound(name){
    switch(name){
        case "w":
            playMusic("tom-1.mp3");
            break;
        case "a":
            playMusic("tom-2.mp3");
            break;
        case "s":
            playMusic("tom-3.mp3");
            break;
        case "d":
            playMusic("tom-4.mp3");
            break;
        case "j":
            playMusic("snare.mp3");
            break;
        case "k":
            playMusic("crash.mp3");
            break;
        case "l":
            playMusic("kick-bass.mp3");
            break;
    }
}

function playMusic(name){
    var audio = new Audio('./sounds/'+name);
    audio.play();
}

function animation(key){
    var element = document.querySelector("."+key);
    element.classList.add("pressed");

    setTimeout(function() { element.classList.remove("pressed");}, 500)
}