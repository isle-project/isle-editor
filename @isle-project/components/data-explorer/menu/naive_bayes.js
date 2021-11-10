// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniq from 'uniq';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SelectInput from '@isle-project/components/input/select';
import CheckboxInput from '@isle-project/components/input/checkbox';
import { DATA_EXPLORER_NAIVE_BAYES } from '@isle-project/constants/actions.js';
import NaiveBayes from '@isle-project/components/models/naive-bayes';
import QuestionButton from './../question_button.js';


// MAIN //

const NaiveBayesMenu = ( props ) => {
	const [ y, setY ] = useState( props.categorical[ 0 ] );
	const [ x, setX ] = useState( props.quantitative[ 0 ] );
	const [ omitMissing, setOmitMissing ] = useState( false );

	const { categorical, quantitative, t } = props;
	const compute = () => {
		const output = <NaiveBayes
			x={x} y={y}
			omitMissing={omitMissing}
			data={props.data}
			quantitative={props.quantitative}
			categorical={props.categorical}
			onPredict={props.onPredict}
		/>;
		props.logAction( DATA_EXPLORER_NAIVE_BAYES, {
			y, x, omitMissing
		});
		props.onCreated( output );
	};
	return (
		<Card
			style={{ fontSize: '14px' }}
		>
			<Card.Header as="h4">
				{t('Naive Bayes')}
				<QuestionButton title={t('Naive Bayes')} content={t('Naive Bayes-description')} />
			</Card.Header>
			<Card.Body className="d-grid gap-3" >
				<SelectInput
					legend={t('outcome-y')}
					options={categorical}
					defaultValue={y}
					onChange={setY}
				/>
				<SelectInput
					legend={t('predictors-x')} multi
					options={uniq( quantitative.concat( categorical ) )}
					defaultValue={x || ''}
					onChange={setX}
				/>
				<CheckboxInput
					legend={t('omit-missing')}
					defaultValue={false}
					onChange={setOmitMissing}
				/>
				<Button disabled={!x || x.length === 0} variant="primary" onClick={compute} >
					{t('calculate')}
				</Button>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

NaiveBayesMenu.defaultProps = {
	logAction() {}
};

NaiveBayesMenu.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	onPredict: PropTypes.func.isRequired
};


// EXPORTS //

export default NaiveBayesMenu;
