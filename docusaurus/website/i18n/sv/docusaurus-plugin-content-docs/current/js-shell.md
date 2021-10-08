---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Ett interaktivt Javascript-skal som kan användas för att utföra Javascript-kommandon. Skalet innehåller en konsol som visar felmeddelanden, varningar etc.

## Alternativ

* __code__ | `string`: JavaScript-kod som ska utvärderas. Default: `''`.
* __solution__ | `string`: För programmeringsfrågor, kod "sträng" som representerar den officiella lösningen på problemet.. Default: `''`.
* __hints__ | `array<(string|node)>`: För programmeringsfrågor, en rad tips som ger vägledning om hur man ska närma sig problemet.. Default: `[]`.
* __precompute__ | `boolean`: kontrollerar om standardkoden ska exekveras när komponenten har monterats. Default: `false`.
* __chat__ | `boolean`: kontrollerar om gruppchattfunktionen ska vara aktiverad. Default: `false`.
* __check__ | `string`: bifogad JavaScript-kod för att kontrollera den "kod" som ska utvärderas. Default: `none`.
* __disabled__ | `boolean`: kontrollerar om alla användarinmatningar ska inaktiveras och om kodblocket ska vara statiskt. Default: `false`.
* __lines__ | `number`: antal rader som ska visas. Default: `5`.
* __className__ | `string`: klassens namn. Default: `''`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onChange__ | `function`: callback som aktiveras när inmatningen i textfältet ändras. Default: `onChange() {}`.
* __onEvaluate__ | `function`: callback som aktiveras när knappen "Utvärdera" klickas.. Default: `onEvaluate() {}`.
* __vars__ | `object`: objekt med variabler som ska göras tillgängliga för utvärderad `code`.. Default: `none`.


## Exempel

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




