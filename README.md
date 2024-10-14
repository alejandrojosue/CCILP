<a name="readme-top"></a>
<div align="center">
<h1> Sistema de gestión de Constancias, Empresas, Proyectos y Emprendedores para CCILP 🌟</h1> 

Sistema diseñado para facilitar lo que es la impresión de los distintos tipos de constancias manejados y la gestión de empresas y emprendedores afiliados.
</div>


## Características principales

- **Contratación Freelance**: Conoce los detalles de cómo contratar freelancers para tus proyectos.
- **Venta de Plantillas**: Explora una amplia variedad de plantillas disponibles para su compra.
- **Información sobre el Proyecto**: Accede a detalles sobre el proyecto, su misión y visión.


<details><summary>Tabla de contenidos</summary>
- [Plataforma de Contratación Freelance y Venta de Plantillas 🌟](#plataforma-de-contratación-freelance-y-venta-de-plantillas-)
  - [Características principales](#características-principales)
  - [VPS](#vps)
    - [Prerequisitos](#prerequisitos)
  - [Contribuir al proyecto](#contribuir-al-proyecto)
  - [🚀 Estructura del Proyecto](#-estructura-del-proyecto)
  - [🧞 Comandos](#-comandos)
  - [🛠️ Stack](#️-stack)

</details>

## Configuración VPS
### Primeros Pasos
- Instalar el sistema operativo Ubuntu.
- Acceder al VPS mediante CMD:
~~~
ssh miUser@IP_del_VPS
// Ingresar contraseña
~~~
- Después de instalarlo, ejecutar el siguiente comando para actualizar la versión del sistema operativo.
~~~
sudo apt update
~~~
~~~
sudo apt upgrade
~~~


### Configuración de Entorno
- Crear los directorios para los entorno de producción y desarrollo:
~~~
mkdir CCILP_DEV
mkdir CCILP_PROD
~~~
- Clonar repositorio de github en ambas carpetas:
~~~
// Para desarrollo.
cd CCILP_DEV
git clone https://github.com/alejandrojosue/CCILP.git
//
// Para producción.
cd CCILP_DEV
git clone https://github.com/alejandrojosue/CCILP.git
~~~
- Instalar `Docker` para creación de base de datos de `PostgreSQL`.
 - Primero  instale algunos paquetes de requisitos previos que permitan a apt usar paquetes a través de HTTPS:
~~~
sudo apt install apt-transport-https ca-certificates curl software-properties-common
~~~
 - Segundo, añada la clave de GPG para el repositorio oficial de Docker en su sistema:
 ~~~
 curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
 ~~~
 - Tercero, agregue el repositorio de Docker a las fuentes de APT
 ~~~
 sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
 ~~~
 - A continuación, actualice el paquete de base de datos con los paquetes de Docker del repositorio recién agregado:
~~~
sudo apt update
~~~
 - Por último, instale Docker:
~~~
sudo apt install docker-ce
~~~
- Una vez ya instalado, configuramos nuestro gestor de PostgreSQL versión 15:
~~~
// Descargamos la imagen de postgre versión 15
docker pull postgres:15
// Creamos un contenedor para desarrollo y otro para producción
docker run --name postgre_dev -e POSTGRES_USER=mi_user_dev -e POSTGRES_PASSWORD=mi_pass_dev -e POSTGRES_DB=db_dev -p 5432:5432 -d postgres:15
//
docker run --name postgre_prod -e POSTGRES_USER=mi_user_prod -e POSTGRES_PASSWORD=mi_pass_prod -e POSTGRES_DB=db_prod -p 5433:5432 -d postgres:15
~~~
- Ahora, para ejecutar nuestros proyectos, instalaremos ``NVM``  ver [documentación oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
~~~
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
//
source ~/.bashrc
// Verificamos que esté instalado.
nvm --version
~~~
- Ahora instalaremos `NodeJS`:
~~~
nvm install node
nvm install --lts
~~~

### Configuración de Proyecto
- Crear un archivo `.env` tanto para el `backend` como para el `frontend`, tanto para ambiente desarrollo como producción. Verificar el archivo `.env.example` de cada parte.
- En la carpeta `frontend/` del proyecto (tanto para desarrollo como producción), crear un archivo llamado `astro.config.mjs`.
~~~
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
export default defineConfig({
  output: 'server',
  devToolbar: {
    enabled: false
  },
  server: {
    port: 3000, // 3000 DEV, 3001 PROD
    host: '0.0.0.0'
  },
  integrations: [react()]
});
~~~
- Ahora que contamos con NodeJS, instalamos los paquetes que nuestro proyecto nesecita:
~~~
cd frontend
npm install
//
cd backend
npm install
~~~
- Para levantar nuestro proyecto, revisar el package.json del `backend` y del `frontend `.
- Para mantener levantado nuestro proyecto, debemos instalar de manera global `pm2` [documentación oficial](https://www.npmjs.com/package/pm2).
~~~
npm install pm2 -g
~~~
- Ahora sí, para levantar nuestro proyecto, lo haremos en los diferentes modos.
 - Modo Desarrollo
 ~~~
 cd CCILP_DEV/backend
 pm2 start npm --name backend_dev -- run start
 cd ../frontend
 pm2 start npm --name frontend_dev -- run dev
 ~~~
  - Modo Producción
 ~~~
 cd CCILP_PROD/backend
 npm run build
 pm2 start npm --name backend_prod -- run start
 cd ../frontend
 npm run build
 pm2 start npm --name frontend_prod -- run start
 ~~~

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## 🛠️ Stack

- [![Astro][astro-badge]][astro-url] - El framework web para sitios web impulsados por contenido.
- [![Typescript][typescript-badge]][typescript-url] - JavaScript con sintaxis para tipos.
- [![react JS][tailwind-badge]][tailwind-url] - Librería de frontend que agiliza el implementar funcionalidades reactivas.
- [![Strapi][strapi-badge]][strapi-url] - Headless CMS para gestionar contenido.
- [![Bootstrap][bootstrap-badge]][bootstrap-url] - Un framework CSS de utilidades para construir diseños personalizados rápidamente.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

[astro-url]: https://astro.build/
[typescript-url]: https://www.typescriptlang.org/
[react-url]: https://es.react.dev/
[strapi-url]: https://github.com/strapi/strapi
[bootstrap-url]: https://getbootstrap.com/

[astro-badge]: https://img.shields.io/badge/Astro-fff?style=for-the-badge&logo=astro&logoColor=bd303a&color=352563
[typescript-badge]: https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&color=blue
[react-badge]: https://img.shields.io/badge/react-ffffff?style=for-the-badge&logo=react&logoColor=38bdf8
[animations-badge]: https://img.shields.io/badge/@alejandrojosue/tailwind-animations-ff69b4?style=for-the-badge&logo=node.js&logoColor=white&color=blue
[strapi-badge]: https://img.shields.io/badge/Strapi-000000?style=for-the-badge&logo=strapi&logoColor=2e7df7&color=black
[bootstrap-badge]: https://img.shields.io/badge/bootstrap-bage?style=for-the-badge&logo=bootstrap&logoColor=white&color=673ab8

[contributors-url]: https://github.com/alejandrojosue/TiendaPlantillas-frontend/graphs/contributors
[contributors-shield]: https://img.shields.io/github/contributors/alejandrojosue/TiendaPlantillas-frontend.svg?style=for-the-badge
[forks-shield]: https://img.shields.io/github/forks/alejandrojosue/TiendaPlantillas-frontend.svg?style=for-the-badge
[forks-url]: https://github.com/alejandrojosue/TiendaPlantillas-frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/alejandrojosue/TiendaPlantillas-frontend.svg?style=for-the-badge
[stars-url]: https://github.com/alejandrojosue/TiendaPlantillas-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/alejandrojosue/TiendaPlantillas-frontend.svg?style=for-the-badge
[issues-url]: https://github.com/alejandrojosue/TiendaPlantillas-frontend/issues


<!-- 
Para generar las etiquetas como esta:
[astro-badge]: https://img.shields.io/badge/Astro-fff?style=for-the-badge&logo=astro&logoColor=bd303a&color=352563

1. hay que visitar: https://shields.io/badges
2. En el panel derecho, llenar los campos: badge-Content, style (for-the-bagde), logo (tecnología como astro), colot y logoColor.
3. seleccionar formato al final (url, md, ...)
4. Ejecutar y copiar al final
-->