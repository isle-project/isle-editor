// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NumberInput from '@isle-project/components/input/number';
import SelectInput from '@isle-project/components/input/select';
import TeX from '@isle-project/components/tex';
import PropTest from '@isle-project/components/tests/proptest';
import extractCategoriesFromValues from '@isle-project/utils/extract-categories-from-values';
import { TESTS_PROPTEST } from '@isle-project/constants/actions.js';
import QuestionButton from './../question_button.js';


// MAIN //

const PropTestMenu = ( props ) => {
	const { data, categorical, showDecision, t } = props;

	const [ variable, setVariable ] = useState( null );
	const [ success, setSuccess ] = useState( null );
	const [ p0, setP0 ] = useState( 0.5 );
	const [ direction, setDirection ] = useState( 'two-sided' );
	const [ alpha, setAlpha ] = useState( 0.05 );
	const [ categories, setCategories ] = useState( null );

	const calculatePropTest = () => {
		const output = <PropTest data={data} variable={variable} success={success} p0={p0} direction={direction} alpha={alpha} showDecision={showDecision} />;
		props.logAction( TESTS_PROPTEST, {
			variable, success, p0, direction, alpha, showDecision
		});
		props.onCreated( output );
	};
	return (
		<Card
			style={{ fontSize: '14px' }}
		>
			<Card.Header as="h4">
				{t('One-Sample Proportion Test')}
				<QuestionButton title={t('One-Sample Proportion Test')} content={t('One-Sample Proportion Test-description')} />
			</Card.Header>
			<Card.Body className="d-grid gap-3" >
				<SelectInput
					legend={t('variable')}
					defaultValue={variable}
					options={categorical}
					onChange={( variable ) => {
						const values = props.data[ variable ];
						const newCategories = extractCategoriesFromValues( values, variable );
						setCategories( newCategories );
						setVariable( variable );
						setSuccess( newCategories[ 0 ] );
					}}
				/>
				{ categories ? <SelectInput
					legend={`${t('success')}:`}
					defaultValue={success}
					options={categories}
					onChange={setSuccess}
				/> : null }
				<NumberInput
					legend={<TeX raw="p_0" />}
					defaultValue={p0}
					min={0.001}
					max={0.999}
					step="any"
					onChange={setP0}
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
				<div className="d-grid" >
					<Button
						variant="primary"
						onClick={calculatePropTest}
						disabled={!variable}
					>
						{t('calculate')}
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

PropTestMenu.propTypes = {
	categorical: PropTypes.array,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	showDecision: PropTypes.bool
};

PropTestMenu.defaultProps = {
	categorical: null,
	logAction() {},
	showDecision: true
};


// EXPORTS //

export default PropTestMenu;
