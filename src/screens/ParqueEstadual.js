// ParqueEstadual.js
import React from "react";
import DetailScreen from "../components/DetailScreen";

// Dados do Parque Estadual com placeholders
const parqueData = {
  title: "Parque Estadual da Serra do Mar",
  images: [
    { uri: "https://via.placeholder.com/400x200.png?text=Imagem+Principal" },
    { uri: "https://via.placeholder.com/100x100.png?text=Thumb+1" },
    { uri: "https://via.placeholder.com/100x100.png?text=Thumb+2" },
  ],
  description:
    "O Parque Estadual da Serra do Mar preserva a Mata Atlântica e oferece trilhas, cachoeiras e mirantes para os visitantes.",
  location: "São Paulo, SP",
  actions: [
    { text: "Curtir", color: "#4CAF50" },
    { text: "Compartilhar", color: "#2196F3" },
    { text: "Favoritar", color: "#FF9800" },
  ],
  comments: [
    {
      author: "João",
      text: "Lugar incrível para fazer trilhas!",
      avatar: { uri: "https://via.placeholder.com/30.png?text=J" },
    },
    {
      author: "Maria",
      text: "As cachoeiras são maravilhosas.",
      avatar: { uri: "https://via.placeholder.com/30.png?text=M" },
    },
  ],
};

export default function ParqueEstadual() {
  return <DetailScreen {...parqueData} />;
}
