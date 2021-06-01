---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Dynaaminen taustakomponentti, joka käy läpi luettelon teksteistä määritetyin väliajoin.

## Vaihtoehdot

* __text__ | `(string|array<string>)`: teksti tai luettelo näytettävistä teksteistä. Default: `[]`.
* __loop__ | `boolean`: ilmoittaa, näytetäänkö prosessi loputtomasti.. Default: `false`.
* __direction__ | `string`: tekstin kulun suunta (joko "vasemmalle", "oikealle", "ylös", "alas", "seuranta", "fokus" tai "pyörre").. Default: `'right'`.
* __hold__ | `number`: aika, jonka teksti pysyy paikallaan (sekunteina).. Default: `5`.
* __wait__ | `number`: aika ennen uuden tekstin saapumista (sekunteina).. Default: `3`.
* __inTime__ | `number`: sisääntulovaikutuksen aika (sekunteina). Default: `1`.
* __outTime__ | `number`: poistumisvaikutuksen aika (sekunteina). Default: `1`.
* __className__ | `string`: luokan nimi. Default: `''`.
* __style__ | `object`: Tekstin CSS-tyylit. Default: `{}`.


## Esimerkkejä


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'List of Texts', value: 'list' },
        { label: 'Background Image', value: 'backgroundImage' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ScrollingText
    text="This is a text re-appearing every five seconds"
    style={{ fontSize: 44, color: 'blue' }}
    wait={5}
    hold={2}
    loop
/>
```

</TabItem>

<TabItem value="list">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'red', textAlign: 'center' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

<TabItem value="backgroundImage">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'white', textAlign: 'center', backgroundImage: 'url(https://bit.ly/3qlRgoR)', backgroundSize: '1200px 200px' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

</Tabs>
