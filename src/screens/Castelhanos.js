import React from "react";
import DetailScreen from "../components/DetailScreen";

const castelhanosData = {
  title: "Baía de Castelhanos",
  images: [
    "https://www.ilhabela.com.br/wp-content/uploads/2020/07/mirante-do-coracao-praia-de-castelhanos-ilhabelacombr-800.jpg",
    "https://marsemfim.com.br/wp-content/uploads/2020/12/ba%C3%ADa-de-castelhano-Ilhabela-c%C3%B3pia-1.jpg",
    "https://www.ilhabela.com.br/wp-content/uploads/2020/07/praia-de-castelhanos-belailhabela-ilhabelacombr-lunigro-e1598566550769.jpg",
    "https://arquipelagoilhabela.com.br/wp-content/uploads/2025/01/O-que-fazer-na-Praia-de-Castelhanos-1.png",
    "https://ilhaeco.com.br/home/wp-content/uploads/2023/04/resized-CASTELHANOS-8-Grande.jpeg",
  ],
  description:
    "A Baía de Castelhanos é uma das praias mais famosas e paradisíacas de Ilhabela. O acesso pode ser feito de 4x4, barco ou trilha, proporcionando uma aventura única. Com mar aberto e visual deslumbrante, é um destino imperdível para quem visita a ilha.",
  location: "Ilhabela",
  actionType: "favorite",
  initialComments: [
    {
      author: "Larissa",
      text: "A trilha de 4x4 já é uma aventura! A praia é maravilhosa.",
      avatar:
        "https://images.unsplash.com/photo-1518708909080-704599b19972?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      author: "Eduardo",
      text: "Um dos lugares mais lindos que já visitei no Brasil.",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      author: "Manuela",
      text: "Vale cada minuto de viagem, natureza incrível!",
      avatar:
        "",
    },
  ],
};

export default function BaiaCastelhanos() {
  return <DetailScreen {...castelhanosData} />;
}
