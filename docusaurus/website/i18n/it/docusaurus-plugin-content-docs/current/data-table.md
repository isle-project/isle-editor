---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

Un componente che rende i dati di rendering dei componenti in una visualizzazione tabellare. Costruito sopra [react-table](https://react-table.js.org/).

## Opzioni

* __data__ | `(array|object) (required)`: Un oggetto dati o un array da visualizzare. Se si tratta di un oggetto, le chiavi corrispondono ai valori delle colonne, mentre un array si aspetterà un array di oggetti con un campo denominato corrispondente ad ogni colonna. Default: `none`.
* __dataInfo__ | `object`: con un array di stringhe `info` che descrive il set di dati, il `nome` del set di dati, un `oggetto` di `variabili` con chiavi corrispondenti ai nomi delle variabili e valori alle descrizioni delle variabili, un booleano `showOnStartup` che controlla se visualizzare il modale informativo all'avvio. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: controlla se le colonne per le quali non esiste un `info` hanno un pulsante che, se cliccato, richiama la funzione di richiamo `onColumnDelete`. Default: `false`.
* __undeletableVars__ | `array<string>`: array di nomi di variabili di colonne che non possono essere cancellati. Default: `[]`.
* __filterable__ | `boolean`: controlla se le colonne sono filtrabili. Default: `true`.
* __editable__ | `array`: array di nomi per le colonne che saranno modificabili. Default: `[]`.
* __getTrProps__ | `function`: undefined. Default: `none`.
* __onColumnDrag__ | `function`: funzione invocata quando una colonna è stata trascinata in una posizione diversa. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: funzione invocata con il nome di una colonna quando si clicca sul rispettivo pulsante di cancellazione di una colonna. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: funzione invocata quando una colonna è stata rinominata (chiamata con il vecchio nome come primo e il nuovo nome come secondo argomento). Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: funzione che specifica un'azione da eseguire per le righe rimosse dai dati (default a una funzione vuota). Default: `onClickRemove() {}`.
* __onEdit__ | `function`: funzione invocata con il set di dati aggiornato dopo che il valore di una cella è stato modificato dall'utente (si applica solo quando la tabella è "modificabile"). Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: funzione invocata quando l'utente ha completato il tutorial della tabella dati. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: array di filtri. Default: `[]`.
* __onFilteredChange__ | `function`: funzione invocata con i filtri attuali dopo che i dati sono stati filtrati dall'utente. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: indica se visualizzare le caselle di controllo per le righe da rimuovere. Default: `false`.
* __showIdColumn__ | `boolean`: controlla se mostrare una colonna ID. Default: `true`.
* __disableDownload__ | `boolean`: se nascondere il pulsante per scaricare i dati come file CSV o JSON. Default: `false`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Un oggetto che consente uno stile css personalizzato. Impostazioni predefinite per un oggetto vuoto. Default: `{}`.


## Esempi

```jsx live
<DataTable
    showRemove
    onClickRemove={( data ) => { console.log(data); }}
    data={{ 
        firstName: [ 'Hans', 'Lotti', 'Fritz' ], 
        lastName: [ 'Bauer', 'Müller', 'Schultz' ],
        age: [ 37, 55, 62 ]
    }}
    style={{ width: 600 }}
/>
```

