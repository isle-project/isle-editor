---
id: multi-cards
title: Multi Cards
sidebar_label: Multi Cards
---

O componentă ISLE care vă permite să creați și să controlați mai multe cărți care se pot întoarce (de exemplu, într-un joc de memorie).

## Opțiuni

* __animation__ | `object`: dacă este setat, componenta utilizează o animație de intrare; obiectul conține un nume (cum ar fi `anim-scale-up`) și o durată (cum ar fi `1.7s` = 1,7 secunde). Default: `{}`.
* __memory__ | `boolean`: dacă se activează modul de joc de memorie în care trebuie să se potrivească perechi de valori furnizate.. Default: `none`.
* __onChange__ | `function`: o funcție care primește matricea cărților care pot fi întoarse.. Default: `onChange() {}`.
* __onMemoryComplete__ | `function`: callback invocat în cazul în care jocul de memorie este finalizat. Default: `onMemoryComplete() {}`.
* __oneTime__ | `boolean`: indică dacă procesul de răsturnare poate fi executat doar o singură dată. Default: `false`.
* __values__ | `array<object>`: valorile pentru cardurile respective, introduse într-o matrice care are câmpuri de intrare pentru o valoare `front` și `back`. O astfel de valoare poate fi un șir de caractere, dar și o componentă ISLE cu drepturi depline.. Default: `[]`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __containerStyle__ | `object`: Stilul CSS al containerelor de carduri. Default: `{}`.
* __frontStyle__ | `object`: Stilul CSS al părții din față a cardurilor. Default: `{}`.
* __backStyle__ | `object`: Stilul CSS al verso-ului cardurilor. Default: `{}`.


## Exemple

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


