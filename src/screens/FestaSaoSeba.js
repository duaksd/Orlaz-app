import React from "react";
import DetailScreen from "../components/DetailScreen";

const festaSaoSebastiaoData = {
  title: "Festa de São Sebastião",
  images: [
    "https://img.band.uol.com.br/image/2023/01/19/festa-sao-sebastiao-121236.jpg",
    "https://novaimprensa.com/wp-content/uploads/2020/01/Festa-do-padroeiro-de-S%C3%A3o-Sebasti%C3%A3o-re%C3%BAne-milhares-de-fi%C3%A9is-no-Centro-Hist%C3%B3rico-da-cidade-1-1536x1023.jpg",
  ],
  description:
    "A Festa de São Sebastião é uma tradicional celebração religiosa, homenageando o padroeiro da cidade com procissões, missas, comidas típicas e apresentações culturais. É uma oportunidade de vivenciar a cultura local e participar de uma das festas mais importantes da comunidade.",
  location: "São Sebastião",
  actionType: "favorite",
  initialComments: [
    {
      author: "Marcos",
      text: "A procissão é linda e a festa tem muita energia positiva!",
    },
    {
      author: "Sofia",
      text: "Uma tradição que vale a pena conhecer. Muito bem organizada.",
    }
  ],
};

export default function FestaSaoSebastiao() {
  return <DetailScreen {...festaSaoSebastiaoData} />;
}
