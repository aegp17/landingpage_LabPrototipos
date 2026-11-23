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

El servidor de desarrollo se levanta en `http://localhost:5173/landingpage_LabPrototipos/`.

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
- Mientras no haya dominio propio, el sitio se sirve en `https://aegp17.github.io/landingpage_LabPrototipos/`.

## Cambiar a un dominio propio

Hoy el sitio vive en una subruta de GitHub Pages. Para pasar a un dominio (por ejemplo, un subdominio de la universidad):

| Archivo | Qué cambiar |
|---|---|
| `vite.config.ts` | `SITE_URL` y `BASE` (con dominio propio, `BASE = '/'`) |
| `src/seo/site.ts` | `SITE_URL` |
| `public/CNAME` | crearlo con el dominio |

Después, configurar el dominio en *Settings → Pages* del repositorio y el registro DNS que indique GitHub.

## Publicar el sitio definitivo

Mientras el contenido no esté aprobado, el sitio no debe indexarse:

- `src/seo/site.ts`: `INDEXABLE = false` añade `noindex, nofollow` a cada página. Es lo que de verdad lo impide.
- `public/robots.txt`: bloquea todo. Solo tiene efecto con dominio propio, porque en una subruta de GitHub Pages los buscadores leen el `robots.txt` de la raíz del dominio.

Al publicar el contenido real: poner `INDEXABLE = true`, abrir `robots.txt` y añadir el `sitemap.xml`.
