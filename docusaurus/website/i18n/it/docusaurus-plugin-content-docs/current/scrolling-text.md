---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Un componente dinamico di sfondo che scorre ciclicamente attraverso una lista di testi ad un intervallo di tempo specificato.

## Options

* __list__ | `array<string>`: elenco dei testi da visualizzare. Default: `[]`.
* __loop__ | `boolean`: indica se il processo deve essere visualizzato all'infinito. Default: `false`.
* __direction__ | `string`: la direzione del flusso di testo (o "sinistra", "destra", "su", "giù", "traccia", "messa a fuoco" o "turbinio"). Default: `'right'`.
* __still__ | `number`: il tempo in cui il testo rimane fermo (in secondi). Default: `3`.
* __interval__ | `number`: l'intervallo tra le chiamate (in secondi). Default: `15`.
* __inTime__ | `number`: tempo dell'effetto ingresso (in secondi). Default: `0.6`.
* __outTime__ | `number`: tempo dell'effetto di uscita (in secondi). Default: `1`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili CSS del testo. Default: `{}`.


## Examples

```jsx live
<ScrollingText
    list={[ 'Heading' ]}
    style={{ fontSize: 44, color: 'red' }}
    interval={5}
    inTime={1.2}
    outTime={1.2}
    still={2}
/>
```



