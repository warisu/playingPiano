// this is for laptop
// window.addEventListener('keydown',  playSound);

// function playSound(e){
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const  key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     if(!audio) return; // stop playing if key is not found
//     audio.currentTime = 0;
//     audio.play();
//     key.classList.add('playing');
// }

// const keyPresses = document.querySelectorAll('.key');
// for (let keyPress of keyPresses) {
//     keyPress.addEventListener('transitionend', function removeTransition(e) {
//         if(e.propertyName !== 'transform') return; // skip if does not transform
//         this.classList.remove('playing');
//     })
// };
// This is immediately invoked function expression
(function (doc){
    const pianoKeys = doc.querySelectorAll('.key');
    let audio_files = [...doc.querySelectorAll('audio')]; // this enables you access the file
    console.log(audio_files);
    pianoKeys.forEach(key => {
        key.addEventListener('click', (e) => {
            playAudio(e.currentTarget.dataset.key) // i didn't use originalTarget because it only work in firefox
        })
    })

    const playAudio = key => {
        const audio_file = audio_files.find(e => e.getAttribute('data-key') == key);
        console.log('audio_file src:', audio_file.src);
        audio_file.play();
        pianoKeys.classList.add('playing');
    }
    

})(document);