export function setCookie(name: string, value: string) {
  const now = new Date();
  const expirationTime =
      new Date(now.getTime() + 55 * 60 * 1000);  // 55 minutos en milisegundos
  document.cookie =
      `${name}=${value}; expires=${expirationTime.toUTCString()}; path=/`;
};

export const getCookie = (name: string) => {
  let cookieArr = document.cookie.split(';');
  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split('=');
    if (name === cookiePair[0].trim()) return decodeURIComponent(cookiePair[1]);
  }
  return undefined;
};

export function deleteAllCookies() {
  // Obtener todas las cookies del documento
  const cookies = document.cookie.split(';');

  // Iterar sobre cada cookie y eliminarla
  cookies.forEach(cookie => {
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    // Configurar la cookie con una fecha de expiración pasada para eliminarla
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
  });
}
