import React from "react";
import DetailScreen from "../components/DetailScreen";

const saboresDoMarData = {
  title: "Sabor do Mar",
  images: [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/ba/25/38/photo0jpg.jpg?w=1000&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ed/32/c0/area-das-mesas-vista.jpg?w=1000&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/b7/a3/c1/sabor-do-mar-tem-uma.jpg?w=1000&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/34/7e/cb/sinta-o-sabor-do-tempero.jpg?w=1000&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/34/7e/c1/temos-mais-de-20-anos.jpg?w=1000&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/34/7e/be/frutos-do-mar-sempre.jpg?w=1000&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/34/7e/ae/salada-de-frutos-do-mar.jpg?w=1000&h=-1&s=1"
  ],
  description:
    "O Sabor do Mar é conhecido pelos pratos frescos de frutos do mar, combinando receitas tradicionais caiçaras com toque contemporâneo. Camarões, peixes e mariscos preparados com temperos naturais e servidos com arroz, farofa e molhos especiais.",
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
