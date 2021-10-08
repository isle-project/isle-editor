---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

ISLE-komponentti kysymyksille, joihin oppilaiden olisi vastattava vapaan tekstin muodossa.

## Vaihtoehdot

* __question__ | `(string|node)`: vapaatekstikysymysosion yläosassa näkyvä kysymys.. Default: `''`.
* __hints__ | `array<(string|node)>`: vihjeitä, joissa annetaan ohjeita kysymykseen vastaamiseen.. Default: `[]`.
* __hintPlacement__ | `string`: vihjeiden sijainti (joko `top`, `left`, `right` tai `bottom`).. Default: `'top'`.
* __feedback__ | `boolean`: ohjaa, näytetäänkö palautepainikkeet. Default: `true`.
* __solution__ | `(string|node)`: mallivastaus ongelmaan. Default: `''`.
* __instantSolution__ | `boolean`: voiko mallivastauksen näyttöä vaihtaa välittömästi?. Default: `false`.
* __rows__ | `number`: tekstikentän rivien lukumäärä, johon oppilaat voivat kirjoittaa vastauksensa.. Default: `5`.
* __chat__ | `boolean`: valvoo, otetaanko ryhmäkeskustelu käyttöön kysymystä varten.. Default: `false`.
* __resizable__ | `boolean`: ohjaa, onko tekstialueen kokoa muutettavissa.. Default: `false`.
* __placeholder__ | `string`: sijoitusteksti, joka näytetään ennen kuin käyttäjä on syöttänyt tekstiä.. Default: `''`.
* __disableSubmitNotification__ | `boolean`: valvoo, poistetaanko lähetysilmoitukset käytöstä. Default: `false`.
* __submissionMsg__ | `string`: ilmoitus, joka näytetään, kun oppija lähettää vastauksensa ensimmäisen kerran.. Default: `''`.
* __resubmissionMsg__ | `string`: ilmoitus, joka näytetään kaikista ensimmäisen lähetyksen jälkeisistä lähetyksistä.. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: ilmoittaa, näytetäänkö palaute, joka sisältää oikean vastauksen, sen jälkeen, kun oppijat ovat lähettäneet vastauksensa.. Default: `true`.
* __maxlength__ | `number`: suurin sallittu merkkien määrä. Default: `2500`.
* __until__ | `Date`: aika, jonka kuluessa opiskelijoiden olisi annettava antaa vastauksensa. Default: `none`.
* __points__ | `number`: luokittelussa annettavien pisteiden enimmäismäärä. Default: `10`.
* __className__ | `string`: luokan nimi. Default: `''`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onChange__ | `function`: callback, joka käynnistyy aina kun tekstialueen arvo muuttuu; saa ainoana argumenttinaan nykyisen tekstin.. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, jota kutsutaan, kun käyttäjä lähettää vastauksen; saa ainoana argumenttinaan lähetetyn tekstin.. Default: `onSubmit() {}`.


## Esimerkkejä

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
