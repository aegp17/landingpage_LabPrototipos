# Laboratorio de Prototipos · UNET — Landing page

Landing page del Laboratorio de Prototipos de la Universidad Nacional Experimental del Táchira (UNET), Táchira, Venezuela. Construida con Vue 3, TypeScript y Vite, prerenderizada con vite-ssg. Bilingüe (ES/EN), con el español como idioma por defecto.

**Estado:** en construcción. La página publicada es provisional y lleva `noindex` hasta que el contenido esté aprobado (ver «Publicar el sitio definitivo»).

## Requisitos

- Node.js 20 o superior
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

El servidor de desarrollo se levanta en `http://localhost:5173/`.

## Build de producción

```bash
npm run build
```

Comprueba los tipos con `vue-tsc` y genera `dist/` con una página estática por idioma (`dist/es/index.html` y `dist/en/index.html`). La raíz (`dist/index.html`) redirige a `/es/`.

Para revisar el build en local:

```bash
npm run preview
```

## Ramas y despliegue

- El trabajo se integra en `develop` y pasa a `main` con un pull request.
- Cada push a `main` ejecuta `.github/workflows/deploy.yml`, que compila y publica en GitHub Pages.
- El sitio se sirve en `https://labprotounet.com`.

## Dominio

`labprotounet.com` está registrado en Namecheap y su DNS se gestiona en Cloudflare, **sin proxy** (nube gris), para que GitHub emita y renueve el certificado del dominio:

| Tipo | Nombre | Contenido |
|---|---|---|
| A | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |
| CNAME | `www` | `aegp17.github.io` |

En *Settings → Pages* del repositorio, el dominio personalizado es `labprotounet.com`, con «Enforce HTTPS» activado. `www` redirige al dominio principal.

Si el dominio cambia, hay que actualizarlo en:

| Archivo | Qué cambiar |
|---|---|
| `vite.config.ts` | `SITE_URL` |
| `src/seo/site.ts` | `SITE_URL` |
| `public/CNAME` | el dominio |

y en *Settings → Pages*.

## Publicar el sitio definitivo

Mientras el contenido no esté aprobado, el sitio no debe indexarse:

- `src/seo/site.ts`: `INDEXABLE = false` añade `noindex, nofollow` a cada página. Es lo que de verdad lo impide.
- `public/robots.txt`: bloquea todo.

Al publicar el contenido real: poner `INDEXABLE = true`, abrir `robots.txt` y añadir el `sitemap.xml`.
