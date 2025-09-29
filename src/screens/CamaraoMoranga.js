import React from "react";
import DetailScreen from "../components/DetailScreen";

const camaraoMorangaData = {
  title: "Camarão na Moranga",
  images: [
    "https://th.bing.com/th/id/R.54712ab1f17aa3423f028da7cb827b04?rik=196TWGGuM0B%2fSA&riu=http%3a%2f%2fwww.receitas-sem-fronteiras.com%2fuploads%2frecipe%2fcamarao-na-moranga_crop.jpg%3f1475607042&ehk=S4jEOK2fesbnWYwjUdU24qsPYrADJNwJxIw8y%2fPxfBU%3d&risl=&pid=ImgRaw&r=0",
    "https://2.bp.blogspot.com/-t8PudV-wfVk/T3j_E-bXEcI/AAAAAAAAB6Y/srxZDhbD3EY/s1600/camar%C3%A3o+na+moranga+(2).JPG",
    "https://6acff2e380.clvaw-cdnwnd.com/c7a3e22a66aa1901ba4227df333c5efd/200002316-0a5eb0a5ee/camarao%20na%20moranga.jpeg?ph=6acff2e380",
  ],
  description:
    "Clássico da culinária brasileira, o camarão na moranga combina camarões suculentos em um cremoso molho de catupiry e temperos, servidos dentro da própria abóbora assada. Além de delicioso, é um prato que impressiona pela apresentação.",
  location: "São Sebastião",
  initialComments: [
    {
      author: "Marina",
      text: "Prato lindo e delicioso, perfeito para ocasiões especiais.",
      avatar: "",
    },
    {
      author: "Eduardo",
      text: "O sabor do camarão com o creme dentro da moranga é irresistível.",
      avatar: "",
    },
  ],
};

export default function CamaraoMorangaScreen() {
  return <DetailScreen {...camaraoMorangaData} actionType="rate" />;
}
