import React from "react";
import DetailScreen from "../components/DetailScreen";

const bensBarData = {
  title: "Ben's Bar & Comidaria",
  images: [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/01/03/2d/ben-s-bar-comidaria.jpg?w=700&h=-1&s=1",
  ],
  description:
    "Ben's Bar & Comidaria é um bar e restaurante à beira-mar, conhecido por seus pratos de frutos do mar frescos e ambiente descontraído. Localizado em Ilhabela, oferece uma variedade de opções gastronômicas que agradam a todos os paladares, desde petiscos até pratos principais elaborados. O local é perfeito para desfrutar de uma refeição saborosa enquanto aprecia a vista para o mar.",
  location: "Ilhabela",
  initialComments: [
    {
      author: "Mariana",
      text: "Ambiente incrível e comida deliciosa! Recomendo o camarão na moranga.",
      avatar: "",
    },
    {
      author: "Thiago",
      text: "A moqueca é sensacional, recomendo para todos os visitantes!",
      avatar: "",
    },
  ],
};

export default function BensBarComidariaScreen() {
  return <DetailScreen {...bensBarData} actionType="rate" />;
}