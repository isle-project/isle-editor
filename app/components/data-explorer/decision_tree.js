// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import copy from '@stdlib/utils/copy';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import { DATA_EXPLORER_DECISION_TREE_CLASSIFIER } from 'constants/actions.js';
import subtract from 'utils/subtract';
import QuestionButton from './question_button.js';
import { RegressionTree, ClassificationTree, TreePlot } from './tree';


// VARIABLES //

const DESCRIPTION = '';


// MAIN //

class DecisionTree extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			y: props.categorical[ 0 ],
			x: props.quantitative[ 0 ],
			attach: false,
			type: 'Classification'
		};
	}

	compute = () => {
		let { y, x, attach, type } = this.state;

		let predictors;
		if ( isArray( x ) ) {
			predictors = x;
		} else {
			predictors = [ x ];
		}

		let tree;
		if ( type === 'Classification' ) {
			tree = new ClassificationTree({
				response: y,
				predictors,
				data: this.props.data,
				quantitative: this.props.quantitative,
				criterion: 'gini'
			});
		} else {
			tree = new RegressionTree({
				response: y,
				predictors,
				data: this.props.data,
				quantitative: this.props.quantitative,
				criterion: 'gini'
			});
		}

		if ( attach ) {
			const newData = copy( this.props.data, 1 );
			const newQuantitative = this.props.quantitative.slice();
			const suffix = x.map( x => x[ 0 ] ).join( '' );
			let name = y+'_pred_tree_' + suffix;
			const yhat = tree.predict( newData );
			newData[ name ] = yhat;
			if ( !contains( newQuantitative, name ) ) {
				newQuantitative.push( name );
			}
			name = y+'_resid_tree_' + suffix;
			newData[ name ] = subtract( yhat, this.props.data[ y ] );
			if ( !contains( newQuantitative, name ) ) {
				newQuantitative.push( name );
			}
			this.props.onGenerate( newQuantitative, newData );
		}

		this.props.logAction( DATA_EXPLORER_DECISION_TREE_CLASSIFIER, {
			y, x
		});
		const output = {
			variable: 'Decision Tree',
			type: 'Decision Tree',
			value: <div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >Decision Tree for {y}</span>
				<TreePlot tree={tree.root} />
			</div>
		};
		this.props.onCreated( output );
	}

	render() {
		const { categorical, quantitative } = this.props;
		const { x, y, type, attach } = this.state;
		return (
			<Card
				style={{ fontSize: '14px' }}
			>
				<Card.Header as="h4">
					Decision Tree<QuestionButton title="Decision Tree" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<SelectInput
						legend="Type"
						options={[ 'Classification', 'Regression' ]}
						defaultValue={type}
						onChange={( type ) => {
							if ( type !== this.state.type ) {
								this.setState({
									type,
									y: type === 'Classification' ? categorical[ 0 ] : quantitative[ 0 ]
								});
							}
						}}
					/>
					<SelectInput
						legend="Outcome (Y):"
						options={type === 'Classification' ? categorical : quantitative}
						defaultValue={y}
						onChange={( y ) => this.setState({ y })}
					/>
					<SelectInput
						legend="Predictors (X):" multi
						options={quantitative.concat( categorical )}
						defaultValue={x || ''}
						onChange={( x ) => this.setState({ x })}
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

DecisionTree.defaultProps = {
	logAction() {}
};

DecisionTree.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default DecisionTree;
