---
id: image
title: Image
sidebar_label: Image
---

Komponent do wyświetlania obrazu.

## Options

* __src__ | `string (required)`: lokalizacja źródła obrazu. Default: `none`.
* __alt__ | `string`: opis obrazu. Default: `''`.
* __body__ | `string`: base64 zakodowane dane obrazu. Default: `none`.
* __height__ | `(number|string)`: wysokość obrazu (w px). Default: `none`.
* __width__ | `(number|string)`: szerokość obrazu (w px). Default: `none`.
* __inline__ | `boolean`: pozwala na otoczenie obrazu tekstem. Default: `false`.
* __id__ | `string`: identyfikator elementu. Default: `none`.
* __showModal__ | `boolean`: kontroluje, czy ma być wyświetlany pełnoekranowy widok modalny. Default: `true`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onShare__ | `function`: wywołanie zwrotne z obrazem po kliknięciu przycisku "share".. Default: `none`.


## Examples

```jsx live
<Image 
    alt="The Starry Night by Vincent van Gogh" 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
    className="center"
    width="50%"
    height="auto"
/>
```

