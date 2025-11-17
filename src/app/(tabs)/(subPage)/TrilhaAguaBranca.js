import React from "react";
import DetailScreen from "../../../components/DetailScreen";

const aguaBrancaData = {
  title: "Trilha da Água Branca",
  images: [
    "https://www.ilhabela.tudoem.com.br/assets/img/coluna/10b07396caeabeee0b4a73463c8fe665.jpg",
    "https://www.ilhabela.tudoem.com.br/assets/img/coluna/31472e5e932e8ce70cacf74de24de5b8.jpg",
    "https://www.alltrails.com/_next/image?url=https%3A%2F%2Fimages.alltrails.com%2FeyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNjQxNzU1MTkvNzcxYThjMTg4MTY1NThhZGM4ODc3Y2JhZjhlMzRiN2QuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxMDgwLCJoZWlnaHQiOjcwMCwiZml0IjoiY292ZXIifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0%3D&w=3840&q=75",
    "https://blogdaaventura.com/wp-content/uploads/2018/04/IMG_5836-1024x1024.jpg"
  ],
  description:
    "A Trilha da Água Branca em Ilhabela é uma caminhada encantadora de aproximadamente 6 km, passando por trechos de mata atlântica, pequenas cachoeiras e riachos de águas cristalinas. Ideal para quem gosta de ecoturismo, aventura e contato direto com a natureza, proporcionando um dia refrescante e revigorante.",
  location: "Ilhabela",
  actionType: "favorite",
  initialComments: [
    {
      author: "Ana",
      text: "Cachoeiras lindas e trilha bem agradável. Recomendo para todos!",
    },
    {
      author: "Thiago",
      text: "Trilha moderada, leve repelente e água. Experiência incrível!",
    }
  ],
};

export default function AguaBranca() {
  return <DetailScreen {...aguaBrancaData} />;
}
