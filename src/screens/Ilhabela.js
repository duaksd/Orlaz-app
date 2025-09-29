import React from "react";
import CityPage from "../components/CityPage";
import { useNavigation } from "@react-navigation/native";

export default function Ilhabela() {
  const navigation = useNavigation();
  return (
    <CityPage
      name="Ilhabela"
      headerImage={require("../../assets/images/sobreilhabela.png")}
      mapImage={require("../../assets/images/map-ilhabela.png")}
      description="Ilhabela é um arquipélago e município brasileiro no litoral norte do estado de São Paulo, conhecido por suas praias, trilhas e cachoeiras."
      curiosities="Ilhabela significa 'ilha bela'. A região é famosa por suas festas náuticas, mergulho e biodiversidade da Mata Atlântica."
      population="34.610 habitantes"
      area="347,52 km²"
      bestSeason="De 12/12 a 28/02"
      attractions={[
        { name: "Praia do Bonete", image: require("../../assets/images/boneilha.png"), onPress: () => navigation.navigate("PraiaBonete") },
        { name: "Praia de Jabaquara", image: require("../../assets/images/jabailha.png"), onPress: () => navigation.navigate("PraiaJabaquara") },
        { name: "Praia do Julião", image: require("../../assets/images/juilha.png"), onPress: () => navigation.navigate("PraiaJuliao") },
        { name: "Baía de Castelhanos", image: require("../../assets/images/casteilha.png"), onPress: () => navigation.navigate("Castelhanos") },
      ]}
      foods={[
        { name: "Peixe assado na Folha de Bananeira", desc: "Peixe temperado com limão, sal e coentro, embalado em folha de bananeira para assar de forma saborosa e artesanal.", image: require("../../assets/images/peixe-bananeira.jpeg"), onPress: () => navigation.navigate("PeixeAssado") },
        { name: "Caldeirada", desc: "Preparada com polvo, lula, mariscos, badejo etc., reflete uma herança caiçara forte na culinária local.", image: require("../../assets/images/caldeirada.jpg"), onPress: () => navigation.navigate("Caldeirada") },
      ]}
      events={[
        { date: "14/8 á 31/8", title: "Boteco do Camarão" },
        { date: "1/8 á 31/8", title: "Temporada de Observação de Cetáceos" },
        { date: "23/8", title: "Aniversário de Ilhabela" },
        { date: "8/9 á 14/9", title: "Ilhabela Bird Week" },
      ]}
    />
  );
}
