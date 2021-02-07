---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Przyciski do zbierania informacji zwrotnych od użytkowników.

## Options

* __confusedMsg__ | `string`: komunikat, który ma być wyświetlany w tooltipie dla dezorientowanego przycisku. Default: `none`.
* __feedbackMsg__ | `string`: komunikat, który ma być wyświetlany w tooltipie dla szczegółowej informacji zwrotnej. Default: `none`.
* __understoodMsg__ | `string`: komunikat, który ma być wyświetlany w tooltipie dla zrozumiałego przycisku. Default: `none`.
* __customFeedback__ | `boolean`: kontroluje, czy komponent akceptuje niestandardowe informacje zwrotne. Default: `true`.
* __vertical__ | `boolean`: przyciski są wyświetlane pionowo, jeśli ustawiono je na `prawdziwe`. Default: `false`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Examples

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    id="my_feedback" 
  />
</Panel>
```

