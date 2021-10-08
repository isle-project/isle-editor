---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Een interactieve Javascript-shell die gebruikt kan worden om JavaScript-commando's uit te voeren. De shell bevat een console die foutmeldingen, waarschuwingen etc. weergeeft.

## Opties

* __code__ | `string`: Te evalueren JavaScript-code. Default: `''`.
* __solution__ | `string`: voor programmeervragen, code `string` die de officiële oplossing voor het probleem vertegenwoordigt. Default: `''`.
* __hints__ | `array<(string|node)>`: voor programmeervragen, een reeks hints die een leidraad bieden voor de aanpak van het probleem. Default: `[]`.
* __precompute__ | `boolean`: controleert of de standaardcode moet worden uitgevoerd zodra het component is gemonteerd. Default: `false`.
* __chat__ | `boolean`: bepaalt of de groeps-chatfunctie moet worden ingeschakeld. Default: `false`.
* __check__ | `string`: bijgevoegde JavaScript-code om de te evalueren `code` te controleren. Default: `none`.
* __disabled__ | `boolean`: bepaalt of alle gebruikersinvoer moet worden uitgeschakeld en of de code moet worden geblokkeerd. Default: `false`.
* __lines__ | `number`: aantal weer te geven regels. Default: `5`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onChange__ | `function`: terugbellen wordt aangeroepen wanneer de invoer van het tekstveld verandert. Default: `onChange() {}`.
* __onEvaluate__ | `function`: terugbellen wordt aangeroepen wanneer op de `Evaluate`-knop wordt geklikt. Default: `onEvaluate() {}`.
* __vars__ | `object`: Scope-object met variabelen die beschikbaar moeten worden gesteld aan de geëvalueerde `code`. Default: `none`.


## Voorbeelden

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




