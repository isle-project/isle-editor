---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

Un componente de entrada de proporciones. Puede ser usado como parte de un tablero de ISLE o independiente. En este último caso, quieres manejar los cambios a través del atributo "onChange" o vincular el valor a una variable global a través del atributo "bind".

## Options

* __colors__ | `array<string>`: una gama de colores para los componentes del gráfico circular. Si no se define, se utilizará una escala de colores personalizada. Default: `none`.
* __disabled__ | `boolean`: controla si el campo de entrada está desactivado. Default: `false`.
* __height__ | `number`: proporciones altura de entrada (en px). Default: `200`.
* __legends__ | `array`: etiquetas de grupo. Default: `[]`.
* __onChange__ | `function`: función de llamada de retorno que se invocará cuando se haga una elección. Default: `onChange(){}`.
* __precision__ | `number`: la precisión de los valores de proporción mostrados. Default: `1`.
* __step__ | `number`: el paso de las flechas que se ven al pasar el cursor por encima del cuadro de entrada. Default: `0.1`.


## Examples

```jsx live
<ProportionsInput
    user
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```

