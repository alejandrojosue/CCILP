import { useEffect } from "react";
import { COLUMNS_CONSTANCE } from "../../constants/datagridHeaders";
import DataTable from "../DataTable";
import useConstancy from "../../hooks/useConstancy";

export default function List({ type }: { type: string }) {

  const { loading, error, constancies, get } = useConstancy(type)

  useEffect(() => {
    get()
  }, []);

  if (error?.message) {
    return <h1 className="text-danger my-5">{error.message}</h1>
  }
  return (
    <DataTable columns={COLUMNS_CONSTANCE}
      rows={constancies.map((item) => {
        const {id:idEmpresa, ...resto} = item.empresa
        return{
          id: item.id,
          idEmpresa,
          ...resto
        }
      })} 
      loading={loading} />
  )
}