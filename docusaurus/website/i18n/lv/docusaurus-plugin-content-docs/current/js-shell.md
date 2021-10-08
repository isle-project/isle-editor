---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Interaktīvs Javascript apvalks, ko var izmantot JavaScript komandu izpildei. Apvalkā ir konsole, kurā tiek rādīti kļūdu ziņojumi, brīdinājumi u. c.

## Iespējas

* __code__ | `string`: Izvērtējamais JavaScript kods. Default: `''`.
* __solution__ | `string`: programmēšanas jautājumiem - kods `stringa`, kas ir oficiālais problēmas risinājums.. Default: `''`.
* __hints__ | `array<(string|node)>`: programmēšanas jautājumiem - virkne ieteikumu, kas sniedz norādījumus par to, kā risināt problēmu.. Default: `[]`.
* __precompute__ | `boolean`: kontrolē, vai noklusējuma kods jāizpilda, kad komponents ir uzstādīts.. Default: `false`.
* __chat__ | `boolean`: kontrolē, vai jāaktivizē grupas tērzēšanas funkcionalitāte.. Default: `false`.
* __check__ | `string`: pievienots JavaScript kods, lai pārbaudītu izvērtējamo `kodu`.. Default: `none`.
* __disabled__ | `boolean`: kontrolē, vai atslēgt visus lietotāja ievades ievades un padarīt kodu bloku statisku.. Default: `false`.
* __lines__ | `number`: rādāmo rindu skaits. Default: `5`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onChange__ | `function`: atsauces zvans, kas tiek izsaukts ikreiz, kad mainās teksta lauka ievade.. Default: `onChange() {}`.
* __onEvaluate__ | `function`: atgriezeniskais zvans, kas tiek izsaukts, kad tiek nospiesta poga `Izvērtēt`.. Default: `onEvaluate() {}`.
* __vars__ | `object`: scope objekts ar mainīgajiem, kas jādara pieejami novērtētajam `code`.. Default: `none`.


## Piemēri

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




