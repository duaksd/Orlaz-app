import React from "react";
import CityPage from "../components/CityPage";

export default function Ilhabela() {
  const placeholderHeader = "https://via.placeholder.com/900x400.png?text=Ilhabela";
  const placeholderMap = "https://via.placeholder.com/300.png?text=Mapa+Ilhabela";

  return (
    <CityPage
      name="Ilhabela"
      headerImage={placeholderHeader}
      mapImage={placeholderMap}
      description="Ilhabela é um arquipélago e município brasileiro no litoral norte do estado de São Paulo, conhecido por suas praias, trilhas e cachoeiras."
      curiosities="Ilhabela significa 'ilha bela'. A região é famosa por suas festas náuticas, mergulho e biodiversidade da Mata Atlântica."
      population="34.610 habitantes"
      area="347,52 km²"
      bestSeason="De 12/12 a 28/02"
      attractions={[
        { name: "Praia do Curral", image: "https://via.placeholder.com/150.png?text=Praia+do+Curral" },
        { name: "Cachoeira do Gato", image: "https://via.placeholder.com/150.png?text=Cachoeira+do+Gato" },
      ]}
      foods={[
        { name: "Peixe na telha", desc: "Prato típico feito com peixes frescos locais.", image: "https://via.placeholder.com/100.png?text=Peixe+na+Telha" },
        { name: "Camarão na moranga", desc: "Especialidade de frutos do mar servida em moranga.", image: "https://via.placeholder.com/100.png?text=Camarao+na+Moranga" },
      ]}
      events={[
        { date: "10/08", title: "Festival de Vela de Ilhabela" },
        { date: "25/12", title: "Natal na Ilha" },
        { date: "01/01", title: "Réveillon Ilhabela" },
      ]}
    />
  );
}
