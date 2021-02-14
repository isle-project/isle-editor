---
id: multi-cards
title: Multi Cards
sidebar_label: Multi Cards
---

Un componente de ISLE que le permite crear y controlar múltiples cartas volteables (por ejemplo, en un juego de Memoria).

## Options

* __animation__ | `object`: si se establece el componente utiliza una animación de entrada; el objeto contiene un nombre (como `anim-scale-up`) y una duración (como `1.7s` = 1.7 segundos). Default: `{}`.
* __memory__ | `boolean`: si se activa el modo de juego de memoria en el que hay que hacer coincidir pares de los valores suministrados. Default: `none`.
* __onChange__ | `function`: una función que recibe la matriz de las tarjetas volteables. Default: `onChange() {}`.
* __onMemoryComplete__ | `function`: llamada de retorno invocada si el juego de memoria está completo. Default: `onMemoryComplete() {}`.
* __oneTime__ | `boolean`: indica si el proceso de volteo puede ser ejecutado sólo una vez. Default: `false`.
* __values__ | `array<object>`: los valores de las respectivas cartas, introducidos en una matriz que tiene campos de entrada para un valor "frontal" y "trasero". Tal valor podría ser una cadena, pero también un componente completo de ISLE. Default: `[]`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __containerStyle__ | `object`: Estilo CSS de los contenedores de tarjetas. Default: `{}`.
* __frontStyle__ | `object`: Estilo CSS del anverso de las tarjetas. Default: `{}`.
* __backStyle__ | `object`: Estilo CSS del reverso de las tarjetas. Default: `{}`.


## Examples

```jsx live
<MultiCards
    onChange={(data) => {
        console.log(data);
    }}
    containerStyle={{
        width: 250,
        height: 250,
        marginBottom: 10
    }}
    frontStyle={{
        color:'gainsboro',
        cursor: 'pointer',
        textAlign: 'center',
        boxShadow: '1px 1px 10px black',
        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',
        backgroundSize: '100% auto'
    }}
    backStyle={{
        color: 'blue',
        fontSize: 20,
        fontWeight: 800,
        fontFamily: 'Oswald',
        textAlign: 'left',
        paddingLeft: '10px',
        background: 'ghostwhite',
        boxShadow: '1px 1px 10px black',
    }}
    values={[
        { front: "number 1", back: 'back side of #1'},
        { front: "number 2", back: 'back side of #2'},
        { front: "number 3", back: 'back side of #3'},
        { front: "number 4", back: 'back side of #4'}
    ]}
/>
``` 



