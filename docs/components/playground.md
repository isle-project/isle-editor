# Playground

A module in which the author may place interactive content within a component, independent of the environment. This is often used to place related or unrelated elements without the use of `panel`.

``` js
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

``` js
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

#### Options:

* __code__ | `string`: code to be displayed in the playground box. This code will be editable by the user in the brower or lesson. Default: `''`.
* __scope__ | `object`: scope object with variables / components which should be made available to the executed code; most often this is the name of the component you wish to display. Default: `{}`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
