window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const  key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop playing if key is not found
    audio.currentTime = 0;
    audio.play();
    console.log(key)
}) 