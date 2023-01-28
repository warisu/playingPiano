window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const  key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop playing if key is not found
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});

const keyPresses = document.querySelectorAll('.key');
for (let keyPress of keyPresses) {
    keyPress.addEventListener('transitionend', function removeTransition(e) {
        if(e.propertyName !== 'transform') return; // skip if does not transform
        this.classList.remove('playing');
    })
}