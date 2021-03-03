---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

Een schuifregelaar-ingangscomponent. Kan worden gebruikt als onderdeel van een ISLE-dashboard of stand-alone. In het laatste geval wilt u veranderingen verwerken via het `on-Change` attribuut of de waarde binden aan een globale variabele via het `bind` attribuut.

## Opties

* __defaultValue__ | `number`: De startwaarde van de schuifregelaar. Default: `10`.
* __disabled__ | `boolean`: regelt of de schuifingang actief is of niet. Indien ingesteld op true, zal de schuifregelaar op het scherm aanwezig zijn, zij het in het grijs.. Default: `false`.
* __inline__ | `boolean`: bepaalt of de schuifregelaar in lijn met de tekst moet worden geplaatst of buiten de tekst.. Default: `false`.
* __legend__ | `(string|node)`: ondertiteling van de ingang. Default: `none`.
* __max__ | `number`: De maximale waarde van de schuifregelaar. Default: `100`.
* __maxLabel__ | `string`: etiket dat rechts van de schuifregelaar moet worden weergegeven in plaats van de maximale waarde. Default: `none`.
* __min__ | `number`: De minimale waarde van de schuifregelaar. Default: `0`.
* __minLabel__ | `string`: etiket dat links van de schuifregelaar moet worden weergegeven in plaats van de minimumwaarde. Default: `none`.
* __onChange__ | `function`: terugroeping aangeroepen met de nieuwe waarde wanneer de schuifregelaarwaarde verandert. Default: `onChange() {}`.
* __precision__ | `number`: afronding van de invoer. De waarde zal worden afgerond om niet meer significante cijfers te hebben dan de precisie. Als men bijvoorbeeld alleen gehele getallen wil gebruiken, wordt een precisie van 10 gebruikt, terwijl als men wil afronden naar de honderdste plaats een precisie van 0,001. Default: `10`.
* __step__ | `(number|string)`: stapgrootte van de schuifregelaar. Default: `1`.
* __hideTooltip__ | `boolean`: controles om de tooltip te verbergen. Default: `false`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __numberInputStyle__ | `object`: CSS inline stijlen voor nummerinvoercomponent. Default: `{}`.
* __rangeInputStyle__ | `object`: CSS inline-stijl voor de ingangscomponent van het bereik. Default: `{}`.


## Voorbeelden

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
