// MODULES //

import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import FormText from 'react-bootstrap/FormText';
import FormCheck from 'react-bootstrap/FormCheck';
import objectKeys from '@stdlib/utils/keys';
import sample from '@stdlib/random/sample';
import SelectInput from '@isle-project/components/input/select';
import NumberInput from '@isle-project/components/input/number';
import Draggable from '@isle-project/components/draggable';
import Panel from '@isle-project/components/panel';
import { SAMPLE_TRANSFORMER } from '@isle-project/constants/actions.js';
import validateName from './validate_name.js';


// VARIABLES //

const FOCUS_TRAP_OPTIONS = {
	clickOutsideDeactivates: true
};
const BODY_STYLE = {
	maxHeight: 'calc(100vh - 200px)',
	overflowY: 'auto',
	position: 'relative',
	padding: '12px 36px 12px 36px'
};


// MAIN //

const SampleTransformer = ( props ) => {
	const [ name, setName ] = useState( null );
	const [ variable, setVariable ] = useState( null );
	const [ replace, setReplace ] = useState( false );
	const keys = objectKeys( props.data );
	const [ nObs, setNObs ] = useState( props.data[ keys[ 0 ] ].length );
	const { t } = useTranslation( 'learn/distribution' );
	const createVariable = useCallback( () => {
		props.logAction( SAMPLE_TRANSFORMER, {
			name, nObs, replace, variable
		});
		const out = sample( props.data[ variable ], {
			size: nObs,
			replace: replace && nObs < props.data[ variable ].length
		});
		props.onGenerate( name, out );
		props.onHide();
	}, [ variable, props, name, nObs, replace ] );
	const handleKeyPress = useCallback( ( event ) => {
		if ( event.charCode === 13 && validateName( name ) ) {
			createVariable();
		}
	}, [ createVariable, name ] );
	const handleGeneratedNameChange = useCallback( ( event ) => {
		setName( event.target.value );
	}, [ setName ] );
	return ( <Draggable cancel=".card-body" onDragStart={( event ) => {
		event.stopPropagation();
	}} style={{ zIndex: 1006 }} >
		<FocusTrap focusTrapOptions={FOCUS_TRAP_OPTIONS} >
			<Panel
				onHide={props.onHide}
				show={props.show}
				header={t('data-explorer:sample-from-column')}
				footer={<Button onClick={createVariable} disabled={!variable || !validateName( name )} >
					{t('data-explorer:create-new-variable')}
				</Button>}
				role="button" tabIndex={0}
				bodyStyle={BODY_STYLE}
				bodyClassName="d-grid gap-3"
			>
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
				<Row>
					<FormGroup>
						<FormLabel>{t('data-explorer:column-to-sample-from')}:</FormLabel>
						<SelectInput
							options={keys}
							onChange={setVariable}
						/>
					</FormGroup>
				</Row>
				<Row>
					<FormGroup>
						<FormCheck
							type="checkbox"
							onChange={( event ) => {
								setReplace( event.target.checked );
							}}
							label={t('data-explorer:sample-with-replacement')}
							disabled={variable && nObs > props.data[ variable ].length}
							value={replace || ( variable && nObs >= props.data[ variable ].length )}
						/>
					</FormGroup>
				</Row>
				<Row>
					<NumberInput
						legend={t('data-explorer:number-of-observations')}
						value={nObs}
						onChange={setNObs}
						min={0}
						max={( variable && !replace ) ? props.data[ variable ].length : null}
						step={1}
						tooltip={t('data-explorer:number-of-observations-tooltip')}
					/>
				</Row>
			</Panel>
		</FocusTrap>
	</Draggable> );
};


// PROPERTIES //

SampleTransformer.defaultProps = {
	logAction() {}
};

SampleTransformer.propTypes = {
	data: PropTypes.object.isRequired,
	onGenerate: PropTypes.func.isRequired,
	logAction: PropTypes.func,
	onHide: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired
};


// EXPORTS //

export default SampleTransformer;
