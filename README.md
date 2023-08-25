# Esbelte + vite

Esta plantilla debería ayudarlo a comenzar a desarrollar con Svelte en Vite.

## Configuración IDE recomendada

[Vs Code] (https://code.visualstudio.com/) + [esvelte] (https://marketplace.visualstudio.com/items?itemname=svelte.svelte-vscode).

## ¿Necesita un marco oficial de SVelte?

Echa un vistazo [sveltekit] (https://github.com/sveltejs/kit#readme), que también está alimentado por VITE.Implemente en cualquier lugar con su enfoque sin servidor sin serpero y adapte a varias plataformas, con soporte fuera de la caja para TypeScript, SCSS y menos soporte y fácilmente agregado para MDSVEX, GRAPHQL, POSTCSS, CSS y más.

## Consideraciones técnicas

** ¿Por qué usar esto sobre Sveltekit? **

- Trae su propia solución de enrutamiento que podría no ser preferible para algunos usuarios.
- En primer lugar, es un marco que simplemente usa Vite debajo del capó, no una aplicación Vite.

Esta plantilla contiene lo menos posible para comenzar con Vite + Svelte, mientras tiene en cuenta la experiencia del desarrollador con respecto a HMR e Intellisense.Demuestra capacidades a la par con las otras plantillas de `Crear-Vite` y es un buen punto de partida para los principiantes que sumergen los dedos de los pies en un proyecto VITE + SVELTE.

Si luego necesita las capacidades extendidas y la extensibilidad proporcionadas por Sveltekit, la plantilla se ha estructurado de manera similar a Sveltekit para que sea fácil de migrar.

** Por qué `global.d.ts` en lugar de` compileroptions.types` dentro `jsconfig.json` o` tsconfig.json`? **

La configuración de `CompilerOptions.Types` apaga todos los demás tipos que no se enumeran explícitamente en la configuración.El uso de las referencias de triple pendiente mantiene la configuración TypeScript predeterminada de la información de tipo de aceptación de todo el espacio de trabajo, al tiempo que agrega información de tipo `Svelte` y` Vite/Client`.

** ¿Por qué incluir `.vscode/extensions.json`? **

Otras plantillas recomiendan indirectamente extensiones a través del ReadMe, pero este archivo permite que el código VS le solicite al usuario que instale la extensión recomendada al abrir el proyecto.

** ¿Por qué habilitar `checkjs` en la plantilla JS? **

Es probable que la mayoría de los casos de tipos variables cambiantes en tiempo de ejecución puedan ser accidentales, en lugar de deliberados.Esto proporciona una tecnología avanzada de la caja.Si desea aprovechar la naturaleza de JavaScript de tipo dinámico, es trivial cambiar la configuración.

** ¿Por qué HMR no preserva mi estado de componente local? **

¡La preservación del estado de HMR viene con una serie de Gotchas!Se ha deshabilitado de forma predeterminada tanto en `esvelte-hmr` y`@esveltejs/vite-plugin-svelte` debido a su comportamiento a menudo sorprendente.Puede leer los detalles [aquí] (https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state).

Si tiene un estado que es importante retener dentro de un componente, considere crear una tienda externa que no sea reemplazada por HMR.

`` `JS
// store.js
// una tienda externa extremadamente simple
importar {Writable} de 'esvelte/store'
Exportar Writable predeterminado (0)
`` `` ``
