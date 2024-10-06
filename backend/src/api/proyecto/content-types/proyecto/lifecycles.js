module.exports = {
 async afterCreate(event) {
  const { params, result } = event;    
  try {
   const {data} = params;
   const {createdBy} = result;
   
   await strapi.entityService.create('api::bitacora.bitacora', {
    data: {
     admin_user: { id: createdBy?.id },
     Descripcion: 'Se ha creado un proyecto',
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
   const oldData = await strapi.service('api::proyecto.proyecto')
   .findOne(e.params.data.id);
   const newData = e.params.data;
   await strapi.entityService.create('api::bitacora.bitacora', {
    data: {
     admin_user: { id: e.params?.data?.updatedBy },
     Descripcion: 'Se ha modificado un proyecto',
     Accion: 'PUT',
     Datos: {oldData, newData}
    }
   });
  } catch (error) {
   console.error(error);
  }
 }
};