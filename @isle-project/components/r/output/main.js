// MODULES //

import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import Spinner from '@isle-project/components/internal/spinner';
import createPrependCode from '@isle-project/components/r/utils/create-prepend-code';
import SessionContext from '@isle-project/session/context.js';
import { withPropCheck } from '@isle-project/utils/prop-check';


// FUNCTIONS //

const showResult = ( res ) => {
	if ( res ) {
		let sanitized = {
			__html: DOMPurify.sanitize( res )
		};
		// eslint-disable-next-line react/no-danger
		return <pre id="output"><span dangerouslySetInnerHTML={sanitized} /></pre>;
	}
	return <span />;
};


// MAIN //

/**
* Component for rendering R output inside an ISLE lesson.
*
* @property {string} code - R code used to evaluate
* @property {Array<string>} libraries - R libraries that should be loaded automatically when the input `code` is executed
* @property {(string|Array<string>)} prependCode - R code (or `array` of code blocks) to be prepended to the code stored in `code` when evaluating
* @property {Function} onResult - callback invoked with `error` (`null` if operation was successful) and `result` holding R output
* @property {Function} onPlots - callback invoked with any generated plots
*/
const ROutput = ({ code, libraries, prependCode, onResult, onPlots }) => {
	const [ result, setResult ] = useState( null );
	const [ running, setRunning ] = useState( false );
	const session = useContext( SessionContext );
	useEffect( () => {
		setRunning( true );
		const prepended = createPrependCode( libraries, prependCode, session );
		const fullCode = prepended + code;
		session.executeRCode({
			code: fullCode,
			onError: ( error ) => {
				setResult( error );
				setRunning( false );
				onResult( error );
			},
			onPlots: onPlots,
			onResult: ( err, res, body ) => {
				setResult( body );
				setRunning( false );
				onResult( err, body );
			}
		});
	}, [ code, libraries, onPlots, onResult, prependCode, session ] );
	return (
		<span className="ROutput">
			{ result ?
				<div
					style={{
						marginLeft: 'auto',
						marginRight: 'auto',
						marginTop: '10px',
						marginBottom: '10px'
					}}
				>
					<Spinner
						width={128}
						height={64}
						style={{
							marginTop: '8px',
							marginBottom: '-12px'
						}}
						running={running}
					/>
					{ !running ?
						showResult( result ) :
						<span />
					}
				</div> :
				<span />
			}
		</span>
	);
};


// PROPERTIES //

ROutput.propTypes = {
	code: PropTypes.string,
	libraries: PropTypes.array,
	prependCode: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	]),
	onPlots: PropTypes.func,
	onResult: PropTypes.func
};

ROutput.defaultProps = {
	code: '',
	libraries: [],
	prependCode: '',
	onPlots() {},
	onResult() {}
};


// EXPORTS //

export default withPropCheck( ROutput );
