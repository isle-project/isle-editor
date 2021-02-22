---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Una domanda con una risposta composta da più caselle di selezione.

## Options

* __question__ | `(string|node)`: domanda da visualizzare nella parte superiore della matrice delle domande selezionate. Default: `''`.
* __rows__ | `array`: etichette di fila. Default: `[]`.
* __cols__ | `array`: etichette a colonna. Default: `[]`.
* __options__ | `object`: con coppie chiave-valore con chiavi aventi la forma `row:col`, p.e. `0:0`, `0:1`, `1:0` ecc. e i loro valori corrispondenti sono array delle possibili scelte di risposta per le singole domande selezionate. Default: `{}`.
* __solution__ | `object`: oggetto soluzione con coppie chiave-valore con chiavi che hanno la forma `row:col`, p.e. `0:0`, `0:1`, `1:0` ecc. e i loro valori corrispondenti sono l'indice dell'elemento di risposta corretto dalla rispettiva matrice `options`.. Default: `{}`.
* __hints__ | `array<(string|node)>`: suggerimenti che forniscono indicazioni su come rispondere alla domanda. Default: `[]`.
* __hintPlacement__ | `string`: posizionamento dei suggerimenti (in alto, a sinistra, a destra o in basso). Default: `'bottom'`.
* __feedback__ | `boolean`: controlla se visualizzare i pulsanti di feedback. Default: `true`.
* __provideFeedback__ | `string`: se fornire un feedback "nessuno", un feedback "individuale" sulla/e risposta/e fornita/e o un feedback "generale" per tutte le domande. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: se consentire l'invio senza selezione in ogni casella di selezione. Default: `false`.
* __nTries__ | `number`: dopo quanti tentativi non vengono accettate altre risposte (se "fornire feedback" non è "nessuno"). Default: `1`.
* __failureMsg__ | `string`: testo di notifica visualizzato in seguito all'invio di risposte errate. Default: `none`.
* __successMsg__ | `string`: testo di notifica visualizzato al momento dell'invio delle risposte corrette. Default: `none`.
* __cellLabels__ | `object`: etichette per le celle definite dall'oggetto con chiavi aventi il formato `row:col. Default: `{}`.
* __chat__ | `boolean`: controlla se l'elemento deve avere una chat integrata. Default: `false`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onSubmit__ | `function`: funzione di callback invocata all'invio con le risposte come primo parametro e un booleano che indica la correttezza come secondo parametro. Default: `onSubmit() {}`.


## Examples

```jsx live
<SelectQuestionMatrix
    rows={[ 'First Row' ]} 
    cols={[ 'First Column', 'Second Column' ]} 
    options={{ '0:0': [ 'Incorrect', 'Correct' ], '0:1':  [ 'Incorrect', 'Incorrect', 'Correct' ] }} 
    solution={{ '0:0': 1, '0:1': 2 }}
/>
```
