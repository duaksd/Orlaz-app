import React from "react";
import DetailScreen from "../components/DetailScreen";

const setePraiasData = {
  title: "Trilha das Sete Praias",
  images: [
    "https://www.guiadecaraguatatuba.com.br/wp-content/uploads/2021/08/trilha-sete-praias.jpg",
    "https://th.bing.com/th/id/OIP.Exemplo2.jpg",
    "https://th.bing.com/th/id/OIP.Exemplo3.jpg",
    "https://th.bing.com/th/id/OIP.Exemplo4.jpg"
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
