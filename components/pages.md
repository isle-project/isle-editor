# Pages

An ISLE pagination component that allows the user to step through a sequence of pages.

#### Example:

``` js
<Pages title="Pages">
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
        <RShell />
    </div>
</Pages>
``` 

[Open interactive preview](https://isle.heinz.cmu.edu/components/pages/)

#### Options:

* __height__: the maximum height of the container. If an embedded page is taller, a vertical scrollbar is added
* __onSelect__: Function invoked when active change is changed. Receives the new active page index as a parameter.
* __title__: displayed title of the pages container
