import React from "react";
import DetailScreen from "../components/DetailScreen";

const surfData = {
  title: "Surf",
  images: [
    "https://th.bing.com/th/id/OIP.vR4YH01PFvPiQqw1nZJsJQHaE8?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.d4AQwPFORYVSN3GOPZwaTwHaE8?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.qRCW8P7-XpxM9BLOwd9sTwHaE8?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.X8fXjHF6Yd8nN5nEmwJ76QHaE7?rs=1&pid=ImgDetMain",
  ],
  description: 
    "Ubatuba é conhecida como a capital do surf, com praias perfeitas para surfistas de todos os níveis. As praias como Itamambuca, Vermelha do Norte e Félix oferecem excelentes condições para a prática do esporte durante todo o ano.",
  location: "Ubatuba",
  actionType: "favorite",
  initialComments: [
    {
      author: "Pedro",
      text: "Ondas perfeitas para surf!"
    },
    {
      author: "Ana",
      text: "Ótimo lugar para iniciantes e profissionais"
    }
  ]
};

export default function Surf() {
  return <DetailScreen {...surfData} />;
}
