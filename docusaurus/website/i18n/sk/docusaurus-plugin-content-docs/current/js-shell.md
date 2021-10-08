---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Interaktívny Javascript shell, ktorý možno použiť na vykonávanie príkazov JavaScriptu. Shell obsahuje konzolu, ktorá zobrazuje chybové hlásenia, varovania atď.

## Možnosti

* __code__ | `string`: Kód JavaScript, ktorý sa má vyhodnotiť. Default: `''`.
* __solution__ | `string`: pri programátorských otázkach kód `string`, ktorý predstavuje oficiálne riešenie problému. Default: `''`.
* __hints__ | `array<(string|node)>`: pre otázky týkajúce sa programovania, rad tipov poskytujúcich návod, ako pristupovať k problému. Default: `[]`.
* __precompute__ | `boolean`: kontroluje, či sa má po pripojení komponentu vykonať predvolený kód.. Default: `false`.
* __chat__ | `boolean`: kontroluje, či má byť povolená funkcia skupinového chatu.. Default: `false`.
* __check__ | `string`: pripojený kód JavaScriptu na kontrolu vyhodnocovaného `kódu`. Default: `none`.
* __disabled__ | `boolean`: kontroluje, či sa majú zakázať všetky používateľské vstupy a blok kódu má byť statický.. Default: `false`.
* __lines__ | `number`: počet riadkov, ktoré sa majú zobraziť. Default: `5`.
* __className__ | `string`: názov triedy. Default: `''`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onChange__ | `function`: spätné volanie vyvolané vždy, keď sa zmení vstup do textového poľa. Default: `onChange() {}`.
* __onEvaluate__ | `function`: spätné volanie vyvolané vždy po kliknutí na tlačidlo `Vyhodnotiť`. Default: `onEvaluate() {}`.
* __vars__ | `object`: scope objekt s premennými, ktoré by mali byť k dispozícii vyhodnocovanému `code`. Default: `none`.


## Príklady

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




