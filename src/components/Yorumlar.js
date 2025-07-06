import React, { useState, useEffect } from "react";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

function Yorumlar({ oyunId }) {
  const [yorumlar, setYorumlar] = useState([]);
  const [name, setName] = useState("");
  const [yeniYorum, setYeniYorum] = useState("");

  useEffect(() => {
    // Sadece oyunId'ye göre filtreleme ve tarih sırasına göre çekme
    const q = query(
      collection(db, "yorumlar"),
      orderBy("tarih", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      // Yorumları filtrele ve sırala
      const yorumlarArr = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(y => y.oyunId === oyunId);
      setYorumlar(yorumlarArr);
    });

    return () => unsubscribe();
  }, [oyunId]);

  const yorumEkle = async () => {
    if (!name.trim() || !yeniYorum.trim()) return alert("Ad Soyad ve Yorum boş olamaz!");

    await addDoc(collection(db, "yorumlar"), {
      oyunId,
      isim: name.trim(),
      text: yeniYorum.trim(),
      tarih: serverTimestamp(), // Firestore server zamanını kullan
    });

    setName("");
    setYeniYorum("");
  };

  return (
    <div className="yorumlar-container">
      <h3>Yorumlar</h3>
      <div className="yorum-listesi">
        {yorumlar.length === 0 && <p>Henüz yorum yok.</p>}
        {yorumlar.map((y) => (
          <div key={y.id} className="yorum">
            <div className="isim">{y.isim || "Anonim"}</div>
            <div className="mesaj">{y.text}</div>
            <small>
              {y.tarih && y.tarih.seconds
                ? new Date(y.tarih.seconds * 1000).toLocaleString()
                : "Yeni"}
            </small>
          </div>
        ))}
      </div>

      <form
        className="yorum-form"
        onSubmit={(e) => {
          e.preventDefault();
          yorumEkle();
        }}
      >
        <input
          type="text"
          placeholder="Ad Soyad"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Yorumunuzu yazın..."
          value={yeniYorum}
          onChange={(e) => setYeniYorum(e.target.value)}
          rows={4}
          required
        />
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}

export default Yorumlar;
