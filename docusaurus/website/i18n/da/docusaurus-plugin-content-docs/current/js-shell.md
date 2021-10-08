---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

En interaktiv Javascript-shell, der kan bruges til at udføre JavaScript-kommandoer. Shell'en indeholder en konsol, der viser fejlmeddelelser, advarsler osv.

## Indstillinger

* __code__ | `string`: JavaScript-kode, der skal evalueres. Default: `''`.
* __solution__ | `string`: for programmeringsspørgsmål, kode `string`, der repræsenterer den officielle løsning på problemet. Default: `''`.
* __hints__ | `array<(string|node)>`: for programmeringsspørgsmål, en række tips, der giver vejledning om, hvordan problemet skal gribes an. Default: `[]`.
* __precompute__ | `boolean`: styrer, om standardkoden skal udføres, når komponenten er monteret. Default: `false`.
* __chat__ | `boolean`: kontrollerer, om gruppechatfunktionen skal være aktiveret. Default: `false`.
* __check__ | `string`: vedhæftet JavaScript-kode for at kontrollere den `kode`, der skal evalueres. Default: `none`.
* __disabled__ | `boolean`: styrer, om alle brugerindtastninger skal deaktiveres, og om kodeblokken skal være statisk. Default: `false`.
* __lines__ | `number`: antal linjer, der skal vises. Default: `5`.
* __className__ | `string`: klassens navn. Default: `''`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onChange__ | `function`: callback, der påkaldes, når input i tekstfeltet ændres. Default: `onChange() {}`.
* __onEvaluate__ | `function`: callback, der påkaldes, når der klikkes på knappen `Evaluér`.. Default: `onEvaluate() {}`.
* __vars__ | `object`: scope-objekt med variabler, der skal stilles til rådighed for evalueret `code`.. Default: `none`.


## Eksempler

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




