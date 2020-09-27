const text = `I'm a Musician`;

let i = 0;

function writeText() {
    document.querySelector('.musician').innerText = text.slice(0, i);
    i++;
    if (i > text.length) {
        index = 0;
    }
}
setInterval(writeText, 150);