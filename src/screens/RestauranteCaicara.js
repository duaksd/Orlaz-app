import React from "react";
import DetailScreen from "../components/DetailScreen";

const caicarasData = {
  title: "Restaurante Caiçara's",
  images: [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/21/7f/93/visual-da-nossa-varanda.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/3e/9a/fe/caption.jpg?w=1000&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/12/53/6f/caption.jpg?w=1000&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/6e/76/b0/linguini-a-caicara-um.jpg?w=1000&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/66/f1/e2/polvo-secreto-polvo-cozido.jpg?w=1000&h=-1&s=1",
  ],
  description:
    "O Caiçara's oferece pratos típicos da culinária caiçara, preparados com frutos do mar frescos e temperos regionais. Entre os destaques estão o peixe na folha de bananeira, moquecas e caldeiradas que trazem o verdadeiro sabor do litoral norte paulista.",
  location: "Caraguatatuba",
  initialComments: [
    {
      author: "Mariana",
      text: "A moqueca é sensacional, recomendo para todos os visitantes!",
      avatar: "",
    },
    {
      author: "Thiago",
      text: "Ótima comida e atendimento excelente. Voltarei com certeza!",
      avatar: "",
    },
  ],
};

export default function CaicarasScreen() {
  return <DetailScreen {...caicarasData} actionType="rate" />;
}
