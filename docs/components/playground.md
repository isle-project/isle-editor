# Playground

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
