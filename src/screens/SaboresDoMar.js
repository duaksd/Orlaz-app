import React from "react";
import DetailScreen from "../components/DetailScreen";

const saboresDoMarData = {
  title: "Sabor do Mar",
  images: [

    "https://scontent.fpoa10-1.fna.fbcdn.net/v/t39.30808-6/482053788_3490971341047763_5679505573610082876_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=XoUksaxVtVcQ7kNvwEAnG_F&_nc_oc=Admxpg1ztG8jAoOeD9xdWNajfkqlq3eFOmQ6mQ6oXxscyPyolRBsU__x9R5CRewpxaA&_nc_zt=23&_nc_ht=scontent.fpoa10-1.fna&_nc_gid=ENXmD7K3lbmGYkYRxD41zg&oh=00_AffT4DRA38qAoVnAhRkhVkevDddFuCPi5N36JK6fCN2Yzg&oe=68EB4EE5",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/14/95/59/restaurante-com-uma-linda.jpg",
    "https://lh3.googleusercontent.com/p/AF1QipO-oIqN04snESxlpTSW8_OgYjXdwaA16_WfQ1aR=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqe4yOLCSzvPpeLpKWBpluEmJaSQRsgScxjUKXSCaLIf2nR9G65rdg4GiMY0dI9T8Oooj3LKqYOk09t_de8WIq_v1407o4H_87SyCLpOKx2ZuGVlObG07tWmMsWtp8p83QlA4s=s1360-w1360-h1020-rw",

    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/ba/25/38/photo0jpg.jpg?w=1000&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ed/32/c0/area-das-mesas-vista.jpg?w=1000&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/b7/a3/c1/sabor-do-mar-tem-uma.jpg?w=1000&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/34/7e/cb/sinta-o-sabor-do-tempero.jpg?w=1000&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/34/7e/c1/temos-mais-de-20-anos.jpg?w=1000&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/34/7e/be/frutos-do-mar-sempre.jpg?w=1000&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/34/7e/ae/salada-de-frutos-do-mar.jpg?w=1000&h=-1&s=1"

  ],
  description:
    "O Sabor do Mar é conhecido pelos pratos frescos de frutos do mar, combinando receitas tradicionais caiçaras com toque contemporâneo. Camarões, peixes e mariscos preparados com temperos naturais e servidos com arroz, farofa e molhos especiais.",
  location: "Ubatuba",
  initialComments: [
    {
      author: "Carla",
      text: "O camarão é divino! Vale cada centavo.",
      avatar: "",
    },
    {
      author: "Lucas",
      text: "Ambiente agradável e comida super fresca. Recomendo!",
      avatar: "",
    },
  ],
};

export default function SaboresDoMarScreen() {
  return <DetailScreen {...saboresDoMarData} actionType="rate" />;
}
