---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Vuorovaikutteinen R Shell, jota voidaan käyttää R-komentojen suorittamiseen pilvipalvelussa [OpenCPU](https://www.opencpu.org/).

## Vaihtoehdot

* __code__ | `string`: Arvioitava R-koodi. Default: `''`.
* __solution__ | `string`: ohjelmointikysymyksissä R-koodi `string`, joka edustaa virallista ratkaisua ongelmaan.. Default: `''`.
* __hints__ | `array<(string|node)>`: ohjelmointikysymyksiä varten joukko vihjeitä, jotka opastavat ongelman lähestymisessä.. Default: `[]`.
* __addPreceding__ | `boolean`: jos arvoksi asetetaan true, komentotulkki arvioi kaiken koodin nykyisestä komponentista ja kaikista aiemmista, jotka esiintyvät oppitunnilla. Default: `false`.
* __libraries__ | `array`: R-kirjastot, jotka pitäisi ladata automaattisesti, kun syötetty `koodi` suoritetaan.. Default: `[]`.
* __precompute__ | `boolean`: valvoo, onko oletuskoodi suoritettava, kun komponentti on asennettu.. Default: `false`.
* __prependCode__ | `(string|array)`: R-koodi `merkkijono` (tai R-koodilohkojen `rivi`), joka liitetään `koodiin` tallennetun koodin eteen, kun koodia arvioidaan.. Default: `''`.
* __chat__ | `boolean`: valvoo, otetaanko ryhmäkeskustelutoiminto käyttöön. Default: `false`.
* __disabled__ | `boolean`: määrittää, poistetaanko kaikki käyttäjän syötteet käytöstä ja tehdäänkö koodilohkosta staattinen.. Default: `false`.
* __lines__ | `number`: näytettävien rivien määrä. Default: `5`.
* __resettable__ | `boolean`: valvoo, näytetäänkö nollauspainike oletuskoodin palautusta varten.. Default: `false`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onChange__ | `function`: callback, joka käynnistyy aina kun tekstikentän syöttö muuttuu.. Default: `onChange() {}`.
* __onEvaluate__ | `function`: callback, joka käynnistyy aina kun `Evaluate`-painiketta napsautetaan.. Default: `onEvaluate(){}`.
* __onResult__ | `function`: callback, jota kutsutaan aina, kun koodin suorituksen tulos saadaan pilvestä. Tulos `string` välitetään ainoana argumenttina callback-funktiolle.. Default: `onResult() {}`.


## Esimerkkejä

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Multiline', value: 'multiline' },
        { label: 'Precompute & Disabled', value: 'precompute' },
        { label: 'Using Libraries', value: 'usingLibraries' },
        { label: 'Add Preceding Code', value: 'addPreceding' },
        { label: 'Hints & Solution', value: 'hintsAndSolution' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
/>
```

</TabItem>

<TabItem value="multiline" >

```jsx live
<RShell code={`x <- runif( 100 );
y <- 3.0 * x + rnorm( 100 );
fit <- lm( y ~ x );
summary( fit );
`} resettable />
```

</TabItem>

<TabItem value="precompute" >

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
    precompute
    disabled
    lines={2}
/>
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<RShell libraries={['dplyr']} code={'starwars %>% filter(species == "Droid")'} lines={2} />
```

</TabItem>

<TabItem value="addPreceding" >

```jsx live
<RShell code="library(dplyr)" lines={2} disabled />

<RShell code={'starwars %>% filter(species == "Droid")'} addPreceding lines={2} />
```

</TabItem>

<TabItem value="hintsAndSolution" >

```jsx live
**(a)** Use the lm() function to regress `Price` on: `EngineSize`, `Origin`, `MPG.highway`, `MPG.city` and `Horsepower`.

<RShell 
    id="prob1a"
    code="" 
    solution={`cars.lm <- lm(Price ~ EngineSize + Origin + MPG.highway + MPG.city + Horsepower,
data = Cars93)
summary(cars.lm)`} 
    lines={5} 
    hints={["Use the model formula syntax to specify your regression equation. Type ?formula if you don't remember how formulas work.","You can use the summary() function to retrieve a detailed regression output for a lm object"]}
/>
```

</TabItem>

</Tabs>
