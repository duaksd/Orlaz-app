import React from "react";
import DetailScreen from "../components/DetailScreen";

const boneteData = {
  title: "Praia do Bonete",
  images: [
    "https://www.ilhabela.com.br/wp-content/uploads/2012/11/praia-do-bonete.jpg",
    "https://www.guiaviagensbrasil.com/imagens/mar-azul-praia-do-bonete-ilhabela-sp.jpg",
    "https://guiadoviajante.com/uploads/2010/12/praia-do-bonete-4.JPG",
    "https://www.ilhabela.com.br/wp-content/uploads/2020/07/Praia_do_Bonete_em_Ilhabela_Wikimedia_Commons-Thiago_Sieiro_Cunha-e1598567386468.jpg",
    "https://arquipelagoilhabela.com.br/wp-content/uploads/2021/01/Bonete_14.jpg",
  ],
  description:
    "A Praia do Bonete é uma das mais famosas e preservadas de Ilhabela. Com acesso por trilha ou barco, encanta pela beleza rústica, mar forte ideal para surfistas e comunidade caiçara acolhedora. É destino perfeito para quem busca contato intenso com a natureza.",
  location: "Ilhabela",
  actionType: "favorite",
  initialComments: [
    {
      author: "Joana",
      text: "Um paraíso escondido, vale a trilha!",
      avatar:
        "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      author: "Carlos",
      text: "Ondas perfeitas para surfe, mas praia bem rústica.",
      avatar:
        "https://images.unsplash.com/photo-1553240799-36bbf332a5c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      author: "Débora",
      text: "Contato único com a natureza e cultura caiçara.",
      avatar:
        "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

export default function PraiaBonete() {
  return <DetailScreen {...boneteData} />;
}
