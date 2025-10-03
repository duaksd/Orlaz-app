import React from "react";
import DetailScreen from "../components/DetailScreen";

const aguaBrancaData = {
  title: "Trilha da Água Branca",
  images: [
    "https://www.ilhabela.tudoem.com.br/assets/img/coluna/10b07396caeabeee0b4a73463c8fe665.jpg",
    "https://arquipelagoilhabela.com.br/wp-content/uploads/2021/01/Trilhabranca_4.jpg",
    "https://arquipelagoilhabela.com.br/wp-content/uploads/2021/01/Trilhabranca_8.jpg",
    "https://arquipelagoilhabela.com.br/wp-content/uploads/2021/01/Trilhabranca_12.jpg"
  ],
  description:
    "A Trilha da Água Branca em Ilhabela é uma caminhada encantadora de aproximadamente 6 km, passando por trechos de mata atlântica, pequenas cachoeiras e riachos de águas cristalinas. Ideal para quem gosta de ecoturismo, aventura e contato direto com a natureza, proporcionando um dia refrescante e revigorante.",
  location: "Ilhabela",
  actionType: "favorite",
  initialComments: [
    {
      author: "Ana",
      text: "Cachoeiras lindas e trilha bem agradável. Recomendo para todos!",
    },
    {
      author: "Thiago",
      text: "Trilha moderada, leve repelente e água. Experiência incrível!",
    }
  ],
};

export default function AguaBranca() {
  return <DetailScreen {...aguaBrancaData} />;
}
