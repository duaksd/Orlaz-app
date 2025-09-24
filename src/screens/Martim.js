import React from "react";
import DetailScreen from "../components/DetailScreen";

// Dados da Praia com placeholders
const praiaData = {
  title: "Praia Martim de Sá",
  images: [
    "https://guiacidade360graus.com.br/wp-content/uploads/2019/09/CAPA.jpg",
    "https://www.viajali.com.br/wp-content/uploads/2021/06/praia-de-martim-de-sa-1.jpg",
    "https://naturam.com.br/wp-content/uploads/2020/05/martim-de-sa-praia-proxima-prainha-caraguatatuba-naturam.jpg",
    "https://www.caragua.tur.br/wp-content/uploads/2021/07/Martim-de-Sa-Destaque-e1643140985754.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/34/78/dc/praia-martin-de-sa.jpg?w=1200&h=-1&s=1",
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
