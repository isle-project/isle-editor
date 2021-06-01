---
id: select-input
title: Select Input
sidebar_label: Select Input
---

Pasirinktas įvesties komponentas. Gali būti naudojamas kaip ISLE prietaisų skydelio dalis arba atskirai. Pastaruoju atveju norite apdoroti pakeitimus naudodami atributą `onChange` arba susieti reikšmę su pasauliniu kintamuoju naudodami atributą `bind`.

## Parinktys

* __bind__ | `string`: pasaulinio kintamojo, kuriam priskiriamas skaičius, pavadinimas. Default: `''`.
* __clearable__ | `boolean`: logaritminė reikšmė, rodanti, ar galima ištrinti padarytą (-us) pasirinkimą (-us).. Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: numatytoji įvesties vertė paleidimo metu. Default: `none`.
* __disabled__ | `boolean`: kontroliuoja, ar įvestis yra aktyvi, ar ne.. Default: `false`.
* __inline__ | `boolean`: nurodo, ar įvestis bus rodoma eilutėje.. Default: `false`.
* __legend__ | `(string|node)`: šalia įvesties rodomas tekstas. Default: `''`.
* __menuPlacement__ | `string`: meniu vieta valdiklio atžvilgiu (automatinis, viršutinis arba apatinis).. Default: `'auto'`.
* __multi__ | `boolean`: kontroliuoja, ar galima pasirinkti kelis atsakymus.. Default: `false`.
* __onChange__ | `function`: grįžtamojo ryšio funkcija, kuri bus iškviesta pasirinkus.. Default: `onChange() {}`.
* __options__ | `array`: masyvas, kuriame nurodomi naudotojo galimi pasirinkimai.. Default: `[]`.
* __placeholder__ | `string`: vertė, kuri bus rodoma prieš atliekant pradinį pasirinkimą.. Default: `none`.
* __tooltip__ | `string`: tekstas rodomas užvedus pelę ant legendos. Default: `none`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai

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

