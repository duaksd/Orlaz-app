import React from "react";
import DetailScreen from "../components/DetailScreen";

const jabaquaraData = {
  title: "Praia de Jabaquara",
  images: [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/78/db/e4/photo0jpg.jpg?w=1200&h=-1&s=1",
    "https://imgmd.net/images/v1/guia/1624340/praia-do-jabaquara.jpg",
    "https://www.ilhabela.com.br/wp-content/uploads/2012/11/praia-do-jabaquara-ilhabela-ilhabelacombr-800-e1600181616691.jpg",
    "https://www.ilhabela.com.br/wp-content/uploads/2018/11/passeio-de-escuna-praia-do-jabaquara-ilhabela-maremar-turismo-ciaventura-e1595531418111.jpg",
    "https://www.ilhabela.com.br/wp-content/uploads/2020/07/praia-de-jabaquara-ilhabela-ilhabelacombr-03-e1598565790159.jpg",
  ],
  description:
    "Localizada ao norte de Ilhabela, a Praia de Jabaquara é considerada uma das mais bonitas da ilha. Com mar de águas cristalinas, areia clara e vegetação exuberante, é perfeita para quem busca paisagem paradisíaca e tranquilidade.",
  location: "Ilhabela",
  actionType: "favorite",
  initialComments: [
    {
      author: "Renan",
      text: "Praia linda, a vista é de cartão postal!",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      author: "Amanda",
      text: "Água cristalina, perfeita!!",
      avatar:
        "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      author: "Victor",
      text: "É um pouco afastada, mas compensa muito.",
      avatar:
        "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

export default function PraiaJabaquara() {
  return <DetailScreen {...jabaquaraData} />;
}
