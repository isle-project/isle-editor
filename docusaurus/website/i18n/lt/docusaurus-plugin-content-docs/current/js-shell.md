---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Interaktyvioji "Javascript" programinė įranga, kurią galima naudoti "JavaScript" komandoms vykdyti. Jame yra konsolė, kurioje rodomi pranešimai apie klaidas, įspėjimai ir kt.

## Parinktys

* __code__ | `string`: Vertinamas "JavaScript" kodas. Default: `''`.
* __solution__ | `string`: programavimo klausimams - kodas `string`, nurodantis oficialų problemos sprendimą.. Default: `''`.
* __hints__ | `array<(string|node)>`: programavimo klausimams - daugybė patarimų, kaip spręsti problemą.. Default: `[]`.
* __precompute__ | `boolean`: kontroliuoja, ar numatytasis kodas turėtų būti vykdomas, kai komponentas yra sumontuotas.. Default: `false`.
* __chat__ | `boolean`: kontroliuoja, ar turi būti įjungta grupinių pokalbių funkcija.. Default: `false`.
* __check__ | `string`: pridėtas "JavaScript" kodas, skirtas patikrinti vertinamą `kodą`.. Default: `none`.
* __disabled__ | `boolean`: kontroliuoja, ar išjungti visas naudotojo įvestis ir padaryti kodo bloką statiniu.. Default: `false`.
* __lines__ | `number`: rodomų eilučių skaičius. Default: `5`.
* __className__ | `string`: klasės pavadinimas. Default: `''`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onChange__ | `function`: atgalinis skambutis, inicijuojamas, kai pasikeičia teksto lauko įvestis.. Default: `onChange() {}`.
* __onEvaluate__ | `function`: atgalinis skambutis, inicijuojamas, kai paspaudžiamas mygtukas `Vertinti`.. Default: `onEvaluate() {}`.
* __vars__ | `object`: aprėpties objektas su kintamaisiais, kurie turėtų būti prieinami įvertintam `kodui`.. Default: `none`.


## Pavyzdžiai

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




