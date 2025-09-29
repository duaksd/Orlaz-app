import React from "react";
import DetailScreen from "../components/DetailScreen";

const lambeLambeData = {
  title: "Lambe-Lambe",
  images: [
    "https://media.gazetadopovo.com.br/2011/07/b56e38041ba8b357886b9c86bd82b4ca-gpLarge.jpg",
    "https://conteudo.imguol.com.br/c/entretenimento/6b/2020/10/21/arroz-lambe-lambe-1603289348866_v2_750x421.jpg",
    "https://th.bing.com/th/id/R.3a5491deaf8f7c1aec0711bd512a3de3?rik=5yeIO6%2ffOHVxKQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-P7_vzwP-OmI%2fT_uVVXK-fII%2fAAAAAAAAAmQ%2f8RXlVvdGAIY%2fs1600%2fMarisco%2bLambe%2bLambe.jpg&ehk=yVwJE7wTpXpw8w5LKweL3f0pHw7jv3kUVk62MOloWc4%3d&risl=&pid=ImgRaw&r=0",
  ],
  description:
    "O Lambe-Lambe é um prato tradicional caiçara feito com mexilhões frescos refogados no próprio caldo, acompanhados de arroz e temperos simples como alho, cebola, tomate e coentro. Sabor intenso e autêntico do mar em cada colherada.",
  location: "Ubatuba",
  initialComments: [
    {
      author: "Bianca",
      text: "O lambe-lambe é muito marcante, não dá pra provar só uma vez!",
      avatar: "",
    },
    {
      author: "André",
      text: "Simples, mas cheio de sabor. Melhor ainda com arroz fresquinho.",
      avatar: "",
    },
  ],
};

export default function LambeLambeScreen() {
  return <DetailScreen {...lambeLambeData} actionType="rate" />;
}
