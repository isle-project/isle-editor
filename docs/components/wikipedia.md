# Wikipedia

The **Wikipedia** component scans the **Wikipedia** and returns an article - if anything valid is found under the given address.

#### Example:

```js
<Wikipedia
    showSearch
    speech
    language = "de-DE"
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/wikipedia/)

#### Options:

* __invisible__ | `boolean`: controls whether to display a text input field to search for Wikipedia articles. Default: `false`.
* __language__ | `string`: language identifier. Default: `'en-US'`.
