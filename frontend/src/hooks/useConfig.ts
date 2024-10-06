import { useState } from "react"
import { fetchDataFromAPI } from "../util/fetchDataFromAPI";
import { ConfigMap } from "../map/ConfigMap";

export const useConfig = () =>{
 const [data, setData] = useState<{
  config: {
   Director: string,
   Telefonos: string,
   Direccion: string,
   CorreosElectronicos: string,
   Website: string
  } | null,
  loading: boolean,
  error: null | Error
}>({
  config: null,
  loading: true,
  error: null
});

 const get = async()=>{
  setData(prev => ({...prev, loading: true}))
    try {
      const data = await fetchDataFromAPI({
        url: '/config'
      });      
      setData(prev=>({...prev, config: ConfigMap(data.data.attributes) }))
    } catch (error) {
      setData(prev => ({...prev, error: error as Error}))
    }finally{
      setData(prev=>({...prev, loading: false}))
    }
 };

 return {...data, get}
}