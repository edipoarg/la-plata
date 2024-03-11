import {Efectivo} from './Efectivo.js';
import {Grados, Cargos} from './Cargos.js';
import { Dependencias } from './Dependencias.js';

export interface Cargo {
    id: string;
    Efectivo: Efectivo['nombre'];
    lp: Efectivo['lps'];
    grado: Grados;
    cargo: Cargos;
    dependencia: Dependencias;
    responsabilidades: string;
}