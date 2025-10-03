import React from "react";
import DetailScreen from "../components/DetailScreen";

const aguaBrancaData = {
  title: "Trilha da Água Branca",
  images: [
    "https://www.ilhabela.com.br/imagens/trilha-agua-branca-1.jpg",
    "https://www.ilhabela.com.br/imagens/trilha-agua-branca-2.jpg",
    "https://www.ilhabela.com.br/imagens/trilha-agua-branca-3.jpg",
    "https://www.ilhabela.com.br/imagens/trilha-agua-branca-4.jpg"
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
