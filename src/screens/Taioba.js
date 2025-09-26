import React from "react";
import DetailScreen from "../components/DetailScreen";

// Dados do Bolinho de Taioba em Caraguatatuba
const bolinhoData = {
  title: "Bolinho de Taioba",
  images: [
    "https://www.receiteria.com.br/wp-content/uploads/bolinho-de-taioba.jpg",
    "https://tse1.mm.bing.net/th/id/OIP.iQQS-UIvqABdUNvFLx5yqQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://static.itdg.com.br/images/1200-630/cacf9a82fc63398bd3ce19a6ccc29bb5/bolinho-de-taioba-1.jpg",
  ],
  description:
    "O bolinho de taioba é um prato típico da culinária caiçara de Caraguatatuba. Preparado com a folha da taioba, muito cultivada e utilizada pelas comunidades locais, ele representa a tradição gastronômica da cidade. Crocante por fora e macio por dentro, o bolinho de taioba é consumido em festas, quiosques e restaurantes familiares, oferecendo aos visitantes uma experiência autêntica do Litoral Norte de São Paulo.",
  location: "Caraguatatuba",
  initialComments: [
    {
      author: "Mariana",
      text: "Esse bolinho me lembra a viagem que fiz a Caraguá, delicioso!",
    },
    {
      author: "João",
      text: "Amei provar no quiosque à beira-mar, super tradicional.",
    },
    {
      author: "Lúcia",
      text: "Perfeito para sentir a cultura caiçara de perto.",
    },
  ],
};

export default function BolinhoDeTaioba() {
  return <DetailScreen {...bolinhoData} actionType="rate" />;
}
