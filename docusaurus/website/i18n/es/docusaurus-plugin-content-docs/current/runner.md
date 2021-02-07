---
id: runner 
title: Runner
sidebar_label: Runner
---

El componente corredor ejecutará una función suministrada una vez o en un intervalo determinado.

## Options

* __active__ | `boolean`: controla si el corredor debe estar activo. Al activarse, se llama a la función "onEvaluar" en el intervalo dado (o una vez). Default: `true`.
* __interval__ | `number`: número de milisegundos entre las invocaciones de "sobrevalorar". Si no se establece un intervalo, la función sólo se invoca una vez. Default: `none`.
* __onEvaluate__ | `function`: función a ser invocada. Default: `onEvaluate() {}`.


## Examples

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



