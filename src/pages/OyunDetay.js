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
    indirmeLink: "https://www.swiftuploads.com/download/eyJpdiI6IittRm1wNGJaVWNvbHFWQ3ZpYVJoeVE9PSIsInZhbHVlIjoiMlJHSVRoS0pVM0tyZ0VBWG9CZ0RsM3JQRFpVNmplOW1FM2F3R1dTWmZ6ST0iLCJtYWMiOiIwN2VmMzQ1ZGE0M2VjMjZlOTgyN2RmOGMyZDY2YWY5OWQ1OTAxNjM4YzQ3NjQwNTAzOTA2MTY2MzJlMjI4ZTE5IiwidGFnIjoiIn0=/GV3441.torrent?expiration=1751651072&signature=87ae0432532c2293d2f6a168747b48651f7cebd38faeded249586e601545bd90",
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
    indirmeLink: "https://www.swiftuploads.com/download/eyJpdiI6ImV5cDRrNldBNGdtSnBCZ2JpOWdZUWc9PSIsInZhbHVlIjoiQjhhSXZNNFc1UFB1bGtnSU9DUGdOSlhLK2VoQWNqQ2hOVzhETUdZcGxuTT0iLCJtYWMiOiI2ZWJlNmI0MTlhZWYxZjA3NzA5YzQyMTU4ZGM3Zjk2YjI1MjZhZWIwNjY3N2YwNTgwZGZmYTQ5NDA3NjQ4OGU1IiwidGFnIjoiIn0=/DODI_REPACK1491.50%20%281%29.torrent?expiration=1751651398&signature=224f91454889b3fa6ce545a3a36929c821acb0d572cbe4ac228bc0085f05533d",
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
    indirmeLink: "https://www.swiftuploads.com/download/eyJpdiI6IlUreXlyMTVvVUZkWFZTQ0dxVEo1MXc9PSIsInZhbHVlIjoidkh0bWZLR0RiMUJyQ1JYMkNrcWM0SUpaeS9xME1jclZKUmIzaDRheW9RTT0iLCJtYWMiOiIyMDU2MDRkMDI3NTA4Y2Q0MzZiYzM4MWMxZDljZjJjOWI2YjllNTdjNjI1ZGJmMmQ0ZWFhYzFiZTcyOTA0OWQ5IiwidGFnIjoiIn0=/Rip-Insan.torrent?expiration=1751651497&signature=f28b004b759a176e4f63e669512a9c5471265dc333400e9732ead43b4954fcc3",
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
    indirmeLink: "http://itorrents.org/torrent/963A0879AF19DEB41A155EA5B9C0627397022D9B.torrent",
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
    indirmeLink: "http://itorrents.org/torrent/179B76CFE2760F6B25B280F7D7A9040324460D6C.torrent",
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
