---
id: link
title: Link
sidebar_label: Link
---

Komponentas, skirtas nuorodai rodyti.

## Parinktys

* __href__ | `string (required)`: Svetainės, į kurią norite pateikti nuorodą, URL. Default: `none`.
* __download__ | `(string|boolean)`: nurodo, ar nuoroda turi būti atsisiųsta: nustatyta reikšmė `true`, kad būtų priverstinai atsisiųsta, arba eilutė, kad būtų nurodytas failo vardas; jei `false`, atsisiųsti nebūtina.. Default: `false`.
* __target__ | `string`: apibrėžia, kur nuoroda atidaroma: nustatyta į `_blank` - naujam langui, `_self` - savo rėmeliui, `_parent` - pagrindiniam langui, `_top` - visam lango korpusui arba rėmelio pavadinimui.. Default: `none`.
* __windowFeatures__ | `string`: kableliais atskirtas lango savybių sąrašas, kai nuoroda atidaroma naujame lange (žr.: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features). Default: `none`.
* __openWindow__ | `boolean`: undefined. Default: `false`.
* __className__ | `string`: klasės pavadinimas. Default: `''`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'New Page', value: 'newPage' },
        { label: 'Image Link', value: 'imageLink' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<Link href="https://wikipedia.org">Wikipedia</Link>
```

</TabItem>

<TabItem value="newPage">

```jsx live
<Link target="_blank" 
style={{ fontSize: 35}}
href="https://wikipedia.org">New Wikipedia Page</Link>
```
</TabItem>

<TabItem value="imageLink">

```jsx live
<Link target="_blank" 
style={{ fontSize: 35}}
href="https://wikipedia.org">
<img src= "https://bit.ly/3aM4OU7" /></Link>
```

</TabItem>

</Tabs>
