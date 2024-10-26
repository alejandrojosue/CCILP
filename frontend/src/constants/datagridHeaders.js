export const COLUMNS_COMPANIES = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'RTN',
    headerName: 'RTN',
    width: 140,
  },
  { 
    field: 'NombreRepresentante', 
    headerName: 'Nombre del Representante Legal o Gerente',
    width: 320,
  },
  {
    field: 'NombreComercial',
    headerName: 'Nombre Comercial',
    width: 200,
  },
  {
    field: 'CorreoElectronico',
    headerName: 'Correo Electrónico',
    width: 300,
  },
  {
    field: 'Celular',
    headerName: 'Celular',
    sortable: false,
    align: 'center',
    width: 110,
  },
  { 
    field: 'tipo_tramite', 
    headerName: 'Tipo de Trámite',
    width: 150,
  },];

  export const COLUMNS_CONSTANCE = [
    { field: 'id', headerName: 'No. Constancia', sortable: false, width: 180 },
    { 
      field: 'RTN', 
      headerName: 'RTN de Empresa',
      width: 150,
    },
    { 
      field: 'NombreEmpresa', 
      headerName: 'Nombre de Empresa',
      width: 400,
    },
    { 
      field: 'Celular', 
      headerName: 'Celular de Empresa',
      width: 150,
    },
    ];