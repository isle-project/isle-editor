---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

Un componente di ingresso vocale.

## Opzioni

* __autorecord__ | `boolean`: controlla se avviare automaticamente la registrazione. Default: `false`.
* __defaultValue__ | `string`: valore di testo predefinito. Default: `''`.
* __grammars__ | `array`: elenco grammaticale del discorso (non supportato). Default: `[]`.
* __legend__ | `(string|node)`: legenda visualizzata davanti al campo di ingresso. Default: `''`.
* __mode__ | `string`: impostato su `full` per visualizzare un campo di inserimento testo accanto al microfono, `status` per visualizzare solo una barra di stato con i testi trascritti, `microfono` per mostrare solo un pulsante per attivare o disattivare la registrazione, o `nessuno` quando l'inserimento vocale dovrebbe essere invisibile e puramente controllato tramite tasti di scelta rapida / comandi vocali. Default: `'full'`.
* __maxAlternatives__ | `number`: numero massimo di alternative fornite per risultato del riconoscimento vocale. Default: `1`.
* __onChange__ | `function`: funzione di callback invocata quando il valore dell'input di testo viene aggiornato. Default: `onChange() {}`.
* __onClick__ | `function`: funzione di richiamo richiamata quando si clicca sul tasto del microfono. Default: `onClick() {}`.
* __onFinalText__ | `function`: funzione di richiamata invocata una volta ricevuto il testo finale. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: funzione di richiamo richiamata all'avvio della registrazione. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: funzione di richiamata invocata una volta interrotta la registrazione. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: funzione di richiamo richiamata con segmenti di testo. Default: `onSegment() {}`.
* __onSubmit__ | `function`: funzione di callback durante l'invio del valore di immissione del testo premendo "Invio".. Default: `onSubmit() {}`.
* __placeholder__ | `string`: segnaposto per l'inserimento di testo. Default: `none`.
* __remote__ | `object`: oggetto con `start`, `stop`, e `toggle` e i tasti di scelta rapida associati. Default: `none`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __timeout__ | `number`: numero di millisecondi dopo i quali si deve effettuare il timeout della registrazione. Default: `none`.
* __stopTooltip__ | `string`: messaggio tooltip visualizzato durante la registrazione. Default: `none`.
* __startTooltip__ | `string`: messaggio tooltip visualizzato mentre non si registra. Default: `none`.
* __tooltipPlacement__ | `string`: direzione della punta dell'utensile. Default: `'left'`.
* __width__ | `number`: larghezza dell'ingresso vocale (in px). Default: `500`.
* __height__ | `number`: altezza dell'ingresso vocale (in px). Default: `36`.


## Esempi

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



