// MODULES //

import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import memoize from '@stdlib/utils/memoize';
import objectKeys from '@stdlib/utils/keys';
import NumberInput from '@isle-project/components/input/number';
import SelectInput from '@isle-project/components/input/select';
import TeX from '@isle-project/components/tex';
import MeanTest2 from '@isle-project/components/tests/meantest2';
import { TESTS_TWO_SAMPLE_MEAN } from '@isle-project/constants/actions.js';
import selectStyles from '@isle-project/components/input/select/styles';
import QuestionButton from './../question_button.js';
import getBinaryVars from './../get_binary_vars.js';


// VARIABLES //

const memoizedBinaryVars = memoize( getBinaryVars, ( args ) => {
	return `${args[ 0 ]}-${objectKeys( args[ 1 ])}`;
});

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

const MeanTest2Menu = ( props ) => {
	const { quantitative, categorical, data, t } = props;
	const [ x, setX ] = useState( null );
	const [ group, setGroup ] = useState( null );
	const [ y, setY ] = useState( null );
	const [ diff, setDiff ] = useState( 0 );
	const [ direction, setDirection ] = useState( DIRECTIONS[ 2 ] );
	const [ alpha, setAlpha ] = useState( 0.05 );
	const [ type, setType ] = useState( 'T Test' );
	const [ xstdev, setXstdev ] = useState( null );
	const [ ystdev, setYstdev ] = useState( null );
	const [ binary, setBinary ] = useState( [] );

	useEffect( () => {
		setBinary( memoizedBinaryVars( categorical, data ) );
	}, [ categorical, data ]);
	const calculateTwoSampleZTest = () => {
		const { data, showDecision } = props;
		if ( !y && !group ) {
			return props.session.addNotification({
				title: t('action-required'),
				message: t('select-grouping-or-second-variable', { var: x }),
				level: 'warning',
				position: 'tr'
			});
		}
		const output = <MeanTest2
			x={x} group={group} y={y} diff={diff} direction={direction.value}
			alpha={alpha} type={type} xstdev={xstdev} ystdev={ystdev}
			data={data} showDecision={showDecision}
		/>;
		props.logAction( TESTS_TWO_SAMPLE_MEAN, {
			x, group, y, diff, direction: direction.value, alpha, showDecision
		});
		props.onCreated( output );
	};
	return (
		<Card
			style={{ fontSize: '14px' }}
		>
			<Card.Header as="h4">
				{t('Two-Sample Mean Test')}
				<QuestionButton title={t('Two-Sample Mean Test')} content={t('Two-Sample Mean Test-description')} />
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
					defaultValue={x}
					options={quantitative}
					onChange={setX}
				/>
				<Row>
					<Col md={5}>
						<SelectInput
							legend={t('groups')}
							options={binary}
							defaultValue={group}
							clearable
							onChange={( group ) => {
								setY( null );
								setGroup( group );
							}}
						/>
					</Col>
					<Col md={2}>
						<p>{t('or')}</p>
					</Col>
					<Col md={5}>
						<SelectInput
							legend={t('second-variable')}
							options={quantitative}
							defaultValue={y}
							clearable
							onChange={( y ) => {
								setY( y );
								setGroup( null );
							}}
						/>
					</Col>
				</Row>
				{ type === 'Z Test' ?
					<Row>
						<Col>
							<NumberInput
								legend={t('1st-stdev')}
								defaultValue={xstdev || 1}
								step="any"
								min={0}
								onChange={setXstdev}
							/>
						</Col>
						<Col>
							<NumberInput
								legend={t('2nd-stdev')}
								defaultValue={ystdev || 1}
								step="any"
								min={0}
								onChange={setYstdev}
								tooltipPlacement="top"
							/>
						</Col>
					</Row>: null
				}
				<Row>
					<Col>
						<NumberInput
							legend={t('difference-h0')}
							defaultValue={diff}
							step="any"
							onChange={setDiff}
						/>
					</Col>
					<Col>
						<NumberInput
							legend={<span>{t('significance-level')}<TeX raw="\alpha" /></span>}
							defaultValue={alpha}
							min={0.0}
							max={1.0}
							step="any"
							onChange={setAlpha}
							tooltipPlacement="bottom"
						/>
					</Col>
				</Row>
				<Select
					legend={t('direction')}
					defaultValue={direction}
					options={DIRECTIONS}
					onChange={setDirection}
					menuPlacement="top"
					styles={selectStyles}
				/>
				<Button
					variant="primary"
					onClick={calculateTwoSampleZTest}
					disabled={(!group && !y) || !x}
				>
					{t('calculate')}
				</Button>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

MeanTest2Menu.defaultProps = {
	categorical: null,
	logAction() {},
	showDecision: true
};

MeanTest2Menu.propTypes = {
	categorical: PropTypes.array,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object.isRequired,
	showDecision: PropTypes.bool
};


// EXPORTS //

export default MeanTest2Menu;
