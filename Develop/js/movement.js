const characterDiv = document.getElementById("character-div");

document.addEventListener('click', function(e){
    characterDiv.style.transform = 'translateY('+(e.clientY-25)+'px)';
    characterDiv.style.transform += 'translateX('+(e.clientX-25)+'px)';
},false);
