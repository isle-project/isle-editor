---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Interaktīvs R apvalks, ko var izmantot R komandu izpildei mākonī, izmantojot [OpenCPU](https://www.opencpu.org/).

## Iespējas

* __code__ | `string`: Izvērtējamais R kods. Default: `''`.
* __solution__ | `string`: programmēšanas jautājumiem - R kods `string`, kas ir oficiālais problēmas risinājums.. Default: `''`.
* __hints__ | `array<(string|node)>`: programmēšanas jautājumiem - virkne ieteikumu, kas sniedz norādījumus par to, kā risināt problēmu.. Default: `[]`.
* __addPreceding__ | `boolean`: ja iestatīts uz true, apvalks izvērtēs visu kodu no pašreizējā komponenta un visiem iepriekšējiem komponentiem, kas parādās mācību stundā.. Default: `false`.
* __libraries__ | `array`: R bibliotēkas, kas jāielādē automātiski, kad tiek izpildīts ievades `kods`.. Default: `[]`.
* __precompute__ | `boolean`: kontrolē, vai noklusējuma kods jāizpilda, kad komponents ir uzstādīts.. Default: `false`.
* __prependCode__ | `(string|array)`: R koda `virkne` (vai R koda bloku `maseja`), kas tiks pievienota kodam, kas saglabāts `code`, kad tiks novērtēts.. Default: `''`.
* __chat__ | `boolean`: kontrolē, vai jāaktivizē grupas tērzēšanas funkcionalitāte.. Default: `false`.
* __disabled__ | `boolean`: kontrolē, vai atslēgt visus lietotāja ievades ievades un padarīt kodu bloku statisku.. Default: `false`.
* __lines__ | `number`: rādāmo rindu skaits. Default: `5`.
* __resettable__ | `boolean`: kontrolē, vai tiek rādīta atiestatīšanas poga noklusējuma koda ievades atjaunošanai.. Default: `false`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onChange__ | `function`: atsauces zvans, kas tiek izsaukts ikreiz, kad mainās teksta lauka ievade.. Default: `onChange() {}`.
* __onEvaluate__ | `function`: atgriezeniskais zvans, kas tiek izsaukts, kad tiek nospiesta poga `Izvērtēt`.. Default: `onEvaluate(){}`.
* __onResult__ | `function`: atpakaļsaukums, kas tiek izsaukts ikreiz, kad no mākoņa tiek iegūts koda izpildes rezultāts. Rezultāta `stringa` tiek nodota kā vienīgais arguments atpakaļsaukuma funkcijai.. Default: `onResult() {}`.


## Piemēri

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
