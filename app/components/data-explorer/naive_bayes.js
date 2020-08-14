// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniq from 'uniq';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'components/table';
import ndarray from '@stdlib/ndarray/array';
import contains from '@stdlib/assert/contains';
import copy from '@stdlib/utils/copy';
import isArray from '@stdlib/assert/is-array';
import exp from '@stdlib/math/base/special/exp';
import SelectInput from 'components/input/select';
import Tooltip from 'components/tooltip';
import { DATA_EXPLORER_NAIVE_BAYES } from 'constants/actions.js';
import QuestionButton from './question_button.js';
import { gaussian } from './naive-bayes';


// VARIABLES //

const DESCRIPTION = '';
let COUNTER = 0;


// FUNCTIONS //

function designMatrix( x, data, quantitative ) {
	let matrix = [];
	const predictors = [];
	const hash = {};
	for ( let j = 0; j < x.length; j++ ) {
		const values = data[ x[ j ] ];
		if ( contains( quantitative, x[ j ] ) ) {
			predictors.push( x[ j ] );
		} else {
			const categories = x[ j ].categories || uniq( values.slice() );
			for ( let k = 0; k < categories.length; k++ ) {
				predictors.push( `${x[ j ]}_${categories[ k ]}` );
			}
			hash[ x[ j ] ] = categories;
		}
	}
	const nobs = data[ x[ 0 ] ].length;
	for ( let i = 0; i < nobs; i++ ) {
		const row = [];
		for ( let j = 0; j < x.length; j++ ) {
			const values = data[ x[ j ] ];
			if ( contains( quantitative, x[ j ] ) ) {
				row.push( values[ i ] );
			} else {
				const categories = hash[ x[ j ] ];
				const val = values[ i ];
				for ( let k = 0; k < categories.length; k++ ) {
					row.push( ( val === categories[ k ] ) ? 1 : 0 );
				}
			}
		}
		matrix.push( row );
	}
	matrix = ndarray( matrix );
	return { matrix, predictors };
}

const summaryTable = ( predictors, result, quantitative ) => {
	return (
		<div>
			<span className="title">A-priori probabilities:</span>
			<Table bordered size="sm">
				<thead>
					<tr>
						{result.classes.map( ( x, i ) => <th key={i}>{x}</th>)}
					</tr>
				</thead>
				<tbody>
					<tr>
						{result.classes.map( ( x, i ) => <th key={i}>{exp(result.prior[ x ]).toFixed( 3 )}</th>)}
					</tr>
				</tbody>
			</Table>
			<span className="title">Conditionals:</span>
			{predictors.map( ( pred, i ) => {
				if ( contains( quantitative, pred ) ) {
					return ( <Table bordered size="sm" key={i} >
						<thead>
							<tr>
								<th>{pred}</th>
								{result.classes.map( ( x, i ) => <th key={i}>{x}</th>)}
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>Mean</th>
								{result.classes.map( ( _, j ) => {
									return <td key={`${i}-${j}`}>{result.mu.get( i, j ).toFixed( 6 )}</td>;
								})}
							</tr>
							<tr>
								<th>SD</th>
								{result.classes.map( ( _, j ) => {
									return <td key={`${i}-${j}`}>{result.sigma.get( i, j ).toFixed( 6 )}</td>;
								})}
							</tr>
						</tbody>
					</Table> );
				}
				return ( <Table bordered size="sm" key={i} >
					<thead>
						<tr>
							<th>{pred}</th>
							{result.classes.map( ( x, i ) => <th key={i}>{x}</th>)}
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Yes</th>
							{result.classes.map( ( _, j ) => {
								return <td key={`${i}-${j}`}>{result.mu.get( i, j ).toFixed( 3 )}</td>;
							})}
						</tr>
						<tr>
							<th>No</th>
							{result.classes.map( ( _, j ) => {
								return <td key={`${i}-${j}`}>{(1-result.mu.get( i, j )).toFixed( 3 )}</td>;
							})}
						</tr>
					</tbody>
				</Table> );
			})}
		</div>
	);
};


// MAIN //

class NaiveBayes extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			y: props.categorical[ 0 ],
			x: props.quantitative[ 0 ]
		};
	}

	compute = () => {
		COUNTER += 1;
		let { y, x } = this.state;
		const yvalues = this.props.data[ y ];
		if ( !isArray( x ) ) {
			x = [ x ];
		}
		const { matrix, predictors } = designMatrix( x, this.props.data, this.props.quantitative );
		const results = gaussian( matrix, yvalues );

		this.props.logAction( DATA_EXPLORER_NAIVE_BAYES, {
			y, x
		});
		const output = {
			variable: ' Summary',
			type: 'Naive Bayes',
			value: <div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >Naive Bayes for Response {y} (model id: bayes{COUNTER})</span>
				{summaryTable( predictors, results, this.props.quantitative )}
				<Tooltip tooltip="Predictions and residuals will be attached to data table">
					<Button variant="secondary" size="sm" onClick={() => {
						const newData = copy( this.props.data, 1 );
						const newQuantitative = this.props.quantitative.slice();
						const { matrix } = designMatrix( x, this.props.data, this.props.quantitative );
						const probs = results.predictProbs( matrix );
						for ( let i = 0; i < results.classes.length; i++ ) {
							const name = 'probs_' + results.classes[ i ] + '_bayes' + COUNTER;
							const classProbs = probs.map( x => x[ i ] );
							newData[ name ] = classProbs;
							if ( !contains( newQuantitative, name ) ) {
								newQuantitative.push( name );
							}
						}
						const pred = results.predict( matrix );
						const name = 'pred_bayes'+ COUNTER;
						newData[ name ] = pred;
						const newCategorical = this.props.categorical.slice();
						if ( !contains( newCategorical, name ) ) {
							newCategorical.push( name );
						}
						this.props.onGenerate( newQuantitative, newCategorical, newData );
					}}>Use this model to predict for currently selected data</Button>
				</Tooltip>
			</div>
		};
		this.props.onCreated( output );
	}

	render() {
		const { categorical, quantitative } = this.props;
		const { x, y } = this.state;
		return (
			<Card
				style={{ fontSize: '14px' }}
			>
				<Card.Header as="h4">
					Naive Bayes<QuestionButton title="Naive Bayes" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<SelectInput
						legend="Outcome (Y):"
						options={categorical}
						defaultValue={y}
						onChange={( y ) => this.setState({ y })}
					/>
					<SelectInput
						legend="Predictors (X):" multi
						options={uniq( quantitative.concat( categorical ) )}
						defaultValue={x || ''}
						onChange={( x ) => this.setState({ x })}
					/>
					<Button disabled={!x || x.length === 0} variant="primary" block onClick={this.compute}>Calculate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

NaiveBayes.defaultProps = {
	logAction() {}
};

NaiveBayes.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default NaiveBayes;
