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

* __anonymous__: when set the gated content is displayed to anybody
* __user__: when set the gated content is displayed to subscribed users.
* __enrolled__: when set the gated content is displayed to the students enrolled in the course
* __owner__: when set the gated content is displayed to the owner of the course (usually the instructor)
* __banner__: a message which is visible to the visitors lacking the gate privilege
