import React from "react";
import CityPage from "../components/CityPage";

// importa só o que já tem
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
        { name: "Parque Estadual da Serra do Mar", image: "https://i.ibb.co/VQ6sXJQ/parque.jpg" },
        { name: "Praia Martim de Sá", image: "https://i.ibb.co/qFgG5dQ/praia.jpg" },
      ]}
      foods={[
        { name: "Bolinho de taioba", desc: "Tradicional prato feito com a planta típica da Mata Atlântica.", image: "https://i.ibb.co/hRrr9kB/bolinho.jpg" },
        { name: "Mexilhões", desc: "Muito consumidos na região, preparados de diversas formas.", image: "https://i.ibb.co/tx2KywQ/mexilhoes.jpg" },
        { name: "Frutos do mar em geral", desc: "Grande variedade de pratos com pescados frescos.", image: "https://i.ibb.co/4JrPkHR/frutos.jpg" },
      ]}
      events={[
        { date: "10/01", title: "Caraguá Summer Fest" },
        { date: "15/02", title: "Carnaval de Rua" },
        { date: "20/07", title: "Festival de Inverno" },
      ]}
    />
  );
}
