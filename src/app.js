/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Listas de números y símbolos
  const CARD_NUMBER = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
  const CARD_ICON = ["♥", "♦", "♣", "♠"];

  // Función para obtener un índice aleatorio
  function random(lista) {
    return Math.floor(Math.random() * lista.length);
  }

  // Generar número y símbolo aleatorios
  const GENERATE_NUM_CARD = CARD_NUMBER[random(CARD_NUMBER)];
  const GENERATE_ICON_CARD = CARD_ICON[random(CARD_ICON)];

  document.getElementById("number").textContent = GENERATE_NUM_CARD;
  document.getElementById("top-suit").textContent = GENERATE_ICON_CARD;
  document.getElementById("bottom-suit").textContent = GENERATE_ICON_CARD;

  if (GENERATE_ICON_CARD === "♥" || GENERATE_ICON_CARD === "♦") {
    document.getElementById("top-suit").style.color = "red";
    document.getElementById("bottom-suit").style.color = "red";
    document.getElementById("number").style.color = "red";
  } else {
    document.getElementById("top-suit").style.color = "black";
    document.getElementById("bottom-suit").style.color = "black";
    document.getElementById("number").style.color = "black";
  }
};
