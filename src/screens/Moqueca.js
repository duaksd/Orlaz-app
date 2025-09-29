import React from "react";
import DetailScreen from "../components/DetailScreen";

const moquecaCaicaraData = {
  title: "Moqueca Caiçara",
  images: [
    "https://img.taste.com.au/bGVvI3El/taste/2016/11/moqueca-de-peixe-57539-1.jpeg",
    "https://descomplicandoreceitas.com.br/wp-content/uploads/2022/12/Moqueca-de-peixe-com-camarao-capa2-w.webp",
  ],
  description:
    "A moqueca caiçara é preparada com peixe fresco, tomates, cebolas, pimentões, coentro e leite de coco, cozidos lentamente em panela de barro. Um prato típico do litoral paulista, cheio de sabor e tradição, perfeito para compartilhar à mesa.",
  location: "Ubatuba",
  initialComments: [
    {
      author: "Juliana",
      text: "A moqueca caiçara tem um tempero único, muito leve e saboroso.",
      avatar: "",
    },
    {
      author: "Carlos",
      text: "Lembra muito os almoços de domingo em família.",
      avatar: "",
    },
  ],
};

export default function MoquecaCaicaraScreen() {
  return <DetailScreen {...moquecaCaicaraData} actionType="rate" />;
}
