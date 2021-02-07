---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

Компонент iFrame.

## Options

* __src__ | `string (required)`: URL-адрес источника. Default: `none`.
* __fullscreen__ | `boolean`: управляет отображением iFrame в полноэкранном режиме. Default: `false`.
* __title__ | `string`: название iFrame. Default: `'An iFrame'`.
* __width__ | `number`: ширина iFrame (в px). Default: `900`.
* __height__ | `number`: высота iFrame (в px). Default: `600`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Examples

```jsx live
<IFrame src="https://wikipedia.org" height="700px" />
``` 

