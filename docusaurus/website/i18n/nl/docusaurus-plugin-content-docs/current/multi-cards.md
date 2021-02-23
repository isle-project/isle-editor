---
id: multi-cards
title: Multi Cards
sidebar_label: Multi Cards
---

Een ISLE-component die u in staat stelt om meerdere flippable kaarten te maken en te besturen (bijvoorbeeld in een spel van Memory).

## Opties

* __animation__ | `object`: als de component een invoeranimatie gebruikt; het object bevat een naam (zoals `anim-scal-up`) en een duur (zoals `1,7s` = 1,7 seconden). Default: `{}`.
* __memory__ | `boolean`: of de geheugenspelmodus moet worden ingeschakeld waarin men paren van de geleverde waarden moet matchen. Default: `none`.
* __onChange__ | `function`: een functie die de matrix van de flippable cards ontvangt. Default: `onChange() {}`.
* __onMemoryComplete__ | `function`: callback aangeroepen als het geheugenspel voltooid is. Default: `onMemoryComplete() {}`.
* __oneTime__ | `boolean`: geeft aan of het flippingproces slechts één keer mag worden uitgevoerd. Default: `false`.
* __values__ | `array<object>`: de waarden voor de respectievelijke kaarten, in te voeren in een array met invoervelden voor een `front` en `back` waarde. Zo'n waarde kan een string zijn, maar ook een volwaardige ISLE-component. Default: `[]`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __containerStyle__ | `object`: CSS-stijl van de kaartcontainers. Default: `{}`.
* __frontStyle__ | `object`: CSS-stijl van de voorkant van de kaarten. Default: `{}`.
* __backStyle__ | `object`: CSS-stijl van de achterkant van de kaarten. Default: `{}`.


## Voorbeelden

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Front Image', value: 'frontImage' },
        { label: 'Mode', value: 'memory' },
        { label: 'Memory Solved Callback', value: 'memorySolvedCallback' },,
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MultiCards
    containerStyle={{
        width: 250,
        height: 250,
        marginBottom: 10
    }}
    frontStyle={{
        color:'white',
        textShadow: '0px 0px 3px black',
        fontWeight: 800,
        fontSize: 30,
        cursor: 'pointer',
        textAlign: 'center',
        boxShadow: '1px 1px 10px black',
        background: 'silver'
    }}
    backStyle={{
        color: 'black',
        fontSize: 20,
        fontWeight: 800,
        fontFamily: 'Oswald',
        textAlign: 'left',
        paddingLeft: '10px',
        background: 'ghostwhite',
        boxShadow: '1px 1px 10px black',
    }}
    values={[
        { front: "number 1", back: 'back side of #1'},
        { front: "number 2", back: 'back side of #2'},
        { front: "number 3", back: 'back side of #3'},
        { front: "number 4", back: 'back side of #4'}
    ]}
/>
```
</TabItem>

<TabItem value="frontImage">

```jsx live
<MultiCards
    containerStyle={{
        width: 250,
        height: 250,
        marginBottom: 10
    }}
    frontStyle={{
        color:'white',
        textShadow: '0px 0px 13px black',
        fontWeight: 800,
        fontSize: 30,
        cursor: 'pointer',
        textAlign: 'center',
        boxShadow: '1px 1px 10px black',
        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',
        backgroundSize: '100% auto'
    }}
    backStyle={{
        color: 'black',
        fontSize: 20,
        fontWeight: 800,
        fontFamily: 'Oswald',
        textAlign: 'left',
        paddingLeft: '10px',
        background: 'ghostwhite',
        boxShadow: '1px 1px 10px black',
    }}
    values={[
        { front: "number 1", back: 'back side of #1'},
        { front: "number 2", back: 'back side of #2'},
        { front: "number 3", back: 'back side of #3'},
        { front: "number 4", back: 'back side of #4'}
    ]}
/>
```
</TabItem>

<TabItem value="memory">

```jsx live
<MultiCards
    memory
    containerStyle={{
        width: 200,
        height: 200,
        marginBottom: 10
    }}
    frontStyle={{
        color:'white',
        textShadow: '0px 0px 3px black',
        fontWeight: 800,
        fontSize: 30,
        cursor: 'pointer',
        textAlign: 'center',
        boxShadow: '1px 1px 10px black',
        background: 'silver',
        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',
    }}
    backStyle={{
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 800,
        padding: 12,
        fontFamily: 'Oswald',
        textAlign: 'left',
        background: 'ghostwhite',
        boxShadow: '1px 1px 10px black',
    }}
    values={[
        { front: "", back: <img src= "https://bit.ly/2P1I23j"/> },
        { front: "",  back: <img src= "https://bit.ly/3sn5Ih6"/> },
        { front: "",  back: <img src= "https://bit.ly/2ZHZVGm"/> },
    ]}
/>
```
</TabItem>

<TabItem value="memorySolvedCallback">

```jsx live
<MultiCards
    memory
    containerStyle={{
        width: 200,
        height: 200,
        marginBottom: 10
    }}
    frontStyle={{
        color:'white',
        textShadow: '0px 0px 3px black',
        fontWeight: 800,
        fontSize: 30,
        cursor: 'pointer',
        textAlign: 'center',
        boxShadow: '1px 1px 10px black',
        background: 'silver',
        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',
    }}
    backStyle={{
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 800,
        padding: 12,
        fontFamily: 'Oswald',
        textAlign: 'left',
        background: 'ghostwhite',
        boxShadow: '1px 1px 10px black',
    }}
    values={[
        { front: "", back: <img src="https://bit.ly/3qS4daf"/> },
        { front: "",  back: <img src="https://bit.ly/3sjiLju"/> },
        { front: "",  back: <img src="https://bit.ly/3qNVpSP" /> },
    ]}
    onMemoryComplete={() => { alert( 'The memory has been solved...' ); }}
/>
```
</TabItem>

</Tabs>


