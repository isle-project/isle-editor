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

 [Open interactive preview](https://isle.heinz.cmu.edu/components/news/)

#### Options:

* __invisible__ | `boolean`: indicates whether to show the input fields or rely solely on voice control to be triggered. Default: `false`.
* __key__ | `string`: authentication key for the News API. Default: `'2987fd19bd374249979c4e38e40ef8b8'`.
* __language__ | `string`: language identifier. Default: `'en-US'`.
* __voiceID__ | `string`: voice control identifier. Default: `none`.
* __onArticles__ | `function`: callback function invoked with an array of article objects once they are received. Default: `onArticles() {}`.
