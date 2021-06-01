---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Interaktyvioji "R Shell" programa, kurią galima naudoti R komandoms vykdyti debesyje naudojant [OpenCPU](https://www.opencpu.org/).

## Parinktys

* __code__ | `string`: R kodas, kurį reikia įvertinti. Default: `''`.
* __solution__ | `string`: programavimo klausimams - R kodas `string`, nurodantis oficialų problemos sprendimą. Default: `''`.
* __hints__ | `array<(string|node)>`: programavimo klausimams - daugybė patarimų, kaip spręsti problemą.. Default: `[]`.
* __addPreceding__ | `boolean`: jei nustatyta reikšmė true, apvalkalas įvertins visą dabartinio komponento ir visų ankstesnių pamokoje esančių komponentų kodą.. Default: `false`.
* __libraries__ | `array`: R bibliotekos, kurios turėtų būti automatiškai įkeliamos, kai įvesties `kodas` yra vykdomas.. Default: `[]`.
* __precompute__ | `boolean`: kontroliuoja, ar numatytasis kodas turėtų būti vykdomas, kai komponentas yra sumontuotas.. Default: `false`.
* __prependCode__ | `(string|array)`: R kodo eilutė (arba R kodo blokų masyvas), kuri bus pridedama prie kodo, saugomo `code`, vertinant. Default: `''`.
* __chat__ | `boolean`: kontroliuoja, ar turi būti įjungta grupinių pokalbių funkcija.. Default: `false`.
* __disabled__ | `boolean`: kontroliuoja, ar išjungti visas naudotojo įvestis ir padaryti kodo bloką statiniu.. Default: `false`.
* __lines__ | `number`: rodomų eilučių skaičius. Default: `5`.
* __resettable__ | `boolean`: kontroliuoja, ar rodyti atstatymo mygtuką numatytajam įvesties kodui atkurti.. Default: `false`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onChange__ | `function`: atgalinis skambutis, inicijuojamas, kai pasikeičia teksto lauko įvestis.. Default: `onChange() {}`.
* __onEvaluate__ | `function`: atgalinis skambutis, inicijuojamas, kai paspaudžiamas mygtukas `Vertinti`.. Default: `onEvaluate(){}`.
* __onResult__ | `function`: atgalinis skambutis, iškviečiamas kiekvieną kartą, kai iš debesies gaunamas kodo vykdymo rezultatas. Rezultatas `string` perduodamas kaip vienintelis grįžtamojo ryšio funkcijos argumentas. Default: `onResult() {}`.


## Pavyzdžiai

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
