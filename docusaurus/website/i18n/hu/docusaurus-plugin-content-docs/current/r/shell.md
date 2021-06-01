---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Egy interaktív R Shell, amely az [OpenCPU](https://www.opencpu.org/) segítségével R parancsok végrehajtására használható a felhőben.

## Opciók

* __code__ | `string`: Kiértékelendő R kód. Default: `''`.
* __solution__ | `string`: programozási kérdések esetén a probléma hivatalos megoldását jelentő R kód "string".. Default: `''`.
* __hints__ | `array<(string|node)>`: a programozási kérdéseknél a probléma megközelítéséhez útmutatást nyújtó tippek sorozata. Default: `[]`.
* __addPreceding__ | `boolean`: ha true-ra van állítva, a héj kiértékeli az aktuális komponens összes kódját és a leckében előforduló összes előzőt.. Default: `false`.
* __libraries__ | `array`: R könyvtárak, amelyeket automatikusan be kell tölteni, amikor a bemeneti "kód" végrehajtásra kerül.. Default: `[]`.
* __precompute__ | `boolean`: szabályozza, hogy az alapértelmezett kódot végre kell-e hajtani, ha a komponens fel van szerelve.. Default: `false`.
* __prependCode__ | `(string|array)`: R kód "string" (vagy R kódblokkok "tömbje"), amelyet a "code"-ban tárolt kód elé kell illeszteni a kiértékeléskor.. Default: `''`.
* __chat__ | `boolean`: szabályozza, hogy a csoportos csevegés funkciót engedélyezni kell-e. Default: `false`.
* __disabled__ | `boolean`: szabályozza, hogy letiltja-e az összes felhasználói bemenetet, és statikussá teszi-e a kódblokkot.. Default: `false`.
* __lines__ | `number`: a megjelenítendő sorok száma. Default: `5`.
* __resettable__ | `boolean`: szabályozza, hogy megjelenjen-e egy reset gomb az alapértelmezett kódbevitel visszaállításához.. Default: `false`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onChange__ | `function`: visszahívás, amely a szövegmező bemenetének megváltozásakor hívódik elő.. Default: `onChange() {}`.
* __onEvaluate__ | `function`: visszahívás, amelyet az "Értékelés" gombra kattintáskor hívnak elő.. Default: `onEvaluate(){}`.
* __onResult__ | `function`: visszahívás, amelyet mindig akkor hívnak meg, amikor a kódvégrehajtás eredményét megkapják a felhőből. Az eredmény "string" az egyetlen argumentumként kerül átadásra a callback függvénynek.. Default: `onResult() {}`.


## Példák

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
