module.exports = {
 routes: [
     {
         method: 'GET',
         path: '/soporte-tecnico/systemDate',
         handler: 'soporte-tecnico.systemDate',
         config: {
            auth: false
         }
     }
 ]
}