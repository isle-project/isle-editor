---
id: p
title: p
sidebar_label: p
---

bekezdés elem.

## Opciók

* __className__ | `string`: osztály neve. Default: `''`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'withMarkdown' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Multiple Paragraphs', value: 'multipleParagraphs' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
```

</TabItem>

<TabItem value="withMarkdown">

```jsx live
<p>
  # Heading First Category
  ## Heading Second Category
  ### Heading Third Category

  > A Blockquotoe
  
  - Unordered List - First item
  - Second item
  - Third item

  This word is **bold** and this one *italic*.
</p>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<p style= {{ color: 'red', fontFamily: 'Palatino', fontStyle: 'italic'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
```
</TabItem>

<TabItem value="multipleParagraphs">

```jsx live
<p style={{ color: 'darkblue'}}>Multiple Paragraphs</p>

<p style= {{ color: 'red', fontFamily: 'Palatino', fontStyle: 'italic'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<p>Last Paragraph</p>
```
</TabItem>

</Tabs>
