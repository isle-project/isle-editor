---
id: image
title: Image
sidebar_label: Image
---

Composant permettant d'afficher une image.

## Options

* __src__ | `string (required)`: emplacement de la source de l'image. Default: `none`.
* __alt__ | `string`: description de l'image. Default: `''`.
* __body__ | `string`: base64 données encodées de l'image. Default: `none`.
* __height__ | `(number|string)`: hauteur de l'image (en px). Default: `none`.
* __width__ | `(number|string)`: largeur de l'image (en px). Default: `none`.
* __inline__ | `boolean`: permet d'entourer l'image de texte. Default: `false`.
* __id__ | `string`: identifiant du composant. Default: `none`.
* __showModal__ | `boolean`: contrôle l'affichage ou non de la vue modale en plein écran. Default: `true`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onShare__ | `function`: rappel invoqué avec l'image si le bouton "partager" est cliqué. Default: `none`.


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

