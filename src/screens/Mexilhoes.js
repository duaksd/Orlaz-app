import React from "react";
import DetailScreen from "../components/DetailScreen";

const mexilhoesData = {
  title: "Mexilhões",
  images: [
    "https://www.caraguatatuba.sp.gov.br/pmc/wp-content/uploads/2022/10/Foto-Claudio-Gomes-PMC-231-scaled.jpg",
    "https://www.caraguatatuba.sp.gov.br/pmc/wp-content/uploads/2022/11/1-21-scaled.jpg",
    "https://www.caraguatatuba.sp.gov.br/pmc/wp-content/uploads/2022/11/3-2.jpeg",
  ],
  description:
    "Os mexilhões de Caraguatatuba são preparados com temperos frescos e servidos quentes, representando uma experiência gastronômica típica do litoral paulista. Deliciosos como entrada ou prato principal, são muito apreciados em quiosques e restaurantes à beira-mar.",
  location: "Caraguatatuba",
  initialComments: [
    {
      author: "Mariana",
      text: "Deliciosos! Vale muito a pena provar.",
      avatar: "",
    },
    {
      author: "João",
      text: "Perfeitos para um almoço de verão à beira-mar.",
      avatar: "",
    },
    {
      author: "Lúcia",
      text: "Super saborosos, adorei a experiência.",
      avatar: "",
    },
  ],
};

export default function Mexilhoes() {
  return <DetailScreen {...mexilhoesData} actionType="rate" />;
}
