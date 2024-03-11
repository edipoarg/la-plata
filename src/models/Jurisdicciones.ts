export interface Naciones {
    id: string;
    nacion: string;
}

export interface Provincias {
    id: string;
    provincia: string;
    pais: Naciones;
}

export interface Departamentos {
    id: string;
    deparatamento: string;
    provincia: Provincias;
}

export interface Municipios {
    id: string;
    municipio: string;
    departamento: Departamentos;
}



