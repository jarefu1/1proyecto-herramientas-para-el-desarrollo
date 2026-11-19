# Alumno 1 — Dockerfile del frontend de la tienda de mochilas

**Autor:** leochuw1 (@leochuw1)

La imagen usa Node.js 24 para instalar las dependencias con `npm ci` y compilar React con Vite. Nginx sirve los archivos de `dist` en el puerto 80 del contenedor. Su configuración permite abrir directamente las rutas de React Router, como `/login` y `/registro`.

## Construcción y ejecución

Con Docker en ejecución, abre PowerShell en la raíz del repositorio y ejecuta:

```powershell
docker build --tag tienda-mochilas:local .
docker run --detach --rm --name tienda-mochilas --publish 127.0.0.1:8080:80 tienda-mochilas:local
docker ps --filter name=tienda-mochilas
docker logs tienda-mochilas
```

## Prueba del contenedor

Abre [la portada](http://localhost:8080/) y comprueba que aparece el título «Mochilas hechas para durar». Entra a [Inicio de sesión](http://localhost:8080/login) y [Registro](http://localhost:8080/registro). Recarga ambas páginas para comprobar que siguen funcionando al acceder directamente.

Para verificar las respuestas HTTP desde PowerShell, ejecuta:

```powershell
foreach ($route in '/', '/login', '/registro') {
    $status = curl.exe --fail --silent --show-error --output NUL --write-out '%{http_code}' "http://localhost:8080$route"
    if ($LASTEXITCODE -ne 0 -or $status -ne '200') {
        throw "Falló la prueba de $route (HTTP $status)"
    }
    "$route HTTP $status"
}
```

Al terminar, detén el contenedor. Docker lo elimina automáticamente por la opción `--rm`.

```powershell
docker stop tienda-mochilas
```
