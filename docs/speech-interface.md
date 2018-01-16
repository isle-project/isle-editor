 # The speech interface

To use the speech  interface is fairly simple.
First it consists just of 363 lines of code
 
If you want to make a component speak to  the  speech interface, it first has to register itself.
This can be done with just a few lines of code:

``` js
		global.speechInterface.register({
			name: ['shell', 'console'],
			ref: this,
			commands: [{
				command: 'resetConsole',
				trigger: 'reset'
			}]
		});
```

In this case the JS-Shell gets registered.

The first thing you have to pass to the speech interface is the name by which the component can be identified. It may be either an array of strings or simple string.

There has to be a reference to the  component:
 
 ``` js
 ref: this,
 ```
  
The last thing which is crucial is the  array of commands that you want to pass to the interface.
  
``` js
 			commands: [{
				command: 'resetConsole',
				trigger: 'reset'
			}]
 ```			
			
			
The command parameter stands for the actual name or the  function.		
The **trigger** stands for the key-word by which this function is identified. It may either be a string or an array of strings.


The full code looks like this:

``` js
global.speechInterface.register({
    name: ['shell', 'console'],
    ref: this,
    commands: [{
        command: 'resetConsole',
        trigger: 'reset'
    }]
});
 ```

To trigger the speech interface we just need a voice input tool. it could be written like this:	 

``` js
<VoiceInput 
    onFinalText = { ( data ) => {
        speechInterface.check( data);
    />
```
