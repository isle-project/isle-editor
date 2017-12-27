# Acoustic Assistant

An ISLE component that allows the user to trigger various interfaces via voice (up to now this works only in **Google Chrome** ) 

The supported interfaces are 
+ Wikipedia
+ AcousticCSS

#### Example:

``` js
<AcousticAssistant
    language = 'en-US'
    wikipedia = "Wikipedia"
    css = "CSS"
></AcousticAssistant>
``` 

 [Open interactive preview](https://isle.heinz.cmu.edu/components/acoustic-assistant/)

#### Options:

* __language__: the input language. Default is **en-US**. Up to now English (**en-US**), German(**de-DE**) and French(**fr-FR**) are tested.
* __autoplay__: if this `boolean` is set, the recordings starts when the component is mounted
* __wikipedia__: the name by which the Wikipedia interface is triggered
* __css__: the name by which the AcousticCSS interface is triggered
