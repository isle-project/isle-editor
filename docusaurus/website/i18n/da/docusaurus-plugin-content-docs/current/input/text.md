---
id: text-input
title: Text Input
sidebar_label: Text Input
---

En komponent til indtastning af tekst. Kan bruges som en del af et ISLE-dashboard eller selvstændigt. I sidstnævnte tilfælde skal du håndtere ændringer via `onChange`-attributten eller binde værdien til en global variabel via `bind`-attributten.

## Indstillinger

* __bind__ | `string`: navnet på den globale variabel for det nummer, der skal tildeles. Default: `none`.
* __defaultValue__ | `string`: værdi, der angiver inputets standardværdi ved start. Default: `''`.
* __value__ | `string`: tekstværdi (for kontrolleret komponent). Default: `none`.
* __legend__ | `(string|node)`: streng, der angiver den tekst, der vises ved siden af talindtastningen. Default: `''`.
* __inline__ | `boolean`: Angiver, om input vises inline. Default: `false`.
* __onBlur__ | `function`: callback-funktion, der påkaldes, når tekstområdet mister fokus. Default: `onBlur() {}`.
* __onChange__ | `function`: funktion, der skal kaldes, når en tekstværdi ændres. Default: `onChange() {}`.
* __onKeyDown__ | `function`: callback-funktion, der skal påkaldes, når en tast trykkes ned. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: callback-funktion, der skal påkaldes, når en tast indtastes. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: callback-funktion, der skal påkaldes, når tasten slippes. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: streng, der angiver den værdi, der skal vises, før der træffes et første valg. Default: `none`.
* __width__ | `number`: tal, der angiver bredden af input i pixels. Default: `80`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.


## Eksempler

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

