import React from "react";
import DetailScreen from "../components/DetailScreen";

const parqueData = {
  title: "Parque Estadual da Serra do Mar",
  images: [
    "https://th.bing.com/th/id/R.ae7038db8183c7c799b1e0ae30f6e62c?rik=qHHp8NevEtFU%2bA&pid=ImgRaw&r=0",
    "https://smastr16.blob.core.windows.net/guiadeapshomolog/2019/08/ucatrativo_i26b90958-090d-4b95-9e06-d13438ee469e.jpg",
    "https://th.bing.com/th/id/OLC.zX9cnvRSPxC9aw480x360?w=323&h=200&c=8&rs=1&qlt=90&o=6&cdv=1&pid=Local",
    "https://www.caraguatatuba.sp.gov.br/pmc/wp-content/uploads/2022/05/1-59.jpg",
    "https://photo620x400.mnstatic.com/738bfdc64316422e9b2fbb510c6c72c7/parque-estadual-serra-do-mar-_-nucleo-caraguatatuba.jpg",
  ],
  description:
    "O Parque Estadual da Serra do Mar preserva a Mata Atlântica e oferece trilhas, cachoeiras e mirantes para os visitantes. Aproveite para explorar os mirantes e as trilhas ecológicas do núcleo de Caraguatatuba, que proporcionam contato direto com a natureza e vistas incríveis da Mata Atlântica.",
  location: "Caraguatatuba",
  actionType: "favorite", 
  initialComments: [
    {
      author: "João",
      text: "Lugar incrível para fazer trilhas!",
    },
    {
      author: "Maria",
      text: "As cachoeiras são maravilhosas.",
      avatar: "https://tse3.mm.bing.net/th/id/OIP.lXXgnDNCvTqSAzOg1qiw2AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
  ],
};

export default function ParqueEstadual() {
  return <DetailScreen {...parqueData} />;
}
