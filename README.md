<a id="readme-top"></a>
<div align="center">
<h1> Sistema de gestión de Constancias, Empresas, Proyectos y Emprendedores para CCILP 🌟</h1> 

Sistema diseñado para facilitar lo que es la impresión de los distintos tipos de constancias manejados y la gestión de empresas y emprendedores afiliados.
</div>

## Características principales

- **Extensión de Constancias**: Crear constancias, ya sea de registro, renovación, etc. Para luego imprimirlas y darselas a los clientes.
- **Empresas Afiliadas**: Registro y edisión de datos de todas las empresas afiliadas a la CCILP.
- **Parametrización de Datos Generales**: Como ser correos de la institución, nombre del director, etc.
- **Emprendedores, Proyectos y  Programas**: Registro de emprendedores, asi como sus proyectos y los programas en el que participan.
- **Denominaciones, Filiales, Ramas, etc.**: Datos necesarios para la impresión de constancias, completado de datos para los registros de las empresas.
- **Usuarios**: Administración y gestión de los usuarios que pueden acceder al módulo no administrativo y extender constancias.


<details>
<summary>Tabla de contenidos</summary>

- [Características principales](#características-principales)
- [🖥️ Configuración VPS HOSTINGER](#️-configuración-vps-hostinger)
  - [Primeros Pasos](#primeros-pasos)
  - [Configuración de Entorno](#configuración-de-entorno)
  - [Configuración de Proyecto](#configuración-de-proyecto)
  - [⚠️ Troubleshooting](#️-troubleshooting)
    - [Error: No hay conexción SSH mediante terminal](#error-no-hay-conexción-ssh-mediante-terminal)
    - [🚑 Solución rápida](#-solución-rápida)
- [🔄 Nginx](#-nginx)
- [☁️ Cloudflare](#️-cloudflare)
- [🔒 Certbot SSL](#-certbot-ssl)
  - [Renovación](#renovación)
- [🛠️ Stack](#️-stack)

</details>

## 🖥️ Configuración VPS HOSTINGER
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

- Clonar repositorio de github para cada ambiente y renombrar carpeta:
~~~
// Para desarrollo.
git clone --branch nombre-de-la-rama-dev --single-branch https://github.com/alejandrojosue/CCILP.git
mv CCILP CCILP_DEV
//
// Para Pruebas.
git clone --branch nombre-de-la-rama-qa --single-branch https://github.com/alejandrojosue/CCILP.git
mv CCILP CCILP_QA
//
// Para producción.
git clone --branch nombre-de-la-rama-prod --single-branch https://github.com/alejandrojosue/CCILP.git
mv CCILP CCILP_PROD
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
// Creamos un contenedor para desarrollo, pruebas y otro para producción
docker run --name postgre_dev -e POSTGRES_USER=mi_user_dev -e POSTGRES_PASSWORD=mi_pass_dev -e POSTGRES_DB=db_dev -p 5432:5432 -d postgres:15
//
// Creamos un contenedor para desarrollo, pruebas y otro para producción
docker run --name postgre_qa -e POSTGRES_USER=mi_user_qa -e POSTGRES_PASSWORD=mi_pass_qa -e POSTGRES_DB=db_qa -p 5434:5432 -d postgres:15
//
docker run --name postgre_prod -e POSTGRES_USER=mi_user_prod -e POSTGRES_PASSWORD=mi_pass_prod -e POSTGRES_DB=db_prod -p 5435:5432 -d postgres:15
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
//production
import node from "@astrojs/node";
export default defineConfig({
  output: 'server',
  devToolbar: {
    enabled: false
  },
  server: {
    port: 3000, // 3000 DEV, 3001 QA, 3002 PROD
    host: '0.0.0.0'
  },
  integrations: [react()],
  // production
  adapter: node({
    mode: "standalone"
  })
});
~~~
- Ahora que contamos con NodeJS, instalamos los paquetes que nuestro proyecto necesita:
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
   - Modo QA
 ~~~
 cd CCILP_QA/backend
 npm run build
 pm2 start npm --name backend_qa -- run start
 cd ../frontend
 npm run build
 pm2 start npm --name frontend_qa -- run start
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

### ⚠️ Troubleshooting

#### Error: No hay conexción SSH mediante terminal

Primero hay que abrir la terminal de Hostinger para verificar el estado del servicio SSH con:

~~~
sudo systemctl status ssh
~~~

Puede aparecer un error similar a este:

~~~
× ssh.service - OpenBSD Secure Shell server
Loaded: loaded (/usr/lib/systemd/system/ssh.service)
Active: failed (Result: exit-code)
Process: ExecStartPre=/usr/sbin/sshd -t (code=exited, status=1/FAILURE)
~~~

Este mensaje indica que el servicio SSH no puede iniciarse porque la verificación de configuración (`sshd -t`) detectó un problema.

Para identificar el error exacto se debe ejecutar:

~~~
sudo sshd -t
~~~

Si el resultado es:

~~~
sshd: no hostkeys available -- exiting
~~~

Significa que el servidor no tiene **host keys**, que son claves criptográficas que identifican al servidor durante una conexión SSH. Sin estas claves, el servicio SSH no puede iniciarse por motivos de seguridad.

Este problema puede ocurrir si se eliminaron accidentalmente archivos dentro del directorio `/etc/ssh` o si el sistema fue restaurado o reconfigurado.

#### 🚑 Solución rápida

Regenerar automáticamente las claves del servidor:

~~~
sudo ssh-keygen -A
~~~

Este comando crea nuevamente las claves necesarias dentro de `/etc/ssh`.

Luego iniciar el servicio nuevamente:

~~~
sudo systemctl start ssh
~~~

Finalmente verificar que el servicio esté funcionando correctamente:

~~~
sudo systemctl status ssh
~~~

Si todo está correcto, el estado debería aparecer como:

~~~
Active: active (running)
~~~

Ahora solo resta probar conectarse nuevamente al VPS por SSH mediante la terminal.
<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## 🔄 Nginx
- Instalación
~~~
sudo apt update
sudo apt install nginx -y
~~~
- Verificar instalación
~~~
systemctl status nginx
~~~
- Si está inactivo, inícialo:
~~~
sudo systemctl start nginx
~~~
- Para habilitalo al iniciar el sistema
~~~
sudo systemctl enable nginx
~~~
- Configuración para dominio: [Ver tutorial](https://www.youtube.com/watch?v=qMfptwXpVmg)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## ☁️ Cloudflare
Curso de Cloudflare con midudev [Ver tutorial](https://www.youtube.com/watch?v=I2mv4456l74)
<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## 🔒 Certbot SSL
### Renovación
-  Primero lo que se debe realizar es ir a cloudflare, en el DNS, desactivar la nube naranja.
-  Segundo, ejecutar el comando `sudo certbot renew`
Para más información, visitar [Documentación oficial](https://certbot.eff.org/instructions?ws=nginx&os=pip)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## 🛠️ Stack

- [![Astro][astro-badge]][astro-url] - El framework web para sitios web impulsados por contenido.
- [![Typescript][typescript-badge]][typescript-url] - JavaScript con sintaxis para tipos.
- [![react JS][react-badge]][react-url] - Librería de frontend que agiliza el implementar funcionalidades reactivas.
- [![Strapi][strapi-badge]][strapi-url] - Headless CMS para gestionar contenido.
- [![Bootstrap][bootstrap-badge]][bootstrap-url] - Un framework CSS de utilidades para construir diseños personalizados rápidamente.
- [![Cloudflare][cloudflare-badge]][cloudflare-url] - CDN y protección para sitios web con firewall y optimización.
- [![Nginx][nginx-badge]][nginx-url] - Servidor web y proxy inverso de alto rendimiento.
- [![Certbot][certbot-badge]][certbot-url] - Cliente de Let's Encrypt para automatizar certificados SSL/TLS.


<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

[astro-url]: https://astro.build/
[typescript-url]: https://www.typescriptlang.org/
[react-url]: https://es.react.dev/
[strapi-url]: https://github.com/strapi/strapi
[bootstrap-url]: https://getbootstrap.com/
[cloudflare-url]: https://www.cloudflare.com/
[nginx-url]: https://nginx.org/
[certbot-url]: https://certbot.eff.org/

[astro-badge]: https://img.shields.io/badge/Astro-fff?style=for-the-badge&logo=astro&logoColor=bd303a&color=352563
[typescript-badge]: https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&color=blue
[react-badge]: https://img.shields.io/badge/react-ffffff?style=for-the-badge&logo=react&logoColor=38bdf8
[animations-badge]: https://img.shields.io/badge/@alejandrojosue/tailwind-animations-ff69b4?style=for-the-badge&logo=node.js&logoColor=white&color=blue
[strapi-badge]: https://img.shields.io/badge/Strapi-000000?style=for-the-badge&logo=strapi&logoColor=2e7df7&color=black
[bootstrap-badge]: https://img.shields.io/badge/bootstrap-bage?style=for-the-badge&logo=bootstrap&logoColor=white&color=673ab8
[cloudflare-badge]: https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white
[nginx-badge]: https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white
[certbot-badge]: https://img.shields.io/badge/Certbot-333?style=for-the-badge&logo=letsencrypt&logoColor=white

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
