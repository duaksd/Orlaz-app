import React from "react";
import DetailScreen from "../components/DetailScreen";

const peixeSalgadoData = {
  title: "Peixe Salgado e Seco no Varal",
  images: [
    "https://64.media.tumblr.com/a011fe53ee81f1a3ea57082aa9a3d48d/tumblr_opt6niDOKK1sezrveo3_1280.jpg",
    "https://64.media.tumblr.com/f3ab11ed2e62292ed179f7bc2f1c4722/tumblr_opt6niDOKK1sezrveo2_1280.jpg",
  ],
  description:
    "O peixe salgado e seco no varal é uma tradição caiçara que garante conservação natural e sabor intenso. Os pescadores utilizam sal grosso e a secagem ao sol, resultando em um alimento que pode ser preparado de diversas formas ou consumido como iguaria típica.",
  location: "São Sebastião",
  initialComments: [
    {
      author: "Renato",
      text: "Tradição antiga que dá um gosto único ao peixe.",
      avatar: "",
    },
    {
      author: "Sofia",
      text: "Ótimo para acompanhar pratos simples do dia a dia.",
      avatar: "",
    },
  ],
};

export default function PeixeSalgadoScreen() {
  return <DetailScreen {...peixeSalgadoData} actionType="rate" />;
}
