# JS-Shell

Die JS-Shell funktioniert (vom Interface hwer betrachtet) wie die R-Shell

``` js
<JSShell id = "jseditor35" 
        code = "var b = 22;"
        hints = { ['Denken Sie daran: Gesagt getan!', 'also: var a = 17;'] }
        
        solution = { 'var res = [1,2,3,4]'}

        chat
        
        check = "( function() { if (b === 22) alert('BRAVO'); console.log('Aufgabe gelöst'); })();" >
</JSShell>
```

Man kann Hints geben, eine Lösung, sowie einen Chat hinzufügen.

Ein Novum: Man kann eine **Check** Funtion einfügen, die dem User-Code angehänt wird und diesen evaluiert.