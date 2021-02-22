---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Un componente dinamico di sfondo che scorre ciclicamente attraverso una lista di testi ad un intervallo di tempo specificato.

## Opzioni

* __text__ | `array<string>`: testo o elenco di testi da visualizzare. Default: `[]`.
* __loop__ | `boolean`: indica se il processo deve essere visualizzato all'infinito. Default: `false`.
* __direction__ | `string`: la direzione del flusso di testo (o "sinistra", "destra", "su", "giù", "traccia", "messa a fuoco" o "turbinio"). Default: `'right'`.
* __hold__ | `number`: il tempo in cui il testo rimane fermo (in secondi). Default: `5`.
* __wait__ | `number`: il tempo prima che arrivi un nuovo testo (in secondi). Default: `3`.
* __inTime__ | `number`: tempo dell'effetto ingresso (in secondi). Default: `1`.
* __outTime__ | `number`: tempo dell'effetto di uscita (in secondi). Default: `1`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili CSS del testo. Default: `{}`.


## Esempi


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'List of Texts', value: 'list' },
        { label: 'Background Image', value: 'backgroundImage' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ScrollingText
    text= "This is a text re-appearing every five seconds"
    style={{ fontSize: 44, color: 'blue' }}
    wait={5}
    hold={2}
    loop
/>
```

</TabItem>

<TabItem value="list">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'red', textAlign: 'center' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

<TabItem value="backgroundImage">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'white', textAlign: 'center', backgroundImage: 'url(https://bit.ly/3qlRgoR)', backgroundSize: '1200px 200px' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

</Tabs>
