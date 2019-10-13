// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniq from 'uniq';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import ndarray from '@stdlib/ndarray/array';
import contains from '@stdlib/assert/contains';
import copy from '@stdlib/utils/copy';
import isArray from '@stdlib/assert/is-array';
import roundn from '@stdlib/math/base/special/roundn';
import TextInput from 'components/input/text';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import { DATA_EXPLORER_LOGISTIC_REGRESSION } from 'constants/actions.js';
import subtract from 'utils/subtract';
import mmult from 'utils/mmult';
import QuestionButton from './question_button.js';
import irls from './glm/logistic_regression.js';


// VARIABLES //

const DESCRIPTION = 'Predict a categorical response variable using one or more explanatory variables.';


// FUNCTIONS //

const summaryTable = ( x, intercept, result ) => {
	return (
		<Table bordered size="sm">
			<thead>
				<tr>
					<th>Predictor</th>
					<th>Coefficient</th>
				</tr>
			</thead>
			<tbody>
				{ intercept ? <tr>
					<th>Intercept</th>
					<td>{result.coefficients[ 0 ].toFixed( 6 )}</td>
				</tr> : null }
				{x.map( ( name, idx ) => {
					return (
						<tr key={idx} >
							<th>{name}</th>
							<td>{result.coefficients[ idx+Number(intercept) ].toFixed( 6 )}</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};

function sigmoid( x ) {
	const result = new Array( x.length );
	for ( let i = 0; i < x.length; i++) {
		result[ i ]= 1 / (1 + Math.exp(-x[i]) );
	}
	return result;
}

function predict( X, coefs ) {
	const finalData = mmult( X, coefs );
	const predictions = sigmoid( finalData );
	return predictions;
}


// MAIN //

class LogisticRegression extends Component {
	constructor( props ) {
		super( props );

		let categories;
		let y;
		let success;
		if ( isArray( props.categorical ) && props.categorical.length > 0 ) {
			y = props.categorical[ 0 ];
			if ( y.categories ) {
				categories = y.categories;
			} else {
				categories = props.data[ y ].slice();
				uniq( categories );
			}
			success = categories[ categories.length-1 ];
		} else {
			categories = [];
			success = null;
		}
		this.state = {
			categories,
			y,
			success,
			x: props.quantitative[ 0 ],
			intercept: true,
			attach: false
		};
	}

	compute = () => {
		let { y, success, x, intercept, attach } = this.state;
		const yvalues = this.props.data[ y ].map( v => {
			return v === success ? 1 : 0;
		});
		const n = yvalues.length;
		if ( !isArray( x ) ) {
			x = [ x ];
		}
		let matrix = [];
		const predictors = [];
		const hash = {};
		for ( let j = 0; j < x.length; j++ ) {
			const values = this.props.data[ x[ j ] ];
			if ( contains( this.props.quantitative, x[ j ] ) ) {
				predictors.push( x[ j ] );
			} else {
				const categories = x[ j ].categories || uniq( values.slice() );
				for ( let k = intercept ? 1 : 0; k < categories.length; k++ ) {
					predictors.push( `${x[ j ]}_${categories[ k ]}` );
				}
				hash[ x[ j ] ] = categories;
			}
		}
		for ( let i = 0; i < n; i++ ) {
			const row = [];
			if ( intercept ) {
				row.push( 1 );
			}
			for ( let j = 0; j < x.length; j++ ) {
				const values = this.props.data[ x[ j ] ];
				if ( contains( this.props.quantitative, x[ j ] ) ) {
					row.push( values[ i ] );
				} else {
					const categories = hash[ x[ j ] ];
					const val = values[ i ];
					for ( let k = intercept ? 1 : 0; k < categories.length; k++ ) {
						row.push( ( val === categories[ k ] ) ? 1 : 0 );
					}
				}
			}
			matrix.push( row );
		}
		matrix = ndarray( matrix );

		const results = irls( matrix, yvalues, n );

		if ( attach ) {
			const newData = copy( this.props.data, 1 );
			const newQuantitative = this.props.quantitative.slice();
			const suffix = x.map( x => x[ 0 ] ).join( '' );
			let name = y+'_pred_logis_' + suffix;
			const yhat = predict( matrix, results.coefficients );
			newData[ name ] = yhat;
			if ( !contains( newQuantitative, name ) ) {
				newQuantitative.push( name );
			}
			name = y+'_resid_logis_' + suffix;
			newData[ name ] = subtract( yhat, this.props.data[ y ] );
			if ( !contains( newQuantitative, name ) ) {
				newQuantitative.push( name );
			}
			this.props.onGenerate( newQuantitative, newData );
		}

		this.props.logAction( DATA_EXPLORER_LOGISTIC_REGRESSION, {
			y, x, intercept
		});
		const output = {
			variable: 'Regression Summary',
			type: 'Logistic Regression',
			value: <div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >Regression Summary for Response {y}</span>
				{summaryTable( predictors, intercept, results )}
				<i>The algorithm converged after {results.iterations} iterations</i>
				<p>Akaike Information Criterion (AIC): {roundn( results.aic, -3 )}</p>
			</div>
		};
		this.props.onCreated( output );
	}

	render() {
		const { categorical, quantitative, data } = this.props;
		const { x, y, categories, success, attach, intercept } = this.state;
		return (
			<Card
				style={{ fontSize: '14px' }}
			>
				<Card.Header as="h4">
					Logistic Regression<QuestionButton title="Logistic Regression" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<Row>
						<Col md={6}>
							<SelectInput
								legend="Outcome (Y):"
								options={categorical}
								defaultValue={y}
								onChange={( y ) => {
									const categories = data[ y ].slice();
									uniq( categories );
									this.setState({
										categories,
										success: categories[ categories.length-1 ],
										y
									});
								}}
							/>
						</Col>
						<Col md={6}>
							<SelectInput
								legend="Success (Y = 1):"
								defaultValue={success}
								options={categories}
								onChange={( value ) => {
									this.setState({
										success: value
									});
								}}
							/>
						</Col>
					</Row>
					<SelectInput
						legend="Predictors (X):" multi
						options={quantitative.concat( categorical )}
						defaultValue={x || ''}
						onChange={( x ) => this.setState({ x })}
					/>
					<CheckboxInput
						legend="Include intercept?"
						defaultValue={intercept}
						onChange={( intercept ) => this.setState({ intercept })}
					/>
					<CheckboxInput
						legend="Attach predictions and residuals to data table?"
						defaultValue={attach}
						onChange={( attach ) => this.setState({ attach })}
					/>
					<Button disabled={!x || x.length === 0} variant="primary" block onClick={this.compute}>Calculate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

LogisticRegression.defaultProps = {
	logAction() {}
};

LogisticRegression.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default LogisticRegression;
