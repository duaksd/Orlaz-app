import React from "react";
import DetailScreen from "../components/DetailScreen";

const festivalVeraoData = {
  title: "Festival de Verão",
  images: [
    "https://www.ilhabela.com.br/wp-content/uploads/2020/09/dados-gerais-de-ilhabela.jpg",
    "https://www.ilhabela.com.br/wp-content/uploads/2025/04/festival-rock-na-ilha-shows-na-praia-em-ilhabela-fim-de-semana-dia-das-maes.jpg",
    "https://www.ilhabela.com.br/imagens/festival-verao-3.jpg",
    "https://www.ilhabela.com.br/imagens/festival-verao-4.jpg"
  ],
  description:
    "O Festival de Verão de Ilhabela é um evento anual que reúne música, gastronomia e cultura local em um cenário paradisíaco. Com shows ao ar livre, atividades recreativas e barraquinhas de comidas típicas, é ideal para famílias, jovens e turistas que querem aproveitar a energia da ilha durante a estação mais quente do ano.",
  location: "Ilhabela",
  actionType: "favorite",
  initialComments: [
    {
      author: "Camila",
      text: "Ótima organização e shows incríveis! Vale a pena participar.",
    },
    {
      author: "Gaby Santos",
      text: "Diversão garantida para toda a família, amei a experiência!",
    }
  ],
};

export default function FestivalVerao() {
  return <DetailScreen {...festivalVeraoData} />;
}
