---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

Komponent iFrame.

## Options

* __src__ | `string (required)`: źródłowy adres URL. Default: `none`.
* __fullscreen__ | `boolean`: kontroluje, czy ramka iFrame ma być wyświetlana w trybie pełnoekranowym. Default: `false`.
* __title__ | `string`: tytuł iFrame. Default: `'An iFrame'`.
* __width__ | `number`: Szerokość ramy iFrame (w px). Default: `900`.
* __height__ | `number`: Wysokość ramy iFrame (w px). Default: `600`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Examples

```jsx live
<IFrame src="https://wikipedia.org" height="700px" />
``` 

