import React from "react";
import DetailScreen from "../components/DetailScreen";

const cocanhaData = {
  title: "Praia da Cocanha",
  images: [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/ac/df/f9/ilha-da-cocanha.jpg?w=1200&h=-1&s=1",
    "https://www.caragua.tur.br/wp-content/uploads/2021/07/Praia-da-Cocanha-6.jpg",
    "https://www.caragua.tur.br/wp-content/uploads/2021/07/Praia-da-Cocanha-5.jpg",
    "https://www.viajali.com.br/wp-content/uploads/2021/01/praia-da-cocanha-11.jpg",
  ],
  description:
    "A Praia da Cocanha é conhecida por sua água calma e areia clara, ideal para famílias e esportes aquáticos. Possui quiosques e fácil acesso, tornando-se um dos destinos favoritos de Caraguatatuba.",
  location: "Caraguatatuba",
  actionType: "rate",
  initialComments: [
    { author: "Lucas", text: "Adoro vir aqui com a família, super tranquila!" },
    { author: "Fernanda", text: "A água é maravilhosa e os quiosques são ótimos." },
  ],
};

export default function PraiaDaCocanha() {
  return <DetailScreen {...cocanhaData} />;
}
