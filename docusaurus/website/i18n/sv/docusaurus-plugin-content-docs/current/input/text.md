---
id: text-input
title: Text Input
sidebar_label: Text Input
---

En komponent för textinmatning. Kan användas som en del av en ISLE-instrumentpanel eller fristående. I det senare fallet vill du hantera ändringar via attributet `onChange` eller binda värdet till en global variabel via attributet `bind`.

## Alternativ

* __bind__ | `string`: namnet på den globala variabeln för det nummer som ska tilldelas.. Default: `none`.
* __defaultValue__ | `string`: Värde som anger standardvärdet för ingången vid start.. Default: `''`.
* __value__ | `string`: textvärde (för kontrollerad komponent). Default: `none`.
* __legend__ | `(string|node)`: sträng som anger den text som visas bredvid sifferinmatningen. Default: `''`.
* __inline__ | `boolean`: Anger om inmatningen visas inline. Default: `false`.
* __onBlur__ | `function`: callback-funktion som aktiveras när textområdet förlorar fokus.. Default: `onBlur() {}`.
* __onChange__ | `function`: funktion som ska anropas när ett textvärde ändras. Default: `onChange() {}`.
* __onKeyDown__ | `function`: callback-funktion som ska anropas när en tangent trycks ned.. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: callback-funktion som ska aktiveras när en tangent skrivs in.. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: callback-funktion som ska anropas när tangenten släpps.. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: sträng som anger det värde som ska visas innan ett första val görs.. Default: `none`.
* __width__ | `number`: Tal som anger bredden på inmatningen i pixlar.. Default: `80`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.


## Exempel

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

