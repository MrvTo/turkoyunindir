import React from "react";
import { useParams, Link } from "react-router-dom";

const oyunlar = [
  {
    id: "gtav",
    isim: "Grand Theft Auto V",
    tur: "Açık Dünya, Aksiyon",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
    aciklama:
      "Los Santos şehrinde geçen devasa açık dünya aksiyon oyunu.",
    minimum: "Intel Core 2 Quad CPU Q6600 / 4 GB RAM / NVIDIA 9800 GT 1GB",
    onerilen: "Intel Core i5 3470 / 8 GB RAM / NVIDIA GTX 660 2GB",
    indirmeLink: "https://www.mediafire.com/file/m1sk63mn62zyb74/gtav_F%25C4%25B0tgrilReapck.torrent/file",
  },
  {
    id: "rdr2",
    isim: "Red Dead Redemption 2",
    tur: "Açık Dünya, Macera",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
    aciklama:
      "Vahşi Batı’da epik açık dünya macerası.",
    minimum: "Intel Core i5-2500K / 8 GB RAM / Nvidia GTX 770",
    onerilen: "Intel Core i7-4770K / 12 GB RAM / Nvidia GTX 1060",
    indirmeLink: "https://www.mediafire.com/file/l4wmqgtr0522p0y/rdr2_dodi_repack.torrent/file",
  },
  {
    id: "hogwartslegacy",
    isim: "Hogwarts Legacy",
    tur: "Açık Dünya, RPG",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg",
    aciklama:
      "Hogwarts’ta büyücülük ve macera dolu bir RPG oyunu.",
    minimum: "Intel Core i5-6600 / 16 GB RAM / Nvidia GTX 960",
    onerilen: "Intel Core i7-8700 / 16 GB RAM / Nvidia RTX 2060",
    indirmeLink: "https://www.mediafire.com/file/1yf8kjevoq04v4j/hogwarts_legeacy_dodi_repack.torrent/file",
  },
  {
    id: "uncharted4",
    isim: "Uncharted 4",
    tur: "Aksiyon, Macera",
    img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/header.jpg?t=1750959491",
    aciklama:
      "Nate’in son macerası, sürükleyici aksiyon dolu oyun.",
    minimum: "Intel Core i5-2500K / 8 GB RAM / Nvidia GTX 660",
    onerilen: "Intel Core i7-4770K / 12 GB RAM / Nvidia GTX 1060",
    indirmeLink: "https://www.mediafire.com/file/h1li91172z4gle1/Uncharted_LoTC_FitgirlRepack.torrent/file",
  },
  {
    id: "cyberpunk2077",
    isim: "Cyberpunk 2077",
    tur: "Aksiyon, RPG",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
    aciklama:
      "Night City’de futuristik aksiyon RPG.",
    minimum: "Intel Core i5-3570K / 8 GB RAM / Nvidia GTX 780",
    onerilen: "Intel Core i7-4790 / 12 GB RAM / Nvidia GTX 1060",
    indirmeLink: "https://www.mediafire.com/file/uphkb9rxxtyqnoo/Cyberpunk2077_FitgirlRepack.torrent/file",
  },
];

export default function OyunDetay() {
  const { id } = useParams();
  const oyun = oyunlar.find((o) => o.id === id);

  if (!oyun) {
    return (
      <div className="container mt-4">
        <h2>Oyun bulunamadı</h2>
        <Link to="/">Ana sayfaya dön</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <Link to="/" className="btn btn-secondary mb-3">
        ← Geri
      </Link>

      <div className="card">
        <img
          src={oyun.img}
          alt={oyun.isim}
          className="card-img-top"
          onError={(e) =>
            (e.target.src = "https://via.placeholder.com/600x338?text=No+Image")
          }
        />
        <div className="card-body">
          <h2 className="card-title">{oyun.isim}</h2>
          <p><strong>Tür:</strong> {oyun.tur}</p>
          <p>{oyun.aciklama}</p>
          <p><strong>Minimum Sistem Gereksinimi:</strong> {oyun.minimum}</p>
          <p><strong>Önerilen Sistem Gereksinimi:</strong> {oyun.onerilen}</p>
          <a href={oyun.indirmeLink} className="btn btn-primary" download>
            İndir
          </a>
        </div>
      </div>
    </div>
  );
}
