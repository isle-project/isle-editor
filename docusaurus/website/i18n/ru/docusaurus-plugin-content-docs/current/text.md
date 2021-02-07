---
id: text 
title: Text
sidebar_label: Text
---

Текстовый компонент, позволяющий отрисовывать необработанный текст как Markdown и включающий голосовое управление.

## Options

* __raw__ | `string`: текст для визуализации. Default: `''`.
* __className__ | `string`: имена классов. Default: `''`.
* __inline__ | `boolean`: управляет отображением Markdown в виде встраиваемого текста. Default: `false`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __voiceID__ | `string`: идентификатор голосового управления. Default: `none`.


## Examples

```jsx live
<Text>*Markdown* formatted text comes here...</Text>
```



