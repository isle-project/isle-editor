// MODULES //

import React, { Component } from 'react';
import Gate from 'components/gate';


// MAIN //

class InstructorBar extends Component {
	render() {
		return ( <Gate owner>
			<label>Component ID:</label>
			<span style={{ marginLeft: '5px' }}>{this.props.id}</span>
		</Gate> );
	}
}


// EXPORTS //

export default InstructorBar;
