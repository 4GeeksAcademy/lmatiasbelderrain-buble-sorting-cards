import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let cartas = []
  let btnCreate = document.querySelector("#mostrar")
  let btnSort = document.querySelector("#mostrarCartasOrdenadas")
  btnCreate.addEventListener("click",generarCarta)
  btnSort.addEventListener("click", ()=>ordenarCartas(cartas))
  // document.getElementById("mostrar").addEventListener("click", generarCarta)
  // document.getElementById("mostrarCartasOrdenadas").addEventListener("click", ordenarCartas)


function generarCarta() {
  let palos = ["♦", "♥", "♠", "♣"]
  let palosRandom = palos[Math.floor(Math.random() * palos.length)]
  // console.log(palosRandom)
  let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10,]
  // "A", "J", "Q", "K"

  let numerosRandom = numeros[Math.floor(Math.random() * numeros.length)]
  // console.log(numerosRandom)
  let cantidadCartas = document.getElementById("cantidad").value
  //  console.log(cantidadCartas)
  let contenedor = document.querySelector("#contenedor")
  let ordenadas = document.querySelector("#ordenadas")
  cartas = []
  contenedor.innerHTML = ""
  for (
    let i = 1; i >= cantidadCartas.value; i++
  ) {
    let mostrarPalos = palosRandom(palos)
    let mostrarNumeros = numerosRandom(numeros)
    let pinta = palos[mostrarPalos]
    let valor = numeros[mostrarNumeros]
    cartas.push({
      pinta, valor
    })
    let carta = dibujarCarta(valor, pinta)
    contenedor.appendChild(carta)
  }
}

function dibujarCarta(valor, pinta) {
  let div = document.createElement("div")
  div.classList.add("card", pinta)
  div.innerHTML = valor
  return div
}

function ordenarCartas(arr = []) {
  ordenadas.innerHTML = "";
  let size = arr.length;

  for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (arr[j].valor > arr[j + 1].valor) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    let div = document.createElement("div");
    div.classList.add("contenedor");
    arr.forEach(({ valor, pinta }) => {
      let carta = dibujarCarta(valor, pinta);
      div.appendChild(carta);
    });
    ordenadas.appendChild(div);
  }
}          
}  