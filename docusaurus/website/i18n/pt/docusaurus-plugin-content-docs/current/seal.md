---
id: seal 
title: Seal
sidebar_label: Seal
---

Um selo de aprovação.

## Opções

* __active__ | `boolean`: controla se o selo está ativo ou cinzento. Default: `true`.
* __onClick__ | `function`: função de chamada de retorno invocada quando a nota é clicada. Default: `onClick() {}`.
* __scale__ | `number`: tamanho do objeto (se não estiver explicitamente definido, o selo não é redimensionado). Default: `none`.
* __innerStyle__ | `object`: o estilo para o círculo interno. Default: `{}`.
* __lower__ | `string`: o texto inferior. Default: `'The lower text'`.
* __lowerArc__ | `number`: o arco para o texto inferior. Default: `150`.
* __noOrnaments__ | `boolean`: previne a renderização dos ornamentos. Default: `false`.
* __removable__ | `boolean`: controla se a nota é removida ao ser clicada. Default: `false`.
* __style__ | `object`: o estilo para o elemento. Default: `none`.
* __title__ | `(string|node)`: título do selo. Default: `'Enter a title'`.
* __upper__ | `string`: o texto superior. Default: `'The upper text'`.
* __upperArc__ | `number`: o arco para o texto superior. Default: `150`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Removable', value: 'removable' },
        { label: 'Scaled', value: 'scaled' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Seal title="LESSON DONE" upper="Carnegie Mellon" upperArc={120} lower="University" lowerArc={105} />
```

</TabItem>


<TabItem value="withStyle">

```jsx live

<Seal 
  title="LESSON DONE" 
  style={{ backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}
  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}
  upper="Carnegie Mellon"  upperArc={120} 
  lower="University" lowerArc={105}
/>
```

</TabItem>

<TabItem value="removable">

```jsx live
<Seal 
  title="LESSON DONE" 
  noOrnaments
  removable
  style={{ backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}
  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}
  upper="Carnegie Mellon"  upperArc={120} 
  lower="University" lowerArc={105}
/>
```

</TabItem>

<TabItem value="scaled">

```jsx live
<Seal 
  title="BIG SEAL" 
  scale={1.15}
  style={{ fontWeight: 800, color: 'darkred', backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}
  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}
  upper="Carnegie Mellon" upperArc={120} 
  lower="University" lowerArc={105}
/>
```

</TabItem>

</Tabs>
