const { ApplicationError } = require('@strapi/utils').errors;
module.exports = {
    async afterCreate(event) {
        const { params, result } = event;
        try {
            const { data } = params;
            const { createdBy } = result;

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
            console.error(error);
        }

    },

    async beforeCreate(event) {
        const { data } = event.params;

        if (!data.denominacion.connect[0]) {
            throw new ApplicationError("La denominación es obligatoria");
        }

        if (!data.tipo_tramite.connect[0]) {
            throw new ApplicationError("El tipo de trámite es obligatorio");
        }

        if (!data.filial.connect[0]) {
            throw new ApplicationError("La filial es obligatoria");
        }

        if (!data.categoria.connect[0]) {
            throw new ApplicationError("La categoría es obligatoria");
        }

        if (!data.sector_desempenos.connect[0]) {
            throw new ApplicationError("El sector de desempeño es obligatorio");
        }
    },

    async beforeUpdate(e) {

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

            const { data } = e.params;

            if (!data.denominacion.connect[0] && !oldData.denominacion) {
                throw new ApplicationError("La denominación es obligatoria");
            }

            if (!data.tipo_tramite.connect[0] && !oldData.tipo_tramite) {
                throw new ApplicationError("El tipo de trámite es obligatorio");
            }

            if (!data.filial.connect[0] && !oldData.filial) {
                throw new ApplicationError("La filial es obligatoria");
            }

            if (!data.categoria.connect[0] && !oldData.categoria) {
                throw new ApplicationError("La categoría es obligatoria");
            }

            if (!data.sector_desempenos.connect[0] && !oldData.sector_desempenos.length) {
                throw new ApplicationError("El sector de desempeño es obligatorio");
            }
            const newData = e.params.data;
            await strapi.entityService.create('api::bitacora.bitacora', {
                data: {
                    admin_user: { id: e.params?.data?.updatedBy },
                    Descripcion: 'Se ha modificado una empresa',
                    Accion: 'PUT',
                    Datos: { oldData, newData }
                }
            });
        } catch (error) {
                throw new ApplicationError(error.message);
        }
    }
};