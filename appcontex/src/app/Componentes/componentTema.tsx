'use client';

import React from "react";
import { useTemas } from "../Provider/ProviderTema";

export default function ListaTemas() {
  const { temas, alternarInteres } = useTemas();

  return (
    <div>
      <h2>Pantalla Principal</h2>
      {temas.map((tema) => (
        <div key={tema.id} style={{ margin: "8px", display: "flex", alignItems: "center" }}>
          <button
            style={{
              background: tema.interesante ? "#ffeaa7" : "#dfe6e9",
              padding: "5px 15px",
              marginRight: "10px",
              border: "1px solid #ccc",
            }}
            disabled
          >
            {tema.titulo}
          </button>
          <button
            onClick={() => alternarInteres(tema.id)}
            style={{
              background: "#74b9ff",
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
              border: "none",
            }}
          >
            Interesante
          </button>
        </div>
      ))}
    </div>
  );
}
