import {Naciones, Provincias, Departamentos, Municipios } from './Jurisdicciones';

export interface Jurisdiccion {
    nacion: Naciones;
    provincia?: Provincias;
    departamento?: Departamentos;
    municipio?: Municipios;
}


