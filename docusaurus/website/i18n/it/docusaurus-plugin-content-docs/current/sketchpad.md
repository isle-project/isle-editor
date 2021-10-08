---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

Un blocco da disegno per prendere appunti sulle diapositive delle lezioni o sulle pagine vuote.

## Opzioni

* __autoSave__ | `boolean`: controlla se l'editor deve salvare il testo corrente nella memoria locale del browser in un determinato intervallo di tempo. Default: `true`.
* __feedbackButtons__ | `boolean`: controlla se visualizzare i pulsanti di feedback su ogni diapositiva. Default: `false`.
* __intervalTime__ | `number`: il tempo tra un'auto e l'altra fa risparmiare. Default: `10000`.
* __hideInputButtons__ | `boolean`: controlla se nascondere i pulsanti di disegno e di inserimento testo. Default: `false`.
* __hideNavigationButtons__ | `boolean`: controlla se nascondere i pulsanti per la navigazione tra le pagine. Default: `false`.
* __hideSaveButtons__ | `boolean`: controlla se nascondere i pulsanti di salvataggio. Default: `false`.
* __hideTransmitButtons__ | `boolean`: controlla se nascondere i pulsanti per la trasmissione delle azioni dell'utente. Default: `false`.
* __brushSize__ | `number`: dimensione del pennello con cui dipingere. Default: `4`.
* __color__ | `string`: colore del pennello e dei testi. Default: `'#444444'`.
* __canvasWidth__ | `number`: larghezza dell'elemento di tela (in px). Default: `1200`.
* __canvasHeight__ | `number`: altezza dell'elemento di tela (in px). Default: `700`.
* __fullscreen__ | `boolean`: controlla se ridimensionare automaticamente l'area di disegno alla larghezza e all'altezza della finestra del browser. Default: `false`.
* __fill__ | `string`: se `orizzontale`, riempire tutto lo spazio orizzontale disponibile quando si disegna un PDF; se `verticale`, tutto lo spazio verticale viene utilizzato per evitare il trabocco dell'asse y. Default: `'vertical'`.
* __disabled__ | `boolean`: se rendere il componente di sola lettura e vietare il disegno sul blocco per schizzi. Default: `false`.
* __fontFamily__ | `string`: famiglia di font. Default: `'Arial'`.
* __fontSize__ | `number`: dimensione del carattere. Default: `24`.
* __nodes__ | `object`: componenti da rendere sopra le diapositive specificate; i "tasti" dovrebbero corrispondere ai numeri di pagina, i "valori" ai componenti. Default: `{}`.
* __noPages__ | `number`: numero iniziale di pagine. Default: `1`.
* __pdf__ | `string`: link al file PDF per sfondi di pagine cotte al forno. Default: `none`.
* __showTutorial__ | `boolean`: mostra il tutorial per lo sketchpad all'avvio. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: controlla se iniziare a nascondere i pulsanti quando la larghezza della barra degli strumenti non è sufficiente (altrimenti verrà avviata una nuova linea). Default: `false`.
* __transmitOwner__ | `boolean`: se le azioni del proprietario debbano essere trasmesse ad altri utenti in tempo reale. Default: `true`.
* __groupMode__ | `boolean`: controlla se tutte le azioni dell'utente vengono trasmesse a tutti gli altri. Default: `false`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onChange__ | `function`: richiamata ogni volta che viene disegnato un nuovo elemento di linea. Default: `onChange() {}`.


## Esempi

```jsx live
<Sketchpad canvasWidth={750} />
```

