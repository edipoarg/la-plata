import {Persona} from './Persona';

export interface Institucion {
    id: string;
    tipo: string;
    nombre: string;
    descripcio?: string;
    responsable?: Persona;
    autoridad_superior?: string;
    subordinados?: string;
}