// MODULES //

import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';
import FocusTrap from 'focus-trap-react';
import Table from 'react-bootstrap/Table';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import FormText from 'react-bootstrap/FormText';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Dropdown from 'react-bootstrap/Dropdown';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Draggable from '@isle-project/components/draggable';
import Panel from '@isle-project/components/panel';
import Collapse from '@isle-project/components/collapse';
import TextArea from '@isle-project/components/input/text-area';
import Tooltip from '@isle-project/components/tooltip';
import incrspace from '@stdlib/array/incrspace';
import contains from '@stdlib/assert/contains';
import replace from '@stdlib/string/replace';
import { VARIABLE_TRANSFORMER } from '@isle-project/constants/actions.js';
import valuesFromFormula from './values_from_formula.js';
import validateName from './validate_name.js';
import FUNCTION_KEYS from './function_keys.json';
import './formula_transformer.css';


// VARIABLES //

const RE_NAME_RANGE = /datum\.([^0-9]+)(\d+):datum\.\1(\d+)/;
const DIGITS = incrspace( 0, 10, 1 );
const RE_LAST_EXPRESSION = /(?:^|\n)([^\n]*)$/;
const RE_DIGITS_START = /^[0-9]/;
const FOCUS_TRAP_OPTIONS = {
	clickOutsideDeactivates: true
};


// FUNCTIONS //

const CustomMenu = React.forwardRef(
	({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
		const [value, setValue] = useState( '' );
		return (
			<div
				ref={ref}
				style={style}
				className={className}
				aria-labelledby={labeledBy}
			>
			<FormControl
				className="mx-3 my-2 w-auto"
				placeholder="Type to filter..."
				onChange={e => setValue(e.target.value)}
				value={value}
			/>
				<ul className="list-unstyled">
					{React.Children.toArray(children).filter(
						child =>
						!value || child.props.children.toLowerCase().startsWith(value),
					)}
				</ul>
			</div>
		);
	},
);


// MAIN //

class FormulaTransformer extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			code: props.defaultCode,
			selection: null,
			name: '',
			showGuide: false,
			asCategorical: false
		};
	}

	handleGenerate = () => {
		let { code, name } = this.state;
		if ( RE_NAME_RANGE.test( code ) ) {
			const match = RE_NAME_RANGE.exec( code );
			const prefix = match[ 1 ];
			const start = parseInt( match[ 2 ], 10 );
			const end = parseInt( match[ 3 ], 10 );
			let replacement = '';
			for ( let i = start; i <= end; i++ ) {
				replacement += `datum.${prefix}${i}`; // eslint-disable-line i18next/no-literal-string
				replacement += i < end ? ',' : '';
			}
			code = replace( code, match[ 0 ], replacement );
		}
		if ( !contains( code, 'return ' ) ) {
			code = replace( code, RE_LAST_EXPRESSION, '\nreturn $1' );
		}
		let values;
		try {
			values = valuesFromFormula( code, this.props.data );
			this.props.logAction( VARIABLE_TRANSFORMER, {
				code, name
			});
			if ( this.state.asCategorical ) {
				values = values.map( x => String( x ) );
			}
			this.props.onGenerate( name, values );
		} catch ( err ) {
			return this.props.session.addNotification({
				title: 'Errored',
				message: 'Encountered the following error: '+err.message,
				level: 'error',
				position: 'tr'
			});
		}
		this.props.onHide();
	};

	handleNameChange = ( event ) => {
		this.setState({
			name: event.target.value
		});
	};

	handleCodeChange = ( value ) => {
		this.setState({
			code: value
		});
	};

	handleKeyPress = ( event ) => {
		if ( event.charCode === 13 && this.state.name.length >= 2 ) {
			this.handleGenerate();
		}
	};

	insertVarFactory = ( name ) => {
		return () => {
			let newCode = this.state.code.substring( 0, this.state.selection );
			let replacement = 'datum';
			const literal =
				!contains( name, ' ' ) &&
				!contains( name, '.' ) &&
				!RE_DIGITS_START.test( name );
			replacement += literal ? `.${name}` : `['${name}']`;
			newCode += replacement;
			newCode += this.state.code.substring( this.state.selection );
			this.setState({
				code: newCode,
				selection: this.state.selection + replacement.length
			});
		};
	};

	insertLiteralFactory = ( operator ) => {
		return () => {
			let newCode = this.state.code.substring( 0, this.state.selection );
			const replacement = operator;
			newCode += replacement;
			newCode += this.state.code.substring( this.state.selection );
			this.setState({
				code: newCode,
				selection: this.state.selection + replacement.length
			});
		};
	};

	insertFuncFactory = ( funcName ) => {
		return () => {
			let newCode = this.state.code.substring( 0, this.state.selection );
			const replacement = ' '+funcName+'()';
			newCode += replacement;
			newCode += this.state.code.substring( this.state.selection );
			this.setState({
				code: newCode,
				selection: this.state.selection + replacement.length - 1
			});
		};
	};

	render() {
		const { t } = this.props;
		const continuousItems = this.props.quantitative.map( ( v, i ) => {
			return <Dropdown.Item key={i} onClick={this.insertVarFactory( v )} eventKey={i}>{v}</Dropdown.Item>;
		});
		return (
			<Draggable cancel=".card-body" onDragStart={( event ) => {
				event.stopPropagation();
			}} style={{ zIndex: 1006 }} >
				<FocusTrap focusTrapOptions={FOCUS_TRAP_OPTIONS} >
					<Panel
						show={this.props.show}
						onHide={this.props.onHide}
						header={this.props.t('formula-transformer-header')}
						footer={<Button onClick={this.handleGenerate} disabled={!validateName( this.state.name )} >{this.props.t('create-new-variable')}</Button>}
						role="button" tabIndex={0}
						bodyStyle={{
							maxHeight: 'calc(100vh - 200px)',
							overflowY: 'auto',
							position: 'relative'
						}}
					>
						<div className="formula-transformer-body">
							<Collapse headerClassName="title" header={this.state.showGuide ? t('hide-example-guide') : t('show-example-guide')} visible={this.state.showGuide} onClick={() => this.setState({ showGuide: !this.state.showGuide })}>
								<p>{t('formula-transformer-example-intro')}</p>
								<Table condensed >
									<thead>
										<tr>
											<th>{t('type')}</th>
											<th>{t('example')}</th>
											<th>{t('description')}</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{t('interaction')}:</td>
											<td><code>datum.{this.props.quantitative[0]} * datum.{this.props.quantitative[1]}</code></td>
											<td>
												<Trans i18nKey="example-description-multiply" ns="DataExplorer" >
													Multiply values of variables <code>{{ first: this.props.quantitative[0] }}</code> and <code>{{ second: this.props.quantitative[1] }}</code>
												</Trans>
											</td>
										</tr>
										<tr>
											<td>{t('transformation')}:</td>
											<td><code>exp( datum.{this.props.quantitative[0]} )</code></td>
											<td>
												<Trans i18nKey="example-description-exponential" ns="DataExplorer" >
													Natural exponential function of variable <code>{{ variable: this.props.quantitative[0] }}</code>
												</Trans>
											</td>
										</tr>
										<tr>
											<td>{t('function')}:</td>
											<td><code>9/5 * {this.props.quantitative[0]} + 32</code></td>
											<td>
												<Trans i18nKey="example-description-calculation" ns="DataExplorer" >
													Multiply values of <code>{{ variable: this.props.quantitative[0] }}</code> by <code>9/5</code> and add <code>32</code>
												</Trans>
											</td>
										</tr>
									</tbody>
								</Table>
							</Collapse>
							<hr />
							<div className="mb-2" >
								<ButtonToolbar style={{ marginBottom: 5 }} >
									<Dropdown className="mr-2">
										<Dropdown.Toggle variant="light" id="dropdown-custom-components">
											{t('quantitative')}
										</Dropdown.Toggle>
										<Dropdown.Menu variant="light" as={CustomMenu} id="bg-nested-dropdown">
											{continuousItems}
										</Dropdown.Menu>
									</Dropdown>
									<Dropdown className="mr-2">
										<Dropdown.Toggle variant="light" id="dropdown-custom-components">
											{t('categorical')}
										</Dropdown.Toggle>
										<Dropdown.Menu variant="light" as={CustomMenu} id="bg-nested-dropdown">
											{this.props.categorical.map( ( v, i ) => {
												return <Dropdown.Item key={i} onClick={this.insertVarFactory( v )} eventKey={i}>{v}</Dropdown.Item>;
											})}
										</Dropdown.Menu>
									</Dropdown>
								</ButtonToolbar>
							</div>
							<Card className="mb-2" >
								<Card.Body>
									<ButtonToolbar style={{ marginBottom: 5 }} >
										<ButtonGroup size="sm" className="mr-2" >
											<Tooltip placement="top" tooltip={t('smaller-than')} ><Button variant="light" onClick={this.insertLiteralFactory(' < ')} >{'<'}</Button></Tooltip>
											<Tooltip placement="top" tooltip={t('greater-than')} ><Button variant="light" onClick={this.insertLiteralFactory(' > ')} >{'>'}</Button></Tooltip>
											<Tooltip placement="top" tooltip={t('smaller-or-equal')} ><Button variant="light" onClick={this.insertLiteralFactory(' <= ')} >{'<='}</Button></Tooltip>
											<Tooltip placement="top" tooltip={t('greater-or-equal')} ><Button variant="light" onClick={this.insertLiteralFactory(' >= ')} >{'>='}</Button></Tooltip>
										</ButtonGroup>
										<ButtonGroup size="sm" className="mr-2" >
											<Tooltip placement="top" tooltip={t('open-parenthesis')} ><Button variant="light" onClick={this.insertLiteralFactory(' ( ')} >(</Button></Tooltip>
											<Tooltip placement="top" tooltip={t('closing-parenthesis')} ><Button variant="light" onClick={this.insertLiteralFactory(' ) ')} >)</Button></Tooltip>
										</ButtonGroup>
										<ButtonGroup size="sm" className="mr-2" >
											<Tooltip placement="top" tooltip={t('addition')}><Button variant="light" onClick={this.insertLiteralFactory(' + ')} >+</Button></Tooltip>
											<Tooltip placement="top" tooltip={t('subtraction')}><Button variant="light" onClick={this.insertLiteralFactory(' - ')} >-</Button></Tooltip>
											<Tooltip placement="top" tooltip={t('multiplication')}><Button variant="light" onClick={this.insertLiteralFactory(' * ')} >*</Button></Tooltip>
											<Tooltip placement="top" tooltip={t('division')}><Button variant="light" onClick={this.insertLiteralFactory(' / ')} >/</Button></Tooltip>
										</ButtonGroup>
										<ButtonGroup size="sm" className="mr-2" >
											<Tooltip placement="top" tooltip={t('boolean-and')}><Button variant="light" onClick={this.insertLiteralFactory(' && ')} >{t('and')}</Button></Tooltip>
											<Tooltip placement="top" tooltip={t('boolean-or')}><Button variant="light" onClick={this.insertLiteralFactory(' || ')} >{t('or')}</Button></Tooltip>
											<Tooltip placement="top" tooltip={t('boolean-not')}><Button variant="light" onClick={this.insertLiteralFactory(' !')} >{t('not')}</Button></Tooltip>
										</ButtonGroup>
									</ButtonToolbar>
									<ButtonToolbar style={{ marginBottom: 5 }} >
										<ButtonGroup size="sm" className="mr-2" >
											{DIGITS.map( ( d, i ) => {
												return <Button key={i} variant="light" onClick={this.insertLiteralFactory( `${d}`)} >{d}</Button>;
											})}
											<Button variant="light" onClick={this.insertLiteralFactory('.')} >.</Button>
										</ButtonGroup>
									</ButtonToolbar>
									<ButtonToolbar>
										<ButtonGroup size="sm" className="me-2" >
											{FUNCTION_KEYS.map( ( v, i ) => {
												return ( <Tooltip key={i} placement="bottom" tooltip={t(v+'-tooltip')} >
													<Button variant="light" onClick={this.insertFuncFactory( v )} eventKey={i}>{v}</Button>
												</Tooltip> );
											})}
										</ButtonGroup>
									</ButtonToolbar>
								</Card.Body>
							</Card>
							<Card className="mb-2" >
								<Card.Body>
									<TextArea
										ref={div => { this.textarea = div; }}
										legend={`${t('expression')}:`}
										placeholder={t('enter-formula')}
										value={this.state.code}
										onChange={this.handleCodeChange}
										onBlur={( event ) => {
											const selectionStart = event.target.selectionStart;
											this.setState({
												selection: selectionStart
											});
										}}
										rows={3}
									/>
								</Card.Body>
							</Card>
							<FormGroup style={{ margin: 8 }}>
								<FormLabel>{t('name-new-variable')}:</FormLabel>
								<FormControl
									type="text"
									placeholder={t('select-name')}
									onChange={this.handleNameChange}
									onKeyPress={this.handleKeyPress}
								/>
								<FormText>
									{t('new-variable-appended')}
								</FormText>
							</FormGroup>
							<ToggleButtonGroup
								name="options"
								onChange={( value ) => {
									this.setState({
										asCategorical: value
									});
								}}
								type="radio"
								size="small"
								value={this.state.asCategorical}
								style={{ padding: 6 }}
							>
								<ToggleButton
									id="data-explorer-transform-toggle-quantitative"
									variant="outline-secondary"
									value={false}
								>
									{t('treat-as-quantitative')}
								</ToggleButton>
								<ToggleButton
									id="data-explorer-transform-toggle-categorical"
									variant="outline-secondary"
									value={true}
								>
									{t('treat-as-categorical')}
								</ToggleButton>
							</ToggleButtonGroup>
						</div>
					</Panel>
				</FocusTrap>
			</Draggable>
		);
	}
}


// PROPERTIES //

FormulaTransformer.defaultProps = {
	logAction() {},
	onGenerate() {},
	defaultCode: '',
	session: {}
};

FormulaTransformer.propTypes = {
	show: PropTypes.bool.isRequired,
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	defaultCode: PropTypes.string,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func,
	onHide: PropTypes.func.isRequired,
	session: PropTypes.object
};


// EXPORTS //

export default FormulaTransformer;
