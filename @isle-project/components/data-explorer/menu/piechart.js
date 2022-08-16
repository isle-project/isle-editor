// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import SelectInput from '@isle-project/components/input/select';
import randomstring from '@isle-project/utils/randomstring/alphanumeric';
import PieChart from '@isle-project/components/plots/piechart';
import { SHARE_PIECHART, PIECHART } from '@isle-project/constants/actions.js';
import Collapse from '@isle-project/components/collapse';
import ColorPicker from '@isle-project/components/color-picker';
import extractCategoriesFromValues from '@isle-project/utils/extract-categories-from-values';
import QuestionButton from './../question_button.js';


// VARIABLES //

const MODES = [
	'Counts of unique values',
	'Values from a second variable'
];


// MAIN //

const PieChartMenu = ( props ) => {
	const { variables, defaultValue, groupingVariables, quantitative, t } = props;
	const [ variable, setVariable ] = useState( defaultValue || variables[ 0 ] );
	const [ summaryVariable, setSummaryVariable ] = useState( quantitative[ 0 ] );
	const [ group, setGroup ] = useState( null );
	const [ mode, setMode ] = useState( MODES[ 0 ] );
	const [ categories, setCategories ] = useState( [] );

	const handleGenerate = () => {
		const plotId = randomstring( 6 );
		const action = {
			variable, group, plotId
		};
		if ( mode === MODES[ 1 ] ) {
			action.summaryVariable = summaryVariable;
		}
		const onShare = () => {
			props.session.addNotification({
				title: t('plot-shared'),
				message: t('plot-shared-message'),
				level: 'success',
				position: 'tr'
			});
			props.logAction( SHARE_PIECHART, action );
		};
		const colors = categories.map( x => x?.color );
		const output= <PieChart
			id={plotId}
			{...props}
			variable={variable}
			group={group}
			summaryVariable={mode === MODES[ 1 ] ? summaryVariable : null}
			action={action}
			onShare={onShare}
			colors={colors}
		/>;
		props.logAction( PIECHART, action );
		props.onCreated( output );
	};
	return (
		<Card>
			<Card.Header as="h4">
				{t('Pie Chart')}
				<QuestionButton title={t('Pie Chart')} content={t('Pie Chart-description')} />
			</Card.Header>
			<Card.Body className="d-grid gap-3" >
				<SelectInput
					legend={t('pie-sizes-represent')}
					defaultValue={mode}
					options={MODES}
					onChange={setMode}
				/>
				<SelectInput
					legend={t('variable')}
					defaultValue={variable}
					options={variables}
					onChange={( value ) => {
						setVariable( value );
						const newCategories = extractCategoriesFromValues( props.data[ value ], value );
						setCategories( newCategories.map( x => (
							{ color: null, category: x }
						) ) );
						console.log( categories );
					}}
				/>
				{ mode === MODES[ 1 ] ?
					<SelectInput
						legend={t('set-slice-sizes')}
						defaultValue={summaryVariable}
						options={quantitative}
						onChange={setSummaryVariable}
					/> : null }
				<SelectInput
					legend={t('group-by')}
					defaultValue={group}
					options={groupingVariables}
					clearable={true}
					menuPlacement="top"
					onChange={setGroup}
				/>
				{categories.length > 0 && <Collapse
					header={t('customize-colors')} headerStyle={{ fontSize: '1rem' }}
					style={{
						width: '100%'
					}}
				>
					<ListGroup>
					{categories.map( ( elem, index ) => {
						return (
							<ListGroup.Item key={index} >
								{elem.category}
								<ColorPicker
									onChange={( color ) => {
										console.log( color );
										const newCategories = [ ...categories.slice( 0, index ), { ...elem, color: color.hex }, ...categories.slice( index + 1 ) ];
										console.log( newCategories );
										setCategories( newCategories );
									}}
									variant="Button"
									color={elem.color || '#000000'}
									buttonStyle={{
										marginLeft: '0.5rem'
									}}
									style={{
										'width': 'auto',
										float: 'right'
									}}
									disableAlpha
								/>
							</ListGroup.Item>
						);
					})}
					</ListGroup>
				</Collapse>}
				<Button
					variant="primary"
					onClick={handleGenerate}
				>{t('generate')}</Button>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

PieChartMenu.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {}
};

PieChartMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object.isRequired,
	quantitative: PropTypes.array.isRequired,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default PieChartMenu;
