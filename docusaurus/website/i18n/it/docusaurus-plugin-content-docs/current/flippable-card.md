---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

Un componente ISLE che permette il rendering su due lati.

## Opzioni

* __button__ | `string`: Etichetta a bottone. Default: `none`.
* __draggable__ | `boolean`: controlla se la carta può essere trascinata. Default: `false`.
* __flipSpeedBackToFront__ | `number`: la velocità con cui la carta passa dallo sfondo al primo piano, in pochi secondi. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: {numero} la velocità con cui la carta passa dal primo piano allo sfondo, in pochi secondi. Default: `1`.
* __oneTime__ | `boolean`: indica se il processo di flip può essere eseguito una sola volta. Default: `false`.
* __perspective__ | `number`: Valore della proprietà CSS per dare una prospettiva all'elemento posizionato a 3d. Default: `1000`.
* __size__ | `number`: undefined. Default: `250`.
* __disabled__ | `boolean`: controlla se la scheda flippabile è disabilitata. Default: `false`.
* __value__ | `boolean`: stato di capovolgimento della scheda (per componente controllato). Default: `none`.
* __defaultValue__ | `boolean`: stato iniziale di capovolgimento della scheda. Default: `false`.
* __containerStyle__ | `object`: stile CSS del contenitore. Default: `{}`.
* __frontStyle__ | `object`: Stile CSS della scheda frontale. Default: `{}`.
* __backStyle__ | `object`: Stile CSS della scheda posteriore. Default: `{}`.
* __onChange__ | `function`: richiamata una volta che la carta è capovolta; riceve lo stato di capovolgimento corrente come unico argomento. Default: `onChange() {}`.


## Esempi

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Slow Motion', value: 'slowMo' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<FlippableCard containerStyle={{float: 'none'}} size={200}>
    <div>
        <img src="https://bit.ly/2YU5EbU" />
    </div>
    <div>
       <img src="https://bit.ly/3aGv9mp" />
    </div>
</FlippableCard>
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<FlippableCard 
  containerStyle={{float: 'none'}} 
  frontStyle={{fontSize: 50, textAlign: 'center'}} 
  backStyle={{fontSize: 50, textAlign: 'center', background: 'purple', color: 'white'}} 
  >
    <div>
      FRONT
    </div>
    <div>
      BACK
    </div>
</FlippableCard>
```

</TabItem>

<TabItem value="slowMo">

```jsx live
<FlippableCard 
  flipSpeedBackToFront={7} 
  flipSpeedFrontToBack={7}   
  containerStyle={{float: 'none'}} 
  frontStyle={{fontSize: 50, textAlign: 'center'}} 
  backStyle={{fontSize: 50, textAlign: 'center', background: 'purple', color: 'white'}} 
  >
    <div>
      FRONT
    </div>
    <div>
      BACK
    </div>
</FlippableCard>
```

</TabItem>

</Tabs>
