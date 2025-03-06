React + TypeScript + Vite:

````markdown:README.md
# Webapp Embebible

Una aplicación web desarrollada con React, TypeScript y Vite, diseñada para ser embebible en otros proyectos.

## Requisitos Previos

- Node.js (versión 16.0 o superior)
- pnpm (el proyecto usa pnpm como gestor de paquetes)

## Tecnologías Principales

- React
- TypeScript
- Vite
- ESLint

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/nicoTaccari/webapp-embebible.git
````

2. Navega al directorio del proyecto:

```bash
cd webapp-embebible
```

3. Instala las dependencias:

```bash
pnpm install
```

## Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo con HMR (Hot Module Replacement)
- `pnpm build`: Construye el proyecto para producción
- `pnpm lint`: Ejecuta el linter (ESLint)

# Mejoras propuestas para el código del LLM

## Manejo de estado
El LLM dio las dos opciones más usadas, pero no ofreció una opinión fuerte por ninguna de las dos (Context API + hooks o Redux Toolkit). 
En mi opinión, usar Context API + hooks sería suficiente para cubrir los casos de uso que pudieran surgir en la webapp. Por otro lado, Redux Toolkit no aportaría más valor y sería más complejo de mantener, además de requerir mucho más código.

## Comunicación entre webapp y host
Con respecto a la comunicación entre el iframe de la aplicación embebida y el host, el LLM utilizó correctamente el método más común y generó el código necesario para que la comunicación funcione. A partir de ahí, lo que haría sería pensar en una capa más genérica que maneje toda la comunicación entre la webapp y el host, haciéndolo más fácil de extender y mantener. La idea sería tener custom hooks para enviar distintos tipos de eventos que se repitan con frecuencia y que cualquier componente de la webapp pueda ejecutar.

Otra consideración que faltó es que, si necesitamos seguridad a la hora de recibir eventos del host, la capa de comunicación debería filtrar de dónde vienen esos eventos, verificando el `document.referrer` y `event.origin` Si bien esto estaba en el documento, no se agregó al código generado.

## Manejo de autenticación
El LLM ofreció varias opciones, pero personalmente me inclinaría por AWS Cognito, ya que, a nivel de infraestructura, la webapp estaría deployada en AWS. Este servicio sería fácil de integrar y proporcionaría muchas de las funcionalidades que se puedan necesitar por defecto.

## UI de la webapp
El LLM no mencionó nada acerca de la parte de UI de la webapp ni sugirió alguna estrategia para implementarla. En este caso, se podría considerar si usar alguna biblioteca de UI ya existente y que sea fácil de personalizar o si vale la pena desarrollar componentes propios desde cero utilizando CSS o CSS + Headless UI.
Tendria un enfoque mobile first para primero construir las interfaces en movil y de ahi desarrollar las pantallas de mayor tamaño hasta llegar al desktop o mayor.

## Optimización de performance

Se podría considerar el code splitting para las rutas (si existieran), evitando así la carga de contenido no utilizado.
```typescript
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
```
Para el CSS
- Utilizaria CSS Modules
- Implementar CSS-in-JS usando styled-components/emotion
- Purgar CSS no utilizado
 
A nivel SEO primero me apoyaria en los reportes de lighthouse para ver el score y de ahi empezar a refinar cada caso. 
- Implementaria React Helmet para manejo de meta tags
    ```javascript
    import { Helmet } from 'react-helmet';
    function MiPagina() {
        return (
        <>
            <Helmet>
                <title>Mi Página</title>
                <meta name="description" content="Descripción de mi página" />
            </Helmet>
            {/* contenido */}
        </>
        );
    }
    ```

- Implementar sitemap.xml para ayudar al motor de busqueda a indexar correctamente el sitio

## Server side rendering
Por utlimo el LLM no considero la posibilidad de utilizar SSR o algun framework que ya lo ofrezca en la solucion como podria ser NextJS.
Habria que evaluar mas en detalle si es necesario o si vale la pena agregar esa complejidad para el caso de uso. El tradeoff vendria dado por cuanto de lo que el framework ofrezca nos sirve en comparacion con la complejidad y limitaciones que nos imponga y ver ahi que nos sirve mas.
