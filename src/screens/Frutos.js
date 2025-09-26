import React from "react";
import DetailScreen from "../components/DetailScreen";

const frutosDoMarData = {
  title: "Frutos do mar em geral",
  images: [
    "https://www.estadao.com.br/resizer/v2/JUA7VYWUIBCR5MSZYBN5NU4LSQ.jpeg?quality=80&auth=ab79196d1ad1d12933e744d16372871079d040ea934cbc8929c4aa6aeadfe23d&width=1200&height=630&smart=true",
    "https://assai.com.br/sites/default/files/styles/blog_destaque/public/blog/shutterstock_1564684924.jpg?itok=TsEiYByb",
    "https://www.portal27.com.br/wp-content/uploads/2022/10/Festival-Capixaba-de-Frutos-do-Mar-1536x1152.jpeg",
  ],
  description:
    "Experimente os melhores frutos do mar da região, preparados com temperos frescos e ingredientes locais. De camarões a mexilhões, lulas e mariscos, cada prato traz o sabor autêntico do litoral, ideal para quem quer uma refeição saborosa à beira-mar. Aproveite também para experimentar diferentes combinações e receitas típicas que encantam turistas e moradores locais.",
  location: "Caraguatatuba",
  initialComments: [
    {
      author: "Ana",
      text: "Os frutos do mar daqui são incríveis, super frescos!",
      avatar: "",
    },
    {
      author: "Pedro",
      text: "Adoro o camarão grelhado, sempre volto para provar.",
      avatar: "",
    },
    {
      author: "Clara",
      text: "Tudo muito bem preparado e saboroso, recomendo!",
      avatar: "",
    },
  ],
};

export default function FrutosDoMar() {
  return <DetailScreen {...frutosDoMarData} actionType="rate" />;
}
