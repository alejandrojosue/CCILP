import { useEffect } from "react";
import { useCompany } from "../../hooks/useCompany";
import { dateTimeFormat } from "../../util/dateTimeFormat";

export default function FormCompany() {
 const { fields, getFields } = useCompany()
 useEffect(() => {
  (async () => {
   await getFields();
  })()
 }, []);
 useEffect(() => {
  console.log(fields);
 }, [fields.loading])


 return (<>
  <form className="row g-3 needs-validation" noValidate>
   <div className="col-12">
    <span className="fw-bold"
    >Fecha de Registro y Afiliación: {dateTimeFormat(new Date() + "")}</span>
   </div>
   {/* INICIO SECCION 1*/}
   <div className="col-md-12">
    <input type="checkbox" defaultChecked={true} className="form-check-input" />
    {/* @ts-ignore */}
    <label className="form-check-label" htmlFor="validationFormCheck1"
    >Activo
    </label>
   </div>
   <div className="col-12">
    <h6 className="text-primary">INFORMACIÓN GENERAL DE LA EMPRESA A REGISTRAR Y AFILIAR</h6>
    <hr />
   </div>
   {/* TIPO TRAMITE*/}
   <div className="col-md-4">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom04" className="form-label">Tipo de Trámite</label>
    <select className="form-select" id="validationCustom04" required>
     <option selected disabled value="">Elegir...</option>
     <option value="Registro">Registro</option>
     <option value="Registro de Afiliación">Registro de Afiliación</option>
    </select>
    <div className="invalid-feedback">Por favor, seleccione un tipo de trámite!</div>
   </div>
   {/* FILIAL*/}
   <div className="col-md-4">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom04" className="form-label">Filial</label>
    <select className="form-select" id="validationCustom04" required>
     <option selected disabled value="">Elegir...</option>
     <option value="1">La Paz</option>
     <option value="2">Cane</option>
     <option value="3">San Pedro de Tutule</option>
     <option value="4">Santa Maria</option>
     <option value="5">Santiago de Puringla</option>
     <option value="6">San Antonio del Norte</option>
    </select>
    <div className="invalid-feedback">Por favor, seleccione un tipo de trámite!</div>
   </div>
   {/* FIN SECCION 1*/}

   {/* INICIO SECCION 2*/}
   {/* NOMBRE COMPLETO EMPRESA*/}
   <div className="col-md-8">
    {/* @ts-ignore */}
    <label htmlFor="validationCustomUsername" className="form-label"
    >Nombre Completo de la Empresa o Negocio</label>
    <div className="input-group has-validation">
     <input
      type="text"
      className="form-control"
      id="validationCustomUsername"
      aria-describedby="inputGroupPrepend"
      required
     />
     <div className="invalid-feedback">Por favor, ingrese el nombre!</div>
    </div>
   </div>
   {/* NOMBRE COMERCIAL*/}
   <div className="col-md-4">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom03" className="form-label">Nombre Comercial</label>
    <input type="text" className="form-control" id="validationCustom03" required />
    <div className="invalid-feedback">Por favor, ingrese el nombre comercial.</div>
   </div>
   {/* DIRECCION*/}
   <div className="col-md-12">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom03" className="form-label"
    >Dirección de la Empresa o Negocio</label>
    <textarea className="form-control" id="validationTextarea" required></textarea>
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
     required
    />
    <div className="invalid-feedback">Por favor, ingrese un celular válido!</div>
   </div>
   {/* CORREO*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom05" className="form-label">Correo Electrónico</label>
    <input type="email" className="form-control" id="validationCustom05" />
   </div>
   {/* RAMA*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom10" className="form-label">Rama</label>
    <select className="form-select" id="validationCustom10" required>
     <option selected disabled value="">Elegir...</option>
     <option value="I">Industria</option>
     <option value="C">Comercial</option>
     <option value="G">Ganadería</option>
     <option value="S">Servicio</option>
     <option value="Otro">Otro</option>
    </select>
    <div className="invalid-feedback">Por favor, seleccione una Rama!</div>
   </div>
   {/* CLASIFICACION EMPRESA*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom04" className="form-label"
    >Clasificación de la Empresa</label>
    <select className="form-select" id="validationCustom04" required>
     <option selected disabled value="">Elegir...</option>
     <option value="Mi">Micro</option>
     <option value="Pe">Pequeña</option>
     <option value="Me">Mediana</option>
     <option value="G">Grande</option>
     <option value="EI">Exenta de Impuestos</option>
    </select>
    <div className="invalid-feedback">Por favor, seleccione un tipo de trámite!</div>
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
    />
   </div>
   {/* NOMBRE SUBGERENTE*/}
   <div className="col-md-6">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom11" className="form-label">Nombre del Subgerente</label>
    <input
     type="text"
     className="form-control"
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
     required
    />
    <div className="invalid-feedback">Por favor, ingrese el nombre del contador!</div>
   </div>
   {/* ENCARGADO*/}
   <div className="col-md-6">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom12" className="form-label">Representante o Encargado de Tienda o Empresa</label>
    <input
     type="text"
     className="form-control"
     id="validationCustom12"
    />
   </div>
   {/* DENOMINACION SOCIAL*/}
   <div className="col-md-6">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom04" className="form-label"
    >Razón o Denominación Social</label>
    <select className="form-select" id="validationCustom04" required>
     <option selected disabled value="">Elegir...</option>
     <option value="1">(CI) Comerciante Individual</option>
     <option value="2">(CS) Sociedad Anonima de Capital Variable (S.A. de C.V.)</option>
     <option value="3">(CS) Sociedad de Responsabilidad Limitada de Capital Variable (S. de R.L. de C.V.)</option>
     <option value="4">(CS) Sociedad Anonima (S.A.)</option>
     <option value="5">(CS) Sociedad de Responsabilidad Limitada (S. de R.L.)</option>
     <option value="6">(PJ) Personalidad Juridica</option>
     <option value="7">(EC) Establecimiento Comercial - Informal</option>
    </select>
    <div className="invalid-feedback">Por favor, seleccione una denominación social!</div>
   </div>
   {/* NOMBRE SOCIOS*/}
   <div className="col-md-12">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom03" className="form-label"
    >Nombre de los Socios si es Sociedad</label>
    <textarea className="form-control" id="validationTextarea" required></textarea>
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
    />
    <div className="invalid-feedback">Por favor, ingrese un número de escritura!</div>
   </div>
   {/* FECHA CONSTITUCION*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom14" className="form-label">Fecha de Constitución</label>
    <input
     type="date"
     className="form-control"
     id="validationCustom14"
     required
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
     required
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
     required
    />
    <div className="invalid-feedback">Por favor, ingrese un número de tomo mercantil válido!</div>
   </div>
   {/* FECHA MERCANTIL*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom14" className="form-label">Fecha Mercantil</label>
    <input
     type="date"
     className="form-control"
     id="validationCustom14"
     required
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
     required
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
    />
    <div className="invalid-feedback">Por favor, ingrese un número de empleados!</div>
   </div>
   {/* ACTIVIDAD EMPRESARIAL*/}
   <div className="col-md-12">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom03" className="form-label"
    >Actividad Principal de la Empresa o Negocio</label>
    <textarea className="form-control" id="validationTextarea" required></textarea>
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
     required
    />
    <div className="invalid-feedback">Por favor, ingrese un capital máximo!</div>
   </div>
   {/* SECTOR DESEMPEÑO*/}
   <div className="col-md-5">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom10" className="form-label">Sector de Desempeño</label>
    <select className="form-select" id="validationCustom10" required>
     <option selected disabled value="">Elegir...</option>
     <option value="1">Turismo</option>
     <option value="2">Servicio</option>
     <option value="3">Agroindustria</option>
     <option value="4">Transporte</option>
     <option value="5">Financiero</option>
     <option value="6">Exportador</option>
     <option value="7">Comercio</option>
    </select>
    <div className="invalid-feedback">Por favor, seleccione un sector de desempeño!</div>
   </div>
   <div className="col-12">
    <h6 className="text-primary">INFORMACION DE LA CCILP</h6>
    <hr />
   </div>
   {/* SIGLA REGISTRO*/}
   <div className="col-md-3">
    {/* @ts-ignore */}
    <label htmlFor="validationCustom14numeroempleados" className="form-label">Sigla de REGISTRO</label>
    <input
     type="number"
     className="form-control"
     id="validationCustom14numeroempleados"
     min="0"
     required
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
    <select className="form-select" id="validationCustom04" required>
     <option selected disabled value="">Elegir...</option>
     <option value="1">Abarrotería</option>
     <option value="2">Asociación de Productores y Otras Asociaciones</option>
     <option value="3">Bares y Discotecas</option>
     <option value="4">Barberias y Spa</option>
     <option value="5">Beneficios de Café y Comercialización del Café</option>
     <option value="6">Bienes Raices, Ingeniería, Asesoría y Alquileres</option>
     <option value="7">Bufetes Juridicos y Notarias Legales</option>
     <option value="8">Casas de Empeños y Prestamistas No Bancarios</option>
    </select>
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
     required
    />
    <div className="invalid-feedback">Por favor, ingrese una cuota mensual!</div>
   </div>
   {/* FIN SECCION 3*/}

   <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
   </div>
  </form>
 </>)

}