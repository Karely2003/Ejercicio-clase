'use client';

import React from 'react';
import { useTemas } from '@/app/Provider/ProviderTema';
import TarjetaTema from '@/app/Componentes/componentTema';

export default function Page() {
  const { temas } = useTemas();

  return (
    <div>
      <h3>Pantalla Principal</h3>
      {temas.map((tema) => (
        <TarjetaTema key={tema.id} {...tema} />
      ))}
    </div>
  );
}

