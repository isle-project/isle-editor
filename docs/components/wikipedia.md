The **Wikipedia**-component scans the **Wikipedia** and returns an article - if anything valid is found under the given address.

If the **showSearch** parameter is included, an input text field is visible.

The **language** parameter allows the specification of the fiven language.
Up to now **us-EN**, **de-DE** and **fr-FR** are supported (English, German, French).

When the **speech** parameter is set, the component includes speech-recognition.
The recognition identifier is the name **Wikipedia**. For example: if you ask "Wikipedia, what do you know about Hillary Clinton", you will see the wikipedia entry of Hillary Clinton.


```js
<Wikipedia
    showSearch
    speech
    language = "de-DE"
    ></Wikipedia>
```