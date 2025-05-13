'use client';

import React from "react";
import { useTemas } from "../Provider/ProviderTema";

export default function ListaInteresantes() {
  const { temas } = useTemas();

  const temasInteresantes = temas.filter(t => t.interesante);

  return (
    <div>
      <h2>Pantalla Interesantes</h2>
      {temasInteresantes.map((tema) => (
        <div
          key={tema.id}
          style={{
            background: "#ffeaa7",
            margin: "8px auto",
            width: "200px",
            padding: "10px",
            textAlign: "center",
            border: "1px solid #ccc",
          }}
        >
          {tema.titulo}
        </div>
      ))}
    </div>
  );
}
