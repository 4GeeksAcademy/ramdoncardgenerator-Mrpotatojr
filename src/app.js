/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Listas de números y símbolos
  let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
  let iconos = ["♥", "♦", "♣", "♠"];

  // Función para obtener un índice aleatorio
  function random(lista) {
    return Math.floor(Math.random() * lista.length);
  }

  // Generar número y símbolo aleatorios
  let numCard = numeros[random(numeros)];
  let iconCard = iconos[random(iconos)];

  document.getElementById("number").textContent = numCard;
  document.getElementById("top-suit").textContent = iconCard;
  document.getElementById("bottom-suit").textContent = iconCard;

  if (iconCard === "♥" || iconCard === "♦") {
    document.getElementById("top-suit").style.color = "red";
    document.getElementById("bottom-suit").style.color = "red";
    document.getElementById("number").style.color = "red";
  } else {
    document.getElementById("top-suit").style.color = "black";
    document.getElementById("bottom-suit").style.color = "black";
    document.getElementById("number").style.color = "black";
  }
};
