// MAIN //

import { connect } from 'react-redux';
import { jumpToElementInEditor, switchWithPrevious, switchWithNext } from 'actions';
import LineButtons from 'app/editor-components/line-buttons';


// EXPORTS //

export default connect( mapStateToProps, {
	jumpToElementInEditor, switchWithPrevious, switchWithNext
})( LineButtons );

function mapStateToProps({ preview, editor }) {
	return {
		...preview,
		splitPos: editor.splitPos
	};
}
