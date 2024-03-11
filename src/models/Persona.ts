import { Institucion } from "./Institucion";

export interface Persona{
    id: string;
    nombre: string;
    cargo?: string;
    fecha_nacimiento?: string;
    causas?: string;
    observaciones?: string;
    imagen?: [string];
    Institucion?: Institucion;
}