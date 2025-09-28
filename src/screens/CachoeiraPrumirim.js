import React from "react";
import DetailScreen from "../components/DetailScreen";

const cachoeiraPrumirimData = {
  title: "Cachoeira do Prumirim",
  images: [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/81/68/02/cachoeira-do-prumirim.jpg?w=1200&h=-1&s=1",
    "https://i0.wp.com/ckturistando.com.br/wp-content/uploads/2019/03/cachoeira-do-prumirim-em-ubatuba-litoral-sao-paulo-06.jpg?resize=1140%2C608&ssl=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvWEIfl9DgYy03KYfVZdDcLKuPyZAzmO5Qpw&s",
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/37/59/00/cachoeira-do-prumirim.jpg",
  ],
  description:
    "A Cachoeira do Prumirim é um dos pontos turísticos mais visitados de Ubatuba. Suas quedas d’água formam poços ideais para banho, cercados pela exuberante Mata Atlântica. Local perfeito para se refrescar em meio à natureza.",
  location: "Ubatuba",
  actionType: "favorite",
  initialComments: [
    {
      author: "Felipe",
      text: "Água gelada e refrescante, experiência única!",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=687&auto=format&fit=crop",
    },
    {
      author: "Patrícia",
      text: "Contato incrível com a natureza, super recomendo.",
      avatar:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop",
    },
  ],
};

export default function CachoeiraPrumirim() {
  return <DetailScreen {...cachoeiraPrumirimData} />;
}
