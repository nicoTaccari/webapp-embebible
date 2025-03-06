Basado en el repositorio proporcionado, crearé un README.md apropiado que refleje que es un proyecto de React + TypeScript + Vite:

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

## Estructura del Proyecto

```
webapp-embebible/
├── src/              # Código fuente
├──── components/     # componentes principales
├──── hooks/          # custom hooks reutilizables a lo largo de todo el codigo
├── public/           # Archivos estáticos
├── index.html        # Punto de entrada HTML
├── host.html         # HTML para embeber la aplicación
├── vite.config.ts    # Configuración de Vite
├── tsconfig.json     # Configuración de TypeScript
└── eslint.config.js  # Configuración de ESLint
```

## Configuración de ESLint

El proyecto incluye una configuración extendida de ESLint para TypeScript. Para habilitar reglas de tipo-aware, puedes modificar el archivo `eslint.config.js` según las necesidades del proyecto.

## Uso como Componente Embebible

La aplicación está diseñada para ser embebida en otros proyectos. Puedes utilizar el archivo `host.html` como ejemplo de implementación.

## Desarrollo

El proyecto utiliza:

- Hot Module Replacement (HMR) para desarrollo rápido
- TypeScript para tipo seguro
- ESLint para mantener la calidad del código
- Vite para un desarrollo y construcción rápidos

## Contribución

1. Haz un Fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT.

```

Este README proporciona toda la información necesaria para que cualquier desarrollador pueda:
1. Entender el propósito del proyecto
2. Configurar el entorno de desarrollo
3. Instalar y ejecutar la aplicación
4. Contribuir al proyecto

La estructura está basada en el análisis del repositorio, que muestra que es un proyecto de React con TypeScript usando Vite como bundler y pnpm como gestor de paquetes. También he incluido información sobre la naturaleza embebible de la aplicación, como lo sugiere el nombre del repositorio y la presencia del archivo `host.html`.
```
