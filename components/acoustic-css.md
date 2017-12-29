# Acoustic CSS

An ISLE component that allows the user transform DOM elements via voice (up to now this works only in **Google Chrome** ). It is best used as part of the **Acoustic Assistant**. You can use any given **css-command** via voice. However, the first thing you have to do is to set the **id** of the said DOM-element, f.e. by saying: "CSS, set id to logo" - which implies that **logo** is the DOM-element you want to modify.

#### Example:

``` js
<AcousticAssistant
    language = 'en-US'
    css = "CSS"
></AcousticAssistant>
``` 

[Open interactive preview](https://isle.heinz.cmu.edu/components/acoustic-css/)
