import React from "react";
import DetailScreen from "../components/DetailScreen";

const standupData = {
  title: "Stand-up Paddle",
  images: [
    "https://www.guiadecaraguatatuba.com.br/wp-content/uploads/2015/11/standup-paddle-em-caraguatatuba-1024x683.jpg",
    "",
    "https://th.bing.com/th/id/OIP.Xw9MgPg8qtL6S4ZBbhktdQHaE8?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.dlFB2V1VxCrC_urXyYCQhQHaE8?pid=ImgDet&rs=1"
  ],
  description:
    "Caraguatatuba oferece condições perfeitas para a prática do Stand-up Paddle, com suas águas calmas e cristalinas. É uma atividade ideal para toda a família, combinando exercício físico com momentos de relaxamento e contato com a natureza.",
  location: "Caraguatatuba",
  actionType: "favorite",
  initialComments: [
    {
      author: "Ana",
      text: "Ótimo lugar para praticar SUP!",
    },
    {
      author: "Carlos",
      text: "Águas calmas e perfeitas para iniciantes.",
    }
  ],
};

export default function Standup() {
  return <DetailScreen {...standupData} />;
}
