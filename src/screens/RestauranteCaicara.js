import React from "react";
import DetailScreen from "../components/DetailScreen";

const caicarasData = {
  title: "Restaurante Caiçara's",
  images: [
    "https://example.com/caicaras1.jpg",
    "https://example.com/caicaras2.jpg",
    "https://example.com/caicaras3.jpg",
  ],
  description:
    "O Caiçara's oferece pratos típicos da culinária caiçara, preparados com frutos do mar frescos e temperos regionais. Entre os destaques estão o peixe na folha de bananeira, moquecas e caldeiradas que trazem o verdadeiro sabor do litoral norte paulista.",
  location: "Caraguatatuba",
  initialComments: [
    {
      author: "Mariana",
      text: "A moqueca é sensacional, recomendo para todos os visitantes!",
      avatar: "",
    },
    {
      author: "Thiago",
      text: "Ótima comida e atendimento excelente. Voltarei com certeza!",
      avatar: "",
    },
  ],
};

export default function CaicarasScreen() {
  return <DetailScreen {...caicarasData} actionType="rate" />;
}
