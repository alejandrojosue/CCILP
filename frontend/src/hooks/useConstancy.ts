import {useState} from 'react';
import type {Constancia, Empresa} from '../types/types';
import {fetchDataFromAPI} from '../util/fetchDataFromAPI';
import {RegistersMap} from '../map/constancies/RegisterMap';
import {CompaniesMap, CompanyMap} from '../map/CompanyMap';
import {getCookie} from '../util/cookies';

export default function useConstancy(type: string) {
  const [data, setData] = useState<
      {loading: boolean, error: null | Error, constancies: Constancia[]}>(
      {loading: false, error: null, constancies: []});
  const [companies, setCompanies] = useState<Empresa[]>([])

  const get = async () => {
    try {
      setData(prev => ({...prev, loading: true}))
      const values = await fetchDataFromAPI({
        url: `/${type}?populate=empresa.tipo_tramite,empresa.ramas,empresa.Activo,empresa.filial, empresa.denominacion,empresa.sector_desempenos, empresa.categoria&pagination[limit]=1000&sort=createdAt:desc`,
        token: getCookie('jwt')
      });
      setData(prev => ({...prev, constancies: RegistersMap(values.data)}))
    } catch (err) {
      setData(prev => ({...prev, error: err as Error}))
    } finally {
      setData(prev => ({...prev, loading: false}))
    }
  };

  const getCompaniesByRTN = async ({rtn}: {rtn: string}) => {
    try {
      setData(prev => ({...prev, loading: true}))
      const value = await fetchDataFromAPI({
        url: `/empresas?filters[$and][0][RTN][$eq]=${rtn}&filters[$and][1][Activo][$eq]=true&populate=*`,
        token: getCookie('jwt')
      });
        setCompanies(CompaniesMap(value.data));
    } catch (err) {
      setData(prev => ({...prev, error: err as Error}))
    } finally {
      setData(prev => ({...prev, loading: false}))
    }
  };

  const create =
      async ({company, title}:{company:Empresa, title: string}) => {
    try {
      setData(prev => ({...prev, loading: true}));
      const data = await fetchDataFromAPI({
        url: `/${type}`,
        method: 'POST',
        data: {data: {empresa: {id: company.id}, user: {id: getCookie('id')}}},
        token: getCookie('jwt')
      });

      localStorage.removeItem('constancy');
      localStorage.setItem('constancy', JSON.stringify({companies: [company], title}));
      window.open('/constancies/print?constancyID='+data.data.id, '_blank')
    } catch (err) {
      setData(prev => ({...prev, error: err as Error}))
    } finally {
      setData(prev => ({...prev, loading: false}))
    }
  }

  return {
    ...data, companies, get, getCompaniesByRTN, create
  }
}