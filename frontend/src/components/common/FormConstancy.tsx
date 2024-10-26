import { useState } from "react"
import useConstancy from "../../hooks/useConstancy"
import Loading from "../Loading"

export default function FormConstancy({ type }: { type: string }) {
  const { loading, error, companies, getCompaniesByRTN, create } = useConstancy(type)
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
    getCompaniesByRTN({ rtn });
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
    {companies.length ?
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-8 col-12">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              {
                companies.map((company, index) => (
                  <>
                  <div className="accordion-item bg-transparent" key={`accordion-item-${index}`}>
                    <h2 className="accordion-header" id={`flush-heading${index}`}>
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                        {company?.NombreEmpresa ?? 'No tiene nombre de empresa'}
                      </button>
                    </h2>
                    <div id={`flush-collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <div className={`mt-3 row`}>
                          <label className="col-sm-2 col-form-label fw-bold">Nombre de Empresa:</label>
                          <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext" value={company?.NombreEmpresa ?? 'No tiene nombre de empresa'} />
                          </div>
                        </div>
                        <div className={`mt-3 row`}>
                          <label className="col-sm-2 col-form-label fw-bold">RTN de Empresa:</label>
                          <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext" value={company?.RTN ?? 'No tiene RTN'} />
                          </div>
                        </div>
                        <div className={`mt-3 row`}>
                          <label className="col-sm-2 col-form-label fw-bold">Correo Electrónico:</label>
                          <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext" value={company?.CorreoElectronico?? 'No tiene correo'} />
                          </div>
                        </div>
                        <div className={`mt-3 row`}>
                          <label className="col-sm-2 col-form-label fw-bold">Dirección:</label>
                          <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext" value={company?.Direccion ?? 'No tiene dirección'} />
                          </div>
                        </div>
                        <br />
                        <button onClick={() => create({ idCompany: company.id, href: `/constancies/print?title=${constancies.find(item => item.type === type)?.title || ''}&nombreEmpresa=${company?.NombreEmpresa}&nombreComercial=${company?.NombreComercial}&representanteLegal=${company?.NombreRepresentante}&tipoDenominacion=${company?.denominacion}&numeroRegistro=${company?.NumeroRegistro}&folio=${company?.FOLIO}&tomo=${company?.TOMO}&rtn=${company?.RTN}` })} className="btn btn-primary">Crear Constancia</button>
                      </div>
                    </div>
                  </div>
                  </>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      // <>

      // </> 
      : <p>No se encontró la empresa.</p>}
  </>)
}