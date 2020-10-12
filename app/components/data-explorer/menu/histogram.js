// MODULES //

import React, { Component } from 'react';
import logger from 'debug';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import NumberInput from 'components/input/number';
import randomstring from 'utils/randomstring/alphanumeric';
import Histogram from 'components/plots/histogram';
import { DATA_EXPLORER_SHARE_HISTOGRAM, DATA_EXPLORER_HISTOGRAM } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const debug = logger( 'isle:data-explorer:histogram' );
const DESCRIPTION = 'A histogram allows one to visualize the distribution of a quantitative variable. In order to create a histogram, the observed range of values is divided into different, non-overlapping intervals called "bins"; the height of each bin corresponds to how many observations are in that bin range.';


// MAIN //

class HistogramMenu extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			chooseBins: false,
			displayDensity: false,
			variable: props.defaultValue || props.variables[ 0 ],
			group: null, // eslint-disable-line react/no-unused-state
			groupMode: 'Overlay',
			nCols: 2,
			nBins: 10,
			densityType: null,
			xbins: {
				start: null,
				size: 100,
				end: null
			},
			binStrategy: 'Automatic'
		};
	}

	generateHistogram() {
		debug( `Generate a histogram with ${this.state.nBins} bins` );
		const plotId = randomstring( 6 );
		const action = { ...this.state, plotId };
		const onShare = () => {
			this.props.session.addNotification({
				title: 'Plot shared.',
				message: 'You have successfully shared your plot.',
				level: 'success',
				position: 'tr'
			});
			this.props.logAction( DATA_EXPLORER_SHARE_HISTOGRAM, action );
		};
		const output = <Histogram data={this.props.data} {...this.state} id={plotId} action={action} onShare={onShare} />;
		this.props.logAction( DATA_EXPLORER_HISTOGRAM, action );
		this.props.onCreated( output );
	}

	render() {
		const { variables, groupingVariables } = this.props;
		return (
			<Card>
				<Card.Header as="h4">
					Histogram
					<QuestionButton title="Histogram" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<SelectInput
						legend="Variable:"
						defaultValue={this.state.variable}
						options={variables}
						onChange={( value )=>{
							this.setState({
								variable: value
							});
						}}
					/>
					<Row>
						<Col md={5} >
							<SelectInput
								legend="Group By:"
								options={groupingVariables}
								clearable={true}
								onChange={( value )=>{
									this.setState({
										group: value // eslint-disable-line react/no-unused-state
									});
								}}
							/>
						</Col>
						<Col md={4} >
							{ this.state.group ? <SelectInput
								legend="Mode:"
								defaultValue={this.state.groupMode}
								options={[ 'Overlay', 'Facets' ]}
								onChange={( value )=>{
									this.setState({
										groupMode: value // eslint-disable-line react/no-unused-state
									});
								}}
							/> : null }
						</Col>
						<Col md={3} >
							{ this.state.group && this.state.groupMode === 'Facets' ? <NumberInput
								legend="Columns"
								defaultValue={2}
								min={1}
								onChange={( value )=>{
									this.setState({
										nCols: value
									});
								}}
								style={{
									marginTop: 0
								}}
								inputStyle={{
									width: 70,
									marginLeft: 0,
									marginTop: 2
								}}
							/> : null }
						</Col>
					</Row>
					<div>
						<SelectInput
							legend="Binning Strategy:"
							options={[
								'Automatic',
								'Select # of bins',
								'Set bin width'
							]}
							defaultValue={this.state.binStrategy}
							inline
							onChange={( binStrategy )=>{
								this.setState({
									binStrategy
								});
							}}
						/>
						{ this.state.binStrategy !== 'Automatic' ?
							<div>
								<NumberInput
									legend="Start"
									inline
									defaultValue={this.state.xbins.start}
									onChange={( val ) => {
										const xbins = { ...this.state.xbins };
										xbins.start = val;
										this.setState({
											xbins
										});
									}}
									step="any"
									inputStyle={{
										width: 70
									}}
								/>
								{ this.state.binStrategy === 'Select # of bins' ?
									<NumberInput
										legend="Bins"
										defaultValue={this.state.nBins}
										min={1}
										step={1}
										onChange={( value )=>{
											this.setState({
												nBins: value
											});
										}}
										inline
										inputStyle={{
											width: 70
										}}
									/> : null
								}
								{ this.state.binStrategy === 'Set bin width' ?
									<NumberInput
										legend="Size"
										inline
										defaultValue={this.state.xbins.size}
										onChange={( val ) => {
											const xbins = { ...this.state.xbins };
											xbins.size = val;
											this.setState({
												xbins
											});
										}}
										step="any"
										inputStyle={{
											width: 70
										}}
									/> : null
								}
								<NumberInput
									legend="End"
									inline
									defaultValue={this.state.xbins.end}
									onChange={( val ) => {
										const xbins = { ...this.state.xbins };
										xbins.end = val;
										this.setState({
											xbins
										});
									}}
									step="any"
									inputStyle={{
										width: 70
									}}
								/>
							</div> : null }
					</div>
					{ this.props.showDensityOption ?
						<div>
							<CheckboxInput
								legend="Display density instead of counts"
								defaultValue={this.state.displayDensity}
								onChange={()=>{
									this.setState({
										displayDensity: !this.state.displayDensity
									});
								}}
							/>
							<SelectInput
								legend="Overlay density line:"
								options={[ 'Data-driven', 'Normal', 'Uniform', 'Exponential' ]}
								disabled={!this.state.displayDensity}
								defaultValue={this.state.densityType}
								clearable
								menuPlacement="top"
								onChange={( value )=>{
									this.setState({
										densityType: value
									});
								}}
							/>
						</div> : null }
					<Button variant="primary" block onClick={this.generateHistogram.bind( this )}>Generate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

HistogramMenu.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {},
	session: {},
	showDensityOption: true,
	onSelected() {}
};

HistogramMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onSelected: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	showDensityOption: PropTypes.bool,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default HistogramMenu;
