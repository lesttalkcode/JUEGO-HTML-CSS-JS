document.getElementById('player').addEventListener("mouseover", sumarPuntos);

puntos = 0;
tiempo = 60;
necesarios = 30;


function sumarPuntos() {

    puntos++;
    document.getElementById("Puntos").innerHTML = "Puntos: <b> " + puntos + "/" + necesarios + "</b>";
    randNum = Math.round(Math.random() * 500);
    randNum2 = Math.round(Math.random() * 500);
    document.getElementById("player").style.marginTop = randNum + "px";
    document.getElementById("player").style.marginLeft = randNum2 + "px";
    if (puntos == 30) {
        alert("GANASTE");

    }
}



function restarTiempo() {
    tiempo--
    document.getElementById("Tiempo").innerHTML = "&nbsp, &nbsp; Tiempo: " + tiempo + " ";
    if (tiempo == 0) {
        alert("Perdiste Maestro");
        tiempo = 0;
        puntos = 0;
    }

}

setInterval(restarTiempo, 1000);