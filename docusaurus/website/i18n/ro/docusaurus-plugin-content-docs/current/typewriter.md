---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

O componentă ISLE care vă permite să creați un efect de mașină de scris.

## Opțiuni

* __delay__ | `number`: întârziere inițială înainte de pornirea mașinii de scris (în milisecunde). Default: `none`.
* __hold__ | `number`: dacă textul este o matrice de șiruri de caractere, hold specifică durata de afișare a liniei înainte de a trece la următorul element din matrice. Default: `2000`.
* __interval__ | `number`: intervalul de timp al mașinii de scris (în milisecunde). Default: `100`.
* __random__ | `boolean`: dacă este setat random, tastele vor fi executate cu o anumită aleatoritate "umană".. Default: `false`.
* __sound__ | `boolean`: se va auzi și tastatura tastată.. Default: `false`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __text__ | `(string|array<string>)`: textul complet care urmează să fie afișat sau o serie de texte care urmează să fie afișate secvențial. Default: `''`.


## Exemple

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

