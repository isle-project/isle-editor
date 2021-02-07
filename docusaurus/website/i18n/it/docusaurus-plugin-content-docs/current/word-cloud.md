---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

Un componente di nuvola di parole costruito sopra [d3-cloud](https://github.com/jasondavies/d3-cloud).

## Options

* __data__ | `array`: o un array di testi da cui generare la nuvola di parole o, se `precalcolato` è impostato a `vero`, e un array di oggetti per il conteggio delle parole (con le chiavi `testo` e `valore`). Default: `[]`.
* __font__ | `(string|function)`: funzione di accesso che specifica la faccia del carattere per ogni parola. Accetta anche una costante invece di una funzione. Default: `'serif'`.
* __fontSizeMapper__ | `function`: funzione di accesso che indica la dimensione del carattere per ogni parola. I valori predefiniti sono `( count - min + 1 ) / ( max - min + 6 ) * 30.0 + 12.0`, dove `min` e `max` indicano rispettivamente la parola minima e massima `counts`, rispettivamente. Default: `none`.
* __height__ | `number`: altezza della parola nuvola (in px). Default: `600`.
* __language__ | `string`: identificatore di lingua (determina le parole chiave da rimuovere). Default: `'en'`.
* __minCount__ | `number`: se impostato, includere solo le parole che appaiono più di `minCount` volte nei dati forniti. Default: `none`.
* __saveButton__ | `boolean`: controlla se visualizzare un pulsante per salvare la parola nuvola come immagine. Default: `true`.
* __onClick__ | `function`: funzione di callback invocata quando una parola sulla nuvola di parole viene cliccata. Default: `onClick() {}`.
* __padding__ | `(function|number)`: funzione di accesso o costante che indica l'imbottitura numerica per ogni parola. Default: `5`.
* __precalculated__ | `boolean`: controlla se la nuvola di parole si aspetta un array di conteggi di parole precalcolate o li genererà per determinati testi. Default: `false`.
* __rotate__ | `(function|number)`: funzione accessor che indica l'angolo di rotazione (in gradi) per ogni parola. Accetta anche una costante invece di una funzione. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: dimensione del batch di nuovi documenti in `data` prima che la parola "cloud" venga riprodotta. Default: `5`.
* __stopwords__ | `array`: ulteriori parole di arresto da rimuovere prima di rendere la parola "nuvola".. Default: `[]`.
* __triggerRender__ | `boolean`: rerender quando il set di dati viene scambiato. Default: `true`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __width__ | `number`: larghezza della parola nuvola (in px). Default: `700`.


## Examples

```jsx live
<WordCloud data={[
	'This is my holiday', 
	'Breakfast is great', 
	'My house is my castle', 
	'A castle for a kingdom', 
	'I am longing for breakfast',
	'Having rolls for breakfast is a must',
	'A horse for a kingdom',
	'Mom like rolls',
	'Orange juice is fine',
	'Where is the butter',
	'I am looking for a spoon',
	'Coffee for coffee drinkers',
	'Tea for the sleepy ones',
	'The sleepy, sloppy, crazy King lives in a castle',
	'A house for everybody'
]} />
```



