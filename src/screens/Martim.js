import React from "react";
import DetailScreen from "../components/DetailScreen";

const praiaData = {
  title: "Praia Martim de Sá",
  images: [
    "https://guiacidade360graus.com.br/wp-content/uploads/2019/09/CAPA.jpg",
    "https://www.viajali.com.br/wp-content/uploads/2021/06/praia-de-martim-de-sa-1.jpg",
    "https://naturam.com.br/wp-content/uploads/2020/05/martim-de-sa-praia-proxima-prainha-caraguatatuba-naturam.jpg",
    "https://www.caragua.tur.br/wp-content/uploads/2021/07/Martim-de-Sa-Destaque-e1643140985754.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/34/78/dc/praia-martin-de-sa.jpg?w=1200&h=-1&s=1",
  ],
  description:
    "A Praia Martim de Sá é perfeita para banho de mar, esportes na areia e para passar momentos relaxantes em família ou com amigos. Possui quiosques, fácil acesso e é um ponto tradicional de Caraguatatuba para quem busca diversão e contato com a natureza.",
  location: "Caraguatatuba",
  actionType: "favorite", // botão será 'Favoritar'
  initialComments: [
    { author: "Ana", text: "Adoro essa praia, muito limpa e bonita!", avatar: "https://tse2.mm.bing.net/th/id/OIP.5LZIBEVlZ9LZ1UyG-qNA1QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { author: "Pedro", text: "Perfeito para levar as crianças, excelente infraestrutura.", avatar: "https://img.freepik.com/fotos-premium/turista-feliz-tirando-foto-de-selfie-em-amsterda_941600-12347.jpg" },
    { author: "Clara", text: "O pôr do sol aqui é incrível!", avatar: "https://tse2.mm.bing.net/th/id/OIP.fjHauIM0xuX8tcJCMoM6ZgHaE8?w=1500&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3" },
  ],
};

export default function PraiaMartimDeSa() {
  return <DetailScreen {...praiaData} />;
}
