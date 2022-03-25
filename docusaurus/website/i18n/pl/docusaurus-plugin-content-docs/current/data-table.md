---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

Komponent renderujący dane w formie tabelarycznej. Wbudowany na górze [tabela reaktywna] (https://react-table.js.org/).

## Opcje

* __data__ | `(array|object) (required)`: Obiekt lub tablica danych, które mają być przeglądane. Jeśli jest to obiekt, to klucze odpowiadają wartościom kolumn, podczas gdy tablica będzie oczekiwała tablicy obiektów z nazwanym polem odpowiadającym każdej kolumnie. Default: `none`.
* __dataInfo__ | `object`: obiekt z tablicą łańcuchów `info` opisującą zbiór danych, `nazwą` zbioru danych, `obiektem` ze zmiennymi` z klawiszami odpowiadającymi nazwom i wartościom zmiennych do opisów zmiennych, `wyświetlaniemOnStartup` boolean kontrolującym, czy przy uruchamianiu wyświetlić modal informacyjny. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: kontroluje, czy kolumny, dla których nie istnieją `info` posiadają przycisk, który po kliknięciu wywołuje funkcję `onColumnDelete` callback. Default: `false`.
* __undeletableVars__ | `array<string>`: tablica nazw zmiennych w kolumnach, które nie mogą zostać usunięte. Default: `[]`.
* __filterable__ | `boolean`: kontroluje, czy kolumny są filtrowalne. Default: `true`.
* __editable__ | `array`: szereg nazw dla kolumn, które mają być edytowalne. Default: `[]`.
* __getTrProps__ | `function`: undefined. Default: `none`.
* __onColumnDrag__ | `function`: funkcja wywoływana po przeciągnięciu kolumny do innej pozycji. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: funkcja wywoływana z nazwą kolumny po kliknięciu odpowiedniego przycisku usuwania dla danej kolumny. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: funkcja wywoływana po zmianie nazwy kolumny (wywoływana ze starą nazwą jako pierwszą i nową jako drugim argumentem). Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: funkcja określająca akcję, którą należy wykonać dla wierszy usuniętych z danych (domyślnie funkcja pusta). Default: `onClickRemove() {}`.
* __onEdit__ | `function`: funkcja wywoływana z aktualnym zestawem danych po zmianie wartości komórki przez użytkownika (dotyczy tylko sytuacji, gdy tabela jest `edytowalna`). Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: funkcja wywoływana po wypełnieniu przez użytkownika tutorialu tabeli danych. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: tablica filtrów. Default: `[]`.
* __onFilteredChange__ | `function`: funkcja wywoływana przy pomocy aktualnych filtrów po przefiltrowaniu danych przez użytkownika. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: wskazuje, czy mają być wyświetlane pola wyboru dla wierszy, które mają być usunięte. Default: `false`.
* __showIdColumn__ | `boolean`: kontroluje, czy pokazywana jest kolumna ID. Default: `true`.
* __disableDownload__ | `boolean`: czy ukryć przycisk do pobrania danych jako plik CSV lub JSON. Default: `false`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Obiekt pozwalający na niestandardową stylizację css. Domyślna wartość dla pustego obiektu. Default: `{}`.


## Przykłady

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

