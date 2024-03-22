import {Efectivo} from './Efectivo';
import { Jurisdiccion } from './Jurisdiccion';

export interface Caso {
    id: string;
    jurisdiccion: Jurisdiccion;
    ubicacion: string;
    tipo_de_caso: string;
    descripcion: string;
    victima?: {
        edad: number;
        nombre: string;
    };
    victimario: Efectivo;
    informacion: string;
    fecha: string;
}