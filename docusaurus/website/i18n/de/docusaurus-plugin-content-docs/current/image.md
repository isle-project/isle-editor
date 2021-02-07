---
id: image
title: Image
sidebar_label: Image
---

Komponente zur Anzeige eines Bildes.

## Options

* __src__ | `string (required)`: Bildquelle Standort. Default: `none`.
* __alt__ | `string`: Bildbeschreibung. Default: `''`.
* __body__ | `string`: base64-kodierte Daten des Bildes. Default: `none`.
* __height__ | `(number|string)`: Bildhöhe (in px). Default: `none`.
* __width__ | `(number|string)`: Bildbreite (in px). Default: `none`.
* __inline__ | `boolean`: erlaubt es, das Bild mit Text zu umgeben. Default: `false`.
* __id__ | `string`: Bauteilkennzeichen. Default: `none`.
* __showModal__ | `boolean`: steuert, ob die modale Vollbildansicht angezeigt werden soll. Default: `true`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onShare__ | `function`: Callback, der mit dem Bild aufgerufen wird, wenn die Schaltfläche "Teilen" angeklickt wird. Default: `none`.


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

