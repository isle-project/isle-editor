---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Edytor tekstowy do pisania notatek lub raportów. Obsługuje eksport notatek w postaci plików HTML lub PDF, a także automatyczne przesyłanie ich na serwer ISLE.

## Opcje

* __allowSubmissions__ | `boolean`: kontroluje, czy studenci mogą przesyłać swoje raporty na serwer. Default: `true`.
* __canLoadHTML__ | `boolean`: określa, czy ma być wyświetlony przycisk do wczytania zapisanego pliku HTML do edytora. Default: `true`.
* __defaultValue__ | `string`: domyślny tekst edytora. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: kontroluje, czy edytor powinien zawierać widok historii. Default: `true`.
* __mode__ | `string`: kontroluje tryb edycji tekstu (albo `individual` dla dokumentu osobistego, `group` dla dokumentu dla grup, `collaborative` dla pojedynczego dokumentu dla wszystkich, lub `cohort` dla dokumentu dla kohorty). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: obiekt do dostosowania modalu do resetowania dokumentu (zazwyczaj nie powinien być zmieniany). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: kontroluje, czy wysyłać emaile z potwierdzeniem w formacie PDF/HTML przy wysyłce. Default: `false`.
* __voiceTimeout__ | `number`: czas w milisekundach po włożeniu fragmentu nagranego wejścia głosowego. Default: `5000`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Przykłady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Default Value', value: 'defaultValue' },
        { label: 'Mode', value: 'mode' },
        { label: 'With Style', value: 'withStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<TextEditor  />
```

</TabItem>

<TabItem value="defaultValue">

```jsx live
<TextEditor defaultValue={`# Welcome!

This is a text that uses **markdown**

## Second Heading Level

[Wikipedia Link](https://https://www.wikipedia.org/).
`} />
```

</TabItem>

<TabItem value="mode">

```jsx live
<TextEditor defaultValue="This is reserved for an individual. But you can also allow groups, students cohorts, or everybody to join in and work collaboratively (setting the mode option will only have an effect in a live lesson, not this preview)." 
mode="individual" />
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<TextEditor  
  defaultValue="[Generate CSS-Gradients Online!](https://cssgradient.io/)"
  style={{ 
    background: 'green',
    background: 'radial-gradient(circle, rgba(251,213,112,0.7315301120448179) 0%,rgba(83,199,14,0.4514180672268907) 100%)' 
  }}
/>
```

</TabItem>

</Tabs>
