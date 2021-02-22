---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

Una domanda che chiede all'utente di caricare un'immagine.

## Opzioni

* __question__ | `(string|node)`: testo per la domanda. Default: `''`.
* __hintPlacement__ | `string`: posizionamento dei suggerimenti (in alto, a sinistra, a destra o in basso). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: suggerimenti che forniscono indicazioni su come rispondere alla domanda. Default: `[]`.
* __feedback__ | `boolean`: controlla se visualizzare i pulsanti di feedback. Default: `true`.
* __chat__ | `boolean`: controlla se l'elemento deve avere una chat integrata. Default: `false`.
* __disableSubmitNotification__ | `boolean`: controlla se una notifica deve essere visualizzata dopo l'invio di un'immagine. Default: `false`.
* __className__ | `string`: nome della classe. Default: `''`.
* __sketchpad__ | `object`: proprietà da passare al componente <Sketchpad />; per rendere lo sketchpad, passare almeno un oggetto vuoto `{}``.. Default: `none`.
* __solution__ | `string`: URL dell'immagine della soluzione del modello. Default: `none`.
* __until__ | `Date`: il tempo necessario per consentire agli studenti di presentare le risposte. Default: `none`.
* __points__ | `number`: numero massimo di punti assegnati in classifica. Default: `10`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onSubmit__ | `function`: richiamata al momento dell'invio della risposta; ha come unico parametro un `booleano` che indica se gli elementi sono stati messi nell'ordine corretto. Default: `onSubmit() {}`.


## Esempi
