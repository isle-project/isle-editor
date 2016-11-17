# Building a first ISLE lesson

Let us start creating a little ISLE lesson. We can use Markdown 
to simplify writing of text segments. 

Below the preamble, we will insert a header and a little description:

``` markdown 
# Examples

This lesson will contain some examples 
of interactive *ISLE* components.
```

Let's now look at the `R Shell` component, which allows the evaluation of R code.

``` html
## RShell

<RShell />
```

Try out evaluating some R code in the life preview. ISLE components have each a variety
of attributes, which can be controlled and govern their functionality and appearance.
We can set the default code and the number of lines for the R shell as follows:

``` html
<RShell code="# Insert default code here..." lines={4} />
```

Let us now use the R Shell to create a little exercise:

``` html
### Create 100 random draws from a Uniform(0,1) distribution

<RShell 
	hints={["Use the runif function"]} 
	solution="runif(100)" 
/>
```

When adding `solution` or `hints`, new buttons appear on the R Shell, 
which allow users to access the hints and compare their answers to the supplied solutions.

Let's now intercept the answer of the learner and provide a notification in case
it is correct.

``` html
### Create 100 random draws from a Uniform(0,1) distribution

<RShell 
	hints={["Use the runif function"]} 
	solution="runif(100)" 
	onEvaluate={ ( str ) => { 
		if ( /runif\(100/.test( str ) ) {
			this.addNotification({
				title: 'Correct.',
				message: 'Your answer is correct!',
				level: 'success',
				position: 'tr'
			});
		} else {
			this.addNotification({
				title: 'Incorrect.',
				message: 'Your answer is incorrect!',
				level: 'warning',
				position: 'tr'
			});			
		}
	}}
/>
```

The `addNotification` method of the lesson comes from the [react-notification-system](https://github.com/igorprado/react-notification-system).

There are many other ISLE components to use. The `ISLE Components` section of the documentation
contains examples for all of them along with detailed descriptions of their APIs.
