// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ColorPicker from '@isle-project/components/color-picker';
import CheckboxInput from '@isle-project/components/input/checkbox';
import SelectInput from '@isle-project/components/input/select';
import selectStyles from '@isle-project/components/input/select/styles';
import randomstring from '@isle-project/utils/randomstring/alphanumeric';
import BarChart from '@isle-project/components/plots/barchart';
import { SHARE_BARCHART, BARCHART } from '@isle-project/constants/actions.js';
import extractCategoriesFromValues from '@isle-project/utils/extract-categories-from-values';
import Collapse from '@isle-project/components/collapse';
import QuestionButton from './../question_button.js';


// VARIABLES //

const STATS = [
	'Mean',
	'Median',
	'Min',
	'Max',
	'Sum'
];
const MODES = [
	'Counts of distinct values',
	'Function evaluated for a variable'
];
const Option = props => (
	<components.Option {...props} >
		{props.data.label}
		<br />
		<span style={{ fontVariant: 'small-caps' }} >{props.data.description}</span>
	</components.Option>
);
const ORDER_OPTIONS = [
	{ label: 'Total', value: 'total', description: 'by total count of each category' },
	{ label: 'Alphabetically', value: 'category', description: 'by category name' },
	{ label: 'Min', value: 'min', description: 'by minimum count inside each category' },
	{ label: 'Max', value: 'max', description: 'by maximum count inside each category' },
	{ label: 'Mean', value: 'mean', description: 'by mean count inside each category' },
	{ label: 'Median', value: 'median', description: 'by median count inside each category' }
];


// MAIN //

const BarchartMenu = ( props ) => {
	const { groupingVariables, variables, defaultValue, quantitative, t } = props;
	const [ variable, setVariable ] = useState( defaultValue || variables[ 0 ] );
	const [ yvar, setYVar ] = useState( quantitative[ 0 ] );
	const [ direction, setDirection ] = useState( 'ascending' );
	const [ summary, setSummary ] = useState( STATS[ 0 ] );
	const [ group, setGroup ] = useState( null );
	const [ horizontal, setHorizontal ] = useState( false );
	const [ mode, setMode ] = useState( MODES[ 0 ] );
	const [ relative, setRelative ] = useState( false );
	const [ stackBars, setStackBars ] = useState( false );
	const [ totalPercent, setTotalPercent ] = useState( false );
	const [ xOrder, setXOrder ] = useState( null );
	const [ groupCategories, setGroupCategories ] = useState( [] );
	const [ color, setColor ] = useState( null );

	const generateBarchart = () => {
		const plotId = randomstring( 6 );
		const action = {
			variable, group, relative, totalPercent, xOrder, direction, stackBars, plotId
		};
		if ( mode === MODES[ 1 ] ) {
			action.summary = summary;
			action.yvar = yvar;
		}
		const onShare = () => {
			props.session.addNotification({
				title: props.t('plot-shared'),
				message: props.t('plot-shared-message'),
				level: 'success',
				position: 'tr'
			});
			props.logAction( SHARE_BARCHART, action );
		};
		const colors = group ? groupCategories.map( category => category.color ) : [ color ];
		let output;
		if ( mode === MODES[ 1 ] ) {
			output = <BarChart
				{...props}
				variable={variable} group={group}
				horizontal={horizontal}
				relative={relative} totalPercent={totalPercent} xOrder={xOrder}
				direction={direction} summary={summary} yvar={yvar} stackBars={stackBars}
				id={plotId}
				action={action}
				onShare={onShare}
				colors={colors}
			/>;
		} else {
			output = <BarChart
				{...props}
				variable={variable} group={group}
				horizontal={horizontal}
				relative={relative} totalPercent={totalPercent} xOrder={xOrder}
				direction={direction} stackBars={stackBars}
				id={plotId}
				action={action}
				onShare={onShare}
				colors={colors}
			/>;
		}
		props.logAction( BARCHART, action );
		props.onCreated( output );
	};
	const hideRelativeFrequencies = (
		!group || // not used without grouping
		totalPercent || // overall percent
		mode === MODES[ 1 ] // when evaluating a function
	);
	return (
		<Card>
			<Card.Header as="h4">
				{t('Bar Chart')}
				<QuestionButton title={t('Bar Chart')} content={t('Bar Chart-description')} />
			</Card.Header>
			<Card.Body className="d-grid gap-3" >
				<SelectInput
					legend={t('bars-represent')}
					defaultValue={mode}
					options={MODES}
					onChange={setMode}
				/>
				<SelectInput
					legend={t('variable')}
					defaultValue={variable}
					options={variables}
					onChange={setVariable}
				/>
				{ mode === MODES[ 1 ] ?
					<Row>
						<Col>
							<SelectInput
								legend={t('y-axis')}
								defaultValue={yvar}
								options={props.quantitative}
								onChange={setYVar}
							/>
						</Col>
						<Col>
							<SelectInput
								legend={t('summary-function')}
								defaultValue={summary}
								options={STATS}
								onChange={setSummary}
							/>
						</Col>
					</Row> : null }
				<SelectInput
					legend={t('group-by')}
					clearable={true}
					defaultValue={group}
					options={groupingVariables}
					menuPlacement="top"
					onChange={( value ) => {
						setGroup( value );
						const newCategories = extractCategoriesFromValues( props.data[ value ], value );
						setGroupCategories( newCategories.map( x => (
							{ color: null, category: x }
						) ) );
					}}
				/>
				<Row>
					<Col>
						<FormGroup controlId="barchart-order-select">
							<FormLabel>{group ? t('order-outer-groups') : t('order-x-axis')}:</FormLabel>
							<Select
								defaultValue={xOrder}
								options={ORDER_OPTIONS}
								components={{ Option }}
								isClearable={true}
								menuPlacement="top"
								onChange={( elem ) => {
									setXOrder( elem ? elem.value : null );
								}}
								styles={selectStyles}
							/>
						</FormGroup>
					</Col>
					<Col>
						<SelectInput
							legend={t('order-direction')}
							defaultValue={direction}
							options={[
								'ascending',
								'descending'
							]}
							menuPlacement="top"
							onChange={setDirection}
							style={{
								display: xOrder ? 'inherit' : 'none'
							}}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						{ mode === MODES[ 0 ] ? <CheckboxInput
							legend={t('total-percentages')}
							defaultValue={totalPercent}
							onChange={setTotalPercent}
							disabled={relative}
							style={{
								opacity: relative ? 0.2 : 1
							}}
						/> : null }
					</Col>
					<Col>
						<CheckboxInput
							legend={t('flip-coordinates')}
							defaultValue={horizontal}
							onChange={setHorizontal}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<CheckboxInput
							legend={t('stack-bars')}
							defaultValue={stackBars}
							onChange={setStackBars}
							disabled={!group}
							style={{
								opacity: group ? 1.0 : 0.2
							}}
						/>
					</Col>
					<Col>
						<CheckboxInput
							legend={t('relative-frequencies-inside-each-group')}
							defaultValue={relative}
							disabled={hideRelativeFrequencies}
							onChange={setRelative}
							style={{
								opacity: hideRelativeFrequencies ? 0.2 : 1
							}}
						/>
					</Col>
				</Row>
				{<Collapse
					header={group ? t('customize-colors') : t('customize-color')}
					headerStyle={{ fontSize: '1rem' }}
					style={{
						width: '100%'
					}}
				>
					<ListGroup>
						{group && groupCategories.map( ( elem, index ) => {
							return (
								<ListGroup.Item key={index} >
									{elem.category}
									<ColorPicker
										onChange={( color ) => {
											const newCategories = [ ...groupCategories.slice( 0, index ), { ...elem, color: color.hex }, ...groupCategories.slice( index + 1 ) ];
											setGroupCategories( newCategories );
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
						{!group && <ListGroup.Item>
							<ColorPicker
								onChange={( value ) => {
									setColor( value.hex );
								}}
								disableAlpha
								variant="Button"
								color={color || '#000000'}
							/>
						</ListGroup.Item>}
					</ListGroup>
				</Collapse>}
				<Button
					variant="primary" onClick={generateBarchart}
					disabled={!variable}
				>
					{t('generate')}
				</Button>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

BarchartMenu.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {},
	onCreated() {},
	onSelected() {}
};

BarchartMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func,
	onSelected: PropTypes.func,
	session: PropTypes.object.isRequired,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default BarchartMenu;
