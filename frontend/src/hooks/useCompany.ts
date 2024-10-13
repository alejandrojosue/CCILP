import {useState} from 'react'
import type {Categoria, Denominacion, Empresa, Filial, SectorDesempeno, TipoTramite} from '../types/types'
import {fetchDataFromAPI} from '../util/fetchDataFromAPI';
import {CategoriasMap, CompaniesMap, CompanyMap, DenominacionesMap, FilialesMap, SectoresDesempenoMap, TiposTramiteMap} from '../map/CompanyMap';
import { getCookie } from '../util/cookies';
export const useCompany = () => {
  const [fields, setFields] = useState<{
    categories: Categoria[],
    Filial: Filial[],
    Denominacion: Denominacion[],
    TipoTramite: TipoTramite[],
    SectorDesempeno: SectorDesempeno[],
    loading: boolean,
    error: null | Error
  }>({
    categories: [],
    Filial: [],
    Denominacion: [],
    TipoTramite: [],
    SectorDesempeno: [],
    loading: true,
    error: null,
  });

  const [data, setData] = useState<{
    empresas: Empresa[],
    loading: boolean,
    error: null | Error
  }>({
    empresas: [],
    loading: true,
    error: null
  });

  const getCompanies = async () => {
    setData(prev => ({...prev, loading: true}))
    try {
      const data = await fetchDataFromAPI({
        url: '/empresas?populate=*',
        token: getCookie('jwt')
      });      
      setData(prev=>({...prev, empresas: CompaniesMap(data?.data)}))
    } catch (error) {
      setData(prev => ({...prev, error: error as Error}))
    }finally{
      setData(prev=>({...prev, loading: false}))
    }
  }

  const getById = async(id:string) =>{
    setData(prev => ({...prev, loading: true}))
    try {
      const data = await fetchDataFromAPI({
        url: `/empresas/${id}?populate=*`,
        token: getCookie('jwt')
      });      
      setData(prev=>({...prev, empresas: [CompanyMap((data?.data?.id as number), data?.data?.attributes)]}))
    } catch (error) {
      setData(prev => ({...prev, error: error as Error}))
    }finally{
      setData(prev=>({...prev, loading: false}))
    }
  }

  const getFields = async () => {
    try {
      setFields(prev => ({...prev, loading: true}))
      const [categorias, filials, sectores, tipos, denominaciones] =
          await Promise.all([
            fetchDataFromAPI({url: '/api/categorias'}),
            fetchDataFromAPI({url: '/api/filials'}),
            fetchDataFromAPI({url: '/api/sector-desempenos'}),
            fetchDataFromAPI({url: '/api/tipo-tramites'}),
            fetchDataFromAPI({url: '/api/denominacions'})
          ]);
      setFields(prev => ({
                  ...prev,
                  categories: CategoriasMap(categorias.data),
                  Filial: FilialesMap(filials.data),
                  Denominacion: DenominacionesMap(sectores.data),
                  TipoTramite: TiposTramiteMap(tipos.data),
                  SectorDesempeno: SectoresDesempenoMap(denominaciones.data),
                }));
    } catch (error) {
      setFields(prev => ({...prev, error: error as Error}))
    }finally{
     setFields(prev=>({...prev, loading: false}))
    }
  }
  return {...fields, data, getFields, getCompanies, getById}
}