// MODULES //

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExportPage from './../components/ExportPage';
import { convertMarkdown, toggleScrolling } from './../actions';


// EXPORT LESSON //

class Export extends Component {
	render() {
		return (
			<ExportPage content={this.props.markdown} />
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
