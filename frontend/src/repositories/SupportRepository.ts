import { fetchDataFromAPI } from "../util/fetchDataFromAPI";

export default class SupportRepository {
  async notification() {
   const days = 10
   let msg = null
    try {
      const [dataSupport, {sysDate:now}] = await Promise.all([fetchDataFromAPI({url: '/soporte-tecnico'}), fetchDataFromAPI({url: '/soporte-tecnico/systemDate'})])

      const {FechaExpiracion, Estado} = dataSupport.data.attributes
      console.log({FechaExpiracion, now});
      const nowYear = now.split('/')[2]
      const nowMonth = now.split('/')[0]
      const nowDay = now.split('/')[1]
      const FechaExpiracionYear = FechaExpiracion.split('-')[0]
      const FechaExpiracionMonth = FechaExpiracion.split('-')[1]
      const FechaExpiracionDay = FechaExpiracion.split('-')[2]

      const difference = parseInt(FechaExpiracionDay) - parseInt(nowDay)
      if (FechaExpiracionMonth === nowMonth && FechaExpiracionYear === nowYear){
        if(difference <= days) {
          msg = `Quedan ${difference} días para que su servicio expire, favor contáctese con soporte técnico para realizar pago.`
        }
        if(difference <= 0) msg = 'EXPIRADO'
      }
    } catch (error) {
      console.error((error as Error).message);
    }
    return {msg}
  }
}
