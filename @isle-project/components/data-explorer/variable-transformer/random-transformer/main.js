// MODULES //

import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import { useTranslation } from 'react-i18next';
import { components } from 'react-select';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import FormText from 'react-bootstrap/FormText';
import random from '@stdlib/random/base';
import objectKeys from '@stdlib/utils/keys';
import capitalize from '@stdlib/string/capitalize';
import NumberInput from '@isle-project/components/input/number';
import Draggable from '@isle-project/components/draggable';
import Panel from '@isle-project/components/panel';
import SelectInput from '@isle-project/components/input/select';
import { DATA_EXPLORER_RANDOM_TRANSFORMER } from '@isle-project/constants/actions.js';


// VARIABLES //

const FOCUS_TRAP_OPTIONS = {
	clickOutsideDeactivates: true
};
const DISTRIBUTIONS = [
	'bernoulli',
	'beta',
	'betaprime',
	'binomial',
	'cauchy',
	'chisquare',
	'exponential',
	'f',
	'gamma',
	'geometric',
	'hypergeometric',
	'logistic',
	'lognormal',
	'normal',
	'poisson',
	't',
	'triangular',
	'uniform',
	'weibull'
];
const DISTRIBUTION_PARAMS = {
	'bernoulli': [
		{
			'name': 'p',
			'description': 'success-probability',
			'min': 0,
			'max': 1,
			'step': 'any'
		}
	],
	'beta': [
		{
			'name': 'alpha',
			'description': 'first-shape',
			'min': 0,
			'step': 'any'
		},
		{
			'name': 'beta',
			'description': 'second-shape',
			'min': 0,
			'step': 'any'
		}
	],
	'betaprime': [
		{
			'name': 'alpha',
			'description': 'first-shape',
			'min': 0,
			'step': 'any'
		},
		{
			'name': 'beta',
			'description': 'second-shape',
			'min': 0,
			'step': 'any'
		}
	],
	'binomial': [
		{
			'name': 'n',
			'description': 'number-of-draws-trials',
			'min': 0,
			'step': 1
		},
		{
			'name': 'p',
			'description': 'success-probability',
			'min': 0,
			'max': 1,
			'step': 'any'
		}
	],
	'cauchy': [
		{
			'name': 'x0',
			'description': 'location',
			'step': 'any'
		},
		{
			'name': 'gamma',
			'description': 'scale',
			'min': 0,
			'step': 'any'
		}
	],
	'chisquare': [
		{
			'name': 'k',
			'description': 'degrees-of-freedom',
			'min': 0,
			'step': 'any'
		}
	],
	'exponential': [
		{
			'name': 'lambda',
			'description': 'rate',
			'min': 0,
			'step': 'any'
		}
	],
	'f': [
		{
			'name': 'd1',
			'description': 'degrees-of-freedom',
			'min': 0,
			'step': 'any'
		},
		{
			'name': 'd2',
			'description': 'degrees-of-freedom',
			'min': 0,
			'step': 'any'
		}
	],
	'gamma': [
		{
			'name': 'alpha',
			'description': 'shape',
			'min': 0,
			'step': 'any'
		},
		{
			'name': 'beta',
			'description': 'rate',
			'min': 0,
			'step': 'any'
		}
	],
	'geometric': [
		{
			'name': 'p',
			'description': 'success-probability',
			'min': 0,
			'max': 1,
			'step': 'any'
		}
	],
	'hypergeometric': [
		{
			'name': 'N',
			'description': 'population-size',
			'min': 0,
			'step': 1
		},
		{
			'name': 'K',
			'description': 'subpopulation-size',
			'min': 0,
			'step': 1
		},
		{
			'name': 'n',
			'description': 'number-of-draws-trials',
			'min': 0,
			'step': 1
		}
	],
	'logistic': [
		{
			'name': 'mu',
			'description': 'location',
			'step': 'any'
		},
		{
			'name': 's',
			'description': 'scale',
			'min': 0,
			'step': 'any'
		}
	],
	'lognormal': [
		{
			'name': 'mu',
			'description': 'location',
			'step': 'any'
		},
		{
			'name': 'sigma',
			'description': 'scale',
			'min': 0,
			'step': 'any'
		}
	],
	'normal': [
		{
			'name': 'mu',
			'description': 'mean',
			'step': 'any'
		},
		{
			'name': 'sigma',
			'description': 'standard-deviation',
			'min': 0,
			'step': 'any'
		}
	],
	'poisson': [
		{
			'name': 'lambda',
			'description': 'mean',
			'min': 0,
			'step': 'any'
		}
	],
	't': [
		{
			'name': 'v',
			'description': 'degrees-of-freedom',
			'min': 0,
			'step': 'any'
		}
	],
	'triangular': [
		{
			'name': 'a',
			'description': 'minimum',
			'step': 'any'
		},
		{
			'name': 'b',
			'description': 'maximum',
			'step': 'any'
		},
		{
			'name': 'c',
			'description': 'mode',
			'step': 'any'
		}
	],
	'uniform': [
		{
			'name': 'a',
			'description': 'minimum',
			'step': 'any'
		},
		{
			'name': 'b',
			'description': 'maximum',
			'step': 'any'
		}
	],
	'weibull': [
		{
			'name': 'k',
			'description': 'scale',
			'min': 0,
			'step': 'any'
		},
		{
			'name': 'lambda',
			'description': 'shape',
			'min': 0,
			'step': 'any'
		}
	]
};
const Option = props => {
	return ( <components.Option key={props.data.label} {...props} >
		<span style={{
			opacity: props.isSelected ? 0.5 : 1
		}}>{capitalize( props.data.label )}</span>
	</components.Option> );
};
const SingleValue = props => {
	return (
		<components.SingleValue {...props}>
			{capitalize( props.data.label )}
		</components.SingleValue>
	);
};
const BODY_STYLE = {
	maxHeight: 'calc(100vh - 200px)',
	overflowY: 'auto',
	position: 'relative',
	padding: '12px 36px 12px 36px'
};


// MAIN //

const RandomTransformer = ( props ) => {
	const [ name, setName ] = useState( null );
	const [ distribution, setDistribution ] = useState( DISTRIBUTIONS[ 0 ] );
	const [ params, setParams ] = useState( [ 1, 1, 1 ] );
	const { t } = useTranslation( 'learn/distribution' );
	const createVariable = useCallback( () => {
		const keys = objectKeys( props.data );
		const nobs = props.data[ keys[ 0 ] ].length;
		const values = new Array( nobs );
		for ( let i = 0; i < nobs; i++ ) {
			values[ i ] = random[ distribution ].apply( null, params );
		}
		props.logAction( DATA_EXPLORER_RANDOM_TRANSFORMER, {
			distribution, name
		});
		props.onGenerate( name, values );
		props.onHide();
	}, [ distribution, name, params, props ] );

	const handleKeyPress = ( event ) => {
		if ( event.charCode === 13 && name.length >= 2 ) {
			createVariable();
		}
	};
	const handleGeneratedNameChange = ( event ) => {
		setName( event.target.value );
	};
	return ( <Draggable cancel=".card-body" onDragStart={( event ) => {
		event.stopPropagation();
	}} style={{ zIndex: 1006 }} >
		<FocusTrap focusTrapOptions={FOCUS_TRAP_OPTIONS} >
			<Panel
				onHide={props.onHide}
				show={props.show}
				header={t('data-explorer:generate-random-data')}
				footer={<Button onClick={createVariable} >
					{t('data-explorer:create-new-variable')}
				</Button>}
				role="button" tabIndex={0}
				bodyStyle={BODY_STYLE}
			>
				<Row>
					<SelectInput
						value={distribution}
						legend={t('select-distribution')}
						options={DISTRIBUTIONS}
						onChange={setDistribution}
						components={{ Option, SingleValue }}
					/>
				</Row>
				<Row>
					{DISTRIBUTION_PARAMS[ distribution ].map( ( x, idx ) => {
						return ( <NumberInput
							key={idx}
							legend={t( x.name )}
							description={t( x.description )}
							value={params[ idx ]}
							onChange={( value ) => {
								const newParams = params.slice();
								newParams[ idx ] = value;
								setParams( newParams );
							}}
							max={x.max}
							min={x.min}
							step={x.step}
							tooltipPlacement="bottom"
						/> );
					})}
				</Row>
				<Row>
					<FormGroup>
						<FormLabel>{t('data-explorer:name-new-variable')}:</FormLabel>
						<FormControl
							type="text"
							placeholder={t('data-explorer:select-name')}
							onChange={handleGeneratedNameChange}
							onKeyPress={handleKeyPress}
						/>
						<FormText>
							{t('data-explorer:new-variable-appended')}
						</FormText>
					</FormGroup>
				</Row>
			</Panel>
		</FocusTrap>
	</Draggable> );
};


// PROPERTIES //

RandomTransformer.defaultProps = {
	logAction() {}
};

RandomTransformer.propTypes = {
	data: PropTypes.object.isRequired,
	onGenerate: PropTypes.func.isRequired,
	logAction: PropTypes.func,
	onHide: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired
};


// EXPORTS //

export default RandomTransformer;
