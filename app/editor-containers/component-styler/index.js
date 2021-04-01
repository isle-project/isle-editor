// MODULES //

import { connect } from 'react-redux';
import { appendCSSToPreamble } from 'actions';
import ComponentStyler from 'editor-components/component-styler';


// EXPORTS //

export default connect( mapStateToProps, {
	appendCSSToPreamble
})( ComponentStyler );

function mapStateToProps() {
	return {};
}
