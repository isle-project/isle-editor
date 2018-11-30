# Flippable Card

An ISLE component that allows a two-fold usage.

#### Example:

``` js
<FlippableCard
        button="Click me!"
        perspective= {1400}
        cardStyles={{
            container: {
                width: "70%",
                height: 500,
                marginBottom: 50
            },
            front: {
                textAlign: 'center',
                fontSize: '30px',
                color: 'orange',
                textDecoration: 'overline',
            },
            back: {
            }
        }}

        flipSpeedBackToFront={1.2}
        flipSpeedFrontToBack={0.9}      
        >
    
    <div key="front">
        <img src="https://www.catster.com/wp-content/uploads/2018/07/Savannah-cat-long-body-shot.jpg" />
        <br/>
    </div>
    
    <div key="back">
    <FreeTextQuestion
        question="Backside"
        solution="Enter solution"
    />
    </div>
</FlippableCard>
``` 

[Open interactive preview](https://isle.heinz.cmu.edu/components/flippable-card/)

#### Options:

* __button__ | `(string|node)`: indicates the button string. Default: `null`.
* __cardStyles__ | `array<Objects>`: allows to override the given styles. Default: `{}`. Available styles are  `container`,  `front` and  `back`.
* __children__ | `boolean`: represents the child elements. There have to be at least to divs with the keys  `front` and  `back`. 
* __flipSpeedBackToFront__ | `number`: the speed by which the card turns from background to foreground, in seconds. Default: `1.6`.
* __flipSpeeddFrontToBack__ | `number`: the speed by which the card turns from foreground to background, in seconds. Default: `1.6`.

