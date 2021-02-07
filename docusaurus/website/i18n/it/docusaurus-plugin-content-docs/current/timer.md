---
id: timer 
title: Timer
sidebar_label: Timer
---

Visualizza un timer che attiverà un richiamo predefinito quando il tempo è scaduto. Un esempio di caso d'uso è il tempo dei quiz.

## Options

* __id__ | `string`: l'unico `stringa` ID per il timer. Se viene impostato un ID, il componente del timer è persistente sul refresh della pagina. Default: `none`.
* __active__ | `boolean (required)`: bandiera che può essere attivata per avviare o mettere in pausa il timer. Default: `none`.
* __belowZero__ | `boolean`: controlla se il timer continua il conteggio dopo l'esaurimento della durata. Default: `false`.
* __duration__ | `number (required)`: durata in secondi per il timer. Default: `none`.
* __invisible__ | `boolean`: controlla se il timer deve essere nascosto. Default: `false`.
* __legend__ | `string`: testo visualizzato davanti al timer. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onTimeUp__ | `function`: richiamata quando il timer si esaurisce. Default: `onTimeUp() {}`.


## Examples

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

