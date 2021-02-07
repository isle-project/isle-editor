---
id: image
title: Image
sidebar_label: Image
---

Componente para exibir uma imagem.

## Options

* __src__ | `string (required)`: localização da fonte da imagem. Default: `none`.
* __alt__ | `string`: descrição da imagem. Default: `''`.
* __body__ | `string`: dados de imagem codificados na base64. Default: `none`.
* __height__ | `(number|string)`: altura da imagem (em px). Default: `none`.
* __width__ | `(number|string)`: largura da imagem (em px). Default: `none`.
* __inline__ | `boolean`: permite que a imagem seja rodeada por um texto. Default: `false`.
* __id__ | `string`: identificador do componente. Default: `none`.
* __showModal__ | `boolean`: controla se deve exibir a visão modal em tela cheia. Default: `true`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onShare__ | `function`: chamada de retorno invocada com a imagem se o botão "compartilhar" for clicado. Default: `none`.


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

