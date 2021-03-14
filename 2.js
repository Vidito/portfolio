const myArray = ['lion', 'rhino', 'tiger', 'snake', 'wolf', 'sheep', 'bear', 'eagle', 'cheetah'];
myArray.forEach(function(item){
let btn = document.createElement("img");

btn.setAttribute('class', 'animal '+item);
btn.setAttribute('src', 'img/'+item+'.jpg');
btn.innerText= item.toUpperCase();
btn.addEventListener('click', function(){
    playit(item);
})
document.querySelector('.container').appendChild(btn);

});


function playit(name) {
    let activeEl = document.querySelector('.'+name);
    let sound1 = new Audio('https://ssl.gstatic.com/dictionary/static/sounds/oxford/'+name+'--_gb_1.mp3');
    sound1.play();
    activeEl.classList.add('active');
    setTimeout(function(){
        activeEl.classList.remove('active');
    }, 200);
    
}
