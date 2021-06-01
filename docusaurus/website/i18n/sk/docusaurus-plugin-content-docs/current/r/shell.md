---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Interaktívny R Shell, ktorý možno použiť na vykonávanie príkazov R v cloude pomocou [OpenCPU](https://www.opencpu.org/).

## Možnosti

* __code__ | `string`: Kód R, ktorý sa má vyhodnotiť. Default: `''`.
* __solution__ | `string`: pre programátorské otázky, R kód `string` predstavujúci oficiálne riešenie problému. Default: `''`.
* __hints__ | `array<(string|node)>`: pre otázky týkajúce sa programovania, rad tipov poskytujúcich návod, ako pristupovať k problému. Default: `[]`.
* __addPreceding__ | `boolean`: ak je nastavená na true, shell vyhodnotí všetok kód z aktuálnej zložky a všetkých predchádzajúcich, ktoré sa v lekcii vyskytli. Default: `false`.
* __libraries__ | `array`: Knižnice R, ktoré by sa mali automaticky načítať pri spustení vstupného kódu. Default: `[]`.
* __precompute__ | `boolean`: kontroluje, či sa má po pripojení komponentu vykonať predvolený kód.. Default: `false`.
* __prependCode__ | `(string|array)`: `reťazec` kódu R (alebo `pásmo` blokov kódu R), ktorý sa pri vyhodnocovaní pridá ku kódu uloženému v `code`. Default: `''`.
* __chat__ | `boolean`: kontroluje, či má byť povolená funkcia skupinového chatu.. Default: `false`.
* __disabled__ | `boolean`: kontroluje, či sa majú zakázať všetky používateľské vstupy a blok kódu má byť statický.. Default: `false`.
* __lines__ | `number`: počet riadkov, ktoré sa majú zobraziť. Default: `5`.
* __resettable__ | `boolean`: ovláda, či sa má zobraziť tlačidlo na obnovenie predvoleného zadávania kódu.. Default: `false`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onChange__ | `function`: spätné volanie vyvolané vždy, keď sa zmení vstup do textového poľa. Default: `onChange() {}`.
* __onEvaluate__ | `function`: spätné volanie vyvolané vždy po kliknutí na tlačidlo `Vyhodnotiť`. Default: `onEvaluate(){}`.
* __onResult__ | `function`: spätné volanie vyvolané vždy, keď sa z cloudu získa výsledok vykonania kódu. Výsledok `string` sa odovzdáva ako jediný argument funkcii callback. Default: `onResult() {}`.


## Príklady

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
