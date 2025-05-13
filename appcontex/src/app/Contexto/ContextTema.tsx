import { createContext } from "react";
import { Tema } from "../Modelos/Tema";

export const ContextoTema = createContext({
  temas: [] as Tema[],
  alternarInteres: (id: number) => {},
});
