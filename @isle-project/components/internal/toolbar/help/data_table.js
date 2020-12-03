// MODULES //

import React from 'react';
import Image from '@isle-project/components/image';


// MAIN //

const main = () => {
	return (
		<div>
			<h2 style={{ textAlign: 'center' }}>Data Table</h2>
			<p>A simple way data may be displayed in ISLE is through a Data Table. These appear in the typical format for viewing data, similar to what data look like in an Excel spreadsheet. Each column is a variable with the variable name at the top.</p>

			<div className="centered" style={{ width: 'fit-content' }} ><Image alt="Data Table" src="https://isle.stat.cmu.edu/data-explorers_data_table_student.png" width="400px" height="200px" /></div>

			<p>For a guided tour of the things you can do with data tables, click the Show Tutorial button (the question mark in the upper right of the data table).</p>
		</div>
	);
};


// EXPORTS //

export default main;
