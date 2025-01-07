# Migracón Landing Vite.dev: De Vue a Next.js

## Descripción

Este proyecto consiste en una migración educativa de la landing page de Vite.dev, transformando la implementación original en Vue.js a una versión en Next.js. Este ejercicio de migración se realizó con fines puramente educativos y de aprendizaje, sin ningún propósito comercial ni intención de lucro. El proyecto sirve como ejemplo práctico para comprender las diferencias entre ambos frameworks y las consideraciones necesarias al migrar entre tecnologías frontend.

## Cambios principales

- Migración de los componentes baseS hexhos en Vue.js a Next.js
- Mantenimiento de la misma estructural visual y experiencia de usuario
- Optimización de imágnes y assets usando las capacidades nativas de Next.js

## Tecnologías usadas

- Next.js 15
- React 19
- TypeScript
- gsap
- CSS Vanilla/ CSS Module
- Eslint
- Prettier

## Requisitos de Instalación

- Node.js 18.0 o superior
- pnpm/npm o yarn

## Configuración del Entorno

```bash
git clone [url-del-repositorio]
cd [nombre-del-proyecto]
```

```bash
npm install
# o
yarn install
```

## Notas de la migración

- Implementación de SSR para mejor First Contentful Paint (FCP)
- Optimización automática de imágenes con next/image
- Code splitting automático
- Prefetching de rutas
