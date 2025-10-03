import React from "react";
import DetailScreen from "../components/DetailScreen";

const setePraiasData = {
  title: "Trilha das Sete Praias",
  images: [
    "https://static1.s123-cdn-static-a.com/uploads/3237687/800_60c945bf489e0.jpg",
    "https://www.voltologo.net/wp-content/uploads/2019/02/praia-do-cedro-sete-praias.jpg",
    "https://meudestinoelogoali.com.br/wp-content/uploads/2023/03/Trilha-das-Sete-Praias-Ubatuba-@meudestinoelogoali-1024x725.jpg",
    "https://images.sympla.com.br/5de552f58d9d2.jpg"
  ],
  description:
    "A Trilha das Sete Praias em Ubatuba é uma caminhada deslumbrante de aproximadamente 10 km, conectando praias selvagens e paradisíacas. Iniciando na Praia da Fortaleza ou na Praia da Lagoinha, o percurso inclui praias como Cedro do Sul, Prainha da Deserta, Deserta, Grande do Bonete, Bonete, Peres e Oeste. Ideal para quem busca ecoturismo, aventura e contato direto com a natureza.",
  location: "Ubatuba",
  actionType: "favorite",
  initialComments: [
    {
      author: "Juliana",
      text: "A trilha é incrível, paisagens de tirar o fôlego!",
    },
    {
      author: "Rafael",
      text: "Recomendo levar água e tênis confortável, mas vale cada passo.",
    }
  ],
};

export default function SetePraias() {
  return <DetailScreen {...setePraiasData} />;
}
