// MODULES //

import React, { useState } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NumberInput from '@isle-project/components/input/number';
import SelectInput from '@isle-project/components/input/select';
import TeX from '@isle-project/components/tex';
import MeanTest from '@isle-project/components/tests/meantest';
import { TESTS_MEAN } from '@isle-project/constants/actions.js';
import selectStyles from '@isle-project/components/input/select/styles';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DIRECTIONS = [
	{
		value: 'less',
		label: 'less than (left-sided)'
	},
	{
		value: 'greater',
		label: 'greater than (right-sided)'
	},
	{
		value: 'two-sided',
		label: 'not equal (two-sided)'
	}
];


// MAIN //

const MeanTestMenu = ( props ) => {
	const { data, showDecision, quantitative, t } = props;
	const [ type, setType ] = useState( 'T Test' );
	const [ variable, setVariable ] = useState( null );
	const [ mu0, setMu0 ] = useState( 0 );
	const [ direction, setDirection ] = useState( DIRECTIONS[ 2 ] );
	const [ alpha, setAlpha ] = useState( 0.05 );
	const [ stdev, setStdev ] = useState( null );

	const calculateMeanTest = () => {
		const output = <MeanTest
			data={data}
			variable={variable}
			showDecision={showDecision}
			mu0={mu0}
			direction={direction.value}
			stdev={stdev}
			type={type}
			alpha={alpha}
		/>;
		props.logAction( TESTS_MEAN, {
			variable, mu0, direction: direction.value, alpha, type, stdev, showDecision
		});
		props.onCreated( output );
	};
	return (
		<Card
			style={{ fontSize: '14px' }}
		>
			<Card.Header as="h4">
				{t('One-Sample Mean Test')}
				<QuestionButton title={t('One-Sample Mean Test')} content={t('One-Sample Mean Test-description')} />
			</Card.Header>
			<Card.Body className="d-grid gap-3" >
				<SelectInput
					legend={t('type-of-test')}
					defaultValue={type}
					options={[ 'T Test', 'Z Test' ]}
					onChange={setType}
				/>
				<SelectInput
					legend={t('variable')}
					defaultValue={null}
					options={quantitative}
					onChange={setVariable}
				/>
				{ type === 'Z Test' ?
					<NumberInput
						legend={t('standard-deviation')}
						defaultValue={stdev}
						step="any"
						min={0}
						onChange={setStdev}
						inputStyle={{
							width: 140
						}}
					/> : null
				}
				<NumberInput
					legend={<span><TeX raw="H_0" /> {t('mean')} {t('value')} (<TeX raw="\mu_0" />)</span>}
					defaultValue={mu0}
					step="any"
					onChange={setMu0}
				/>
				<NumberInput
					legend={<span>{t('significance-level')}<TeX raw="\alpha" /></span>}
					defaultValue={alpha}
					min={0.0}
					max={1.0}
					tooltipPlacement="left"
					step="any"
					onChange={setAlpha}
				/>
				<Select
					legend={t('direction')}
					defaultValue={direction}
					options={DIRECTIONS}
					onChange={setDirection}
					menuPlacement="top"
					styles={selectStyles}
				/>
				<Button
					variant="primary" onClick={calculateMeanTest}
					disabled={!variable}
				>
					{t('calculate')}
				</Button>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

MeanTestMenu.defaultProps = {
	logAction() {},
	showDecision: true
};

MeanTestMenu.propTypes = {
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	showDecision: PropTypes.bool
};


// EXPORTS //

export default MeanTestMenu;
