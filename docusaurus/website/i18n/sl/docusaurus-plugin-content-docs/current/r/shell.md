---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Interaktivna lupina R Shell, ki se lahko uporablja za izvajanje ukazov R v oblaku z uporabo [OpenCPU](https://www.opencpu.org/).

## Možnosti

* __code__ | `string`: Koda R, ki jo je treba oceniti. Default: `''`.
* __solution__ | `string`: za vprašanja s področja programiranja, koda R `string`, ki predstavlja uradno rešitev problema. Default: `''`.
* __hints__ | `array<(string|node)>`: pri vprašanjih o programiranju je na voljo vrsta namigov, ki svetujejo, kako se lotiti problema.. Default: `[]`.
* __addPreceding__ | `boolean`: če je nastavljeno na true, lupina oceni vso kodo iz trenutne komponente in vseh prejšnjih, ki se pojavijo v lekciji.. Default: `false`.
* __libraries__ | `array`: Knjižnice R, ki naj se samodejno naložijo ob izvajanju vhodne `kode`.. Default: `[]`.
* __precompute__ | `boolean`: nadzoruje, ali naj se privzeta koda izvede, ko je komponenta nameščena.. Default: `false`.
* __prependCode__ | `(string|array)`: `vrvica` kode R (ali `mrežica` blokov kode R), ki se pri vrednotenju doda kodi, shranjeni v `kodi`.. Default: `''`.
* __chat__ | `boolean`: nadzoruje, ali naj bo omogočena funkcionalnost skupinskega klepeta.. Default: `false`.
* __disabled__ | `boolean`: nadzoruje, ali naj se onemogočijo vsi uporabniški vhodi in blok kode postane statičen.. Default: `false`.
* __lines__ | `number`: število vrstic za prikaz. Default: `5`.
* __resettable__ | `boolean`: nadzoruje, ali naj se prikaže gumb za ponastavitev za obnovitev privzetega vnosa kode.. Default: `false`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onChange__ | `function`: povratni klic, ki se sproži ob vsaki spremembi vnosa v besedilno polje.. Default: `onChange() {}`.
* __onEvaluate__ | `function`: povratni klic, ki se sproži, ko je kliknjen gumb `Vrednotenje`.. Default: `onEvaluate(){}`.
* __onResult__ | `function`: povratni klic, ki se sproži, kadar je iz oblaka pridobljen rezultat izvajanja kode. Rezultat `string` se posreduje kot edini argument funkciji povratnega klica. Default: `onResult() {}`.


## Primeri

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
