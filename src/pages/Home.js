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
