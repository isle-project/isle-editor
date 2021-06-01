---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

ISLE komponentas, leidžiantis sukurti rašomosios mašinėlės efektą.

## Parinktys

* __delay__ | `number`: pradinis uždelsimas iki rašomosios mašinėlės paleidimo (milisekundėmis). Default: `none`.
* __hold__ | `number`: jei tekstas yra eilučių masyvas, funkcija hold nurodo, kiek laiko eilutė bus rodoma, kol bus pereita prie kito masyvo elemento.. Default: `2000`.
* __interval__ | `number`: rašomosios mašinėlės intervalas (milisekundėmis). Default: `100`.
* __random__ | `boolean`: jei nustatytas atsitiktinis pasirinkimas, klavišų paspaudimai bus atliekami su tam tikru "žmogišku" atsitiktinumu.. Default: `false`.
* __sound__ | `boolean`: taip pat bus girdimas įvestas klavišo paspaudimas.. Default: `false`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __text__ | `(string|array<string>)`: visą rodomą tekstą arba nuosekliai rodomų tekstų masyvą.. Default: `''`.


## Pavyzdžiai

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Delay and Sound', value: 'delayAndSound' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Array of Strings', value: 'array' },
        { label: 'Humanized', value: 'humanized' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Typewriter text="Lorem ipsum" />
```

</TabItem>

<TabItem value="delayAndSound">

```jsx live
<Typewriter text="Lorem ipsum" sound delay={2000} />
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<Typewriter text="Styled Text" style={{ fontSize: 66, color: 'red'}} />
```

</TabItem>

<TabItem value="array">

```jsx live
<Typewriter text={["First Entry", "Second Entry", "Third Entry"]}  hold={2000} />
```

</TabItem>

<TabItem value="humanized">

```jsx live
<Typewriter text="This is a humanized performance" random interval={170} />
```

</TabItem>

</Tabs>

