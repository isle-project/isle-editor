---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

Een ISLE component voor vragen waarbij de antwoorden van studenten in de vorm van vrije tekst moeten worden aangeleverd.

## Opties

* __question__ | `(string|node)`: de vraag die bovenin de vrije tekst-vraagcomponent wordt getoond. Default: `''`.
* __hints__ | `array<(string|node)>`: tips die een leidraad bieden voor het beantwoorden van de vraag. Default: `[]`.
* __hintPlacement__ | `string`: plaatsing van de hints (ofwel `top`, `left`, `right`, of `bottom`). Default: `'top'`.
* __feedback__ | `boolean`: regelt of er terugmeldingsknoppen moeten worden weergegeven. Default: `true`.
* __solution__ | `(string|node)`: een modelantwoord op het probleem. Default: `''`.
* __instantSolution__ | `boolean`: of men de weergave van het modelantwoord onmiddellijk kan wijzigen. Default: `false`.
* __rows__ | `number`: aantal rijen van het tekstveld voor de leerlingen om hun antwoorden te typen. Default: `5`.
* __chat__ | `boolean`: controleert of het mogelijk moet zijn om de groeps-chat in te schakelen voor de vraag. Default: `false`.
* __resizable__ | `boolean`: controleert of het tekstgebied aanpasbaar moet zijn. Default: `false`.
* __placeholder__ | `string`: tekst van de plaatshouder wordt weergegeven voordat de gebruiker een tekst heeft ingevoerd. Default: `''`.
* __disableSubmitNotification__ | `boolean`: controleert of de aanmeldingskennisgevingen moeten worden uitgeschakeld. Default: `false`.
* __submissionMsg__ | `string`: kennisgeving weergegeven wanneer de leerling voor het eerst zijn antwoord indient. Default: `''`.
* __resubmissionMsg__ | `string`: kennisgeving weergegeven voor alle inzendingen na de eerste. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: geeft aan of de feedback, inclusief het juiste antwoord, moet worden weergegeven nadat de leerlingen hun antwoorden hebben ingediend. Default: `true`.
* __maxlength__ | `number`: maximaal toegestaan aantal tekens. Default: `2500`.
* __until__ | `Date`: tijd tot de studenten de gelegenheid krijgen om antwoorden in te dienen. Default: `none`.
* __points__ | `number`: maximumaantal punten voor de indeling in klassen. Default: `10`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onChange__ | `function`: callback aangeroepen telkens als de waarde van het tekstgebied verandert; ontvangt de huidige tekst als enig argument. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback ingeroepen wanneer de gebruiker een antwoord indient; ontvangt de ingediende tekst als enig argument. Default: `onSubmit() {}`.


## Voorbeelden

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Points for Grading', value: 'withPointsForGrading' },
        { label: 'No Feedback', value: 'withoutFeedbackAndNotification' },
        { label: 'Solution', value: 'withSolution' },
        { label: 'Hints', value: 'withHints' },
        { label: 'Placeholder', value: 'placeholderText' },
        { label: 'Due Date', value: 'dueDate' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3} 
/>
```
</TabItem>

<TabItem value="withPointsForGrading" >

```jsx live
<FreeTextQuestion 
    question={<span>Can you please explain Montesquieu's System of *separation of powers*?</span>} 
    rows={3} 
    points={15}
/>
```

</TabItem>

<TabItem value="withoutFeedbackAndNotification" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3}
    disableSubmitNotification 
    feedback={false}
/>
```

</TabItem>

<TabItem value="withSolution" > 

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={1} 
    solution="Winston Churchill" 
/>
```

</TabItem>

<TabItem value="withHints" >

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={1} 
    solution="Winston Churchill" 
    hints = {["No, it was not Margret Thatcher", "He believed in Aliens by the way", "His first name was Winston - like the guy in 1984"]}
    submissionMsg = "His name was Winston churchill, and it occurred in a speech given by him to the House of Commons of the Parliament of the United Kingdom on 13 May 1940. The speech is sometimes known by that name"
/>
```

</TabItem>

<TabItem value="placeholderText" >

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={3} 
    solution="Winston Churchill" 
    placeholder="Think of an overweight politician with a big cigar in his mouth."
/>
```

</TabItem>

<TabItem value="dueDate" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3} 
    until={new Date( Date.UTC(2029, 0, 1, 3, 33 ) )}
    placeholder="You can set a date until answers are accepted. In this case it is 2020, 1st of January, 3:30 am UTC time."
/>
```

</TabItem>

</Tabs>
