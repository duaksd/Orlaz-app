import React from "react";
import DetailScreen from "../components/DetailScreen";

const caicarasData = {
  title: "Restaurante Caiçara's",
  images: [
    "https://media-cdn.tripadvisor.com/media/photo-s/28/21/7f/93/visual-da-nossa-varanda.jpg",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npdUo08lct13qAHeCzB3kNeejMWcFUOtpkmbfUCjT-tdfeBZZxrBDUUoi1JHweg9sPveDmuhwD4_kumbC9l2olmA-iKJmatHK_JE2VvCFwqhRf1mzZHNLx7Yp6LV6AgSNI2YpRO=w243-h174-n-k-no-nu",
    "https://lh3.googleusercontent.com/p/AF1QipNoftw2EatrSbpbyhZY6E0HH4i_sHVLs03bFLH_=w243-h244-n-k-no-nu",
    "https://framerusercontent.com/images/NaLAMRXBt3aPLIhbNtW9swVpOAE.png",
  ],
  description:
    "O Caiçara's oferece pratos típicos da culinária caiçara, preparados com frutos do mar frescos e temperos regionais. Entre os destaques estão o peixe na folha de bananeira, moquecas e caldeiradas que trazem o verdadeiro sabor do litoral norte paulista.",
  location: "Caraguatatuba",
  initialComments: [
    {
      author: "Mariana",
      text: "A moqueca é sensacional, recomendo para todos os visitantes!",
      avatar: "",
    },
    {
      author: "Thiago",
      text: "Ótima comida e atendimento excelente. Voltarei com certeza!",
      avatar: "",
    },
  ],
};

export default function CaicarasScreen() {
  return <DetailScreen {...caicarasData} actionType="rate" />;
}
