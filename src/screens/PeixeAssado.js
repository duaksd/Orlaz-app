import React from "react";
import DetailScreen from "../components/DetailScreen";

const peixeFolhaData = {
  title: "Peixe Assado na Folha de Bananeira",
  images: [
    "https://espetinhodesucesso.com.br/wp-content/uploads/2022/04/Peixe-na-folha-de-bananeira.jpg", // só exemplo — ideal substituir por URL direta de imagem
    "https://img.freepik.com/premium-photo/delicious-fried-fish-closeup_392895-316405.jpg",
  ],
  description:
    "Peixe suculento temperado com limão, ervas e especiarias, embrulhado em folha de bananeira e assado lentamente. A técnica preserva o sabor natural e adiciona aroma especial de brasa.",
  location: "Ilhabela",
  initialComments: [
    {
      author: "Marcos",
      text: "Esse prato é sensacional.. a folha não interfere no sabor, só eleva o charme",
      avatar: "",
    },
    {
      author: "Luciana",
      text: "Um dos meus favoritos aqui no litoral.",
      avatar: "",
    },
  ],
};

export default function PeixeFolhaScreen() {
  return <DetailScreen {...peixeFolhaData} actionType="rate" />;
}
