import type { Categoria, Denominacion, Empresa, Filial, SectorDesempeno, TipoTramite } from "../types/types";

export const CompaniesMap = (data:any): Empresa[] =>{
 if(!data.length){
  return[]
 }
 return data.map((({id, attributes}:{id:number, attributes:any}) => CompanyMap(id,attributes)));
}

export const CompanyMap = (id:number, attributes: any) : Empresa =>{
 const {
  Activo,
  tipo_tramite,
  filial,
  NombreEmpresa,
  NombreComercial,
  Direccion,
  TelefonoFax,
  Celular,
  CorreoElectronico,
  RTN,
  Rama,
  Clasificacion,
  NombreRepresentante,
  NombreSubgerente,
  NombreContador,
  denominacion,
  NombreSocios,
  NumeroEscritura,
  FechaConstitucion,
  RegistroMercantil,
  TomoMercantil,
  FechaMercantil,
  LugarDeclaracion,
  NumeroEmpleados,
  ActividadEmpresarial,
  CapitalMaximo,
  sector_desempenos,
  NumeroRegistro,
  FOLIO,
  TOMO,
  categoria,
  PagoAfiliacion,
  CuotaMensual,
  ramas,
  createdAt
 } = attributes
 const Company: Empresa = {
  id,
  Activo,
  tipo_tramite: tipo_tramite?.data?.attributes?.Tipo,
  filial: filial?.data?.attributes?.Filial,
  NombreEmpresa,
  NombreComercial,
  Direccion,
  TelefonoFax,
  Celular,
  CorreoElectronico,
  RTN,
  Clasificacion,
  NombreRepresentante,
  NombreSubgerente,
  NombreContador,
  denominacion: denominacion?.data?.attributes?.Denominacion,
  NombreSocios,
  NumeroEscritura,
  FechaConstitucion,
  RegistroMercantil,
  TomoMercantil,
  FechaMercantil,
  LugarDeclaracion,
  NumeroEmpleados,
  ActividadEmpresarial,
  CapitalMaximo,
  sector_desempenos: sector_desempenos?.data.map(({attributes}:{attributes:any})=>attributes.Sector),
  NumeroRegistro,
  FOLIO,
  TOMO,
  categoria: categoria?.data?.attributes?.Categoria,
  PagoAfiliacion,
  CuotaMensual,
  Ramas: ramas?.data.map(({attributes}:{attributes:any})=>attributes.rama),
 }
 return Company
}


export const TiposTramiteMap= (data:any):TipoTramite[] =>{
 return data.map(({id,attributes}:{id:number, attributes:any})=>TipoTramiteMap(id,attributes))
}

export const TipoTramiteMap = (id: number, attributes: any): TipoTramite =>{
 const {Tipo} = attributes;
 const data: TipoTramite = {
  id,
  Tipo
 }
 return data
}


export const CategoriasMap= (data:any):Categoria[] =>{
 return data.map(({id,attributes}:{id:number, attributes:any})=>CategoriaMap(id,attributes))
}

export const CategoriaMap = (id: number, attributes: any): Categoria =>{
 const {Categoria} = attributes;
 const data: Categoria = {
  id,
  Categoria
 }
 return data
}

export const FilialesMap= (data:any):Filial[] =>{
 return data.map(({id,attributes}:{id:number, attributes:any})=>FilialMap(id,attributes))
}

export const FilialMap = (id: number, attributes: any): Filial =>{
 const {Filial} = attributes;
 const data: Filial = {
  id,
  Filial
 }
 return data
}

export const DenominacionesMap= (data:any):Denominacion[] =>{
 return data.map(({id,attributes}:{id:number, attributes:any})=>DenominacionMap(id,attributes))
}

export const DenominacionMap = (id: number, attributes: any): Denominacion =>{
 const {Denominacion} = attributes;
 const data: Denominacion = {
  id,
  Denominacion
 }
 return data
}

export const SectoresDesempenoMap= (data:any):SectorDesempeno[] =>{
 return data.map(({id,attributes}:{id:number, attributes:any})=>SectorDesempenoMap(id,attributes))
}

export const SectorDesempenoMap = (id: number, attributes: any): SectorDesempeno =>{
 const {Sector} = attributes;
 const data: SectorDesempeno = {
  id,
  Sector
 }
 return data
}