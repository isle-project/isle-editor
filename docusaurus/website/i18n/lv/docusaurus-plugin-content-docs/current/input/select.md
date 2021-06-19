---
id: select-input
title: Select Input
sidebar_label: Select Input
---

Izvēlēties ievades komponentu. Var izmantot kā daļu no ISLE paneļa vai atsevišķi. Pēdējā minētajā gadījumā vēlaties apstrādāt izmaiņas, izmantojot atribūtu `onChange`, vai piesaistīt vērtību globālajam mainīgajam, izmantojot atribūtu `bind`.

## Iespējas

* __bind__ | `string`: tā globālā mainīgā nosaukums, kuram piešķirams numurs.. Default: `''`.
* __clearable__ | `boolean`: boolean vērtība, kas norāda, vai var dzēst izdarīto(-ās) izvēli(-as).. Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: ievades noklusējuma vērtība pie palaišanas. Default: `none`.
* __disabled__ | `boolean`: kontrolē, vai ievade ir aktīva vai nav.. Default: `false`.
* __inline__ | `boolean`: norāda, vai ievade tiek rādīta rindkopā.. Default: `false`.
* __legend__ | `(string|node)`: teksts, kas tiek parādīts blakus ievadītajam. Default: `''`.
* __menuPlacement__ | `string`: izvēlnes izvietojums attiecībā pret vadības ierīci (`automātiski`, `top` vai `bottom`).. Default: `'auto'`.
* __multi__ | `boolean`: kontrolē, vai var izvēlēties vairākas atbildes.. Default: `false`.
* __onChange__ | `function`: atgriezeniskā zvana funkcija, kas jāizsauc, kad ir izdarīta izvēle.. Default: `onChange() {}`.
* __options__ | `array`: masīvs, kurā norādītas lietotājam pieejamās izvēles. Default: `[]`.
* __placeholder__ | `string`: vērtība, kas jāparāda pirms sākotnējās izvēles izdarīšanas.. Default: `none`.
* __tooltip__ | `string`: teksts, kas tiek parādīts, kad uzbraucot virs leģendas. Default: `none`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.


## Piemēri

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

