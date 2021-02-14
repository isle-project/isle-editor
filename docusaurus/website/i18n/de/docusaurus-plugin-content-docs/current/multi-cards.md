---
id: multi-cards
title: Multi Cards
sidebar_label: Multi Cards
---

Eine ISLE-Komponente, mit der Sie mehrere umdrehbare Karten erstellen und steuern können (z. B. bei einem Memory-Spiel).

## Options

* __animation__ | `object`: wenn gesetzt, verwendet die Komponente eine Eingangsanimation; das Objekt enthält einen Namen (z. B. `anim-scale-up`) und eine Dauer (z. B. `1.7s` = 1,7 Sekunden). Default: `{}`.
* __memory__ | `boolean`: ob der Memory-Spielmodus aktiviert werden soll, bei dem man Paare der gelieferten Werte zuordnen muss. Default: `none`.
* __onChange__ | `function`: eine Funktion, die die Matrix der umdrehbaren Karten erhält. Default: `onChange() {}`.
* __onMemoryComplete__ | `function`: Callback, der aufgerufen wird, wenn das Speicherspiel beendet ist. Default: `onMemoryComplete() {}`.
* __oneTime__ | `boolean`: gibt an, ob der Flip-Prozess nur einmal ausgeführt werden darf. Default: `false`.
* __values__ | `array<object>`: die Werte für die jeweiligen Karten, die in ein Array eingegeben werden, das Eingabefelder für einen "Front"- und "Back"-Wert hat. Ein solcher Wert kann ein String sein, aber auch eine vollwertige ISLE-Komponente. Default: `[]`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __containerStyle__ | `object`: CSS-Stil der Kartencontainer. Default: `{}`.
* __frontStyle__ | `object`: CSS-Stil der Vorderseite der Karten. Default: `{}`.
* __backStyle__ | `object`: CSS-Stil für die Rückseite der Karten. Default: `{}`.


## Examples

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



