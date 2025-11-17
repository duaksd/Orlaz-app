import React from "react";
import DetailScreen from "../../../components/DetailScreen";

const standupData = {
  title: "Stand-up Paddle",
  images: [
    "https://tamoiosnews.com.br/wp-content/uploads/2018/02/IMG_1923-e1517601182564.jpg",
    "https://s3.eu-west-1.amazonaws.com/extasy-resources-prod/event/9520667/TH_MD_a8ab8b7e-a718-49c4-9bfb-98eecbf4eec0.jpg",
    "https://www.kalterersee.com/images/cms/main/754x435/AdobeStock-stand-up-paddling-154354861.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNrSRPrZxKbpfUPHKouROCi6IeP9Zephc0nbbxnof9E7jlJCzQclZownKC1evckrGUaPQx8rwp1SMGgVvnKaOMpqXyVfai3GnpMBN4ejfUwEIrG5yE3Aj8vpXyQqPEG48a029Lzt3s8XcR/s1600/10919687_1542331036014880_1330855457_n.jpg"
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
