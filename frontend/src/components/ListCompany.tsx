import { useEffect, useState } from "react";
import { useCompany } from "../hooks/useCompany";
import { COLUMNS_COMPANIES } from "../constants/datagridHeaders";
import DataTable from "./DataTable";
import type { Empresa } from "../types/types";

export default function List() {

  const { data, getCompanies, setData, getCompaniesByRTN } = useCompany()
  const [filter, setFilter] = useState("");
  const [dataCaching, setDataCaching] = useState<Empresa[]>([])
  const filteredCompanies = data?.empresas?.filter((item) =>
    item.RTN.includes(filter)
  );
  useEffect(() => {
    getCompanies()
  }, []);

  useEffect(() => {
    if (!dataCaching.length) setDataCaching(data.empresas)
  }, [data]);

  useEffect(() => {
    if (filter.length <= 14 && !filteredCompanies.length && !data.loading) {
      getCompaniesByRTN({ filter });
    } else setData(prev=>({ ...prev, empresas: dataCaching}))
    

      
  }, [filter]);


  if (data?.error?.message) {
    return <h1 className="text-danger my-5">{data.error.message}</h1>
  }
  return (
    <>
      <input
        type="number"
        placeholder="Filtrar por RTN de empresa"
        className="my-2 form-control"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}  // Actualizar el estado del filtro
      />

      <DataTable columns={COLUMNS_COMPANIES}
        rows={filteredCompanies} loading={data.loading} />
    </>
  )
}