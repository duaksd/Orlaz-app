import React from "react";
import DetailScreen from "../components/DetailScreen";

const toqueToqueGrandeData = {
  title: "Praia de Toque Toque Grande",
  images: [
    "https://www.carpemundi.com.br/wp-content/uploads/2022/03/toque-toque-grande-sp.jpg",
    "https://www.turismosaosebastiao.com.br/resources/uploads/Praia/5a2ccbb3-4b51-4063-8b57-bb2a36cb01a6/Foto%20Marcos%20Bonello.jpg",
    "https://www.carpemundi.com.br/wp-content/uploads/2022/03/paisagem-toque-toque-grande.jpg",
    "https://img1.wsimg.com/isteam/ip/48999bc8-f026-4401-a08c-054495643998/IMG_6376.jpeg",
    "https://www.essemundoenosso.com.br/wp-content/uploads/2021/05/praia-toque-toque-grande-4.jpg",
  ],
  description:
    "A Praia de Toque Toque Grande é conhecida pelo ambiente tranquilo e pelas águas claras, ideais para banho e mergulho. Rodeada por morros verdes, oferece um cenário paradisíaco e restaurantes especializados em frutos do mar, tornando-se uma ótima opção para quem busca sossego e boa gastronomia.",
  location: "São Sebastião",
  actionType: "favorite", // botão será 'Favoritar'
  initialComments: [
    {
      author: "Marcela",
      text: "Lugar calmo e lindo, perfeito para descansar e curtir a natureza.",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      author: "André",
      text: "Os restaurantes de frutos do mar são incríveis, recomendo demais!",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      author: "Paula",
      text: "Água limpa e ambiente tranquilo, ideal para relaxar em casal.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

export default function PraiaToqueToqueGrande() {
  return <DetailScreen {...toqueToqueGrandeData} />;
}
