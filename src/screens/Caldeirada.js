import React from "react";
import DetailScreen from "../components/DetailScreen";

const caldeiradaData = {
  title: "Caldeirada",
  images: [
    "https://ruralea.com/wp-content/uploads/2023/01/fotor_2023-1-21_15_2_13-min.jpg",
    "https://i0.wp.com/files.agro20.com.br/uploads/2020/04/Caldeirada-2.jpg?resize=768%2C565&ssl=1",
    "https://files.agro20.com.br/uploads/2020/04/Caldeirada-1.jpg"
  ],
  description:
    "Clássico prato de frutos do mar com peixe, camarões, lulas e mariscos, envoltos em um molho aromático com tomates, cebolas, pimentões e ervas. Cada colher traz uma mistura rica de sabores do mar.",
  location: "Ilhabela",
  initialComments: [
    {
      author: "Fernanda",
      text: "A caldeirada daqui é bem temperada, servida farta.",
      avatar: "",
    },
    {
      author: "João",
      text: "Molho perfeito, peixes bem frescos!",
      avatar: "",
    },
  ],
};

export default function CaldeiradaScreen() {
  return <DetailScreen {...caldeiradaData} actionType="rate" />;
}
