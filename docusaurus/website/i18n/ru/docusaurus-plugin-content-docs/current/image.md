---
id: image
title: Image
sidebar_label: Image
---

Компонент для отображения изображения.

## Options

* __src__ | `string (required)`: расположение источника изображения. Default: `none`.
* __alt__ | `string`: описание изображения. Default: `''`.
* __body__ | `string`: базовые64 закодированные данные изображения. Default: `none`.
* __height__ | `(number|string)`: высота изображения (в px). Default: `none`.
* __width__ | `(number|string)`: ширина изображения (в px). Default: `none`.
* __inline__ | `boolean`: позволяет окружить изображение текстом. Default: `false`.
* __id__ | `string`: идентификатор компонента. Default: `none`.
* __showModal__ | `boolean`: управляет отображением в полноэкранном режиме. Default: `true`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onShare__ | `function`: вызов обратного вызова с изображением, если нажать кнопку "share".. Default: `none`.


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

