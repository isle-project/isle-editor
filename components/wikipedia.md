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

* __language__: specifies the given language. **us-EN**, **de-DE**, and **fr-FR** are supported (English, German, French).
* __invisible__: `boolean` indicating whether the component is invisible or not (invisible makes sense in an environment where speech recognition shall be the sole interface)
