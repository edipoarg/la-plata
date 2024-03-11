import { Jurisdiccion } from "./Jurisdiccion";
import { Area, Divisiones, DepartamentosComisarias, Direcciones, Superintendencias, Jefaturas } from "./TiposDependencia";


   
  export interface Dependencias {
    id: string;
    nivel: 'Area' | 'Division' | 'Departamento' | 'Direccion' | 'Superintendencia' | 'Jefatura';
    nombre: Area['nombre'] | DepartamentosComisarias['nombre'] | Direcciones['nombre'] | Jefaturas['nombre'] | Superintendencias['nombre'] | Divisiones['nombre'] ;
    jurisdiccion: Jurisdiccion;
    contacto?: string;
    nombre_anterior?: string;
    descripcion?: string;
    geo_posicion: string;
  }