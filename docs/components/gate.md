# Gate

An ISLE component that allows to display its children only to reserved audiences.

#### Example:

``` js
<Gate 
    banner={"<div>You have to be logged in to see the image</div>"}
    user 
>
    <h1>For teachers only</div>
</Gate>
``` 

[Open interactive preview](https://isle.heinz.cmu.edu/components/gate/)

#### Options:

* __anonymous__ | `boolean`: when set the gated content is displayed to anybody. Default: `false`.
* __user__ | `boolean`: when set the gated content is displayed to subscribed users. Default: `false`.
* __enrolled__ | `boolean`: when set the gated content is displayed to the students enrolled in the course. Default: `false`.
* __owner__ | `boolean`: when set the gated content is displayed to the owner of the course (usually the instructor). Default: `false`.
* __banner__ | `node`: a message which is visible to the visitors lacking the gate privilege. Default: `none`.
* __disabled__ | `boolean`: if a gate is disabled, the banner will be displayed no matter what. Default: `false`.
