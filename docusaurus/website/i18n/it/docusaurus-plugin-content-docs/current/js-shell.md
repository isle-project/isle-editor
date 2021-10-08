---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Una shell Javascript interattiva che può essere utilizzata per eseguire comandi JavaScript. La shell contiene una console che visualizza messaggi di errore, avvisi, ecc.

## Opzioni

* __code__ | `string`: Codice JavaScript da valutare. Default: `''`.
* __solution__ | `string`: per le domande di programmazione, il codice "stringa" che rappresenta la soluzione ufficiale del problema. Default: `''`.
* __hints__ | `array<(string|node)>`: per le domande di programmazione, una serie di suggerimenti che forniscono indicazioni su come affrontare il problema. Default: `[]`.
* __precompute__ | `boolean`: controlla se il codice di default deve essere eseguito una volta che il componente è montato. Default: `false`.
* __chat__ | `boolean`: controlla se la funzionalità di chat di gruppo deve essere abilitata. Default: `false`.
* __check__ | `string`: allegato codice JavaScript per verificare il `codice` da valutare. Default: `none`.
* __disabled__ | `boolean`: controlla se disabilitare tutti gli ingressi utente e rendere statico il blocco di codice. Default: `false`.
* __lines__ | `number`: numero di righe da visualizzare. Default: `5`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onChange__ | `function`: richiamata ogni volta che l'inserimento del campo di testo cambia. Default: `onChange() {}`.
* __onEvaluate__ | `function`: richiamata ogni volta che si clicca sul pulsante `Evaluta`. Default: `onEvaluate() {}`.
* __vars__ | `object`: oggetto scope con variabili che dovrebbero essere rese disponibili al `codice` valutato. Default: `none`.


## Esempi

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Ten Lines', value: 'mLines' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<JSShell code = {`var a = 2; 
var b = 2;
console.log(a + b);`} />
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<JSShell style={{ fontSize: 18, boxShadow: '0 0 4px black' }}  />
```

</TabItem>

<TabItem value="mLines">

```jsx live
<JSShell lines={10} />
```

</TabItem>

</Tabs>




