// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import NumberInput from 'components/input/number';
import FrequencyTable from 'components/tables/frequency-table';
import { DATA_EXPLORER_FREQUENCY_TABLE } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// MAIN //

const FrequencyTableMenu = ( props ) => {
	const { defaultValue, variables, groupingVariables, t } = props;

	const [ calculateRelative, setCalculateRelative ] = useState( false );
	const [ calculateCounts, setCalculateCounts ] = useState( true );
	const [ variable, setVariable ] = useState( defaultValue || variables[ 0 ] );
	const [ group, setGroup ] = useState( null );
	const [ nDecimalPlaces, setNDecimalPlaces ] = useState( 3 );

	const generateFrequencyTable = () => {
		const output = <FrequencyTable
			variable={variable}
			group={group}
			calculateCounts={calculateCounts}
			calculateRelative={calculateRelative}
			nDecimalPlaces={nDecimalPlaces}
			data={props.data}
		/>;
		props.logAction( DATA_EXPLORER_FREQUENCY_TABLE, {
			variable, group, calculateRelative, calculateCounts, nDecimalPlaces
		});
		props.onCreated( output );
	};
	return (
		<Card>
			<Card.Header as="h4">
				{t('Frequency Table')}
				<QuestionButton title={t('Frequency Table')} content={t('Frequency Table-description')} />
			</Card.Header>
			<Card.Body>
				<SelectInput
					legend={t('variable')}
					defaultValue={variable}
					options={variables}
					onChange={setVariable}
				/>
				<SelectInput
					legend={t('group-by')}
					options={groupingVariables}
					clearable={true}
					menuPlacement="top"
					onChange={setGroup}
					tooltip="Generate a frequency table for each category of a chosen grouping variable"
				/>
				<Row>
					<Col>
						<CheckboxInput
							legend="Counts"
							defaultValue={calculateCounts}
							onChange={() => {
								setCalculateCounts( !calculateCounts );
							}}
						/>
					</Col>
					<Col>
						<CheckboxInput
							legend={t('relative-frequency')}
							defaultValue={calculateRelative}
							onChange={() => {
								setCalculateRelative( !calculateRelative );
							}}
						/>
					</Col>
				</Row>
				{ calculateRelative ? <p>{t('report-relative-frequencies')}
					<NumberInput
						inline
						width={50}
						max={16}
						min={0}
						defaultValue={nDecimalPlaces}
						onChange={setNDecimalPlaces}
					/>
					{t('decimal-places')}
				</p> : null }
				<Button
					variant="primary"
					block
					onClick={generateFrequencyTable}
					disabled={!calculateCounts && !calculateRelative}
				>
					{t('generate')}
				</Button>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

FrequencyTableMenu.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {}
};

FrequencyTableMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default FrequencyTableMenu;
