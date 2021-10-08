---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Vuorovaikutteinen Javascript-komentotulkki, jota voidaan käyttää JavaScript-komentojen suorittamiseen. Shell sisältää konsolin, joka näyttää virheilmoitukset, varoitukset jne.

## Vaihtoehdot

* __code__ | `string`: Arvioitava JavaScript-koodi. Default: `''`.
* __solution__ | `string`: ohjelmointikysymyksissä koodi `string`, joka edustaa virallista ratkaisua ongelmaan.. Default: `''`.
* __hints__ | `array<(string|node)>`: ohjelmointikysymyksiä varten joukko vihjeitä, jotka opastavat ongelman lähestymisessä.. Default: `[]`.
* __precompute__ | `boolean`: valvoo, onko oletuskoodi suoritettava, kun komponentti on asennettu.. Default: `false`.
* __chat__ | `boolean`: valvoo, otetaanko ryhmäkeskustelutoiminto käyttöön. Default: `false`.
* __check__ | `string`: liitetty JavaScript-koodi, jolla tarkistetaan arvioitava `koodi`.. Default: `none`.
* __disabled__ | `boolean`: määrittää, poistetaanko kaikki käyttäjän syötteet käytöstä ja tehdäänkö koodilohkosta staattinen.. Default: `false`.
* __lines__ | `number`: näytettävien rivien määrä. Default: `5`.
* __className__ | `string`: luokan nimi. Default: `''`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onChange__ | `function`: callback, joka käynnistyy aina kun tekstikentän syöttö muuttuu.. Default: `onChange() {}`.
* __onEvaluate__ | `function`: callback, joka käynnistyy aina kun `Evaluate`-painiketta napsautetaan.. Default: `onEvaluate() {}`.
* __vars__ | `object`: scope-olio, jossa on muuttujia, jotka on asetettava arvioitavan `code`:n saataville.. Default: `none`.


## Esimerkkejä

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




