# Expire

The Expire component will causes all of its children to become invisible after a specified amount of time.

#### Example:

``` js
<Expire>
    <span> I will disappear </span>
</Expire>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/expire/)

#### Options:

* __active__ | `boolean`: controls whether the counter should be active. Default: `false`.
* __delay__ | `number`: number of milliseconds before component disappears. Default: `1000`.
