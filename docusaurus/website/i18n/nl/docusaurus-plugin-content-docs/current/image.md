---
id: image
title: Image
sidebar_label: Image
---

Onderdeel om een beeld weer te geven.

## Options

* __src__ | `string (required)`: beeldbronlocatie. Default: `none`.
* __alt__ | `string`: beeldbeschrijving. Default: `''`.
* __body__ | `string`: basis64 gecodeerde gegevens van het beeld. Default: `none`.
* __height__ | `(number|string)`: beeldhoogte (in px). Default: `none`.
* __width__ | `(number|string)`: beeldbreedte (in px). Default: `none`.
* __inline__ | `boolean`: maakt het mogelijk de afbeelding te omgeven door tekst. Default: `false`.
* __id__ | `string`: componentenidentificatiecode. Default: `none`.
* __showModal__ | `boolean`: bepaalt of de modale weergave op volledig scherm moet worden weergegeven. Default: `true`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onShare__ | `function`: callback aangeroepen met de afbeelding als op de "share" knop wordt geklikt. Default: `none`.


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

