---
id: text 
title: Text
sidebar_label: Text
---

Komponent tekstowy, który pozwala na renderowanie surowego tekstu jako Markdown i umożliwia sterowanie głosowe.

## Options

* __raw__ | `string`: tekst, który ma zostać przedstawiony. Default: `''`.
* __className__ | `string`: nazwy klas. Default: `''`.
* __inline__ | `boolean`: kontroluje, czy Markdown ma być renderowany jako tekst inline. Default: `false`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __voiceID__ | `string`: identyfikator kontroli głosowej. Default: `none`.


## Examples

```jsx live
<Text>*Markdown* formatted text comes here...</Text>
```



