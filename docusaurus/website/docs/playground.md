---
id: playground 
title: Playground
sidebar_label: Playground
---

A module in which the author may place interactive content within a component, independent of the environment. This is often used to place related or unrelated elements without the use of `panel`.

```jsx live
<Playground style = {{ position: "absolute",  
    left: 10, 
    top: '0px',
    width: '800px'}}
    code={`<JSShell
        code = "var a = 22;"
    />`}
    scope={{
        JSShell, Wikipedia
    }}
/>
```

```jsx live
<Playground style = {{ position: "absolute",  
    left: 10, 
    top: '0px',
    width: '800px'}}
    code={`<Wikipedia />`}
    scope={{
        Wikipedia
    }}
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/playground)

## Options

* __defaultValue__ | `string`: value indicating the default code. Default: `''`.
* __value__ | `string`: code value (for controlled component). Default: `none`.
* __scope__ | `object`: scope object with variables / components which should be made available to the executed code; most often this is the name of the component you wish to display. Default: `{}`.
* __onChange__ | `function`: callback invoked with new code once code in editor changes. Default: `onChange() {}`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
