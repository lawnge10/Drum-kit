var b=document.querySelector(".drum").clientHeight;
console.log(b);
for(var i=0;i<b;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  makesound(this.innerHTML);
  buttonanimation(this.innerHTML);
  buttonremoval(this.innerHTML);
});
document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonanimation(event.key);
    buttonremoval(this.innerHTML);
});


}
function makesound(key){
    switch(key){
        case "w":
            var audio=new Audio("kick-bass.mp3");
            audio.play();
            break;
            case "a":
                var audio=new Audio("snare.mp3");
                audio.play();
                break;
            case "s":
                var audio=new Audio("tom-1.mp3");
                audio.play();
                break;
            case "d":
                var audio=new Audio("tom-3.mp3");
    audio.play();
    break;
    case "j":
        var audio=new Audio("crash.mp3");
    audio.play();
    break;
    case "k":
        var audio=new Audio("tom-2.mp3");
    audio.play();
    break;
    case "l":
        var audio=new Audio("tom-4.mp3");
    audio.play();
    break;
    default:
        alert("key got pressed");
        break;
    
      }
}
function buttonanimation(currentkey){
document.querySelector("."+currentkey).classList.add("pressed");
setTimeout(function() {
    document.querySelector("."+currentkey).classList.remove("pressed");
}, 500);
}

