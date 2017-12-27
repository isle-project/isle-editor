# Dashboard




#### Example:

``` js
<Dashboard title="Alerter" onGenerate={(x)=>{ alert(x) }}>
    <SliderInput
        legend="Input value"
    />
</Dashboard>
```

 [Open interactive preview](https://isle.heinz.cmu.edu/components/dashboard/)

#### Options:

* __onGenerate__:
* __title__: `string` with a title for the dashboard to be displayed at its top. Default: `''`.
* __description__: subtitle `string` displayed beneath the `title`. Default: `''`.
