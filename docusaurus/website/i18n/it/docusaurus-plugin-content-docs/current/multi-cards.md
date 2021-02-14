---
id: multi-cards
title: Multi Cards
sidebar_label: Multi Cards
---

Un componente ISLE che permette di creare e controllare più carte capovolgibili (ad esempio in un gioco di memoria).

## Options

* __animation__ | `object`: se impostato il componente usa un'animazione di entrata; l'oggetto contiene un nome (come `anim-scale-up`) e una durata (come `1.7s` = 1.7 secondi). Default: `{}`.
* __memory__ | `boolean`: se abilitare la modalità di gioco di memoria in cui si devono abbinare coppie di valori forniti. Default: `none`.
* __onChange__ | `function`: una funzione che riceve la matrice delle carte capovolgibili. Default: `onChange() {}`.
* __onMemoryComplete__ | `function`: callback invocato se il gioco di memoria è completo. Default: `onMemoryComplete() {}`.
* __oneTime__ | `boolean`: indica se il processo di flip può essere eseguito una sola volta. Default: `false`.
* __values__ | `array<object>`: i valori per le rispettive schede, inseriti in un array che ha campi di inserimento per un valore di "fronte" e "retro". Tale valore potrebbe essere una stringa, ma anche un vero e proprio componente ISLE. Default: `[]`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __containerStyle__ | `object`: Stile CSS dei contenitori delle carte. Default: `{}`.
* __frontStyle__ | `object`: Stile CSS della parte anteriore delle carte. Default: `{}`.
* __backStyle__ | `object`: Stile CSS del retro delle carte. Default: `{}`.


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



