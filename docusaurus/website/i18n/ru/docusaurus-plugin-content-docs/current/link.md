---
id: link
title: Link
sidebar_label: Link
---

Компонент для отображения ссылки.

## Options

* __href__ | `string (required)`: URL-адрес сайта, на который можно перейти по ссылке. Default: `none`.
* __target__ | `string`: определяет, где открывается ссылка: установите значение `_blank` для нового окна, `_self` собственный кадр, `_parent` для родительского, `_top` для полного тела окна, или имя кадра. Default: `'_blank'`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Examples

```jsx live
<Link href="https://wikipedia.org">Wikipedia</Link>
```

