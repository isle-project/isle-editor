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

#### Options:

* __showSearch__: `boolean` indicating whether to render a search input.
* __language__: specifies the given language. **us-EN**, **de-DE**, and **fr-FR** are supported (English, German, French).
* __speech__: `boolean` indicating whether to allow inputs via speech recognition. The recognition identifier is the name **Wikipedia**. For example: if you ask "Wikipedia, what do you know about Hillary Clinton", you will see the wikipedia entry for Hillary Clinton.


<iframe src="http://isle.heinz.edu/components/wikipedia" width="800" height="800"></iframe>  
