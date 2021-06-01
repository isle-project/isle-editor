---
id: r-output
title: R Output
sidebar_label: R Output
---

Компонент за визуализиране на R изхода в урок на ISLE.

## Опции

* __code__ | `string`: R код, използван за оценка. Default: `''`.
* __libraries__ | `array`: R библиотеки, които трябва да се зареждат автоматично при изпълнение на входния `код`. Default: `[]`.
* __prependCode__ | `(string|array)`: R код (или `масив` от блокове с код), който да бъде добавен към кода, съхранен в `code`, когато се оценява. Default: `''`.
* __onPlots__ | `function`: обратна връзка, извикана с всички генерирани участъци. Default: `onPlots() {}`.
* __onResult__ | `function`: обратна връзка, извикана с `error` (`null`, ако операцията е успешна) и `result`, съдържащ R изход. Default: `onResult() {}`.


## Примери

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Multiline', value: 'multiline' },
        { label: 'Loading Data', value: 'loadingData' },
        { label: 'Using Libraries', value: 'usingLibraries' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<ROutput code="runif(10)" />
```

</TabItem>

<TabItem value="multiline" >

```jsx live
<ROutput code={`
x <- runif( 100 );
y <- 3.0 * x + rnorm( 100 );
fit <- lm( y ~ x );
summary( fit );
`} />
```

</TabItem>

<TabItem value="loadingData" >

```jsx live
<ROutput 
    prependCode={'wages <- read.table( "https://raw.githubusercontent.com/stdlib-js/stdlib/develop/lib/node_modules/%40stdlib/datasets/berndt-cps-wages-1985/data/data.csv", header=TRUE, sep=",")'} 
    code="summary(wages)"
/>
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<ROutput 
    libraries={[ 'dplyr' ]}
    code={'starwars %>% filter(species == "Droid")'}
/>
```

</TabItem>

</Tabs>
