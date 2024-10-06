
module.exports = {
 beforeCreate(event) {
  let { data, where, select, populate } = event.params;
  //   data.isTableFull = data.numOfPeople === 4;
 },

 async afterCreate(event) {
  const { params } = event;
  try {   
   const idEmpresa = params?.data?.empresa?.id
   const data = await strapi.service('api::empresa.empresa')
    .findOne(idEmpresa)
   await strapi.entityService.create('api::bitacora.bitacora', {
    data: {
     users_permissions_user: { id: params?.data?.user.id },
     Descripcion: 'Se ha creado una constancia de renovación',
     Accion: 'POST',
     Datos: data
    }
   });
   return;

  } catch (error) {
   console.log(error);
  }

 },

 beforeUpdate(e) {
  const { result, params } = e;
 }
};