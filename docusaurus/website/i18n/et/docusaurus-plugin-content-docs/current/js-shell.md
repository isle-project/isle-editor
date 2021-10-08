---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Interaktiivne Javascript-koorik, mida saab kasutada JavaScripti käskude täitmiseks. Shell sisaldab konsooli, mis kuvab veateateid, hoiatusi jne.

## Valikud

* __code__ | `string`: Hinnatav JavaScript-kood. Default: `''`.
* __solution__ | `string`: programmeerimisküsimuste puhul kood "string", mis kujutab endast probleemi ametlikku lahendust.. Default: `''`.
* __hints__ | `array<(string|node)>`: programmeerimisküsimuste puhul mitmesuguseid vihjeid, mis annavad juhiseid probleemi käsitlemiseks. Default: `[]`.
* __precompute__ | `boolean`: kontrollib, kas vaikimisi kood tuleb käivitada, kui komponent on paigaldatud.. Default: `false`.
* __chat__ | `boolean`: kontrollib, kas grupivestluse funktsioon peaks olema lubatud. Default: `false`.
* __check__ | `string`: lisatud JavaScript-kood, et kontrollida hinnatava "koodi" hindamist.. Default: `none`.
* __disabled__ | `boolean`: kontrollib, kas keelata kõik kasutaja sisendid ja muuta koodiblokk staatiliseks.. Default: `false`.
* __lines__ | `number`: kuvatavate ridade arv. Default: `5`.
* __className__ | `string`: klassi nimi. Default: `''`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onChange__ | `function`: callback, mida kutsutakse esile iga kord, kui tekstivälja sisend muutub. Default: `onChange() {}`.
* __onEvaluate__ | `function`: callback, mis käivitub iga kord, kui nupule `Evaluate` vajutatakse.. Default: `onEvaluate() {}`.
* __vars__ | `object`: scope objekt muutujatega, mis tuleks teha kättesaadavaks hinnatud `koodile`.. Default: `none`.


## Näited

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




