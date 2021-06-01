---
id: select-input
title: Select Input
sidebar_label: Select Input
---

En udvalgt indgangskomponent. Kan bruges som en del af et ISLE-dashboard eller som en selvstændig komponent. I sidstnævnte tilfælde skal du håndtere ændringer via `onChange`-attributten eller binde værdien til en global variabel via `bind`-attributten.

## Indstillinger

* __bind__ | `string`: navnet på den globale variabel for det nummer, der skal tildeles. Default: `''`.
* __clearable__ | `boolean`: boolsk værdi, der angiver, om man kan slette de(t) valg, der er foretaget. Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: standardværdi for input ved opstart. Default: `none`.
* __disabled__ | `boolean`: styrer, om indgangen er aktiv eller ej. Default: `false`.
* __inline__ | `boolean`: angiver, om input vises inline. Default: `false`.
* __legend__ | `(string|node)`: tekst, der vises ved siden af indtastningen. Default: `''`.
* __menuPlacement__ | `string`: menuens placering i forhold til kontrolelementet (enten "automatisk", "øverst" eller "nederst"). Default: `'auto'`.
* __multi__ | `boolean`: kontrollerer, om man kan vælge flere svar. Default: `false`.
* __onChange__ | `function`: callback-funktion, der skal påkaldes, når der er truffet et valg. Default: `onChange() {}`.
* __options__ | `array`: array med angivelse af de valgmuligheder, der er til rådighed for brugeren. Default: `[]`.
* __placeholder__ | `string`: værdi, der skal vises, før der træffes et første valg. Default: `none`.
* __tooltip__ | `string`: tekst, der vises, når man holder musen over legenden. Default: `none`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.


## Eksempler

```jsx live
<SelectInput
    legend="Choose the test direction"
    defaultValue="two-sided"
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```

