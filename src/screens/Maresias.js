import React from "react";
import DetailScreen from "../components/DetailScreen";

const maresiasData = {
  title: "Praia de Maresias",
  images: [
    "https://www.viagenscinematograficas.com.br/wp-content/uploads/2022/09/Maresias-O-que-Fazer.jpg",
    "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/09/maresias-01.jpg",
    "https://www.viagenscinematograficas.com.br/wp-content/uploads/2017/05/O-que-fazer-Maresias-SP.jpg",
    "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/08/jureia-melhores-praias-de-sao-sebastiao.jpg",
    "https://loucosporpraia.com.br/images/000126-1726180123.jpg",
    "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/08/praias-de-sao-sebastiao-barra-do-sahy.jpg"
  ],
  description:
    "A Praia de Maresias é uma das mais famosas do Litoral Norte de São Paulo, conhecida pelas ondas fortes que atraem surfistas do mundo todo. Além do mar agitado, oferece uma boa infraestrutura de bares, restaurantes, pousadas e uma vida noturna agitada, tornando-se um dos destinos preferidos de jovens e turistas que buscam diversão e energia.",
  location: "São Sebastião",
  actionType: "favorite", // botão será 'Favoritar'
  initialComments: [
    {
      author: "Thiago",
      text: "Melhor praia para surfar! As ondas são incríveis.",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      author: "Bianca",
      text: "Adorei a estrutura da praia, cheia de bares e restaurantes legais.",
      avatar:
        "https://images.unsplash.com/photo-1664312600245-d81c7c43ec66?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      author: "Gabriel",
      text: "Além do mar, a vida noturna de Maresias é sensacional!",
      avatar:
        "https://plus.unsplash.com/premium_photo-1664302930349-968458b059da?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

export default function PraiaMaresias() {
  return <DetailScreen {...maresiasData} />;
}
