---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

Um componente iFrame.

## Opções

* __src__ | `string (required)`: URL de origem. Default: `none`.
* __fullscreen__ | `boolean`: controla se o iFrame deve ser exibido em modo de tela cheia. Default: `false`.
* __title__ | `string`: iFrame título. Default: `'An iFrame'`.
* __width__ | `number`: Largura do iFrame (em px). Default: `900`.
* __height__ | `number`: iFrame altura (em px). Default: `600`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Controlled Size', value: 'controlledSize' },
        { label: 'Custom CSS', value: 'withCSS' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<IFrame src="https://wikipedia.org" />
```

</TabItem>

<TabItem value="controlledSize" >

```jsx live
<IFrame src="https://wikipedia.org" 
  width={600} 
  height={400} 
/>
```
</TabItem>

<TabItem value="withCSS" >

```jsx live
<IFrame src="https://wikipedia.org" 
    width={600} 
    height={600} 
    style={{ outline: '10px solid black' }}
/>
```
</TabItem>

</Tabs>


