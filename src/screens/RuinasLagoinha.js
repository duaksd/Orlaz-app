import React from "react";
import DetailScreen from "../components/DetailScreen";

const ruinasLagoinhaData = {
  title: "Ruínas da Lagoinha",
  images: [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/64/62/d0/ruinas-da-lagoinha.jpg?w=1200&h=-1&s=1",
    "https://turismo.ubatuba.sp.gov.br/wp-content/uploads/sites/29/2015/01/ruinas2.jpg",
    "https://fundart.com.br/wp-content/uploads/2013/05/lagoinha-15.jpg",
  ],
  description:
    "As Ruínas da Lagoinha são vestígios de um antigo engenho do século XIX em Ubatuba. Local histórico que mistura natureza e cultura, ótimo para caminhadas e fotos, cercado pela Mata Atlântica.",
  location: "Ubatuba",
  actionType: "favorite",
  initialComments: [
    {
      author: "Cláudio",
      text: "Lugar histórico incrível, cercado por natureza.",
      avatar:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=687&auto=format&fit=crop",
    },
    {
      author: "Rafael",
      text: "Passeio cultural e tranquilo, recomendo!",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop",
    },
  ],
};

export default function RuinasLagoinha() {
  return <DetailScreen {...ruinasLagoinhaData} />;
}
