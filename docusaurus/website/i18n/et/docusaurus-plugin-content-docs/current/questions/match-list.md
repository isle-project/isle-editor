---
id: match-list-question 
title: Match List Question
sidebar_label: Match List Question
---

ISLE komponent, mis esitab küsimuse, milles õppija peab kahe loendi elemente omavahel õigesti sobitama.

## Valikud

* __question__ | `(string|node)`: küsimus, mis kuvatakse mängu nimekirja küsimuste komponendi ülaosas. Default: `''`.
* __elements__ | `array<{a,b}>`: vabatekstilise küsimuse komponendi ülaosas kuvatavad õiged paarid. Iga "massiivi" element peab olema "objekt", millel on "a" ja "b" omadused; segavate vastuste lisamiseks tuleb esitada ainult "a" või "b" omadustega elemendid.. Default: `[]`.
* __hintPlacement__ | `string`: vihjete paigutus (kas `top`, `left`, `right` või `bottom`).. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: vihjeid, mis annavad suuniseid küsimusele vastamiseks. Default: `[]`.
* __provideFeedback__ | `boolean`: näitab, kas lahendus peaks olema kättesaadav pärast seda, kui õppijad on oma vastused esitanud.. Default: `true`.
* __feedback__ | `boolean`: kontrollib, kas tagasiside nuppe kuvada. Default: `true`.
* __chat__ | `boolean`: kontrollib, kas elemendil peaks olema integreeritud vestlus. Default: `false`.
* __colorScale__ | `array`: kui see on määratud, kasutatakse plaatide jaoks kaasasolevaid värve.. Default: `none`.
* __shuffle__ | `string`: määrab, kas segada "vasakpoolseid", "parempoolseid" või "mõlemat" veergu, mille elemente tuleb sobitada; kui anda "ei ole" või mõni muu väärtus, siis ei segata elemente kummalgi poolel (võib olla kasulik juhul, kui lahendust ei ole olemas). Default: `'both'`.
* __disableSubmitNotification__ | `boolean`: kontrollib, kas keelata esitamisteated. Default: `false`.
* __submissionMsg__ | `string`: teade, mis kuvatakse, kui õppija esitab oma vastuse esimest korda.. Default: `'You have successfully submitted your answer.'`.
* __resubmissionMsg__ | `string`: teatis, mis kuvatakse kõigi pärast esimest esitatud taotluste puhul. Default: `'You have successfully re-submitted your answer.'`.
* __until__ | `Date`: aega, kuni õpilastel peaks olema lubatud vastuseid esitada. Default: `none`.
* __points__ | `number`: hindamisel antavate punktide maksimaalne arv. Default: `10`.
* __className__ | `string`: klassi nimi. Default: `''`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onChange__ | `function`: callback, mida kutsutakse üles, kui õpilased muudavad vastust. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, mida kutsutakse üles, kui õpilased esitavad vastuse. Default: `onSubmit() {}`.


## Näited

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'withMarkdown' },
        { label: 'With Solution & Style', value: 'withFeedback' },
        { label: 'Shuffle Right', value: 'shuffleRight' },
        { label: 'Points for Grading', value: 'grading' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    elements={[
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { a: 'Ar', b: 'Argon' },
        { a: 'Ac' , b: 'Actinium'},
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
    provideFeedback={false}
/>
```
</TabItem>

<TabItem value="withMarkdown">

```jsx live
<MatchListQuestion
    question={<span>Please match the **symbols** and the respective *chemical* element.</span>}
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="withFeedback">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="shuffleRight">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Carl Friedrich', b: 'Gauß' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Francis', b: 'Galton' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'Ronald', b: 'Fisher' }
    ]}
    shuffle="right"
/>
```
</TabItem>

<TabItem value="grading">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Ronald', b: 'Fisher' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Francis', b: 'Galton' },
        { a: 'Carl Friedrich', b: 'Gauß' }
    ]}
    points={20}
/>
```
</TabItem>

</Tabs>
