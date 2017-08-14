// MODULES //

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExportPage from 'components/ExportPage';
import { convertMarkdown, toggleScrolling } from 'actions';


// MAIN //

class Export extends Component {
	render() {
		return (
			<ExportPage
				content={this.props.markdown}
				filePath={this.props.filePath}
				fileName={this.props.fileName}
			/>
		);
	}
}


// EXPORTS //

export default connect( mapStateToProps, {
	convertMarkdown,
	toggleScrolling
})( Export );

function mapStateToProps({ markdown }) {
	return markdown;
}
