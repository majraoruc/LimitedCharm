
var i = 0;
var txt = 'Tražiš dašak prirode? Na pravom si mjestu.';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("input").placeholder += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();
