import {useState} from 'react';
import type {Constancia, Empresa} from '../types/types';
import {fetchDataFromAPI} from '../util/fetchDataFromAPI';
import {RegistersMap} from '../map/constancies/RegisterMap';
import {CompanyMap} from '../map/CompanyMap';
import {getCookie} from '../util/cookies';

export default function useConstancy(type: string) {
  const [data, setData] = useState<
      {loading: boolean, error: null | Error, constancies: Constancia[]}>(
      {loading: false, error: null, constancies: []});
  const [company, setCompany] = useState<Empresa>()

  const get = async () => {
    try {
      setData(prev => ({...prev, loading: true}))
      const values = await fetchDataFromAPI({
        url: `/${type}?populate=empresa.tipo_tramite,empresa.ramas,empresa.filial, empresa.denominacion,empresa.sector_desempenos, empresa.categoria`,
        token: getCookie('jwt')
      });
      setData(prev => ({...prev, constancies: RegistersMap(values.data)}))
    } catch (err) {
      setData(prev => ({...prev, error: err as Error}))
    } finally {
      setData(prev => ({...prev, loading: false}))
    }
  };

  const getCompanyByRTN = async ({rtn}: {rtn: string}) => {
    try {
      setData(prev => ({...prev, loading: true}))
      const value = await fetchDataFromAPI({
        url: `/empresas?filters[$and][0][RTN][$eq]=${rtn}&populate=*`,
        token: getCookie('jwt')
      });

      if (value.data.length) {
        setCompany(CompanyMap(value.data[0]?.id, value.data[0]?.attributes));
      } else
        setCompany(undefined)
    } catch (err) {
      setData(prev => ({...prev, error: err as Error}))
    } finally {
      setData(prev => ({...prev, loading: false}))
    }
  };

  const create =
      async ({idCompany, href}: {idCompany: number, href: string}) => {
    try {
      setData(prev => ({...prev, loading: true}));
      const data = await fetchDataFromAPI({
        url: `/${type}`,
        method: 'POST',
        data: {data: {empresa: {id: idCompany}, user: {id: getCookie('id')}}},
        token: getCookie('jwt')
      });
      window.open(href+'&constancyID='+data.data.id, '_blank')

    } catch (err) {
      setData(prev => ({...prev, error: err as Error}))
    } finally {
      setData(prev => ({...prev, loading: false}))
    }
  }

  return {
    ...data, company, get, getCompanyByRTN, create
  }
}