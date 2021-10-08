---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Interaktivna lupina Javascript, ki jo lahko uporabite za izvajanje ukazov JavaScript. Ovojnica vsebuje konzolo, ki prikazuje sporočila o napakah, opozorila itd.

## Možnosti

* __code__ | `string`: Koda JavaScript, ki jo je treba ovrednotiti. Default: `''`.
* __solution__ | `string`: za vprašanja o programiranju, koda `string`, ki predstavlja uradno rešitev problema. Default: `''`.
* __hints__ | `array<(string|node)>`: pri vprašanjih o programiranju je na voljo vrsta namigov, ki svetujejo, kako se lotiti problema.. Default: `[]`.
* __precompute__ | `boolean`: nadzoruje, ali naj se privzeta koda izvede, ko je komponenta nameščena.. Default: `false`.
* __chat__ | `boolean`: nadzoruje, ali naj bo omogočena funkcionalnost skupinskega klepeta.. Default: `false`.
* __check__ | `string`: priložena koda JavaScript za preverjanje `kode`, ki jo je treba ovrednotiti.. Default: `none`.
* __disabled__ | `boolean`: nadzoruje, ali naj se onemogočijo vsi uporabniški vhodi in blok kode postane statičen.. Default: `false`.
* __lines__ | `number`: število vrstic za prikaz. Default: `5`.
* __className__ | `string`: ime razreda. Default: `''`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onChange__ | `function`: povratni klic, ki se sproži ob vsaki spremembi vnosa v besedilno polje.. Default: `onChange() {}`.
* __onEvaluate__ | `function`: povratni klic, ki se sproži, ko je kliknjen gumb `Vrednotenje`.. Default: `onEvaluate() {}`.
* __vars__ | `object`: predmet scope s spremenljivkami, ki naj bi bile na voljo ovrednotenemu `code`. Default: `none`.


## Primeri

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Ten Lines', value: 'mLines' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<JSShell code = {`var a = 2; 
var b = 2;
console.log(a + b);`} />
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<JSShell style={{ fontSize: 18, boxShadow: '0 0 4px black' }}  />
```

</TabItem>

<TabItem value="mLines">

```jsx live
<JSShell lines={10} />
```

</TabItem>

</Tabs>




