import React from "react";
import { useParams, Link } from "react-router-dom";
import Yorumlar from "../components/Yorumlar";
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
    indirmeLink: "https://ay.live/gP7f",
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
    indirmeLink: "https://ay.live/zTRJ",
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
    indirmeLink: "https://ay.live/hgCYC",
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
    indirmeLink: "https://ay.live/R1QDaz",
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
    indirmeLink: "https://ay.live/pZddWH",
  },
  {
    id: "thelastofuspart1",
    isim: "The Last of Us Part 1",
    tur: "Aksiyon, Macera",
    img: "https://s3-eu-west-1.amazonaws.com/gb.awsbucket.1/0145862_0.png",
    aciklama:
      "Eleştirel beğeni toplayan televizyon şovuna ilham veren ödüllü oyunu keşfedin. Joel ve Ellie'yi kıyamet sonrası bir Amerika aracılığıyla rehber olun ve The Last of UsTM'de unutulmaz müttefikler ve düşmanlarla karşılaşır.",
    minimum: "AMD Ryzen 5 1500X, Intel Core i7-4770K / 16 GB RAM / AMD Radeon RX 470 (4 GB), AMD Radeon RX 6500 XT (4 GB), NVIDIA GeForce GTX 970 (4 GB), NVIDIA GeForce GTX 1050 Ti (4 GB)",
    onerilen: "AMD Ryzen 5 3600X, Intel Core i7-8700 / 16 GB RAM / AMD Radeon RX 5700 XT (8 GB), AMD Radeon RX 6600 XT (8 GB), NVIDIA GeForce RTX 2070 SUPER (8 GB), NVIDIA GeForce RTX 3060 (8 GB)",
    indirmeLink: "https://ay.live/KRS5",
  },
  {
    id: "ageofhistory2",
    isim: "Age of History",
    tur: "Strateji, Aksiyon",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/603850/44cea4c564f8c42e995008027e772b330003c187/header.jpg?t=1750701177",
    aciklama:
      "Age of History II, öğrenmesi kolay ancak ustalaşması zor olan muhteşem bir strateji savaş oyunudur. Amacınız, dünyayı birleştirmek veya fethetmek için askeri taktikler ve kurnazca diplomasi kullanmaktır. Dünya kan kaybedecek mi yoksa önünüzde eğilecek mi? Seçim sizin...",
    minimum: "1.8 GHz Single Core / 1 GB RAM / Hardware Accelerated Graphics with dedicated memory",
    onerilen: "2.4 GHz Single Core / 2 GB RAM / Hardware Accelerated Graphics with dedicated memory",
    indirmeLink: "https://ay.live/61Qzg",
  },
  {
    id: "eurotrucksimulator2",
    isim: "Euro Truck Simulator 2",
    tur: "Simulasyon, Sürüş, Açık Dünya",
    img: "https://i0.wp.com/rajzy.pl/wp-content/uploads/2020/10/d95e60p-a4ea0d6a-1db8-4501-9f11-b31ac650150a.png?fit=2000%2C1200&ssl=1",
    aciklama:
      "Önemli kargoları etkileyici mesafelere teslim eden bir kamyon şoförü olarak Avrupa'yı dolaşın! Keşfedilecek düzinelerce şehirle dayanıklılığınız, beceriniz ve hızınız sınırlarına kadar zorlanacak.",
    minimum: "Intel Core i5-6400 or AMD Ryzen 3 1200 or similar / 8 GB RAM / NVIDIA GeForce GTX 660 or AMD Radeon RX 460 or Intel HD 630 (2GB VRAM)",
    onerilen: "Intel Core i5-9600 or AMD Ryzen 5 3600 or similar / 12 GB RAM / NVIDIA GeForce GTX 1660 or AMD Radeon RX 590 (2GB VRAM)",
    indirmeLink: "https://ay.live/bw0VF",
  },
  {
    id: "eldenring2",
    isim: "Elden Ring Nightreign",
    tur: "Roguelike oyun, Dövüş oyunu, Macera Oyunu, Hayatta Kalma Oyunu",
    img: "https://images8.alphacoders.com/138/1385514.png",
    aciklama:
      "ELDEN RING NIGHTREIGN, oyunun temel tasarımını yeniden yorumlayarak oyunculara yeni bir oyun deneyimi sunmak için tasarlanmış, ELDEN RING evreninde bağımsız bir maceradır.",
    minimum: "Intel Core i5-10600-AMD RYZEN 5 5500 / 12 GB RAM / Nvidia GTX 1060",
    onerilen: "Intel Core i5-11500-AMD RYZEN 5 5600 / 16 GB RAM / Nvidia GTX 1070",
    indirmeLink: "https://ay.live/24FAf",
  },
  {
    id: "codmw2019",
    isim: "Call of Duty Modern Warfare",
    tur: "Aksiyon, FPS",
    img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2000950/capsule_616x353.jpg?t=1678294805",
    aciklama:
      "Duygu yüklü Senaryoyu oyna veya en kapsamlı çevrimiçi arenada kendi ekibini kurup farklı Special Ops meydan okumalarını tamamla ve Çok Oyunculu haritalarda ve modlarda düşmanla çarpış! ",
    minimum: "Intel Core i5-3570K / 8 GB RAM / Nvidia GTX 670",
    onerilen: "Intel Core i7-4790 / 12 GB RAM / Nvidia GTX 1660",
    indirmeLink: "https://ay.live/iMP",
  },
  {
    id: "codmw2022",
    isim: "Call of Duty Modern Warfare II (2022)",
    tur: "Aksiyon, FPS",
    img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3595230/ce4d5e53b36cb9d3c4309d1df72bf8663bbbc7ef/header.jpg?t=1755227025",
    aciklama:
      "Call of Duty®: Modern Warfare® II ile geri dönen efsanevi Görev Timi 141 Operatörleriyle kendimizi eşi benzeri görülmemiş küresel çatışmaların ortasında buluyoruz. ",
    minimum: "Intel Core i5-3570K / 8 GB RAM / Nvidia GTX 960",
    onerilen: "Intel Core i7-4790 / 12 GB RAM / Nvidia GTX 1060",
    indirmeLink: "https://ay.live/klSz2",
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
      
      <Yorumlar oyunId={oyun.id} />
    </div>
    
  );
}
