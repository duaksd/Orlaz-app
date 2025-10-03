import React from "react";
import DetailScreen from "../components/DetailScreen";

const saboresDoMarData = {
  title: "Sabores do Mar",
  images: [
    "https://example.com/saboresmar1.jpg",
    "https://example.com/saboresmar2.jpg",
    "https://example.com/saboresmar3.jpg",
  ],
  description:
    "O Sabores do Mar é conhecido pelos pratos frescos de frutos do mar, combinando receitas tradicionais caiçaras com toque contemporâneo. Camarões, peixes e mariscos preparados com temperos naturais e servidos com arroz, farofa e molhos especiais.",
  location: "Ubatuba",
  initialComments: [
    {
      author: "Carla",
      text: "O camarão é divino! Vale cada centavo.",
      avatar: "",
    },
    {
      author: "Lucas",
      text: "Ambiente agradável e comida super fresca. Recomendo!",
      avatar: "",
    },
  ],
};

export default function SaboresDoMarScreen() {
  return <DetailScreen {...saboresDoMarData} actionType="rate" />;
}
