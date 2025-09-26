import React from "react";
import DetailScreen from "../components/DetailScreen";

const morroData = {
  title: "Morro Santo Antônio",
  images: [
    "https://www.caragua.tur.br/wp-content/uploads/2021/07/INAUGURACAO-SANTO-ANTONIO-506-1024x683.jpg",
    "https://i.ytimg.com/vi/kGCT_RP2T2E/maxresdefault.jpg",
    "https://guiacidade360graus.com.br/wp-content/uploads/2019/09/Morro-de-Santo-Ant%C3%B4nio.jpg",
    "https://www.caragua.tur.br/wp-content/uploads/2021/10/Morro-Sto-Antonio.jpg",
    "https://www.caraguatatuba.sp.gov.br/pmc/wp-content/uploads/2019/08/08_30-Prefeitura-publica-editais-3.jpg"
  ],
  description:
    "O Morro Santo Antônio oferece trilhas desafiadoras e vistas panorâmicas incríveis da cidade e do litoral. Ideal para quem gosta de aventura e contato com a natureza.",
  location: "Caraguatatuba",
  actionType: "favorite",
  initialComments: [
    { author: "Carlos", text: "A vista do topo é sensacional, vale a subida!" },
    { author: "Beatriz", text: "Trilha bem sinalizada e natureza exuberante." },
  ],
};

export default function MorroSantoAntonio() {
  return <DetailScreen {...morroData} />;
}
