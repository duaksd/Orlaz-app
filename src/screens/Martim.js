import React from "react";
import DetailScreen from "../components/DetailScreen";

// Dados da Praia com placeholders
const praiaData = {
  title: "Praia Martim de Sá",
  images: [
    { uri: "https://via.placeholder.com/400x200.png?text=Imagem+Principal" },
    { uri: "https://via.placeholder.com/100x100.png?text=Thumb+1" },
    { uri: "https://via.placeholder.com/100x100.png?text=Thumb+2" },
    { uri: "https://via.placeholder.com/100x100.png?text=Thumb+3" },
  ],
  description:
    "A Praia Martim de Sá é perfeita para banho de mar, esportes na areia e para passar momentos relaxantes em família ou com amigos. Possui quiosques e fácil acesso para visitantes.",
  location: "Caraguatatuba",
  actions: [
    { text: "Curtir", color: "#4CAF50" },
    { text: "Compartilhar", color: "#2196F3" },
    { text: "Favoritar", color: "#FF9800" },
  ],
  initialComments: [
    {
      author: "Ana",
      text: "Adoro essa praia, muito limpa e bonita!",
    },
    {
      author: "Pedro",
      text: "Perfeito para levar as crianças, excelente infraestrutura.",
    },
    {
      author: "Clara",
      text: "O pôr do sol aqui é incrível!",
    },
  ],
};

export default function PraiaMartimDeSa() {
  return <DetailScreen {...praiaData} />;
}
