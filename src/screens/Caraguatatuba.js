import React from "react";
import CityPage from "../components/CityPage";

import headerImage from "../../assets/images/sobrecaragua.png";
import mapImg from "../../assets/images/map-caragua.png";

export default function Caraguatatuba() {
  return (
    <CityPage
      name="Caraguatatuba"
      headerImage={headerImage} 
      mapImage={mapImg}
      description="Caraguatatuba, conhecida como 'Caraguá', é uma cidade litorânea no estado de São Paulo, que integra a Região Metropolitana do Vale do Paraíba e Litoral Norte."
      curiosities="Caraguatatuba significa 'lugar de muitas caraguatás', uma planta com folhas serrilhadas típica da Mata Atlântica, bastante comum na região entre Ubatuba e São Sebastião."
      population="134.873 habitantes"
      area="484,947 km²"
      bestSeason="De 02/01 a 01/03"
      attractions={[
        { name: "Parque Estadual da Serra do Mar", image: require("../../assets/images/parque.jpg") },
        { name: "Praia Martim de Sá", image: require("../../assets/images/martimdesa.jpg") },
      ]}
      foods={[
        { name: "Bolinho de Taioba", desc: "Tradicional prato feito com a planta típica da Mata Atlântica.", image: require("../../assets/images/bolinho.jpg") },
        { name: "Mexilhões", desc: "Muito consumidos na região, preparados de diversas formas.", image: require("../../assets/images/mexilhao.jpg") },
        { name: "Frutos do mar em geral", desc: "Grande variedade de pratos com pescados frescos.", image: require("../../assets/images/frutos.jpeg") },
      ]}
      events={[
        { date: "1/8 á 7/9", title: "20º Caraguá a Gosto" },
        { date: "14/8 á 16/8", title: "7º AVIVA Caraguá" },
        { date: "23/8", title: "7º Caraguá Extreme Fest Rock" },
        { date: "6/9 á 7/9", title: "7º Caraguá Beach Car" }
      ]}
    />
  );
}
