// MODULES //

import PropTypes from 'prop-types';
import TeX from '@isle-project/components/tex';


// MAIN //

const ProbabilityTableLabels = ({ A, B }) => ( <table className="table-bordered">
	<tbody>
		<tr>
			<th></th>
			<th> {B} </th>
			<th>not {B} </th>
		</tr>
		<tr>
			<th> {A} </th>
			<td><TeX raw={`P(\\text{${A}} \\cap \\text{${B}} )`} /></td>
			<td><TeX raw={`P(\\text{${A}} \\cap \\text{${B}}^C )`} /></td>
			<td><TeX raw={`P(\\text{${A}})`} /></td>
		</tr>
		<tr>
			<th>not {A}</th>
			<td><TeX raw={`P(\\text{${A}}^C \\cap \\text{${B}} )`} /></td>
			<td><TeX raw={`P(\\text{${A}} \\cap \\text{${B}} )`} /></td>
			<td><TeX raw={`P(\\text{${A}}^c)`} /></td>
		</tr>
		<tr>
			<th></th>
			<td><TeX raw={`P( \\text{${B}} )`} /></td>
			<td><TeX raw={`P(\\text{${B}}^c)`} /></td><td><TeX raw="P(\Omega)" /></td>
		</tr>
	</tbody>
</table> );


// PROPERTIES //

ProbabilityTableLabels.propTypes = {
	A: PropTypes.string.isRequired,
	B: PropTypes.string.isRequired
};


// EXPORTS //

export default ProbabilityTableLabels;
