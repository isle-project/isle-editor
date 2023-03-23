// MODULES //

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NumberInput from '@isle-project/components/input/number';
import SelectInput from '@isle-project/components/input/select';
import TeX from '@isle-project/components/tex';
import contains from '@stdlib/assert/contains';
import memoize from '@stdlib/utils/memoize';
import isArray from '@stdlib/assert/is-array';
import unique from 'uniq';
import PropTest2 from '@isle-project/components/tests/proptest2';
import extractCategoriesFromValues from '@isle-project/utils/extract-categories-from-values';
import { TESTS_TWO_SAMPLE_PROPTEST } from '@isle-project/constants/actions.js';
import QuestionButton from './../question_button.js';
import getBinaryVars from './../get_binary_vars.js';


// VARIABLES //

const extractCategories = memoize( extractCategoriesFromValues, ( args ) => {
	return args[ 1 ];
});


// MAIN //

const PropTest2Menu = ( props ) => {
	const { categorical, data, showDecision, t } = props;
	const [ categories, setCategories ] = useState( [] );
	const [ var1, setVar1 ] = useState( categorical[ 0 ] );
	const [ success, setSuccess ] = useState( categories[ 0 ] );
	const [ group, setGroup ] = useState( null );
	const [ var2, setVar2 ] = useState( null );
	const [ diff, setDiff ] = useState( 0 );
	const [ direction, setDirection ] = useState( 'two-sided' );
	const [ alpha, setAlpha ] = useState( 0.05 );

	useEffect( () => {
		if ( isArray( categorical ) && categorical.length > 0 ) {
			const values = data[ categorical[ 0 ] ];
			if ( values ) {
				const newCategories = extractCategories( values, categorical[ 0 ] );
				setCategories( newCategories );
				setSuccess( newCategories[ 0 ] );
			} else {
				setCategories();
			}
		}
	}, [ categorical, data ] );

	const calculateTwoSamplePropTest = () => {
		if ( var1 === group || var1 === var2 ) {
			return props.session.addNotification({
				title: t('action-required'),
				message: t('group-variable-must-be-different'),
				level: 'warning',
				position: 'tr'
			});
		}
		if ( !group && !var2 ) {
			props.session.addNotification({
				title: t('action-required'),
				message: t('select-grouping-or-second-variable', { var: var1 }),
				level: 'warning',
				position: 'tr'
			});
		}
		const output = <PropTest2
			data={data} showDecision={showDecision}
			var1={var1} var2={var2} group={group}
			diff={diff} direction={direction} alpha={alpha} success={success}
		/>;
		props.logAction( TESTS_TWO_SAMPLE_PROPTEST, {
			var1, group, var2, success, diff, direction, alpha, showDecision
		});
		props.onCreated( output );
	};
	const binary = getBinaryVars( categorical, data );
	return (
		<Card
			style={{ fontSize: '14px' }}
		>
			<Card.Header as="h4">
				{t('Two-Sample Proportion Test')}
				<QuestionButton title={t('Two-Sample Proportion Test')} content={t('Two-Sample Proportion Test-description')} />
			</Card.Header>
			<Card.Body className="d-grid gap-3" >
				<Row>
					<Col md={6}>
						<SelectInput
							legend={t('variable')}
							defaultValue={categorical[ 0 ]}
							options={categorical}
							onChange={( variable ) => {
								const values = data[ variable ];
								const newCategories = extractCategoriesFromValues( values, variable );
								unique( newCategories );
								setVar1( variable );
								setCategories( newCategories );
								setSuccess( newCategories[ 0 ] );
							}}
						/>
					</Col>
					<Col md={6}>
						<SelectInput
							legend={t('category-of-interest')}
							defaultValue={categories[ 0 ]}
							options={categories}
							onChange={setSuccess}
						/>
					</Col>
				</Row>
				<Row>
					<Col md={5}>
						<SelectInput
							legend={t('groups')}
							options={binary}
							clearable
							onChange={( value ) => {
								setGroup( value );
								setVar2( null );
							}}
						/>
					</Col>
					<Col md={2}><p>{t('or')}</p></Col>
					<Col md={5}>
						<SelectInput
							legend={t('second-variable')}
							options={categorical.filter( elem =>
								contains( categories, elem )
							)}
							clearable
							onChange={( value ) => {
								setGroup( null );
								setVar2( value );
							}}
						/>
					</Col>
				</Row>
				<NumberInput
					legend={t('difference-h0')}
					defaultValue={diff}
					min={0}
					max={1}
					step="any"
					onChange={setDiff}
				/>
				<SelectInput
					legend={t('direction')}
					defaultValue={direction}
					options={[ 'less', 'greater', 'two-sided' ]}
					onChange={setDirection}
				/>
				<NumberInput
					legend={<span>{t('significance-level')}<TeX raw="\alpha" /></span>}
					defaultValue={alpha}
					min={0.0}
					max={1.0}
					step="any"
					onChange={setAlpha}
				/>
				<Button
					variant="primary"
					onClick={calculateTwoSamplePropTest}
					disabled={!var2 && !group}
				>
					{t('calculate')}
				</Button>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

PropTest2Menu.defaultProps = {
	categorical: null,
	logAction() {},
	showDecision: true
};

PropTest2Menu.propTypes = {
	categorical: PropTypes.array,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object.isRequired,
	showDecision: PropTypes.bool
};


// EXPORTS //

export default PropTest2Menu;
