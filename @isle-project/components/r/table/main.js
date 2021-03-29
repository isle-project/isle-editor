// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataTable from '@isle-project/components/data-table';
import Spinner from '@isle-project/components/internal/spinner';
import createPrependCode from '@isle-project/components/r/utils/create-prepend-code';
import SessionContext from '@isle-project/session/context.js';
import { addResources } from '@isle-project/locales';
import { withPropCheck } from '@isle-project/utils/prop-check';


// VARIABLES //

addResources( 'R' );
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
class RTable extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			data: null,
			last: '',
			waiting: false
		};
	}

	componentDidMount() {
		this.getTable();
	}

	componentDidUpdate() {
		this.getTable( this.props );
	}

	getTable = ( nextProps ) => {
		let code;
		if ( nextProps ) {
			code = nextProps.code;
		} else {
			code = this.props.code;
		}
		if ( code !== this.state.last ) {
			this.setState({
				waiting: true,
				last: this.props.code
			});
			const session = this.context;
			let { libraries, prependCode } = this.props;
			let jsonCode = 'library( jsonlite );\n';
			prependCode = createPrependCode( libraries, prependCode, session );

			jsonCode = jsonCode +
				prependCode +
				code.replace( RE_LAST_EXPRESSION, '\n toJSON($1)' );

			session.executeRCode({
				code: jsonCode,
				onResult: ( err, res, body ) => {
					this.setState({
						data: body,
						waiting: false
					});
				}
			});
		}
	}

	render() {
		const props = this.props;
		return (
			<div className="rtable" >
				<Spinner running={this.state.waiting} width={256} height={128} />
				{ this.state.data && !this.state.waiting ?
					<DataTable data={this.state.data} style={{
						marginTop: '10px',
						marginBottom: '10px',
						...props.style
					}} /> :
					<span />
				}
			</div>
		);
	}
}


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

RTable.contextType = SessionContext;


// EXPORTS //

export default withPropCheck( RTable );
