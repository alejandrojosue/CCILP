export const ConfigMap = (attributes: any): {
  Telefonos: string,
  Director: string,
  Direccion: string,
  CorreosElectronicos: string,
  Website: string
} => {
  return {
    Telefonos: attributes.Telefonos, Director: attributes.Director,
        Direccion: attributes.Direccion,
        CorreosElectronicos: attributes.CorreosElectronicos,
        Website: attributes.Website,
  }
}