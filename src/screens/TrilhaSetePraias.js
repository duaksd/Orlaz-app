import React from "react";
import DetailScreen from "../components/DetailScreen";

const setePraiasData = {
  title: "Trilha das Sete Praias",
  images: [
    "https://rumoaventura.tur.br/wp-content/uploads/2022/01/7praias.jpg",
    "https://www.voltologo.net/wp-content/uploads/2019/02/praia-do-cedro-sete-praias.jpg.webp",
    "https://www.carpemundi.com.br/wp-content/uploads/2021/10/pontao-da-fortaleza-ubatuba.jpg",
    "https://desviantes.blob.core.windows.net/desviantes/media/adventures/items/08e597db88d6e978e8552e9cdba2e927.jpg"
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
