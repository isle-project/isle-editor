// MODULES //

import React from 'react';
import Image from 'components/image';


// MAIN //

const main = () => {
	return (
		<div>
			<h2 style={{ textAlign: 'center' }}>Data Explorer</h2>
			<p>The ISLE data explorer allows you to analyze datasets using a point-and-click interface. The data explorer is split into two panes, a left-hand pane where you can toggle between a spreadsheet view of the data to be analyzed and other optional components such as a report writing editor or a list of questions. The right-hand side is an output pane that contains all the output (summary statistics, plots, results of hypothesis test) that you have created.</p>

			<div className="centered" style={{ width: 'fit-content' }} ><Image alt="Explorer View" src="https://isle.heinz.cmu.edu/paris21_data_explorer_view.jpg" width="400px" height="200px" /></div>

			<p>New outputs can be generated via the toolbox, which can be opened by clicking on the &quot;Show Toolbox&quot; button. A newly generated plot or table will be appended to the list of output elements show on the right-hand side:</p>

			<div className="centered" style={{ width: 'fit-content' }} ><Image className="centered" alt="Explorer Output" src="https://isle.heinz.cmu.edu/paris21_data_explorer_outputs.jpg" width="400px" height="200px" /></div>

			<p>The red buttons with the &quot;x&quot; icons can be used to delete individual output elements, whereas the &quot;Clear All&quot; button at the bottom will remove all output elements.</p>

			<p>Using the buttons with a question mark on the data spreadsheet, report editor, or the toolbox will allow you to start a guided tour through the capabilities of the different pieces.</p>
		</div>
	);
};


// EXPORTS //

export default main;
