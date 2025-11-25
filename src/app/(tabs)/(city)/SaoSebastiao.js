import React from "react";
import CityPage from "../../../components/CityPage.js"
import { useNavigation } from "@react-navigation/native";
import { useRouter } from 'expo-router';

export default function SaoSebastiao() {
  const navigation = useNavigation();
  const router = useRouter();

  const navTo = (screenName) => {
    try {
      if (router && typeof router.push === 'function') {
        router.push(`/${screenName}`);
        return;
      }
    } catch (e) {
      // fallback
    }
    navigation.navigate(screenName);
  };

  return (
    <CityPage
      name="São Sebastião"
      headerImage={require("../../../../assets/images/sobresaoseba.png")}
      mapImage={require("../../../../assets/images/map-saoseba.png")}
      description="São Sebastião é um dos municípios mais antigos e ricos em história do Litoral Norte de São Paulo. Fundado em 1636, tornou-se uma estância balneária, destacando-se por sua diversidade turística, paisagens naturais, patrimônio histórico e cultura caiçara"
      curiosities="O município possui mais de 36 praias e é porta de entrada para a famosa Ilha de Toque-Toque Grande, muito procurada por turistas."
      population="90.989 habitantes"
      area="402,9 km²"
      bestSeason="De 12/12 a 28/02"
      attractions={[
        { name: "Centro Histórico", image: require("../../../../assets/images/histoseba.png"), onPress: () => navTo("CentroHistorico") },
        { name: "Praia de Juquehy", image: require("../../../../assets/images/juquehyseba.png"), onPress: () => navTo("Juquehy") },
        { name: "Praia de Maresias", image: require("../../../../assets/images/mareseba.png"), onPress: () => navTo("Maresias") },
        { name: "Praia de Toque-Toque Grande", image: require("../../../../assets/images/toqueseba.png"), onPress: () => navTo("ToqueToque") },
      ]}
      foods={[
        { name: "Peixe Salgado e Seco no Varal", desc: "Preservação artesanal do pescado através da salga e secagem ao sol, sem conservantes, ainda praticada pelas famílias locais", image: require("../../../../assets/images/peixe-salgado.jpg"), onPress: () => navTo("PeixeSalgado") },
        { name: "Camarão na Moranga", desc: "Abóbora recheada com creme de camarão e queijo.", image: require("../../../../assets/images/camarao-moranga.jpg"), onPress: () => navTo("CamaraoMoranga") },
      ]}
      events={[
        { date: "1/8 á 17/8", title: "Festival Colorides" },
        { date: "14/8 á 16/8", title: "Etapa do Circuito Colegial de Surf" },
        { date: "23/8", title: "Intercâmbio de Capoeira Brasil e Chile" },
        { date: "6/9 á 7/9", title: "13º Campeonato Lisfuts" }
      ]}
    />
  );
}
