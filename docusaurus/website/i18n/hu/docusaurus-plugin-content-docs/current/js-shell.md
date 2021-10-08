---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Egy interaktív Javascript shell, amely JavaScript parancsok végrehajtására használható. A shell tartalmaz egy konzolt, amely hibaüzeneteket, figyelmeztetéseket stb. jelenít meg.

## Opciók

* __code__ | `string`: Kiértékelendő JavaScript kód. Default: `''`.
* __solution__ | `string`: programozási kérdések esetén a probléma hivatalos megoldását jelentő "string" kódot.. Default: `''`.
* __hints__ | `array<(string|node)>`: a programozási kérdéseknél a probléma megközelítéséhez útmutatást nyújtó tippek sorozata. Default: `[]`.
* __precompute__ | `boolean`: szabályozza, hogy az alapértelmezett kódot végre kell-e hajtani, ha a komponens fel van szerelve.. Default: `false`.
* __chat__ | `boolean`: szabályozza, hogy a csoportos csevegés funkciót engedélyezni kell-e. Default: `false`.
* __check__ | `string`: csatolt JavaScript kód az értékelendő "kód" ellenőrzésére. Default: `none`.
* __disabled__ | `boolean`: szabályozza, hogy letiltja-e az összes felhasználói bemenetet, és statikussá teszi-e a kódblokkot.. Default: `false`.
* __lines__ | `number`: a megjelenítendő sorok száma. Default: `5`.
* __className__ | `string`: osztály neve. Default: `''`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onChange__ | `function`: visszahívás, amely a szövegmező bemenetének megváltozásakor hívódik elő.. Default: `onChange() {}`.
* __onEvaluate__ | `function`: visszahívás, amelyet az "Értékelés" gombra kattintáskor hívnak elő.. Default: `onEvaluate() {}`.
* __vars__ | `object`: scope objektum változókkal, amelyeket elérhetővé kell tenni a kiértékelt `code` számára.. Default: `none`.


## Példák

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




