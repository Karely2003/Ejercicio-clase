'use client';

import React, { useState } from "react";
import componentTema from "./Componentes/componentTema";
import componentInteresante from "./Componentes/componentInteresante";
import ProviderTema from "./Provider/ProviderTema";

export default function Home() {
  const [mostrarInteresantes, setMostrarInteresantes] = useState(false);

  return (
    <ProviderTema>
      <div style={{ textAlign: "center" }}>
        {mostrarInteresantes ? (
          <>
            <componentInteresante/>
            <button
              onClick={() => setMostrarInteresantes(false)}
              style={{ marginTop: 20, background: "#dfe6e9", padding: "8px 16px" }}
            >
              Volver
            </button>
          </>
        ) : (
          <>
            <componentTema/>
            <button
              onClick={() => setMostrarInteresantes(true)}
              style={{ marginTop: 20, background: "#dfe6e9", padding: "8px 16px" }}
            >
              Visualizar temas interesantes
            </button>
          </>
        )}
      </div>
    </ProviderTema>
  );
}
