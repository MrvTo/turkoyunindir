import React from "react";
import OyunCard from "../components/OyunCard";

const oyunlar = [
  {
    id: "gtav",
    isim: "Grand Theft Auto V",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
  },
  {
    id: "rdr2",
    isim: "Red Dead Redemption 2",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
  },
  {
    id: "hogwartslegacy",
    isim: "Hogwarts Legacy",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg",
  },
  {
    id: "uncharted4",
    isim: "Uncharted 4",
    img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/header.jpg?t=1750959491",
  },
  {
    id: "cyberpunk2077",
    isim: "Cyberpunk 2077",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
  },
  {
    id: "thelastofuspart1",
    isim: "The Last of Us Part 1",
    img: "https://s3-eu-west-1.amazonaws.com/gb.awsbucket.1/0145862_0.png",
  },
  {
    id: "ageofhistory2",
    isim: "Age of History II",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/603850/44cea4c564f8c42e995008027e772b330003c187/header.jpg?t=1750701177",
  },
  {
    id: "eurotrucksimulator2",
    isim: "Euro Truck Simulator 2 ",
    img: "https://i0.wp.com/rajzy.pl/wp-content/uploads/2020/10/d95e60p-a4ea0d6a-1db8-4501-9f11-b31ac650150a.png?fit=2000%2C1200&ssl=1",
  },
  {
    id: "eldenring2",
    isim: "Elden Ring Nightreign",
    img: "https://images8.alphacoders.com/138/1385514.png",
  },
  {
    id: "codmw2019",
    isim: "Call of Duty Modern Warfare 2019",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2000950/capsule_616x353.jpg?t=1678294805",
  },
  {
    id: "codmw2022",
    isim: "Call of Duty Modern Warfare II (2022)",
    img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3595230/ce4d5e53b36cb9d3c4309d1df72bf8663bbbc7ef/header.jpg?t=1755227025",
  },
];

export default function Home() {
  return (
    <div className="container">
      <h1>Oyunlar</h1>
      <div className="oyun-listesi">
        {oyunlar.map((oyun) => (
          <OyunCard key={oyun.id} oyun={oyun} />
        ))}
      </div>
    </div>
  );
}
