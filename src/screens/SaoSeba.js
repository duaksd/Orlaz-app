import React from "react";
import CityPage from "../components/CityPage";

export default function SaoSebastiao() {
  const placeholderHeader = "https://via.placeholder.com/900x400.png?text=Sao+Sebastiao";
  const placeholderMap = "https://via.placeholder.com/300.png?text=Mapa+Sao+Sebastiao";

  return (
    <CityPage
      name="São Sebastião"
      headerImage={placeholderHeader}
      mapImage={placeholderMap}
      description="São Sebastião é uma cidade litorânea do estado de São Paulo, conhecida por suas praias, ilhas e pela gastronomia de frutos do mar."
      curiosities="O município possui mais de 36 praias e é porta de entrada para a famosa Ilha de Toque-Toque Grande, muito procurada por turistas."
      population="90.989 habitantes"
      area="402,9 km²"
      bestSeason="De 12/12 a 28/02"
      attractions={[
        { name: "Praia de Maresias", image: "https://via.placeholder.com/150.png?text=Maresias" },
        { name: "Ilha de Toque-Toque", image: "https://via.placeholder.com/150.png?text=Toque-Toque" },
      ]}
      foods={[
        { name: "Peixe assado na brasa", desc: "Preparado com peixes frescos locais, temperos da região.", image: "https://via.placeholder.com/100.png?text=Peixe+Assado" },
        { name: "Camarão ao alho e óleo", desc: "Prato típico muito consumido nas praias de São Sebastião.", image: "https://via.placeholder.com/100.png?text=Camarao" },
      ]}
      events={[
        { date: "15/01", title: "Festival de Surf de Maresias" },
        { date: "20/02", title: "Carnaval de Rua" },
        { date: "12/10", title: "Festa de Nossa Senhora do Rosário" },
      ]}
    />
  );
}
