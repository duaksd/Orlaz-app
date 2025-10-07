import React from "react";
import DetailScreen from "../components/DetailScreen";

const garageBarData = {
  title: "Garage Bar Steakhouse",
  images: [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/7f/41/42/nossa-decoracao-novo.jpg?w=700&h=-1&s=1",
  ],
  description:
    "Especializado em carnes nobres, o Garage Bar Steakhouse oferece um ambiente moderno e uma carta de vinhos selecionada. Localizado em Caraguatatuba, é referência para quem aprecia boa carne e atendimento de qualidade.",
  location: "Caraguatatuba",
  initialComments: [
    {
      author: "Mariana",
      text: "A carne estava no ponto perfeito! Ambiente muito agradável.",
      avatar: "",
    },
    {
      author: "Thiago",
      text: "Ótima carta de vinhos e atendimento excelente.",
      avatar: "",
    },
  ],
};

export default function GarageBarSteakhouse() {
  return <DetailScreen {...garageBarData} actionType="rate" />;
}
