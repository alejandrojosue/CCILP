module.exports = {
 async afterCreate(event) {
  const { params, result } = event;    
  try {
   const {data} = params;
   const {createdBy} = result;
   
   await strapi.entityService.create('api::bitacora.bitacora', {
    data: {
     admin_user: { id: createdBy?.id },
     Descripcion: 'Se ha creado una empresa',
     Accion: 'POST',
     Datos: data
    }
   });
   return;

  } catch (error) {
   console.log(error);
  }

 },

 async beforeUpdate(e){
  try {
   const oldData = await strapi.service('api::empresa.empresa')
   .findOne(e.params.data.id, {
    populate: {
     tipo_tramite: true,
     filial: true,
     denominacion: true,
     sector_desempenos: true,
     categoria: true,
     ramas: true
    }
   });
   const newData = e.params.data;
   await strapi.entityService.create('api::bitacora.bitacora', {
    data: {
     admin_user: { id: e.params?.data?.updatedBy },
     Descripcion: 'Se ha modificado una empresa',
     Accion: 'PUT',
     Datos: {oldData, newData}
    }
   });
  } catch (error) {
   console.error(error);
  }
 }
};