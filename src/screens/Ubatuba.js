import React from "react";
import CityPage from "../components/CityPage";

export default function Ubatuba() {
  const placeholderHeader = "https://via.placeholder.com/900x400.png?text=Ubatuba";
  const placeholderMap = "https://via.placeholder.com/300.png?text=Mapa+Ubatuba";

  return (
    <CityPage
      name="Ubatuba"
      headerImage={placeholderHeader}
      mapImage={placeholderMap}
      description="Ubatuba é uma cidade litorânea de São Paulo, conhecida por suas mais de 100 praias e rica biodiversidade da Mata Atlântica."
      curiosities="O nome 'Ubatuba' significa 'lugar de muitas canoas', em Tupi-Guarani, refletindo a tradição pesqueira local."
      population="91.908 habitantes"
      area="723,8 km²"
      bestSeason="De 12/12 a 28/02"
      attractions={[
        { name: "Praia Grande", image: "https://via.placeholder.com/150.png?text=Praia+Grande" },
        { name: "Projeto Tamar", image: "https://via.placeholder.com/150.png?text=Projeto+Tamar" },
      ]}
      foods={[
        { name: "Camarão na moranga", desc: "Prato típico com camarões frescos servidos dentro de abóbora.", image: "https://via.placeholder.com/100.png?text=Camarao+Moranga" },
        { name: "Peixe frito com pirão", desc: "Peixe fresco frito servido com pirão de peixe.", image: "https://via.placeholder.com/100.png?text=Peixe+Frito" },
      ]}
      events={[
        { date: "10/01", title: "Festival de Surf de Ubatuba" },
        { date: "15/02", title: "Carnaval de Rua" },
        { date: "20/07", title: "Festival de Frutos do Mar" },
      ]}
    />
  );
}
