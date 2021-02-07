---
id: text 
title: Text
sidebar_label: Text
---

Text-Komponente, die das Rendern von Rohtext als Markdown erlaubt und die Sprachsteuerung ermöglicht.

## Options

* __raw__ | `string`: zu rendernder Text. Default: `''`.
* __className__ | `string`: Klassennamen. Default: `''`.
* __inline__ | `boolean`: steuert, ob das Markdown als Inline-Text gerendert werden soll. Default: `false`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __voiceID__ | `string`: Kennung der Sprachsteuerung. Default: `none`.


## Examples

```jsx live
<Text>*Markdown* formatted text comes here...</Text>
```



