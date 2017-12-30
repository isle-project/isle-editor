
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import yaml from 'js-yaml';
import NotificationSystem from 'react-notification-system';
import Provider from 'components/provider';
global[ 'heartdisease' ] = require( '/Users/fkovacs/Documents/School Files/Carnegie Mellon University/Academics/TA/Lab Development/isle-component-playground/data-explorer/heartdisease.json' );

const preamble = yaml.load(`
title: "Data Explorer"
author: Francis R. Kovacs 
date: Dec 30th, 2017
require:
    heartdisease: "./heartdisease.json"
state:
    showModal: true
server: https://isle.heinz.cmu.edu
hideToolbar: true
`);const Session = require( '/Users/fkovacs/Documents/School Files/Carnegie Mellon University/Academics/TA/Lab Development/isle-editor/app/session' );const DataExplorer = require( "components/data-explorer" )
const Playground = require( "components/playground" )
const VictoryTheme = require( "victory" ).VictoryTheme
global.session = new Session( preamble );

class Lesson extends Component {
	constructor() {
		super();
		this.state = preamble.state || {};
	}

	componentDidMount() {
		global.lesson = this;
		const loader = document.getElementById( 'loading' );
		if ( loader ) {
			loader.remove();
		}
	}

	componentWillUnmount() {
		this.unmounted = true;
	}

	render() {
		return (
			<div id="Lesson" className="Lesson" >
				<div><h1>Data Explorer.</h1>
<br />
<Playground 
    style={{
        marginLeft: 0,
        width: '1000px'
    }}
    code={`
    <DataExplorer 
        id="heartdisease"
	    data={heartdisease} 
	    categorical={['Gender','Drugs','Complications']}
	    continuous={['Cost','Age','Interventions','ERVisit','Comorbidities','Duration']}
	    tests={[]}
    />

`}
    scope={{
        DataExplorer 
    }}
/>
<h4>Options</h4>
<ul>
<li><strong>data</strong>: The name of the .json dataset that will be used in the explorer</li>
<li><strong>onSelect</strong>: A function to be passed.</li>
<li><strong>tabs</strong>:</li>
<li><strong>Questions</strong>: Questions to be asked of the dataset. May also be embedded in a question object independent of the data explorer apparatus.</li>
<li><strong>transformer</strong>: A bool value indicating whether a transformation is to be applied to a variable.</li>
<li><strong>statistics</strong>: Relevant statistical operations that can be applied to data, such as &quot;mean&quot; or &quot;correlation&quot;. The following operations are enabled by default:<br />
-- Mean<br />
-- Median<br />
-- Min<br />
-- Max<br />
-- Interquartile Range<br />
-- Standard Deviation<br />
-- Variance<br />
-- Correlation</li>
<li><strong>plots</strong>: Specification of which plots may be produced by the explorer. The following may be used and are enabled by default:<br />
-- Bar Chart<br />
-- Pie Chart<br />
-- Histogram<br />
-- Box Plot<br />
-- Scatterplot<br />
-- Heat Map<br />
-- Mosaic Plot</li>
<li><strong>tables</strong>: Two-way tables that may be compiled from the data. One maty choose either (or both) of the following options: Frequency Table, Contingency Table</li>
<li><strong>tests</strong>: Statistical tests that may be applied to the data. Must be some combination of the following, all of which are enabled by default:<br />
-- One-Sample Mean Test<br />
-- One-Sample Proportion Test<br />
-- Two-Sample Mean Test<br />
-- Two-Sample Proportion Test<br />
-- Correlation Test<br />
-- Chi-squared Independence Test<br />
-- One-Way ANOVA</li>
<li><strong>models</strong>: Modelling paradigms to be used in creating models from the variables presented. Currently this functionality is limited to &quot;Simple Linear Regression&quot; (which is enabled by default), yet will be extended in the future.</li>
<li><strong>categorical</strong>: An array of string variables that represent the categorical variables in a dataset.</li>
<li><strong>continuous</strong>: An array of string variables that represent the continuous variables in a dataset.</li>
<li><strong>distributions</strong>: Distributions that may be used in calculating probabilities. This functionality exists independently of the dataset provided. Currently limited to normal, uniform and exponential distributions.</li>
</ul>
</div>
				<NotificationSystem ref={ ( div ) => this.notificationSystem = div } allowHTML={true} />
			</div>
		);
	}
}

render(
	<Provider session={session} >
		<Lesson />
	</Provider>,
	document.getElementById( 'App' )
);