import React from "react";
import DetailScreen from "../components/DetailScreen";

const praiaPortuguesData = {
  title: "Praia do Português",
  images: [
    "https://imgmd.net/images/v1/guia/1616649/praia-do-portugues-prainha-do-felix.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-s/11/e5/78/8e/praia-do-portugues-portuguese.jpg",
    "https://imgmd.net/images/v1/guia/1616650/praia-do-portugues-prainha-do-felix.jpg",
  ],
  description:
    "Pequena e charmosa, a Praia do Português é um refúgio escondido em Ubatuba. Com águas cristalinas e cercada por pedras, é ideal para quem busca tranquilidade e contato íntimo com a natureza.",
  location: "Ubatuba",
  actionType: "favorite",
  initialComments: [
    {
      author: "Káká",
      text: "Um verdadeiro paraíso escondido!",
      avatar:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=687&auto=format&fit=crop",
    },
    {
      author: "Tiago",
      text: "Difícil acesso, mas vale muito a pena.",
      avatar:
        "",
    },
  ],
};

export default function PraiaPortugues() {
  return <DetailScreen {...praiaPortuguesData} />;
}
