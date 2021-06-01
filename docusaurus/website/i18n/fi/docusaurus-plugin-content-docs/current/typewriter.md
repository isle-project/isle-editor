---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

ISLE-komponentti, jonka avulla voit luoda kirjoituskone-efektin.

## Vaihtoehdot

* __delay__ | `number`: alkuviive ennen kirjoituskoneen käynnistymistä (millisekunteina). Default: `none`.
* __hold__ | `number`: jos teksti on merkkijonojen joukko, hold määrittää, kuinka kauan rivi näytetään ennen kuin siirrytään seuraavaan rivin kohteeseen.. Default: `2000`.
* __interval__ | `number`: kirjoituskoneen aikaväli (millisekunteina).. Default: `100`.
* __random__ | `boolean`: jos satunnainen on asetettu, näppäinpainallukset suoritetaan tietyllä, "inhimillisellä" satunnaisuudella.. Default: `false`.
* __sound__ | `boolean`: kirjoitettu näppäinpainallus kuuluu myös.. Default: `false`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __text__ | `(string|array<string>)`: näytettävä koko teksti tai joukko peräkkäin näytettäviä tekstejä.. Default: `''`.


## Esimerkkejä

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

