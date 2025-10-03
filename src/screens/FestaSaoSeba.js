import React from "react";
import DetailScreen from "../components/DetailScreen";

const festaSaoSebastiaoData = {
  title: "Festa de São Sebastião",
  images: [
    "https://www.ilhabela.com.br/imagens/sao-sebastiao-1.jpg",
    "https://www.ilhabela.com.br/imagens/sao-sebastiao-2.jpg",
    "https://www.ilhabela.com.br/imagens/sao-sebastiao-3.jpg",
    "https://www.ilhabela.com.br/imagens/sao-sebastiao-4.jpg"
  ],
  description:
    "A Festa de São Sebastião é uma tradicional celebração religiosa de Ilhabela, homenageando o padroeiro da cidade com procissões, missas, comidas típicas e apresentações culturais. É uma oportunidade de vivenciar a cultura local e participar de uma das festas mais importantes da comunidade.",
  location: "Ilhabela",
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
