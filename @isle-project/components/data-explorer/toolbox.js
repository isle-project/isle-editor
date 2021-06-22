// MODULES //

import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ResizeObserver from 'resize-observer-polyfill';
import FocusTrap from 'focus-trap-react';
import Loadable from '@isle-project/components/internal/loadable';
import Draggable from '@isle-project/components/draggable';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import isElectron from '@isle-project/utils/is-electron';
import noop from '@stdlib/utils/noop';
const ToolboxTutorialButton = Loadable( () => import( /* webpackChunkName: "ToolboxTutorialButton" */ '@isle-project/components/data-explorer/toolbox-tutorial-button' ) );
const ToolboxTabs = Loadable( () => import( /* webpackChunkName: "ToolboxTabs" */ './toolbox_tabs.js' ) );


// VARIABLES //

const FOCUS_TRAP_OPTIONS = {
	clickOutsideDeactivates: true
};


// MAIN //


const Toolbox = ({ id, categorical, quantitative, originalQuantitative, groupingVariables, logAction, data,
	statistics, tables, models, plots, tests, showHistogramDensityOption, showTestDecisions,
	transformer, onBarchartSelection, onCategoricalGenerate, onCreated, onGenerateTransformedVariable,
	onHistogramSelection, onPlotDone, onQuantitativeGenerate, onBothGenerate,
	on2dSelection, onQQPlotSelection, onTutorialStart, onTutorialCompletion
}) => {
	const { t } = useTranslation( 'data-explorer' );
	const [ disableDragging, setDisableDragging ] = useState( false );
	const [ show, setShow ] = useState( false );
	const [ position, setPosition ] = useState( null );
	const buttonRef = useRef();

	useEffect( () => {
		const resizeObserver = new ResizeObserver( ( entries ) => {
			for ( let entry of entries ) {
				if ( entry.contentBoxSize ) {
					const elem = buttonRef.current;
					const rect = elem.getBoundingClientRect();
					const top = rect.top + document.documentElement.scrollTop;
					setPosition({
						x: 30 + window.pageXOffset,
						y: top
					});
				}
			}
		});
		if ( isElectron ) {
			return noop;
		}
		resizeObserver.observe( document.body );
		return () => {
			resizeObserver.unobserve( document.body );
		};
	}, [] );
	const toggleShow = useCallback( () => {
		if ( !position ) {
			setPosition({
				x: 30 + window.pageXOffset,
				y: 30 + window.pageYOffset
			});
		}
		setShow( !show );
	}, [ position, show ] );

	const button = <Button
		variant="secondary" size="sm" className="hide-toolbox-button"
		onClick={toggleShow} ref={buttonRef}
	>
		{show ? t('hide-toolbox' ) : t( 'show-toolbox' )}
	</Button>;
	if ( !show ) {
		return button;
	}
	return (
		<Fragment>
			{button}
			<Draggable
				cancel=".input"
				disabled={disableDragging}
				bounds={isElectron ? 'window' : 'body'}
				position={position}
				style={{
					position: 'absolute'
				}}
				onStop={( _, { x, y }) => {
					setPosition({ x, y });
				}}
			>
				<FocusTrap focusTrapOptions={FOCUS_TRAP_OPTIONS} >
					<Card
						border="secondary"
						id={id}
						className="data-explorer-toolbox"
						role="button" tabIndex={0}
					>
						<Card.Header className="data-explorer-toolbox-header" >
							<Card.Title
								as="h3" unselectable="on" className="data-explorer-toolbox-title"
							>
								{t('toolbox')}
							</Card.Title>
							<ToolboxTutorialButton
								onTutorialStart={() => {
									setDisableDragging( true );
									onTutorialStart();
								}}
								onTutorialCompletion={() => {
									setDisableDragging( false );
									onTutorialCompletion();
								}}
								for={id}
								t={t}
							/>
							<Button
								variant="secondary"
								size="sm"
								style={{ position: 'absolute', right: '20px' }}
								onClick={toggleShow}
							>{t('hide-toolbox')}</Button>
						</Card.Header>
						<Card.Body className="data-explorer-toolbox-body" >
							<ToolboxTabs
								models={models}
								tables={tables}
								statistics={statistics}
								plots={plots}
								tests={tests}
								quantitative={quantitative}
								originalQuantitative={originalQuantitative}
								categorical={categorical}
								logAction={logAction}
								onCreated={onCreated}
								data={data}
								showTestDecisions={showTestDecisions}
								onPlotDone={onPlotDone}
								groupingVariables={groupingVariables}
								on2dSelection={on2dSelection}
								onQQPlotSelection={onQQPlotSelection}
								transformer={transformer}
								onBarchartSelection={onBarchartSelection}
								showHistogramDensityOption={showHistogramDensityOption}
								onGenerateTransformedVariable={onGenerateTransformedVariable}
								onHistogramSelection={onHistogramSelection}
								onCategoricalGenerate={onCategoricalGenerate}
								onQuantitativeGenerate={onQuantitativeGenerate}
								onBothGenerate={onBothGenerate}
							/>
						</Card.Body>
					</Card>
				</FocusTrap>
			</Draggable>
		</Fragment>
	);
};


// EXPORTS //

export default Toolbox;
