---
id: text-area
title: Text Area
sidebar_label: Text Area
---

Eine Textbereichskomponente. Wird sie als eigenständige Komponente verwendet, sollten Änderungen über das Attribut `onChange` behandelt werden.

## Options

* __defaultValue__ | `string`: Standardwert des Textbereichs. Default: `''`.
* __value__ | `string`: Textwert (für gesteuerte Komponente). Default: `none`.
* __disabled__ | `boolean`: steuert, ob der Textbereich deaktiviert werden soll. Default: `false`.
* __legend__ | `(string|node)`: Legendentext. Default: `''`.
* __onBlur__ | `function`: Callback-Funktion, die aufgerufen wird, wenn der Textbereich den Fokus verliert. Default: `onBlur() {}`.
* __onChange__ | `function`: Callback-Funktion, die mit dem neuen Text aufgerufen wird, wenn sich der Bereichstext ändert. Default: `onChange() {}`.
* __placeholder__ | `string`: Platzhaltertext. Default: `none`.
* __resizable__ | `string`: steuert, ob der Textbereich in der Größe veränderbar sein soll (kann entweder `beide`, `horizontal`, `vertikal` oder `keine` sein). Default: `'none'`.
* __rows__ | `number`: Anzahl der Zeilen. Default: `5`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Examples

```jsx live
<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
/>
```



