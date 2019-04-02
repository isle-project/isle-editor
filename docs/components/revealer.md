# Revealer

An ISLE component that instructors may use to selectively reveal or hide children content to all users.

#### Example:

``` js
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

[Open interactive preview](https://isle.heinz.cmu.edu/components/revealer/)

#### Options:

* __message__ | `string`: message to be displayed when content is hidden. Default: `'Content hidden by instructor'`.
* __show__ | `boolean`: controls whether to initially display child elements. Default: `false`.
