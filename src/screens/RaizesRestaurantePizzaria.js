import React from "react";
import DetailScreen from "../components/DetailScreen";

const raizesData = {
  title: "Raízes Restaurante Pizzaria",
  images: [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/93/5c/a4/caption.jpg?w=700&h=-1&s=1",
  ],
  description:
    "Restaurante e pizzaria com ambiente familiar, conhecido por suas pizzas artesanais e pratos variados. Localizado em Ubatuba, é uma ótima escolha para quem busca boa comida e um ambiente acolhedor.",
  location: "Ubatuba",
  initialComments: [
    {
      author: "Mariana",
      text: "A pizza de frutos do mar é maravilhosa! Atendimento nota 10.",
      avatar: "",
    },
    {
      author: "Thiago",
      text: "Ambiente familiar e comida deliciosa. Recomendo!",
      avatar: "",
    },
  ],
};

export default function RaizesRestaurantePizzaria() {
  return <DetailScreen {...raizesData} actionType="rate" />;
}
