let contador = 0

document.querySelector("button").addEventListener("click",eventoClicar);

function eventoClicar() {
    contador = contador + 1;
    document.getElementById("clicar").innerHTML = "Clicks: "+contador;
}   