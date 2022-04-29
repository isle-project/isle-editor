---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Een knop die aan het einde van een les wordt weergegeven en waarop de leerlingen kunnen klikken. Standaard wordt een bericht ter bevestiging van de voltooiing van de les naar hun e-mailadres gestuurd.

## Opties

* __coverage__ | `array<string>`: lijst van identificatiegegevens die moeten worden ingediend en in het antwoorddocument moeten worden opgenomen. Default: `none`.
* __label__ | `string`: label van verzendknop. Default: `none`.
* __message__ | `string`: bericht ter bevestiging e-mail. Default: `''`.
* __requireLogin__ | `boolean`: controleert of de gebruiker moet worden aangemeld voor het activeren van de knop (voor anonieme gebruikers wordt er geen bevestiging per e-mail verstuurd). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: controleert of er een bevestigingse-mail moet worden gestuurd bij het indienen van de les. Default: `true`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onClick__ | `function`: terugroeping aangeroepen bij het klikken op de indieningsknop. Default: `onClick() {}`.


## Voorbeelden

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Label', value: 'customLabel' },
        { label: 'Email Feedback', value: 'emailFeedback' },
        { label: 'With Callback', value: 'withCallback' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<LessonSubmit />
```

</TabItem>

<TabItem value="customLabel">

```jsx live
<LessonSubmit label="Click to submit" />
```

</TabItem>

<TabItem value="withEmail">

```jsx live
<LessonSubmit 
    style={{ outline: '4px solid black'}}
    message={`
    Hi,
    I am very glad that you solved this lesson. Congratulations! 
    It was a sophisticated one.
    If you want some help how to use ISLE, have a look a 
    [this site](https://isledocs.com/docs/)
    
    Best
    The ISLE team
    `}
    label="Click to submit" />
```
</TabItem>

<TabItem value="withCallback">

```jsx live
<LessonSubmit 
    requireLogin={false}
    onClick={() => {
        alert( 'The Button has been clicked...' );
    }}
    label="Click to submit" />
```
</TabItem>

</Tabs>
