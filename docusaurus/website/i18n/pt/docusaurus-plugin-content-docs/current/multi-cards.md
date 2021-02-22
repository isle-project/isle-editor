---
id: multi-cards
title: Multi Cards
sidebar_label: Multi Cards
---

Um componente ISLE que lhe permite criar e controlar vários cartões de memória (por exemplo, em um jogo de Memória).

## Opções

* __animation__ | `object`: se o componente utiliza uma animação de entrada; o objeto contém um nome (como `anim-scale-up`) e uma duração (como `1,7s` = 1,7 segundos). Default: `{}`.
* __memory__ | `boolean`: se deve habilitar o modo de jogo de memória no qual se tem que combinar pares dos valores fornecidos. Default: `none`.
* __onChange__ | `function`: uma função que recebe a matriz dos cartões passíveis de inverter. Default: `onChange() {}`.
* __onMemoryComplete__ | `function`: chamada de retorno invocada se o jogo da memória estiver completo. Default: `onMemoryComplete() {}`.
* __oneTime__ | `boolean`: indica se o processo de inversão pode ser executado apenas uma vez. Default: `false`.
* __values__ | `array<object>`: os valores para as respectivas cartas, entrada em um array que tem campos de entrada para um valor "à frente" e "atrás". Tal valor poderia ser uma string, mas também um componente ISLE completo. Default: `[]`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __containerStyle__ | `object`: Estilo CSS dos recipientes de cartão. Default: `{}`.
* __frontStyle__ | `object`: Estilo CSS da frente das cartas. Default: `{}`.
* __backStyle__ | `object`: Estilo CSS do verso das cartas. Default: `{}`.


## Exemplos

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



