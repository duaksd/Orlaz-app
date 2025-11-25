import React from "react";
import DetailScreen from "../../../components/DetailScreen";

const surfData = {
  title: "Surf",
  images: [
    "https://cdn.atletis.com.br/atletis-website/base/6e0/e24/295/surf-regras.jpg",
    "https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ijUJjUrn_GEsoQIjMD4GeJXDQ8nWf5KcYw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-oy9tonpg7TrhYCMUX04U-nDRLkRJHCBUw&s",
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