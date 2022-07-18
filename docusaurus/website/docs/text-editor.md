---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

A text editor for writing notes or reports. Supports exporting of notes as HTML or PDF files, as well as automatic submission to the ISLE server.

## Options

* __allowSubmissions__ | `boolean`: controls whether students may submit their reports to the server. Default: `true`.
* __canLoadHTML__ | `boolean`: controls whether to display button for loading a saved HTML file into the editor. Default: `true`.
* __defaultValue__ | `string`: default text of the editor. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: controls whether the editor should include a history view. Default: `true`.
* __mode__ | `string`: controls text editing mode (either `individual` for a personal document, `group` for a document per groups, `collaborative` for a single document for everyone, or `cohort` for a document per cohort). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: object for customizing the modal for resetting the document (should usually not be changed). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: controls whether to send confirmation emails with PDF/HTML output upon submission. Default: `false`.
* __voiceTimeout__ | `number`: time in milliseconds after a chunk of recorded voice input is inserted. Default: `5000`.
* __style__ | `object`: CSS inline styles. Default: `{}`.


## Examples

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
