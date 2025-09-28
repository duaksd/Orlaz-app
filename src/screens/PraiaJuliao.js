import React from "react";
import DetailScreen from "../components/DetailScreen";

const juliaoData = {
  title: "Praia do Julião",
  images: [
    "https://www.ilhabela.com.br/wp-content/uploads/2012/11/praia-do-juliao-ilhabelacombr-e1598559450629.jpg",
    "https://naturam.com.br/wp-content/uploads/2021/08/Juliao-1.jpg",
    "https://imgmd.net/images/v1/guia/1618999/praia-do-juliao.jpg",
    "https://www.ilhabela.com.br/wp-content/uploads/2020/07/praia-do-juliao-mar-transparente-ilhabelacombr-2-e1598559420199.jpg",
    "https://www.guiaviagensbrasil.com/imagens/pedras-praia-juliao-ilhabela-sp.jpg",
  ],
  description:
    "A Praia do Julião, também conhecida como Praia dos Pacuíbas, é uma das mais tranquilas de Ilhabela. Com águas calmas e cristalinas, ótima para mergulho livre, é ideal para famílias e quem busca descanso em meio à natureza.",
  location: "Ilhabela",
  actionType: "favorite",
  initialComments: [
    {
      author: "Patrícia",
      text: "Mar super calmo, perfeito para crianças.",
      avatar:
        "",
    },
    {
      author: "Henrique",
      text: "Fiz mergulho livre e vi muitos peixinhos, incrível!",
      avatar:
        "",
    },
    {
      author: "Sofia",
      text: "Lugar calmo, pouco movimentado, adorei.",
      avatar:
        "https://plus.unsplash.com/premium_photo-1676478746990-4ef5c8ef234a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

export default function PraiaJuliao() {
  return <DetailScreen {...juliaoData} />;
}
