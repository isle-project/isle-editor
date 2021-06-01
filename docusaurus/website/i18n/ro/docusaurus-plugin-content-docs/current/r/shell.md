---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Un shell R interactiv care poate fi utilizat pentru a executa comenzi R în cloud folosind [OpenCPU](https://www.opencpu.org/).

## Opțiuni

* __code__ | `string`: Codul R care urmează să fie evaluat. Default: `''`.
* __solution__ | `string`: pentru întrebări de programare, codul R `string` reprezentând soluția oficială a problemei.. Default: `''`.
* __hints__ | `array<(string|node)>`: pentru întrebările de programare, o serie de sugestii care oferă îndrumări privind modul de abordare a problemei. Default: `[]`.
* __addPreceding__ | `boolean`: dacă este setat la true, shell-ul va evalua tot codul din componenta curentă și din toate cele anterioare care apar în lecție.. Default: `false`.
* __libraries__ | `array`: Biblioteci R care ar trebui să fie încărcate automat atunci când este executat `code` de intrare. Default: `[]`.
* __precompute__ | `boolean`: controlează dacă codul implicit trebuie executat după ce componenta a fost montată.. Default: `false`.
* __prependCode__ | `(string|array)`: Șirul `string` de cod R (sau `array` de blocuri de cod R) care urmează să fie adăugat la codul stocat în `code` la evaluarea codului.. Default: `''`.
* __chat__ | `boolean`: controlează dacă trebuie activată sau nu funcționalitatea chat-ului de grup. Default: `false`.
* __disabled__ | `boolean`: controlează dacă se dezactivează toate intrările utilizatorului și dacă blocul de cod este static.. Default: `false`.
* __lines__ | `number`: numărul de linii de afișat. Default: `5`.
* __resettable__ | `boolean`: controlează dacă se afișează sau nu un buton de resetare pentru restabilirea codului de intrare implicit.. Default: `false`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onChange__ | `function`: callback invocat ori de câte ori se modifică datele introduse în câmpul de text. Default: `onChange() {}`.
* __onEvaluate__ | `function`: callback invocat ori de câte ori se face clic pe butonul `Evaluate`.. Default: `onEvaluate(){}`.
* __onResult__ | `function`: callback invocat ori de câte ori rezultatul executării unui cod este obținut din cloud. Rezultatul `string` este transmis ca unic argument pentru funcția de apelare.. Default: `onResult() {}`.


## Exemple

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
