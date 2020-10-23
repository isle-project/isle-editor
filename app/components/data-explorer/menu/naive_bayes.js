// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniq from 'uniq';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import contains from '@stdlib/assert/contains';
import copy from '@stdlib/utils/copy';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import { DATA_EXPLORER_NAIVE_BAYES } from 'constants/actions.js';
import NaiveBayes from 'components/models/naive-bayes';
import { designMatrix } from 'components/models/naive-bayes/design_matrix.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = '';


// MAIN //

class NaiveBayesMenu extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			y: props.categorical[ 0 ],
			x: props.quantitative[ 0 ],
			omitMissing: false
		};
	}

	compute = () => {
		let { y, x, omitMissing } = this.state;
		const output = <NaiveBayes
			x={x} y={y}
			omitMissing={omitMissing}
			data={this.props.data}
			quantitative={this.props.quantitative}
			categorical={this.props.categorical}
			onPredict={( results, counter ) => {
				const newData = copy( this.props.data, 1 );
				const newQuantitative = this.props.quantitative.slice();
				const { matrix } = designMatrix( x, y, this.props.data, this.props.quantitative );
				const probs = results.predictProbs( matrix );
				for ( let i = 0; i < results.classes.length; i++ ) {
					const name = 'probs_' + results.classes[ i ] + '_bayes' + counter;
					const classProbs = probs.map( x => x[ i ] );
					newData[ name ] = classProbs;
					if ( !contains( newQuantitative, name ) ) {
						newQuantitative.push( name );
					}
				}
				const pred = results.predict( matrix );
				const name = 'pred_bayes'+ counter;
				newData[ name ] = pred;
				const newCategorical = this.props.categorical.slice();
				if ( !contains( newCategorical, name ) ) {
					newCategorical.push( name );
				}
				this.props.onGenerate( newQuantitative, newCategorical, newData );
			}}
		/>;
		this.props.logAction( DATA_EXPLORER_NAIVE_BAYES, {
			y, x, omitMissing
		});
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
					{this.props.t('Naive Bayes')}<QuestionButton title={this.props.t('Naive Bayes')} content={DESCRIPTION} />
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
					<CheckboxInput
						legend={this.props.t('omit-missing')}
						defaultValue={false}
						onChange={( omitMissing ) => this.setState({ omitMissing })}
					/>
					<Button disabled={!x || x.length === 0} variant="primary" block onClick={this.compute}>
						{this.props.t('calculate')}
					</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

NaiveBayesMenu.defaultProps = {
	logAction() {}
};

NaiveBayesMenu.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default NaiveBayesMenu;
