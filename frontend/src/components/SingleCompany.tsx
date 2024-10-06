import { useEffect } from "react"
import { useCompany } from "../hooks/useCompany"
import Loading from "./Loading"

export default function SingleCompany({ id }: { id: string }) {
 const { data, getById } = useCompany()
 useEffect(() => {
  getById(id)
 }, [])
 useEffect(() => {
  document.title = data.empresas[0]?.NombreComercial
 }, [data.loading])
 return (<>
 <Loading isLoading={data.loading}/>
  <h1>{data.error?.message}</h1>
  <form className="row g-3 needs-validation" noValidate>
   <div className="col-12">
    <span className="fw-bold"
    >Fecha de Registro y Afiliación: {data.empresas[0]?.FechaConstitucion.toString()}</span>
   </div>
   {/* INICIO SECCION 1*/}
   <div className="col-md-12">
    <input type="checkbox" checked={data.empresas[0]?.Activo} className="form-check-input" />
    {/* @ts-ignore */}
    <label className="form-check-label" htmlFor="validationFormCheck1"
    >Activo
    </label>
   </div>
   <div className="col-12">
    <h6 className="text-primary">INFORMACIÓN GENERAL DE LA EMPRESA</h6>
    <hr />
   </div>

   {/* FILIAL*/}
   <div className="col-md-4">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom04" className="form-label">Filial</label>
    {/* @ts-ignore */}
    <input type="text" className="form-control" value={data.empresas[0]?.filial}
     required
    />
    <div className="invalid-feedback">Por favor, seleccione un tipo de trámite!</div>
   </div>
   {/* FIN SECCION 1*/}

   {/* INICIO SECCION 2*/}
   {/* NOMBRE COMPLETO EMPRESA*/}
   <div className="col-md-8">
    {/* @ts-ignore */}
    <label htmlFor="validationCustomUsername" className="form-label"
    >Nombre Completo de la Empresa o Negocio</label>
     <input
      type="text"
      className="form-control"
      value={data.empresas[0]?.NombreEmpresa}
      required
     />
     <div className="invalid-feedback">Por favor, ingrese el nombre!</div>
    </div>
   {/* NOMBRE COMERCIAL*/}
   <div className="col-md-4">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom03" className="form-label">Nombre Comercial</label>
    <input type="text" className="form-control" id="validationCustom03" value={data.empresas[0]?.NombreComercial} required />
    <div className="invalid-feedback">Por favor, ingrese el nombre comercial.</div>
   </div>
   {/* DIRECCION*/}
   <div className="col-md-12">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom03" className="form-label"
    >Dirección de la Empresa o Negocio</label>
    <textarea className="form-control" id="validationTextarea" value={data.empresas[0]?.Direccion} required></textarea>
    <div className="invalid-feedback">Por favor, ingrese una dirección válida!</div>
   </div>
   {/* RTN*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom03" className="form-label">RTN</label>
    <input
     type="text"
     className="form-control"
     id="validationCustom03"
     pattern="[0-9]{14}"
     placeholder="xxxxxxxxxxxxxx"
     value={data.empresas[0]?.RTN}
     required
    />
    <div className="invalid-feedback">Por favor, ingrese el RTN válido!</div>
   </div>
   {/* TELEFONO/FAX*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom05" className="form-label">Teléfono/Fax</label>
    <input
     type="text"
     className="form-control"
     id="validationCustom05"
     value={data.empresas[0]?.TelefonoFax}
    />
   </div>
   {/* CELULAR*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom05" className="form-label">Celular</label>
    <input
     type="text"
     className="form-control"
     id="validationCustom05"
     pattern="[0-9]{8}"
     placeholder="xxxxxxxx"
     value={data.empresas[0]?.Celular}
     required
    />
    <div className="invalid-feedback">Por favor, ingrese un celular válido!</div>
   </div>
   {/* CORREO*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom05" className="form-label">Correo Electrónico</label>
    <input type="email" className="form-control" id="validationCustom05" value={data.empresas[0]?.CorreoElectronico} />
   </div>
   {/* RAMA*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom10" className="form-label">Ramas</label>
    <input type="text" className="form-control" id="validationCustom05" value={data.empresas[0]?.Ramas.join(', ')} />

    <div className="invalid-feedback">Por favor, seleccione una Rama!</div>
   </div>
   {/* CLASIFICACION EMPRESA*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom04" className="form-label"
    >Clasificación de la Empresa</label>
    <input type="text" className="form-control" id="validationCustom05" value={data.empresas[0]?.Clasificacion} />

    <div className="invalid-feedback">Por favor, seleccione una clase!</div>
   </div>
   {/* FIN SECCION 2*/}
   {/* INICIO SECCION 3*/}
   {/* NOMBRE REPRESENTANTE*/}
   <div className="col-md-6">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom05" className="form-label">Nombre del Representante Legal o Gerente</label>
    <input
     type="text"
     className="form-control"
     id="validationCustom05"
     value={data.empresas[0]?.NombreRepresentante}
    />
   </div>
   {/* NOMBRE SUBGERENTE*/}
   <div className="col-md-6">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom11" className="form-label">Nombre del Subgerente</label>
    <input
     type="text"
     className="form-control"
     value={data.empresas[0]?.NombreSubgerente}
     id="validationCustom11"
    />
   </div>
   {/* NOMBRE CONTADOR*/}
   <div className="col-md-6">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom12" className="form-label">Nombre del Contador de la Empresa</label>
    <input
     type="text"
     className="form-control"
     id="validationCustom12"
     value={data.empresas[0]?.NombreContador}

     required
    />
    <div className="invalid-feedback">Por favor, ingrese el nombre del contador!</div>
   </div>

   {/* DENOMINACION SOCIAL*/}
   <div className="col-md-6">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom04" className="form-label"
    >Razón o Denominación Social</label>
    
    {/* @ts-ignore */}
    <input     type="text"     className="form-control"     value={data.empresas[0]?.denominacion}

     required
    />
    <div className="invalid-feedback">Por favor, seleccione una denominación social!</div>
   </div>
   {/* NOMBRE SOCIOS*/}
   <div className="col-md-12">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom03" className="form-label"
    >Nombre de los Socios si es Sociedad</label>
    <textarea className="form-control" id="validationTextarea" value={data.empresas[0]?.NombreSocios} required></textarea>
    <div className="invalid-feedback">Por favor, ingrese una dirección válida!</div>
   </div>
   <div className="col-12">
    <h6 className="text-primary">DATOS DE CLARACION DE COMERCIANTE O CONSTITUCION DE SOCIEDAD</h6>
    <hr />
   </div>
   {/* NUMERO ESCRITURA*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom14" className="form-label">Número de Escritura</label>
    <input
     type="number"
     className="form-control"
     id="validationCustom14"
     required
     value={data.empresas[0]?.NumeroEscritura}
    />
    <div className="invalid-feedback">Por favor, ingrese un número de escritura!</div>
   </div>
   {/* FECHA CONSTITUCION*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom14" className="form-label">Fecha de Constitución</label>
    {/* @ts-ignore */}
    <input     type="date"     className="form-control"  value={data.empresas[0]?.FechaConstitucion}
     required
     readOnly
    />
    <div className="invalid-feedback">Por favor, ingrese una fecha!</div>
   </div>
   {/* REGISTRO MERCANTIL*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom14registromercantil" className="form-label">Número de Registro Mercantil</label>
    <input
     type="number"
     className="form-control"
     id="validationCustom14registromercantil"
     value={data.empresas[0]?.NumeroRegistro}
     required
     readOnly
    />
    <div className="invalid-feedback">Por favor, ingrese un número de registro mercantil válido!</div>
   </div>
   {/* TOMO MERCANTIL*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom14tomomercantil" className="form-label">Número de Tomo Mercantil</label>
    <input
     type="number"
     className="form-control"
     id="validationCustom14tomomercantil"
     value={data.empresas[0]?.TomoMercantil}
     required
     readOnly
    />
    <div className="invalid-feedback">Por favor, ingrese un número de tomo mercantil válido!</div>
   </div>
   {/* FECHA MERCANTIL*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom14" className="form-label">Fecha Mercantil</label>
    {/* @ts-ignore */}
    <input     type="date"     className="form-control"  value={data.empresas[0]?.FechaMercantil}
     required readOnly
    />
    <div className="invalid-feedback">Por favor, ingrese una fecha!</div>
   </div>
   {/* LUGAR DECLARACION*/}
   <div className="col-md-6">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom14lugardeclaracion" className="form-label">Lugar de Declaración de Comerciante</label>
    <input
     type="text"
     className="form-control"
     id="validationCustom14lugardeclaracion"
     minLength={5}
     value={data.empresas[0]?.LugarDeclaracion}
     required readOnly
    />
    <div className="invalid-feedback">Por favor, ingrese un lugar de declaración!</div>
   </div>
   {/* NUMERO EMPLEADOS*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom14numeroempleados" className="form-label">Número de Empleados</label>
    <input
     type="number"
     className="form-control"
     id="validationCustom14numeroempleados"
     min="0"
     required
     readOnly
     value={data.empresas[0]?.NumeroEmpleados}
    />
    <div className="invalid-feedback">Por favor, ingrese un número de empleados!</div>
   </div>
   {/* ACTIVIDAD EMPRESARIAL*/}
   <div className="col-md-12">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom03" className="form-label"
    >Actividad Principal de la Empresa o Negocio</label>
    <textarea className="form-control" id="validationTextarea" value={data.empresas[0]?.ActividadEmpresarial} required></textarea>
    <div className="invalid-feedback">Por favor, ingrese una actividad empresarial!</div>
   </div>
   {/* CAPITAL MAXIMO*/}
   <div className="col-md-5">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom14numeroempleados" className="form-label">Capital Máximo Autorizado de la Empresa o Negocio</label>
    <input
     type="number"
     className="form-control"
     id="validationCustom14numeroempleados"
     min="0"
     value={data.empresas[0]?.CapitalMaximo}
     required
    />
    <div className="invalid-feedback">Por favor, ingrese un capital máximo!</div>
   </div>
   {/* SECTOR DESEMPEÑO*/}
   <div className="col-md-5">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom10" className="form-label">Sector de Desempeño</label>
    <input
     type="text"
     className="form-control"
     id="validationCustom14numeroempleados"
     min="0"
     value={data.empresas[0]?.sector_desempenos.join(', ')}
     required
    />
    <div className="invalid-feedback">Por favor, seleccione un sector de desempeño!</div>
   </div>
   <div className="col-12">
    <h6 className="text-primary">INFORMACION DE LA CCILP</h6>
    <hr />
   </div>
   {/* SIGLA REGISTRO*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom14numeroempleados" className="form-label">Sigla de Registro</label>
    <input
     type="number"
     className="form-control"
     id="validationCustom14numeroempleados"
     min="0"
     required
     value={data.empresas[0]?.NumeroRegistro}
    />
    <div className="invalid-feedback">Por favor, ingrese un número de tomo!</div>
   </div>
   {/* NUMERO REGISTRO*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom14numeroempleados" className="form-label">Número de Registro</label>
    <input
     type="number"
     className="form-control"
     id="validationCustom14numeroempleados"
     value={data.empresas[0]?.NumeroRegistro}
     min="0"
     required
    />
    <div className="invalid-feedback">Por favor, ingrese un número de regitro!</div>
   </div>

   {/* NUMERO FOLIO*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom14numeroempleados" className="form-label">Número de Folio</label>
    <input
     type="number"
     className="form-control"
     id="validationCustom14numeroempleados"
     min="0"
     value={data.empresas[0]?.FOLIO}
     required
    />
    <div className="invalid-feedback">Por favor, ingrese un número de folio!</div>
   </div>

   {/* NUMERO TOMO*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom14numeroempleados" className="form-label">Número de Tomo</label>
    <input
     type="text"
     className="form-control"
     id="validationCustom14numeroempleados"
     value={data.empresas[0]?.TOMO}
     min="0"
     required
    />
    <div className="invalid-feedback">Por favor, ingrese un número de tomo!</div>
   </div>
   {/* CATEGORIA*/}
   <div className="col-md-6">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom04" className="form-label"
    >Clasificación de la Empresa</label>
    {/* @ts-ignore */}
    <input     type="text"     className="form-control"     value={data.empresas[0]?.categoria}
     required
    />
    <div className="invalid-feedback">Por favor, seleccione un tipo de trámite!</div>
   </div>
   {/* PAGO AFILIACION*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom14numeroempleados" className="form-label">Pago por Afiliación</label>
    <input
     type="number"
     className="form-control"
     id="validationCustom14numeroempleados"
     min="0"
     value={data.empresas[0]?.PagoAfiliacion}
     required
    />
    <div className="invalid-feedback">Por favor, ingrese un pago por afiliación!</div>
   </div>
   {/* CUOTA MENSUAL*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom14numeroempleados" className="form-label">Cuota Mensual</label>
    <input
     type="number"
     className="form-control"
     id="validationCustom14numeroempleados"
     min="0"
     value={data.empresas[0]?.CuotaMensual}
     required
    />
    <div className="invalid-feedback">Por favor, ingrese una cuota mensual!</div>
   </div>
  </form>
 </>)
}