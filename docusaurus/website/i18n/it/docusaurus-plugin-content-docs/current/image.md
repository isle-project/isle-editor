---
id: image
title: Image
sidebar_label: Image
---

Componente per visualizzare un'immagine.

## Options

* __src__ | `string (required)`: posizione della fonte dell'immagine. Default: `none`.
* __alt__ | `string`: descrizione dell'immagine. Default: `''`.
* __body__ | `string`: base64 dati codificati dell'immagine. Default: `none`.
* __height__ | `(number|string)`: altezza dell'immagine (in px). Default: `none`.
* __width__ | `(number|string)`: larghezza dell'immagine (in px). Default: `none`.
* __inline__ | `boolean`: permette all'immagine di essere circondata da testo. Default: `false`.
* __id__ | `string`: identificatore di componente. Default: `none`.
* __showModal__ | `boolean`: controlla se visualizzare la vista modale a schermo intero. Default: `true`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onShare__ | `function`: richiamata con l'immagine se si fa clic sul pulsante "condividi".. Default: `none`.


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

