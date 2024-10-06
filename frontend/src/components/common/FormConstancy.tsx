import { useState } from "react"
import useConstancy from "../../hooks/useConstancy"
import Loading from "../Loading"

export default function FormConstancy({ type }: { type: string }) {
  const { loading, error, company, getCompanyByRTN, create } = useConstancy(type)
  const [rtn, setRtn] = useState('')
  const constancies = [
    {
      type: 'constancia-renovacions',
      title: 'RENOVACIÓN DE REGISTRO'
    },
    {
      type: 'constancia-registros',
      title: 'REGISTRO'
    },
    {
      type: 'constancia-solvencias',
      title: 'SOLVENCIA'
    }
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getCompanyByRTN({ rtn });
  };
  if (error?.message) {
    return <p className="fw-bold">{error.message}</p>
  }
  return (<>
    <Loading isLoading={loading} />
    <div className="row">
      <form onSubmit={handleSubmit} className="col-md-6 gap-2 my-2 d-flex align-items-center">
        <label className="fw-bold">RTN:</label>
        <input
          type="text"
          className="form-control"
          placeholder="XXXXXXXXXXXXXX"
          name="rtn"
          value={rtn}
          onChange={e => setRtn(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Buscar</button>
      </form>
    </div>
    {company ? <>
      <div className={`mt-3 row`}>
        <label className="col-sm-2 col-form-label fw-bold">Nombre de Empresa:</label>
        <div className="col-sm-10">
          <input type="text" readOnly className="form-control-plaintext" value={company?.NombreEmpresa} />
        </div>
      </div>
      <div className={`mt-3 row`}>
        <label className="col-sm-2 col-form-label fw-bold">RTN de Empresa:</label>
        <div className="col-sm-10">
          <input type="text" readOnly className="form-control-plaintext" value={company?.RTN} />
        </div>
      </div>
      <div className={`mt-3 row`}>
        <label className="col-sm-2 col-form-label fw-bold">Correo Electrónico:</label>
        <div className="col-sm-10">
          <input type="text" readOnly className="form-control-plaintext" value={company?.CorreoElectronico} />
        </div>
      </div>
      <div className={`mt-3 row`}>
        <label className="col-sm-2 col-form-label fw-bold">Dirección:</label>
        <div className="col-sm-10">
          <input type="text" readOnly className="form-control-plaintext" value={company?.Direccion} />
        </div>
      </div>
      <br />
      <button onClick={() => create({ idCompany: company.id, href: `/constancies/print?title=${constancies.find(item=>item.type === type)?.title || ''}&nombreEmpresa=${company?.NombreEmpresa}&nombreComercial=${company?.NombreComercial}&representanteLegal=${company?.NombreRepresentante}&tipoDenominacion=${company?.denominacion}&numeroRegistro=${company?.NumeroRegistro}&folio=${company?.FOLIO}&tomo=${company?.TOMO}&rtn=${company?.RTN}` })} className="btn btn-primary">Crear Constancia</button>
    </> :
      <p>No se encontró la empresa.</p>}
  </>)
}