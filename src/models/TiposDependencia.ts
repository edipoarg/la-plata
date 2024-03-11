import { Institucion } from "./Institucion";

export interface Jefaturas {
    id: string;
    nombre: string;
    autoridad_superior: Institucion;
    
}

export interface Superintendencias {
    id: string;
    nombre: string;
    autoridad_superior: Jefaturas;
}

export interface Direcciones {
    id: string;
    nombre: string;
    autoridad_superior: Superintendencias;
}

  export interface DepartamentosComisarias {
    id: string;
    nombre: string;
    autoridad_superior: Direcciones;
}   

  export interface Divisiones {
    id: string;
    nombre: string;
    autoridad_superior: DepartamentosComisarias;
}

export interface Area {
    id: string;
    nombre: string;
    autoridad_superior: Institucion | DepartamentosComisarias | Direcciones | Jefaturas | Superintendencias;
  }
  


