module.exports = {
 async beforeUpdate(e) {
  try {
   const oldData = await strapi.service('api::config.config')
    .findOne(e.params.data.id);
   const newData = e.params.data;
   await strapi.entityService.create('api::bitacora.bitacora', {
    data: {
     admin_user: { id: e.params?.data?.updatedBy },
     Descripcion: 'Se han modificado las configuraciones',
     Accion: 'PUT',
     Datos: { oldData, newData }
    }
   });
  } catch (error) {
   console.error(error);
  }
 }
};