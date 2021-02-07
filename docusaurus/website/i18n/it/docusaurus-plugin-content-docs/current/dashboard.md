--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Un cruscotto per combinare la gestione di più campi di input per bambini.

## Options

* __autoStart__ | `boolean`: se impostata su "true", la funzione "onGenerate" viene eseguita all'avvio con i valori di ingresso predefiniti. Default: `true`.
* __autoUpdate__ | `boolean`: controlla se la funzione `onGenerate` deve essere invocata automaticamente quando uno dei campi di input figlio cambia. Default: `false`.
* __description__ | `string`: descrizione del cruscotto. Default: `''`.
* __disabled__ | `boolean`: controlla se il cruscotto deve essere disabilitato. Default: `false`.
* __label__ | `string`: Etichetta a bottone. Default: `none`.
* __maxWidth__ | `number`: larghezza massima del cruscotto. Default: `600`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onGenerate__ | `function`: funzione invocata quando si fa clic sul pulsante o uno dei valori di input del cruscotto cambia (se `autoUpdate` è impostato su `true`). La funzione viene richiamata con i valori dei campi di input, nell'ordine in cui sono posizionati nel dashboard. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: titolo della carta. Default: `''`.


## Examples

```jsx live
<Dashboard title="Alerter" onGenerate={(x)=>{ alert(x) }}>
    <SliderInput
        legend="Input value"
    />
</Dashboard>
```

