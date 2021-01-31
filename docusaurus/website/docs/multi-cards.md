---
id: multi-card 
title: MultiCard
sidebar_label: MultiCard
---

An ISLE component that allows you to create and control multiple flippable cards (e.g. in a game of Memory).

## Example

```jsx live
<MultiCards
    onChange={(data) => {
        console.log(data);
    }}
    containerStyle={{
        width: 250,
        height: 250,
        marginBottom: 10
    }}
    frontStyle={{
        color:'gainsboro',
        cursor: 'pointer',
        textAlign: 'center',
        boxShadow: '1px 1px 10px black',
        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',
        backgroundSize: '100% auto'
    }}
    backStyle={{
        color: 'blue',
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



## Options

* __animation__ | `object`: if set the component uses an entry animation; the object contains a name (like `anim-scale-up`) and a duration (like `1.7s` = 1.7 seconds). Default: `{}`.
* __memory__ | `boolean`: whether to enable the memory game mode in which one has to match pairs of the supplied values. Default: `none`.
* __onChange__ | `function`: a function that receives the matrix of the flippable cards. Default: `onChange() {}`.
* __onMemoryComplete__ | `function`: callback invoked if the memory game is complete. Default: `onMemoryComplete() {}`.
* __oneTime__ | `boolean`: indicates whether the flip process may be executed just once. Default: `false`.
* __values__ | `array<object>`: the values for the respective cards, input in an array that has entry fields for a `front` and `back` value. Such a value could be a string, but also a full fledged ISLE component. Default: `[]`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __containerStyle__ | `object`: CSS style of the card containers. Default: `{}`.
* __frontStyle__ | `object`: CSS style of the front of the cards. Default: `{}`.
* __backStyle__ | `object`: CSS style of the back of the cards. Default: `{}`.
