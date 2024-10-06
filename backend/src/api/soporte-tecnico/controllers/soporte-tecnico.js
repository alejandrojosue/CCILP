'use strict';

/**
 * soporte-tecnico controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::soporte-tecnico.soporte-tecnico', ({strapi})=>({
 async systemDate(ctx){
  return {sysDate: new Date().toLocaleDateString()}
 }
}));
