---
id: range-question
title: Range Question
sidebar_label: Range Question
---

Een vraagcomponent die de leerlingen vraagt om een onder- en bovengrens aan te geven.

## Opties

* __question__ | `(string|node)`: getoonde vraag. Default: `''`.
* __solution__ | `array<number>`: twee-elementen array met de eindpunten van het juiste bereik. Default: `none`.
* __hintPlacement__ | `string`: plaatsing van de hints (ofwel `top`, `left`, `right`, of `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: tips die een leidraad bieden voor het beantwoorden van de vraag. Default: `[]`.
* __labels__ | `array`: twee-element array van aangepaste labels anders dan "Verlaagt" en "Bovenste". Default: `none`.
* __feedback__ | `boolean`: regelt of er terugmeldingsknoppen moeten worden weergegeven. Default: `true`.
* __chat__ | `boolean`: bepaalt of het element een geïntegreerde chat moet hebben. Default: `false`.
* __digits__ | `number`: aantal cijfers dat moet overeenkomen met het antwoord van de oplossing en de gebruiker. Indien niet gegeven of op nul gezet, controleert de component op strikte gelijkheid. Indien ingesteld op 0, controleert de component op gehele gelijkheid. Default: `3`.
* __max__ | `number`: maximale invoerwaarde. Default: `null`.
* __min__ | `number`: minimale invoerwaarde. Default: `null`.
* __nTries__ | `number`: na hoeveel pogingen feedback moet worden gegeven (als `provideFeedback` `true` is). Default: `1`.
* __provideFeedback__ | `boolean`: geeft aan of de feedback, inclusief het juiste antwoord, moet worden weergegeven nadat de leerlingen hun antwoorden hebben ingediend. Default: `true`.
* __submitAfterFeedback__ | `boolean`: controleert of men opnieuw moet kunnen indienen, zelfs nadat de oplossing is onthuld. Default: `false`.
* __until__ | `Date`: tijd tot de studenten de gelegenheid krijgen om antwoorden in te dienen. Default: `none`.
* __points__ | `number`: maximumaantal punten voor de indeling in klassen. Default: `10`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onChangeLower__ | `function`: callback getriggerd nadat de ondergrens door de gebruiker is gewijzigd. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: callback geactiveerd nadat de bovengrens door de gebruiker is gewijzigd. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: callback die wordt gestart nadat een limiet door de gebruiker is gewijzigd (met de onder- en bovengrens als argumenten). Default: `onChange() {}`.
* __onSubmit__ | `function`: callback ingeroepen bij het inzenden van het antwoord; heeft als eerste parameter een `boolean` die aangeeft of het antwoord correct is beantwoord (indien van toepassing, `null` anders) en het verstrekte antwoord als tweede parameter. Default: `onSubmit() {}`.


## Voorbeelden

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Points and Feedback', value: 'withPoints' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<RangeQuestion
    style={{ fontSize: 17, }}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withHints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
/>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<RangeQuestion
    style={{ fontFamily: 'Georgia', boxShadow: '0 0  10px darkblue'}}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withPoints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
    points={20}
    onSubmit={(res) => {
     if (res === true) {
      alert('Great, you have received 20 points');
     }
     else alert('sorry, this answer was wrong');
    }}
/>
```

</TabItem>

</Tabs>
