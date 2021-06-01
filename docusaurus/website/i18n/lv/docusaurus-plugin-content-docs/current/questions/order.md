---
id: order-question
title: Order Question
sidebar_label: Order Question
---

Kārtības jautājumu komponents, kas liek skolēnam sakārtot elementu kopumu pareizā secībā.

## Iespējas

* __question__ | `(string|node)`: jautājums, kurā skolēnam ir jāsakārto pieejamie `varianti` pareizā secībā.. Default: `''`.
* __options__ | `array (required)`: tekstu masīvs, kas skolēnam jāsakārto pareizā secībā (pieņemts, ka tā ir norādītā secība).. Default: `none`.
* __provideFeedback__ | `boolean`: kontrolē, vai tiek rādīts paziņojums, kas parāda, vai iesniegtā atbilde ir pareiza vai nē.. Default: `true`.
* __hintPlacement__ | `string`: mājienu izvietojums (`augšā`, `kreisajā`, `pa labi` vai `apakšā`).. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: norādījumi, kā atbildēt uz jautājumu.. Default: `[]`.
* __feedback__ | `boolean`: kontrolē, vai tiek rādītas atgriezeniskās saites pogas.. Default: `true`.
* __chat__ | `boolean`: kontrolē, vai elementam ir jābūt integrētam tērzēšanas. Default: `false`.
* __failureMsg__ | `string`: ziņojums, kas tiks parādīts, kad skolēns iesniegs nepareizu atbildi.. Default: `none`.
* __successMsg__ | `string`: ziņojums, kas tiks parādīts, kad skolēns iesniegs pareizo atbildi.. Default: `none`.
* __disableSubmitNotification__ | `boolean`: kontrolē, vai atspējot iesniegšanas paziņojumus.. Default: `false`.
* __until__ | `Date`: laiks, līdz skolēniem jāļauj iesniegt atbildes. Default: `none`.
* __points__ | `number`: maksimālais punktu skaits, ko piešķir klasifikācijā. Default: `10`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onChange__ | `function`: atgriezeniskais zvans, kas tiek aktivizēts pēc elementa vilkšanas; tam ir divi parametri: `boolean`, kas norāda, vai elementi ir izvietoti pareizā secībā, un `array` ar pašreizējo secību.. Default: `onChange() {}`.
* __onSubmit__ | `function`: atgriezeniskais zvans, kas tiek izsaukts, kad atbilde ir iesniegta; vienīgais parametrs ir `boolean`, kas norāda, vai elementi ir sakārtoti pareizā secībā.. Default: `onSubmit() {}`.


## Piemēri

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Hints', value: 'hints' },
        { label: 'Submit Function', value: 'submitFunction' },
        { label: 'With Points and Feedback Message', value: 'withGradingAndFeedback' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
/>
```
</TabItem>

<TabItem value="hints">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
    hints={[ 'Delta succeeds Gamma in the Greek alphabet' ]}
    hintPlacement="bottom"
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "A",
        "G",
        "V"
    ]}
    onSubmit={() => {
        alert( 'Any JavaScript function could be executed here...' );
    }}
/>
```
</TabItem>

<TabItem value="withGradingAndFeedback">

```jsx live
<OrderQuestion
    question="Arrange the events in historical order"
    options={[
        "Napoleon's coronation as emperor",
        "The Crimean War",
        "Bombing of Hiroshima",
        "Fall of the Berlin Wall",
        "Donald Trump's inauguration",
    ]}
    points={10}
    successMsg = "Great! Looks like you are a history expert"
/>
```
</TabItem>

</Tabs>
