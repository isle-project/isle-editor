---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

Mittasuhteet tulokomponentti. Voidaan käyttää osana ISLE-kojelautaa tai itsenäisesti. Jälkimmäisessä tapauksessa haluat käsitellä muutokset `onChange`-attribuutilla tai sitoa arvon globaaliin muuttujaan `bind`-attribuutilla.

## Vaihtoehdot

* __colors__ | `array<string>`: piirakkakaavion komponenttien värit. Jos sitä ei ole määritelty, käytetään mukautettua väriasteikkoa.. Default: `none`.
* __disabled__ | `boolean`: ohjaa, onko syöttökenttä poistettu käytöstä.. Default: `false`.
* __height__ | `number`: mittasuhteet syöttökorkeus (px). Default: `200`.
* __legends__ | `array`: ryhmätunnisteet. Default: `[]`.
* __onChange__ | `function`: callback-funktio, joka kutsutaan, kun valinta on tehty.. Default: `onChange(){}`.
* __precision__ | `number`: suhteellisten arvojen näytetty tarkkuus. Default: `1`.
* __step__ | `number`: nuolien askel, joka näkyy, kun kursori viedään syöttöruudun yläpuolelle.. Default: `0.1`.


## Esimerkkejä

```jsx live
<ProportionsInput
    user
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```

