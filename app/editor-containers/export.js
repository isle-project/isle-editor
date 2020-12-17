// MODULES //

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Loadable from '@isle-project/components/internal/loadable';
import HeaderUpperBar from 'editor-components/header-upper-bar';
const ExportPage = Loadable( () => import( 'editor-components/export-page' ) );
import { convertMarkdown, toggleScrolling, changeNamespace, updateDownloading } from 'actions';


// MAIN //

const Export = ( props ) => {
	const { t } = useTranslation( 'Editor' );
	return (
		<Fragment>
			<HeaderUpperBar
				backToEditor
				title={t('export')}
				updateStatus={props.updateStatus}
				updateInfo={props.updateInfo}
				updateDownloading={props.updateDownloading}
				updateDownloadPercent={props.updateDownloadPercent}
			/>
			<ExportPage
				content={props.markdown}
				filePath={props.filePath}
				fileName={props.fileName}
				namespaceName={props.namespaceName || ''}
				changeNamespace={props.changeNamespace}
			/>
		</Fragment>
	);
};


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
