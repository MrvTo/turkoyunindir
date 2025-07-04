import React from "react";
import { Link } from "react-router-dom";

export default function OyunCard({ oyun }) {
  return (
    <div className="oyun-card">
      <Link to={`/oyun/${oyun.id}`}>
        <img
          src={oyun.img}
          alt={oyun.isim}
          onError={(e) =>
            (e.target.src = "https://via.placeholder.com/300x170?text=No+Image")
          }
        />
        <h3>{oyun.isim}</h3>
      </Link>
    </div>
  );
}
