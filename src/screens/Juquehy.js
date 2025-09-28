import React from "react";
import DetailScreen from "../components/DetailScreen";

const juquehyData = {
  title: "Praia de Juquehy",
  images: [
    "https://www.viagenscinematograficas.com.br/wp-content/uploads/2022/10/Juquehy-O-que-Fazer-Praias-Capa.jpg",
    "https://imgmd.net/images/v1/guia/1698992/praia-de-juquehy.jpg",
    "https://viagemeturismo.abril.com.br/wp-content/uploads/2020/01/gettyimages-697420406.jpg?crop=1&resize=1212,909",
    "https://www.turismosaosebastiao.com.br/resources/uploads/Praia/4bdcf442-311b-42c7-8161-f2f94386b050/PRAIA%20DE%20JUQUEHY.jpg",
    "https://www.viagenscinematograficas.com.br/wp-content/uploads/2022/10/Praia-Juquehy-O-que-Fazer-5.jpg",
  ],
  description:
    "A Praia de Juquehy é uma das mais conhecidas e charmosas de São Sebastião. Com areias claras e mar tranquilo em algumas partes e ondas fortes em outras, agrada tanto famílias quanto surfistas. O local conta com boa infraestrutura de bares, restaurantes e pousadas, além de um belo pôr do sol.",
  location: "São Sebastião",
  actionType: "favorite", // botão será 'Favoritar'
  initialComments: [
    {
      author: "Fernanda",
      text: "Praia linda, ótima para relaxar e curtir com a família.",
      avatar:
        "https://images.unsplash.com/photo-1719234522495-827222f1bc0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      author: "Ricardo",
      text: "Excelente para surfar e também para aproveitar bons restaurantes.",
      avatar:
        "https://plus.unsplash.com/premium_photo-1683639442717-d143b1771f33?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      author: "Luiza",
      text: "O pôr do sol aqui é simplesmente inesquecível!",
      avatar:
        "https://plus.unsplash.com/premium_photo-1679926617445-c0ae40de487a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

export default function PraiaJuquehy() {
  return <DetailScreen {...juquehyData} />;
}
