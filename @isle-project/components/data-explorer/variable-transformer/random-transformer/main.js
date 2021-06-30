// MODULES //

import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import FormText from 'react-bootstrap/FormText';
import random from '@stdlib/random/base';
import Draggable from '@isle-project/components/draggable';
import Panel from '@isle-project/components/panel';
import SelectInput from '@isle-project/components/input/select';


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
			'description': 'success probability'
		}
	],
	/*
	'beta': [ 'alpha', 'beta' ],
	'betaprime': [ 'alpha', ],
	'binomial': ,
	'cauchy': ,
	'chisquare':,
	'exponential': [
		{
			'name': 'lambda',
			'description': 'exponential rate'
		}
	],
	'f':,
	'gamma':,
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
	*/
};


// MAIN //

const RandomTransformer = ( props ) => {
	const [ name, setName ] = useState( null );
	const createVariable = useCallback( () => {
		console.log( 'TEST' );
	}, [] );
	const handleKeyPress = ( event ) => {
		if ( event.charCode === 13 && name.length >= 2 ) {
			this.handleGenerate();
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
				header={props.t('random-transformer-header')}
				footer={<Button onClick={createVariable} >
					{props.t('create-new-variable')}
				</Button>}
				role="button" tabIndex={0}
				bodyStyle={{
					maxHeight: 'calc(100vh - 200px)',
					overflowY: 'auto',
					position: 'relative'
				}}
			>
				<SelectInput legend={props.t('select-distribution')} options={DISTRIBUTIONS} />
				<Row>
					<FormGroup style={{ margin: 8 }}>
						<FormLabel>{props.t('name-new-variable')}:</FormLabel>
						<FormControl
							type="text"
							placeholder={props.t('select-name')}
							onChange={handleGeneratedNameChange}
							onKeyPress={handleKeyPress}
						/>
						<FormText>
							{props.t('new-variable-appended')}
						</FormText>
					</FormGroup>
				</Row>
			</Panel>
		</FocusTrap>
	</Draggable> );
}


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
