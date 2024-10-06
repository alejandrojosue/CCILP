import type { Constancia } from "../../types/types";
import { CompanyMap } from "../CompanyMap";

export const RegistersMap = (data: any): Constancia[] =>{
 if (!data.length)
  return []
 return data.map(({attributes, id}:{attributes:any, id: number})=>RegisterMap(id,attributes))
}

export const RegisterMap = (id: number,attributes: any): Constancia =>{
 const { empresa } = attributes;
 
 const CURRENT_CONSTANCE: Constancia = {
  id,
  empresa: CompanyMap(empresa?.data?.id, empresa?.data?.attributes)
 }

 return CURRENT_CONSTANCE
}