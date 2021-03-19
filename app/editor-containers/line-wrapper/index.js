// MODULES //

import { connect } from 'react-redux';
import { jumpToElementInEditor, switchWithNext, switchWithPrevious, toggleConfigurator } from 'actions';
import LineWrapper from 'app/editor-components/line-wrapper';


// EXPORTS //

export default connect( mapStateToProps, {
	jumpToElementInEditor, switchWithNext, switchWithPrevious, toggleConfigurator
})( LineWrapper );

function mapStateToProps({ editor }) {
	return {
		splitPos: editor.splitPos,
		horizontalSplit: editor.horizontalSplit,
		hideToolbar: editor.hideToolbar
	};
}
