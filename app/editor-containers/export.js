// MODULES //

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loadable from 'components/internal/loadable';
import HeaderUpperBar from 'editor-components/header-upper-bar';
const ExportPage = Loadable( () => import( 'editor-components/export-page' ) );
import { convertMarkdown, toggleScrolling, changeNamespace, updateDownloading } from 'actions';


// MAIN //

class Export extends Component {
	render() {
		return (
			<Fragment>
				<HeaderUpperBar
					backToEditor
					title="Export"
					updateStatus={this.props.updateStatus}
					updateInfo={this.props.updateInfo}
					updateDownloading={this.props.updateDownloading}
					updateDownloadPercent={this.props.updateDownloadPercent}
				/>
				<ExportPage
					content={this.props.markdown}
					filePath={this.props.filePath}
					fileName={this.props.fileName}
					namespaceName={this.props.namespaceName || ''}
					changeNamespace={this.props.changeNamespace}
				/>
			</Fragment>
		);
	}
}


// PROPERTIES //

Export.propTypes = {
	changeNamespace: PropTypes.func,
	fileName: PropTypes.string,
	filePath: PropTypes.string,
	markdown: PropTypes.string,
	namespaceName: PropTypes.string,
	updateDownloading: PropTypes.func.isRequired,
	updateDownloadPercent: PropTypes.number,
	updateInfo: PropTypes.object,
	updateStatus: PropTypes.string
};

Export.defaultProps = {
	changeNamespace() {},
	fileName: null,
	filePath: null,
	markdown: '',
	namespaceName: null,
	updateDownloadPercent: null,
	updateInfo: null,
	updateStatus: null
};


// EXPORTS //

export default connect( mapStateToProps, {
	convertMarkdown,
	toggleScrolling,
	changeNamespace,
	updateDownloading
})( Export );

function mapStateToProps({ editor, updater }) {
	return {
		...editor,
		...updater
	};
}
