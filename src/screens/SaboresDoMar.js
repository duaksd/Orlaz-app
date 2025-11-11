import React from "react";
import DetailScreen from "../components/DetailScreen";

const saboresDoMarData = {
  title: "Sabores do Mar",
  images: [
    "https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nL0s2UEhxR3dHUjNhcVhZcjlPTzNrZmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY0MCwiaGVpZ2h0Ijo2NDAsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsInRvRm9ybWF0IjogIndlYnAifX0=",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/14/95/59/restaurante-com-uma-linda.jpg",
    "https://lh3.googleusercontent.com/p/AF1QipO-oIqN04snESxlpTSW8_OgYjXdwaA16_WfQ1aR=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx_iSG2kqExD69hnhP5WSyzjOhOQRe3_FmW612onyZTjvhbxbgnYZiu02VXeUIaidmvjFu5nKct1JTMaIAdcyZ7cLmukgqM2GEQBA9czhcYgznFuJQunZEbDJGKVcMS2JrbFkYQ=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqe4yOLCSzvPpeLpKWBpluEmJaSQRsgScxjUKXSCaLIf2nR9G65rdg4GiMY0dI9T8Oooj3LKqYOk09t_de8WIq_v1407o4H_87SyCLpOKx2ZuGVlObG07tWmMsWtp8p83QlA4s=s1360-w1360-h1020-rw",
  ],
  description:
    "O Sabores do Mar é conhecido pelos pratos frescos de frutos do mar, combinando receitas tradicionais caiçaras com toque contemporâneo. Camarões, peixes e mariscos preparados com temperos naturais e servidos com arroz, farofa e molhos especiais.",
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
