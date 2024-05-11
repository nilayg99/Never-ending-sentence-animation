const sentence = document.getElementById('sentence');
const text = "This is a never-ending sentence that passes through the black stripe line. ";
let position = 0;

function animateSentence() {
    sentence.textContent = text.substring(position) + text.substring(0, position);
    position++;
    if (position >= text.length) {
        position = 0;
    }
}

setInterval(animateSentence, 100);