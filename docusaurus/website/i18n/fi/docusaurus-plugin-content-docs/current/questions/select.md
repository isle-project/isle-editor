---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

Valittu kysymysosa.

## Vaihtoehdot

* __question__ | `(string|node)`: kysymys, jossa opiskelijan on valittava yksi vastausvaihtoehdoista.. Default: `''`.
* __options__ | `array (required)`: käytettävissä olevat vastausvaihtoehdot, joista opiskelija voi valita. Default: `none`.
* __solution__ | `number`: ratkaisuelementin indeksi `options`:ssa. Default: `none`.
* __preselected__ | `number`: ennalta valitun vastausvaihtoehdon indeksi. Default: `0`.
* __inline__ | `boolean`: ohjaa, renderöidäänkö komponentti riviin vai ei.. Default: `false`.
* __hintPlacement__ | `string`: vihjeiden sijainti (joko "ylhäällä", "vasemmalla", "oikealla" tai "alhaalla").. Default: `'top'`.
* __hints__ | `array<(string|node)>`: vihjeitä, joissa annetaan ohjeita kysymykseen vastaamiseen.. Default: `[]`.
* __feedback__ | `boolean`: ohjaa, näytetäänkö palautepainikkeet. Default: `true`.
* __chat__ | `boolean`: valvoo, onko elementillä integroitu chat. Default: `false`.
* __provideFeedback__ | `boolean`: ilmoittaa, näytetäänkö palaute, joka sisältää oikean vastauksen, sen jälkeen, kun oppijat ovat lähettäneet vastauksensa.. Default: `true`.
* __failureMsg__ | `string`: viesti, joka näytetään, kun oppilas valitsee väärän vastauksen.. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: viesti, joka näytetään, kun oppilas valitsee oikean vastauksen.. Default: `'That's the correct answer!'`.
* __points__ | `number`: luokittelussa annettavien pisteiden enimmäismäärä. Default: `10`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onChange__ | `function`: takaisinkutsu, joka käynnistyy lähetystoiminnon jälkeen.. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, joka käynnistetään, kun vastaus on lähetetty; ensimmäisenä parametrina on `boolean`, joka ilmaisee, onko vastaukseen vastattu oikein (jos mahdollista, muuten `null`) ja toisena parametrina annettu vastaus.. Default: `onSubmit() {}`.


## Esimerkkejä

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Inline', value: 'inline' },
        { label: 'With Hints', value: 'with Hints' },
        { label: 'Submit Function Hints', value: 'submitFunction' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    style={{ background: 'gainsboro', boxShadow: '0 0 10px black'}}
/>
```
</TabItem>

<TabItem value="inline">

```jsx live
The usual t-test is:
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    inline
/> ... so you can us it in the midst of a longer paragraph
```
</TabItem>

<TabItem value="withHints">

```jsx live
<SelectQuestion
    question="White is "
    solution={1}
    options={[
        'a primary color',
        'not a primary color'
    ]}
    hints={[ "There are 3 primary colors", "Red is a primary color", "and so is yellow" ]}
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<SelectQuestion
    question="Select the primary color"
    solution={2}
    options={[
        'orange',
        'white',
        'red'
    ]}
    onSubmit={(result) => {
        switch ( result ) {
            case 'orange':
                alert( 'No, orange is a mix of yellow and red.' );
            break;
            case 'white':
                alert( 'White does not count as a color.' );
            break;
            case 'red':
                alert( 'That is correct.' );
            break;
        }
    }}
    provideFeedback={false}
/> 
```
</TabItem>

</Tabs>
