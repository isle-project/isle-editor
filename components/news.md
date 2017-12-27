# News

The **News** component scans the public **News API** (consisting of 71 international newspapers) and displays the latest 10 articles of the given newspaper. There are two ways to enter a source: one by typing into the search field and submitting via the ENTER button, the second via voice.

#### Example:

```js
<News
    onArticles={(data) => {
        console.log( data );
    } }
/>
```

#### Options:

* __invisible__: `boolean` indicating whether to render the component. To set it to invisible makes only sense when the component is triggered by voice recognition.
* __language__: specifies the given language. **us-EN**, **de-DE**, and **fr-FR** are supported (English, German, French).
* __onArticles__: a callback `function` that receives the found articles in JSON format.