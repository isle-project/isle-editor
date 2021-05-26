// MODULES //

import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DataTable from '@isle-project/components/data-table';
import Spinner from '@isle-project/components/internal/spinner';
import createPrependCode from '@isle-project/components/r/utils/create-prepend-code';
import SessionContext from '@isle-project/session/context.js';
import { withPropCheck } from '@isle-project/utils/prop-check';


// VARIABLES //

const RE_LAST_EXPRESSION = /(?:\n\s*|^)([ A-Z0-9._():=]+)\n*$/i;


// MAIN //

/**
* Component for rendering a R data frame or matrix in a tabular display.
*
* @property {string} code - R code returning a data.frame containing the data to be displayed in the table
* @property {Array<string>} libraries - R libraries that should be loaded automatically when the input `code` is executed
* @property {(string|Array<string>)} prependCode - R code `string` (or `array` of R code blocks) to be prepended to the code stored in `code` when evaluating
* @property {Object} style - CSS inline styles
*/
const RTable = ({ code, libraries, prependCode, style } ) => {
	const [ data, setData ] = useState( null );
	const [ waiting, setWaiting ] = useState( false );
	const session = useContext( SessionContext );

	useEffect( () => {
		setWaiting( true );
		let jsonCode = 'library( jsonlite );\n';
		const prepended = createPrependCode( libraries, prependCode, session );
		jsonCode = jsonCode +
			prepended +
			code.replace( RE_LAST_EXPRESSION, '\n toJSON($1)' );
		session.executeRCode({
			code: jsonCode,
			onResult: ( err, res, body ) => {
				setData( body );
				setWaiting( false );
			}
		});
	}, [ code, libraries, prependCode, session ] );
	return (
		<div className="rtable" >
			<Spinner running={waiting} width={256} height={128} />
			{ data && !waiting ?
				<DataTable data={data} style={{
					marginTop: '10px',
					marginBottom: '10px',
					...style
				}} /> :
				<span />
			}
		</div>
	);
};


// PROPERTIES //

RTable.propTypes = {
	code: PropTypes.string,
	libraries: PropTypes.array,
	prependCode: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	]),
	style: PropTypes.object
};

RTable.defaultProps = {
	code: '',
	libraries: [],
	prependCode: '',
	style: {}
};


// EXPORTS //

export default withPropCheck( RTable );
