---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

"TeX" es un elemento de ISLE que puede ser usado para mostrar ecuaciones LaTeX. Bajo el capó, el componente utiliza [KaTeX](https://github.com/Khan/KaTeX) para una renderización fulgurantemente rápida.

## Options

* __raw__ | `(string|number) (required)`: La "cuerda" literal de LaTeX para rendir. También acepta "números. Default: `none`.
* __displayMode__ | `boolean`: "booleana" que indica si se muestra la ecuación en línea o en modo de visualización.. Default: `false`.
* __numbered__ | `boolean`: controla si se muestra un número de ecuación para las ecuaciones del modo de visualización. Default: `false`.
* __style__ | `object`: "objeto" con pares clave-valor CSS para ser aplicado al contenedor de la ecuación. Default: `{}`.
* __tag__ | `string`: Caracteres personalizados mostrados para mostrar las ecuaciones en el lado derecho. El número de la ecuación dentro de la lección es por defecto. Default: `none`.
* __elems__ | `object`: "objeto" con "llaves" que denotan caracteres LaTeX y sus valores correspondientes siendo "objetos" de configuración para hacerlos interactivos. Si se configura la opción "Tooltip", se mostrará un "tooltip" al pasar el cursor sobre los caracteres LaTeX. Establecer una propiedad `variable` mostrará un deslizador de entrada para cambiar la respectiva variable de estado; en este caso, las propiedades adicionales `legend`, `min`, `max`, y `step` están soportadas. Default: `{}`.
* __popoverPlacement__ | `string`: la posición del popover para los "elementos" especificados (ya sea "arriba", "derecha", "abajo" o "izquierda"). Default: `'top'`.
* __onPopover__ | `function`: función de devolución de llamada cuando un popover de control se activa o desactiva; recibe el estado de la pantalla como un booleano como su único argumento. Default: `onPopover() {}`.
* __onClick__ | `function`: La "función" de devolución de llamada es invocada cada vez que un usuario hace clic en la ecuación.. Default: `none`.


## Examples

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



