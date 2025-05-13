'use client';

import React, { useContext, useEffect, useState } from "react";
import { ContextoTema } from "../Contexto/ContextTema";
import { Tema } from "../Modelos/Tema";

export default function ProveedorTemas({ children }: { children: React.ReactNode }) {
  const [temas, setTemas] = useState<Tema[]>([]);

  useEffect(() => {
    
    const temasIniciales = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      titulo: `Tema ${i + 1}`,
      interesante: false,
    }));
    setTemas(temasIniciales);
  }, []);

  const alternarInteres = (id: number) => {
    setTemas(prev =>
      prev.map(t => (t.id === id ? { ...t, interesante: !t.interesante } : t))
    );
  };

  return (
    <ContextoTema.Provider value={{ temas, alternarInteres }}>
      {children}
    </ContextoTema.Provider>
  );
}

export const useTemas = () => useContext(ContextoTema);
