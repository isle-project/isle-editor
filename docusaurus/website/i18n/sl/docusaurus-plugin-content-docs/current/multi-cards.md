---
id: multi-cards
title: Multi Cards
sidebar_label: Multi Cards
---

Komponenta ISLE, ki omogoča ustvarjanje in upravljanje več kart, ki jih je mogoče obračati (npr. v igri Memory).

## Možnosti

* __animation__ | `object`: če je nastavljeno, komponenta uporablja vstopno animacijo; objekt vsebuje ime (kot `anim-scale-up`) in trajanje (kot `1.7s` = 1,7 sekunde).. Default: `{}`.
* __memory__ | `boolean`: ali želite omogočiti način igre s spominom, v katerem je treba ujemati pare posredovanih vrednosti.. Default: `none`.
* __onChange__ | `function`: funkcija, ki prejme matriko kart, ki jih je mogoče obrniti.. Default: `onChange() {}`.
* __onMemoryComplete__ | `function`: povratni klic, ki se sproži, če je igra s pomnilnikom končana.. Default: `onMemoryComplete() {}`.
* __oneTime__ | `boolean`: označuje, ali se lahko postopek flip izvede samo enkrat.. Default: `false`.
* __values__ | `array<object>`: vrednosti za ustrezne kartice, ki se vnesejo v polje z vnosnima poljema za vrednosti `predaj` in `zadaj`. Takšna vrednost je lahko niz, lahko pa tudi polnopravna komponenta ISLE.. Default: `[]`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __containerStyle__ | `object`: slog CSS zabojnikov za kartice. Default: `{}`.
* __frontStyle__ | `object`: slog CSS sprednje strani kartic. Default: `{}`.
* __backStyle__ | `object`: slog CSS za hrbtno stran kartic. Default: `{}`.


## Primeri

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Front Image', value: 'frontImage' },
        { label: 'Memory', value: 'memory' },
        { label: 'Memory with Solved Callback', value: 'memorySolvedCallback' }
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
        padding: 12,
        boxShadow: '1px 1px 10px black'
    }}
    values={[
        { front: "", back: <img src="https://bit.ly/3qS4daf"/> },
        { front: "",  back: <img src="https://bit.ly/3sn5Ih6"/> },
        { front: "",  back: <img src="https://bit.ly/3qNVpSP" /> }
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
        padding: 12,
        boxShadow: '1px 1px 10px black'
    }}
    values={[
        { front: "", back: <img src="https://bit.ly/3qS4daf"/> },
        { front: "",  back: <img src="https://bit.ly/3sn5Ih6"/> },
        { front: "",  back: <img src="https://bit.ly/3qNVpSP" /> }
    ]}
    onMemoryComplete={() => { alert( 'The memory has been solved...' ); }}
/>
```
</TabItem>

</Tabs>


