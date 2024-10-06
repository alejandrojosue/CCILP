export interface Categoria{
 id: number,
 Categoria: string
}

export interface Filial{
 id: number,
 Filial: string
}


export interface Denominacion{
 id: number,
 Denominacion: string
}

export interface TipoTramite{
 id: number,
 Tipo: string
}

export interface SectorDesempeno{
 id: number,
 Sector: string
}

export interface Rama{
id: number,
ramas: string
}

export enum Clasificacion{
 Mi='Mi',
 Me="Me",
 Pe='Pe',
 G='G',
 EI='EI'
}

export interface Empresa{
 id:number,
 Activo: boolean,
 tipo_tramite: Partial<TipoTramite>,
 filial: Partial<Filial>,
 NombreEmpresa: string,
 NombreComercial: string,
 Direccion: string,
 TelefonoFax: string,
 Celular: string,
 CorreoElectronico: string,
 RTN: string,
 Ramas: string[],
 Clasificacion: Clasificacion,
 NombreRepresentante: string,
 NombreSubgerente: string,
 NombreContador: string,
 denominacion: Partial<Denominacion>,
 NombreSocios: string,
 NumeroEscritura: number,
 FechaConstitucion: Date,
 RegistroMercantil: number,
 TomoMercantil: number,
 FechaMercantil: Date,
 LugarDeclaracion: string,
 NumeroEmpleados: number,
 ActividadEmpresarial: string,
 CapitalMaximo: number,
 sector_desempenos: Partial<SectorDesempeno>[],
 NumeroRegistro: number,
 FOLIO: number,
 TOMO: string,
 categoria: Partial<Categoria>,
 PagoAfiliacion: number,
 CuotaMensual: number
}

export interface Programa{
 id: number,
 Programa: string
}

export interface Constancia{
 id: number,
 empresa: Partial<Empresa>
}

export interface Programa{
 id: number,
 Programa: string
}

export interface Emprendedor{
 NombreCompleto: string,
 DNI: string,
 CorreoElectronico: string,
 Telefono: string,
 Direccion: string,
 FecNac: Date,
 Sexo: 'M' | 'F',
 programa: Partial<Programa>,
 TieneEscritura: boolean,
 OtrosTramites: string
}

export enum TipoNegocio{
 P='P',
 F='F',
 S='S'
}

export enum TipoOperar{
 a='a',
 b='b',
 c='c'
}

export enum VentasMensuales{
 a='a',
 b='b',
 c='c',
 d='d',
}

export enum VentasAnuales{
 a='a',
 b='b',
 c='c',
 d='d',
}

export interface Proyecto{
 NombreComercial: string,
 RTN: string,
 Direccion: string,
 Ciudad: string,
 Telefono: string,
 CorreoElectronico: string,
 Rubro: string,
 TipoNegocio: TipoNegocio,
 TipoOperar: TipoOperar,
 NumeroEmpleados: number,
 NumeroMujeres: number,
 NumeroHombres: number,
 VentasMensuales: VentasMensuales,
 VentasAnuales: VentasAnuales,
 ProductosServicios: string,
 emprendedor: Partial<Emprendedor>
}

export interface User{
 jwt: string,
 user: {
  id: number,
  username: string,
  email: string
 }
}