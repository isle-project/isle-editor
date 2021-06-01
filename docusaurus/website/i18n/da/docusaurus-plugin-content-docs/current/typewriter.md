---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

En ISLE-komponent, der giver dig mulighed for at skabe en skrivemaskineeffekt.

## Indstillinger

* __delay__ | `number`: indledende forsinkelse, før skrivemaskinen starter (i millisekunder). Default: `none`.
* __hold__ | `number`: hvis text er et array af strenge, angiver hold hvor længe linjen vises, før den går over til det næste element i arrayet. Default: `2000`.
* __interval__ | `number`: intervallet for skrivemaskinen (i millisekunder). Default: `100`.
* __random__ | `boolean`: hvis random er indstillet, vil tastetrykkene blive udført med en vis "menneskelig" tilfældighed. Default: `false`.
* __sound__ | `boolean`: det indtastede tastetryk vil også blive hørt. Default: `false`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __text__ | `(string|array<string>)`: den fulde tekst, der skal vises, eller et array af tekster, der skal vises i rækkefølge. Default: `''`.


## Eksempler

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

