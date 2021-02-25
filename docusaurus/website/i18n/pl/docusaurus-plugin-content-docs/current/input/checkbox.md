---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

Pole wyboru komponent wejściowy. Może być używany jako część deski rozdzielczej ISLE lub jako samodzielny element. W tym drugim przypadku, chcesz obsługiwać zmiany poprzez atrybut `onChange` lub powiązać wartość ze zmienną globalną poprzez atrybut `bind`.

## Opcje

* __bind__ | `string`: nazwa zmiennej globalnej dla wartości pola wyboru, która ma być przypisana do. Default: `''`.
* __defaultValue__ | `boolean`: wartość boolean wskazująca domyślną wartość pola wyboru. Default: `false`.
* __value__ | `boolean`: wartość pola wyboru (dla komponentu kontrolowanego). Default: `none`.
* __disabled__ | `boolean`: wskazuje, czy wejście jest aktywne, czy nie. Default: `false`.
* __inline__ | `boolean`: wskazuje, czy pole wyboru jest wyświetlane w linii. Default: `false`.
* __onChange__ | `function`: funkcja wywołania zwrotnego, która zostanie wywołana po kliknięciu pola wyboru. Funkcja jest wywoływana z aktualną wartością pola wyboru. Default: `onChange() {}`.
* __legend__ | `(string|node)`: tekst wyświetlany obok pola wyboru. Default: `''`.
* __tooltip__ | `string`: tekst wyświetlany po najechaniu kursorem na pole wyboru. Default: `''`.
* __tooltipPlacement__ | `string`: położenie końcówki przycisku. Default: `'right'`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Przykłady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Inline', value: 'inline' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Callback', value: 'withCallback' }
    ]}
    lazy
>


<TabItem value="minimal">

```jsx live
<CheckboxInput legend="Take the logarithm" />
```
</TabItem>

<TabItem value="inline">

```jsx live
<p>Please click
<CheckboxInput
    inline defaultValue={false}
/>
to confirm that you will follow our netiquette.</p>
```
</TabItem>


<TabItem value="withStyle">

```jsx live
<CheckboxInput
    style={{ fontSize: 30, color: 'blue'}}
    legend="Click to confirm"
    defaultValue={false}
/>
```
</TabItem>

<TabItem value="withCallback">

```jsx live
<CheckboxInput
    legend="Click to confirm..."
    onChange={( value ) => {
        alert( 'New value: '+value );
    }}
/>
```

</TabItem>

</Tabs>
