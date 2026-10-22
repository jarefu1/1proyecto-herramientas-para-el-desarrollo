# MHM STORE — Sistema de Inventario de Mochilas

## 1. Descripción del proyecto

MHM STORE es un sistema web orientado a la gestión y consulta del inventario de una tienda de mochilas. El proyecto busca facilitar la visualización de productos y la administración del stock mediante una interfaz sencilla y organizada.

Este repositorio contiene el **frontend**, desarrollado con React. El backend se plantea de manera independiente con Java y Spring Boot.

## 2. Objetivo

Desarrollar una interfaz web que permita visualizar los productos disponibles y realizar operaciones relacionadas con la gestión del inventario de una tienda de mochilas.

## 3. Tecnologías utilizadas

- React
- JavaScript
- HTML5 y CSS3
- Node.js y npm
- Vite
- Git y GitHub
- GitHub Actions para integración continua

## 4. Requisitos previos

Antes de ejecutar el proyecto, se necesita:

- Node.js y npm instalados.
- Git instalado.
- Un editor de código, como Visual Studio Code.

## 5. Instalación y ejecución

Clonar el repositorio:

```bash
git clone https://github.com/jarefu1/1proyecto-herramientas-para-el-desarrollo.git
```

Ingresar a la carpeta del proyecto:

```bash
cd 1proyecto-herramientas-para-el-desarrollo
```

Instalar las dependencias:

```bash
npm ci
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local para abrir la aplicación en el navegador.

## 6. Validación del proyecto

El proyecto incluye comandos para revisar el código, ejecutar las pruebas automatizadas y generar la versión de producción.

**Linter**

```bash
npm run lint
```

**Pruebas automatizadas**

```bash
npm test
```

**Compilación de producción**

```bash
npm run build
```

## 7. Integración continua

El repositorio utiliza GitHub Actions para automatizar la validación del proyecto en los eventos configurados en `.github/workflows/ci.yml`.

El flujo de integración continua ejecuta:

1. Instalación de dependencias con `npm ci`.
2. Análisis estático con `npm run lint`.
3. Pruebas automatizadas con `npm test`.
4. Compilación con `npm run build`.

Los resultados de cada ejecución pueden consultarse en la sección **Actions** del repositorio y en los checks asociados a los Pull Requests.

## 8. Flujo de trabajo con Git

Los cambios se desarrollan en ramas separadas y se proponen mediante Pull Requests. La rama `develop` se utiliza como rama de integración del equipo.

Flujo general:

1. Crear una rama para la tarea o corrección.
2. Implementar y validar los cambios.
3. Registrar los cambios mediante un commit.
4. Subir la rama al repositorio remoto.
5. Crear un Pull Request hacia `develop`.
6. Revisar los cambios y las comprobaciones automáticas antes de integrar.

## 9. Incidencias y correcciones

Las incidencias y sus soluciones se registran en GitHub Issues y Pull Requests.

- **TSK-09:** corrección de validaciones de precios y stock en el panel de inventario.
- **TSK-11:** corrección del botón de envío y de las validaciones del formulario de registro.

Referencias:

- [Incidencia TSK-11](https://github.com/jarefu1/1proyecto-herramientas-para-el-desarrollo/issues/20)
- [Pull Request #23 — TSK-11](https://github.com/jarefu1/1proyecto-herramientas-para-el-desarrollo/pull/23)

## 10. Estado del proyecto

El repositorio contiene el frontend de MHM STORE y sus mecanismos de validación automatizada. La conexión funcional con un backend Java y Spring Boot debe verificarse por separado antes de considerarla implementada.

