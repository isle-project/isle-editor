---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Knoppen voor het verzamelen van gebruikersfeedback.

## Options

* __confusedMsg__ | `string`: bericht dat moet worden weergegeven in tooltip voor verwarde knop. Default: `none`.
* __feedbackMsg__ | `string`: bericht dat moet worden weergegeven in tooltip voor een gedetailleerde feedbackknop. Default: `none`.
* __understoodMsg__ | `string`: bericht dat moet worden weergegeven in tooltip voor begrepen knop. Default: `none`.
* __customFeedback__ | `boolean`: controleert of de component aangepaste feedback accepteert. Default: `true`.
* __vertical__ | `boolean`: knoppen worden verticaal weergegeven indien ingesteld op `true`.. Default: `false`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Examples

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    id="my_feedback" 
  />
</Panel>
```

