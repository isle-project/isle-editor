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

#### Options
* __style__: A `style` element with `position`, `left`, `right`, `top`, `width` and `height`. Optional argument. Default: `NULL`.
* __code__: The code to be displayed in the playground box. This code will be editable by the user in the brower or lesson. Simply copy and paste desired code with '\`' surrounding the code. Default: `NULL`. 
* __scope__: The comma-delimited names of the elements of the code that you wish to display. Msot often this is the name of the component you wish to display. Note if using multiple elements the `scope` argument behaves unpredictably and it is recommended that you include all components in order. Default: `NULL`.

