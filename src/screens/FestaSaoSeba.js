import React from "react";
import DetailScreen from "../components/DetailScreen";

const festaSaoSebastiaoData = {
  title: "Festa de São Sebastião",
  images: [
    "https://www.gaz.com.br/uploads/2023/01/Festa-do-Bastiao-Venancio-Aires-03-150114.jpg",
    "https://www.odemocrata.com.br/wp-content/uploads/2024/05/441460382_866790398598175_854361288962408282_n.jpg",
    "https://visitrio.com.br/wp-content/uploads/2024/01/Saiba-mais-sobre-a-historia-de-Sao-Sebastiao-o-padroeiro-do-Rio-de-Janeiro-1.webp",
    "https://odia.ig.com.br/_midias/jpg/2019/01/20/1200x670/1_dias0144aa-9378068.jpg"
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
