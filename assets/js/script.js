const title = document.querySelector('.next-title');
const txt = '...start a new life 💖';

function typeWritter(word, index){
    if(index < word.length){
        setTimeout(() => {
            title.innerHTML += `<span>${word[index]}</span>`;
            typeWritter(txt, index + 1)
        }, 75);
    }
}

setTimeout(() => {
    typeWritter(txt, 0)
}, 1000);