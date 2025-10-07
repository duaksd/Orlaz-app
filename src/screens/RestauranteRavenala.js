import React from "react";
import DetailScreen from "../components/DetailScreen";

const ravenalaData = {
  title: "Restaurante Ravenala",
  images: [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/40/ae/28/caldeirada.jpg?w=700&h=-1&s=1",
  ],
  description:
    "Restaurante descontraído, famoso por seus pratos de frutos do mar e ambiente acolhedor. Localizado em São Sebastião, é uma ótima opção para quem busca boa comida e atendimento de qualidade.",
  location: "São Sebastião",
  initialComments: [
    {
      author: "Mariana",
      text: "O peixe grelhado estava perfeito! Ambiente muito agradável.",
      avatar: "",
    },
    {
      author: "Thiago",
      text: "Adorei o atendimento e os pratos de frutos do mar.",
      avatar: "",
    },
  ],
};

export default function RestauranteRavenala() {
  return <DetailScreen {...ravenalaData} actionType="rate" />;
}
