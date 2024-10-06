import { fetchDataFromAPI } from "../util/fetchDataFromAPI";

export default class SupportRepository {
  async notification() {
   const days = 10
   let msg = null
    try {
      const [dataSupport, {sysDate:now}] = await Promise.all([fetchDataFromAPI({url: '/soporte-tecnico'}), fetchDataFromAPI({url: '/soporte-tecnico/systemDate'})])

      const {FechaExpiracion, Estado} = dataSupport.data.attributes
      
      const difference = parseInt(FechaExpiracion.split('-')[2]) - parseInt(now.split('/')[0])
      if(difference === 0) msg = 'EXPIRADO'
      if(difference <= days){
       msg = `Quedan ${difference} días para que su servicio expire, favor contáctese con soporte técnico para realizar pago.`
      }
    } catch (error) {
    }
    return {msg}
  }
}
