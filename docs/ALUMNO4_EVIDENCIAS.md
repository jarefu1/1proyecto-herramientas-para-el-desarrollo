# Alumno 4 — CD + Cloud

## Automatización preparada

- `.github/workflows/cd.yml` valida la aplicación, construye la imagen Docker al recibir un push a `main` o `master` y la publica en GitHub Container Registry (GHCR).
- La imagen se etiqueta como `latest` y `sha-<commit-corto>`.
- `.github/workflows/ci.yml` sigue validando los cambios de Pull Requests y los pushes a `develop`/`main`.
- `render.yaml` prepara un sitio estático en Render para publicar el frontend y resolver las rutas de React Router.
- Render despliega la web desde la rama `main` después de que pasen las verificaciones de CI configuradas.

## Configuración requerida al integrar

1. En GitHub, integrar este cambio en `develop` y después en `main` para que se ejecute la publicación.
2. Verificar en **Actions** que el flujo **CD - publicar imagen en GHCR** finalice correctamente.
3. Revisar el paquete creado en **GitHub → Packages** y confirmar sus etiquetas. Si otras plataformas o personas necesitan descargar la imagen, ajustar la visibilidad o permisos del paquete.
4. En Render, crear un **Blueprint** desde el repositorio y seleccionar `render.yaml`. El sitio estático compila el frontend desde la rama `main`.
5. Confirmar que el servicio está vinculado a la rama `main` y que su despliegue automático espera las verificaciones de CI.

## Alcance y requisito pendiente de la API

El Dockerfile actual construye únicamente el frontend estático; el servicio Express y MariaDB de `docker-compose.yml` no forman parte de esa imagen. Además, las vistas de catálogo consultan `http://localhost:3000/api/mochilas`. Por eso, Render podrá publicar la web, pero las funciones que requieren catálogo/API no funcionarán en una visita pública hasta desplegar una API y MariaDB accesibles desde Internet y adaptar el frontend para apuntar a la URL pública de esa API. No se incluyen credenciales ni se exponen servicios de base de datos en esta configuración.

## Evidencias

Guarda capturas propias del repositorio y el servicio desplegado en `docs/evidencias/alumno4/` (crea la carpeta al tomar la primera captura). No guardes tokens, secretos, contraseñas ni pantallas con valores sensibles.

Capturas sugeridas:

1. El workflow CD exitoso en GitHub Actions, con nombre de workflow, rama `main`/`master` y commit visibles.
2. El paquete GHCR con las etiquetas `latest` y `sha-...`.
3. La vista **Events** de Render mostrando el despliegue exitoso.
4. La URL pública cargada con la portada y una ruta interna, por ejemplo `/catalogo`.

Nombres sugeridos: `01-actions-cd.png`, `02-ghcr-tags.png`, `03-render-deploy.png` y `04-sitio-publico.png`.
