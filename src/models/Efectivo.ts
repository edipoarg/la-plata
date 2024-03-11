import {Grados, Cargos} from './Cargos.js';
import {Dependencias} from './Dependencias.js'

export interface Efectivo {
    id: string;
    lps: string;
    nombre: string;
    fecha_nacimiento?: string;
    causas?: string;
    observaciones: string;
    imagen?: [string];
}
