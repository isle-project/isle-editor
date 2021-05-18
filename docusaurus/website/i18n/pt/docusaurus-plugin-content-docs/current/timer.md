---
id: timer 
title: Timer
sidebar_label: Timer
---

Exibe um timer que acionará uma chamada de retorno pré-definida quando o tempo acabar. Um exemplo de caso de uso é o tempo dos questionários.

## Opções

* __id__ | `string`: a identificação única "string" para o temporizador. Se um ID for definido, o componente do temporizador é persistente ao longo da página. Default: `none`.
* __active__ | `boolean (required)`: bandeira que pode ser hasteada para iniciar ou pausar o temporizador. Default: `none`.
* __belowZero__ | `boolean`: controla se o temporizador continua contando depois de esgotada a duração. Default: `false`.
* __duration__ | `number (required)`: duração em segundos para o temporizador. Default: `none`.
* __invisible__ | `boolean`: controla se o temporizador deve ser escondido. Default: `false`.
* __legend__ | `string`: texto exibido na frente do temporizador. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onTimeUp__ | `function`: chamada de retorno invocada quando o cronômetro se esgota. Default: `onTimeUp() {}`.


## Exemplos

```jsx live
<Timer 
    id='test-quiz'
    active={true} 
    duration={50} 
    onTimeUp={() => {
      alert( 'done' );
    }}
/>
```

