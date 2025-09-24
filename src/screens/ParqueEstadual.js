import React from "react";
import DetailScreen from "../components/DetailScreen";

// Dados do Parque Estadual com placeholders
const parqueData = {
  title: "Parque Estadual da Serra do Mar",
  images: [
    "https://www.caraguatatuba.sp.gov.br/pmc/wp-content/uploads/2021/10/IMG_1772.jpg",
    "https://smastr16.blob.core.windows.net/guiadeapshomolog/2019/08/ucatrativo_i26b90958-090d-4b95-9e06-d13438ee469e.jpg",
    "https://th.bing.com/th/id/OLC.zX9cnvRSPxC9aw480x360?w=323&h=200&c=8&rs=1&qlt=90&o=6&cdv=1&pid=Local",
    "https://www.caraguatatuba.sp.gov.br/pmc/wp-content/uploads/2022/05/1-59.jpg",
    "https://photo620x400.mnstatic.com/738bfdc64316422e9b2fbb510c6c72c7/parque-estadual-serra-do-mar-_-nucleo-caraguatatuba.jpg",
  ],
  description:
    "O Parque Estadual da Serra do Mar preserva a Mata Atlântica e oferece trilhas, cachoeiras e mirantes para os visitantes.",
  location: "Caraguatatuba",
  actions: [
    { text: "Curtir", color: "#4CAF50" },
    { text: "Compartilhar", color: "#2196F3" },
    { text: "Favoritar", color: "#FF9800" },
  ],
  comments: [
    {
      author: "João",
      text: "Lugar incrível para fazer trilhas!",
      avatar: "https://via.placeholder.com/30.png?text=J",
    },
    {
      author: "Maria",
      text: "As cachoeiras são maravilhosas.",
      avatar: "https://via.placeholder.com/30.png?text=M",
    },
  ],
};


export default function ParqueEstadual() {
  return <DetailScreen {...parqueData} />;
}
