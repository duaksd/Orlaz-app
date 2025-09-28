import React from "react";
import DetailScreen from "../components/DetailScreen";

const ilhaDasCouvesData = {
  title: "Ilha das Couves",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/e/ef/6_ILHA_DAS_COUVES_-_UBATUBA.jpg",
    "https://viajandocomamalarosa.com.br/wp-content/uploads/2019/12/fc3f80a2-fe01-44b8-936b-033bc9e4b801.jpg",
    "https://cdn.ubatubaguide.com.br/ilhas/trans/ilha-das-couves-ubatuba.jpg",
    "https://imgmd.net/images/v1/guia/1617387/ilha-das-couves.jpg"
  ],
  description:
    "A Ilha das Couves é um dos destinos mais famosos de Ubatuba. Com águas cristalinas e ótima visibilidade, é perfeita para mergulho, snorkeling e passeios de barco. Lugar paradisíaco e muito procurado pelos turistas.",
  location: "Ubatuba",
  actionType: "favorite",
  initialComments: [
    {
      author: "Patrícia",
      text: "Água cristalina, parece o Caribe brasileiro!",
      avatar:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop",
    },
    {
      author: "André",
      text: "Vale muito o passeio de barco, inesquecível.",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=687&auto=format&fit=crop",
    },
  ],
};

export default function IlhaDasCouves() {
  return <DetailScreen {...ilhaDasCouvesData} />;
}
