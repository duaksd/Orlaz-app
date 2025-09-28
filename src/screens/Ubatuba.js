import React from "react";
import CityPage from "../components/CityPage";
import { useNavigation } from "@react-navigation/native";

export default function Ubatuba() {
  const navigation = useNavigation();
  return (
    <CityPage
      name="Ubatuba"
      headerImage={require("../../assets/images/sobreubatuba.png")}
      mapImage={require("../../assets/images/map-ubatuba.png")}
      description="Ubatuba, oficialmente Estância Balneária de Ubatuba, é um vibrante município do litoral norte de São Paulo, marcado por beleza natural, cultura caiçara e história rica. A cidade foi elevada de vila a cidade em 1855 e se consolidou como um importante destino turístico após a abertura das rodovias que a conectaram à capital."
      curiosities="O nome 'Ubatuba' significa 'lugar de muitas canoas', em Tupi-Guarani, refletindo a tradição pesqueira local."
      population="91.908 habitantes"
      area="723,8 km²"
      bestSeason="De 12/12 a 28/02"
      attractions={[
        { name: "Ruínas da Lagoinha", image: require("../../assets/images/ruinauba.png"), onPress: () => navigation.navigate("RuinasLagoinha") },
        { name: "Praia do Português", image: require("../../assets/images/portuuba.png"), onPress: () => navigation.navigate("PraiaPortugues") },
        { name: "Ilha das Couves", image: require("../../assets/images/couveuba.png"), onPress: () => navigation.navigate("IlhaDasCouves") },
        { name: "Cachoeira do Prumirim", image: require("../../assets/images/cachouba.png"), onPress: () => navigation.navigate("CachoeiraPrumirim") },
      ]}
      foods={[
        { name: "Moqueca Caiçara", desc: "Versão local da moqueca, usando peixe fresco, dendê, leite de coco e ervas regionais.", image: require("../../assets/images/moqueca.png") },
        { name: "Lambe-lambe", desc: "Arroz preparado com mexilhões, tradição local ligada à maricultura.", image: require("../../assets/images/lambe.png") },
        { name: "Lambe-lambe", desc: "Arroz preparado com mexilhões, tradição local ligada à maricultura.", image: require("../../assets/images/lambe.png") },
      ]}
      events={[
        { date: "1/8 á 27/9", title: "16º Festival Gastronômico de Ubatuba" },
        { date: "17/8", title: "Festival Weesp Studio – 2ª edição" },
        { date: "2/9 á 4/9", title: "Festival Caiçarada" },
        { date: "12/9 á 14/9", title: "Feira Gastronômica" }
      ]}
    />
  );
}
