---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

O componentă de intrare cu cursor. Poate fi utilizată ca parte a unui tablou de bord ISLE sau de sine stătător. În acest din urmă caz, doriți să gestionați modificările prin atributul `onChange` sau să legați valoarea de o variabilă globală prin atributul `bind`.

## Opțiuni

* __defaultValue__ | `number`: Valoarea inițială a cursorului. Default: `10`.
* __disabled__ | `boolean`: controlează dacă intrarea cursorului este activă sau nu. Dacă este setat la true, glisorul va fi prezent pe ecran, deși gri.. Default: `false`.
* __inline__ | `boolean`: controlează dacă se plasează cursorul în linie cu textul sau în afara acestuia. Default: `false`.
* __legend__ | `(string|node)`: legendă a intrării. Default: `none`.
* __max__ | `number`: Valoarea maximă a cursorului. Default: `100`.
* __maxLabel__ | `string`: etichetă care să fie afișată în dreapta cursorului în locul valorii maxime. Default: `none`.
* __min__ | `number`: Valoarea minimă a cursorului. Default: `0`.
* __minLabel__ | `string`: eticheta să fie afișată în stânga cursorului în loc de valoarea minimă. Default: `none`.
* __onChange__ | `function`: callback invocat cu noua valoare atunci când se modifică valoarea cursorului. Default: `onChange() {}`.
* __precision__ | `number`: rotunjirea datelor de intrare. Valoarea va fi rotunjită astfel încât să nu aibă mai multe cifre semnificative decât precizia. De exemplu, dacă se dorește să se utilizeze numai numere întregi, se va folosi o precizie de 10, în timp ce dacă se dorește rotunjirea la suta, se va folosi o precizie de 0,001.. Default: `10`.
* __step__ | `(number|string)`: mărimea pasului de deplasare a cursorului. Default: `1`.
* __hideTooltip__ | `boolean`: controlează dacă se ascunde sau nu tooltip-ul. Default: `false`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __numberInputStyle__ | `object`: Stiluri CSS inline pentru componenta de intrare a numerelor. Default: `{}`.
* __rangeInputStyle__ | `object`: Stil CSS în linie pentru componenta de intrare în interval. Default: `{}`.


## Exemple

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Mathematical Symbols via LaTeX', value: 'mathematicalSymbols' },
        { label: 'Custom Style', value: 'customStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SliderInput
    legend="Success Probability"
    defaultValue={0.5}
    min={0}
    max={1}
    step={0.01}
/>
```

</TabItem>

<TabItem value="mathematicalSymbols">

```jsx live
<SliderInput
    legend={<span>$\sigma$ (standard deviation)</span>}
    defaultValue={0.5}
    min={0}
    max={1}
    step={0.01}
/>
```

</TabItem>

<TabItem value="customStyle">

```jsx live
<SliderInput
    legend="Success Probability"
    style={{ padding: 30, fontSize: 25, background: 'tan', fontFamily: 'Georgia'}}
    rangeInputStyle ={{ minWidth: 500}}
    numberInputStyle = {{ background: 'white', boxShadow: '2px 2px 0px black'}}
    defaultValue={0.5}
    min={0}
    max={200}
    step={0.01}
/>
```

</TabItem>

</Tabs>
