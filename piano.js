function playSound(keyCode){
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const  key = document.querySelector(`.key[data-key="${keyCode}"]`);
    
    // stop playing if key is not found
    if(!audio || !key) return; 
    
    audio.currentTime = 0;
    audio.play();
    
    key.classList.add('playing');
}

function removeTransition(e) {
    // skip if does not transform
    if(e.propertyName !== 'transform') return; 
    
    this.classList.remove('playing');
}

const pianoKeys = document.querySelectorAll('.key');
for (let pianoKey of pianoKeys) {
   pianoKey.addEventListener('transitionend', removeTransition)
}

for (let pianoKey of pianoKeys) {
    pianoKey.addEventListener('click', (e) => {
        playSound(e.currentTarget.dataset.key)
    })
}

window.addEventListener('keydown', (e) => {
    playSound(e.keyCode)
})

// This is immediately invoked function expression
// (function (doc){
//     const pianoKeys = doc.querySelectorAll('.key');
//     let audio_files = [...doc.querySelectorAll('audio')]; // this enables you access the file
//     // console.log(audio_files);
//     pianoKeys.forEach(key => {
//         key.addEventListener('click', (e) => {
//             playAudio(e.currentTarget.dataset.key) // i didn't use originalTarget because it only work in firefox
//         })
//     })

//     const playAudio = key => {
//             const audio_file = audio_files.find(e => e.getAttribute('data-key') == key);
//             // console.log('audio_file src:', audio_file.src);
//             audio_file.currentTime = 0;
//             audio_file.play();
//             addPlayingClass()
//         } 
    
//     function addPlayingClass(e) {
//         const currentKey = doc.querySelector(`.key=[data-key="${e.keyCode}"]`);
//         currentKey.classList.add('playing')
//     } 
// })(document);