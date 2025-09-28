import React from "react";
import DetailScreen from "../components/DetailScreen";

const centroHistoricoData = {
  title: "Centro Histórico de São Sebastião",
  images: [
    "https://todososcaminhos.com/wp-content/uploads/2021/11/centro-historico-de-sao-sebastiao-todos-os-caminhos-2-scaled.jpg",
    "https://rotasecidades.com.br/wp-content/uploads/2022/10/DJI_0472_ALT-1024x768.png",
    "https://www.viagensecaminhos.com/wp-content/uploads/2012/01/sao-sebastiao-centro-historico.jpg",
    "https://www.turismosaosebastiao.com.br/resources/uploads/Estabelecimento/c818db3b-a9c6-4620-95e0-aba44399c178/Igreja%20Matriz%20(1).JPG",
    "https://todososcaminhos.com/wp-content/uploads/2021/11/centro-historico-de-sao-sebastiao-todos-os-caminhos-5-1-scaled.jpg",
  ],
  description:
    "O Centro Histórico de São Sebastião preserva casarões coloniais dos séculos XVII e XVIII, igrejas e praças charmosas que contam a história da cidade. É um local ideal para passeios culturais, caminhadas tranquilas e para apreciar a gastronomia típica em bares e restaurantes da região.",
  location: "São Sebastião",
  actionType: "favorite", // botão será 'Favoritar'
  initialComments: [
    {
      author: "Mariana",
      text: "Adorei conhecer os casarões antigos, lugar cheio de história!",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      author: "José Hernesto",
      text: "Passeio ótimo para o fim de tarde, e os restaurantes são muito bons.",
      avatar:
        "https://images.unsplash.com/photo-1555888997-03e986fc157b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      author: "Carla Lorete",
      text: "Ambiente encantador, parece que voltamos no tempo.",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

export default function CentroHistorico() {
  return <DetailScreen {...centroHistoricoData} />;
}
