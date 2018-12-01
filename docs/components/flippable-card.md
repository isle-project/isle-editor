# Flippable Card

An ISLE component that allows two render two-sides.

#### Example:

``` js
<FlippableCard
    button="Click me!"
    perspective={1400}
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
        back: {}
    }}
    flipSpeedBackToFront={1.2}
    flipSpeedFrontToBack={0.9}      
>
    <div>
        <img src="https://www.catster.com/wp-content/uploads/2018/07/Savannah-cat-long-body-shot.jpg" />
        <br/>
    </div>
    <div>
        <FreeTextQuestion
            question="Backside"
            solution="Enter solution"
        />
    </div>
</FlippableCard>
``` 

[Open interactive preview](https://isle.heinz.cmu.edu/components/flippable-card/)

#### Options:

* __button__ | `string`: button label. Default: `none`.
* __cardStyles__ | `{container,front,back}`: allows to override the given styles. Default: `{
  'container': {},
  'front': {},
  'back': {}
}`.
* __flipSpeedBackToFront__ | `number`: the speed by which the card turns from background to foreground, in seconds. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: {number} the speed by which the card turns from foreground to background, in seconds. Default: `1`.
* __isFlipped__ | `boolean`: initial flip state of the card. Default: `false`.
* __onChange__ | `function`: callback invoked once the card is flipped; receives the current flipped status as its sole argument. Default: `onChange() {}`.
* __perspective__ | `number`: CSS property value to give 3d-positioned element a perspective. Default: `1000`.
