---
id: multi-cards
title: Multi Cards
sidebar_label: Multi Cards
---

Ένα στοιχείο ISLE που σας επιτρέπει να δημιουργήσετε και να ελέγξετε πολλαπλές αναδιπλούμενες κάρτες (π.χ. σε ένα παιχνίδι Memory).

## Επιλογές

* __animation__ | `object`: αν οριστεί, το στοιχείο χρησιμοποιεί ένα animation εισόδου- το αντικείμενο περιέχει ένα όνομα (όπως `anim-scale-up`) και μια διάρκεια (όπως `1.7s` = 1.7 δευτερόλεπτα). Default: `{}`.
* __memory__ | `boolean`: αν θα ενεργοποιήσετε τη λειτουργία παιχνιδιού μνήμης στην οποία πρέπει να αντιστοιχίσετε ζεύγη των παρεχόμενων τιμών. Default: `none`.
* __onChange__ | `function`: μια συνάρτηση που λαμβάνει τον πίνακα των αναδιπλούμενων καρτών. Default: `onChange() {}`.
* __onMemoryComplete__ | `function`: callback που καλείται αν το παιχνίδι μνήμης έχει ολοκληρωθεί. Default: `onMemoryComplete() {}`.
* __oneTime__ | `boolean`: υποδεικνύει αν η διαδικασία flip μπορεί να εκτελεστεί μόνο μία φορά. Default: `false`.
* __values__ | `array<object>`: τις τιμές για τις αντίστοιχες κάρτες, που εισάγονται σε έναν πίνακα που έχει πεδία εισόδου για μια τιμή "μπροστά" και "πίσω". Μια τέτοια τιμή θα μπορούσε να είναι μια συμβολοσειρά, αλλά και ένα πλήρες συστατικό ISLE.. Default: `[]`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.
* __containerStyle__ | `object`: Στυλ CSS των δοχείων της κάρτας. Default: `{}`.
* __frontStyle__ | `object`: Στυλ CSS για το μπροστινό μέρος των καρτών. Default: `{}`.
* __backStyle__ | `object`: Στυλ CSS για το πίσω μέρος των καρτών. Default: `{}`.


## Παραδείγματα

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


