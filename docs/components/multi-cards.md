# MultiCard

An ISLE component that allows you to create and control multiple flippable cards (e.g. in a game of Memory).

#### Example:

``` js
<MultiCards
    id="Memory"

    onChange= {(data) => {
        console.log(data);
    }}
    
    cardStyles={{
        container:{
            width: 250,
            height: 250,
            marginBottom: 10
        },
        front:{
            color:'gainsboro',
            cursor: 'pointer',
            textAlign: 'center',
            boxShadow: '1px 1px 10px black',
            backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',
            backgroundSize: '100% auto'
        },
        back: {
            color: 'blue',
            fontSize: 20,
            fontWeight: 800,
            fontFamily: 'Oswald',
            textAlign: 'left',
            paddingLeft: '10px',
            background: 'ghostwhite',
            boxShadow: '1px 1px 10px black',
        }
    }}
    values={[
        { front: "number 1", back: 'back side of #1'},
        { front: "number 2", back: 'back side of #2'},
        { front: "number 3", back: 'back side of #3'},
        { front: "number 4", back: 'back side of #4'},
    ]}
/>
``` 

[Open interactive preview](https://isle.heinz.cmu.edu/components/multi-cards/)

#### Options:

* __cardStyles__ | `{container,front,back}`: allows to override the given styles. Handles objects with  `container`, `front` and `back` keys.. Default: `{
  'container': {},
  'front': {},
  'back': {}
}`.
* __values__ | `array<object>`: the values for the respective cards, input in an array that has entry fields for a `front` and `back` value. Such a value could be a string, but also a full fledged ISLE component.. Default: `[]`.
* __onChange__ | `function`: a function that receives the matrix of the flippable cards. Default: `() {}`.
