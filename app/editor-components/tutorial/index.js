// MODULES //

import React, { useCallback, useEffect, useState, useRef } from 'react';
import Joyride, { ACTIONS, EVENTS, STATUS } from '@isle-project/components/joyride';
import { useTranslation } from 'react-i18next';
import { pasteInsertion } from 'actions';
import { connect } from 'react-redux';


// VARIABLES //

const HIDE_NEXT_BUTTON = {
	buttonNext: {
		display: 'none'
	}
};
let currentStep = 0;


// MAIN //

const EditorTutorial = ({ onFinish, pasteInsertion }) => {
	const [ run, setRun ] = useState( true );
	const { t } = useTranslation( 'Tutorial' );
	const [ stepIndex, setStepIndex ] = useState( currentStep );
	const addNextHandler = useCallback( ( node, index, triggerEvent = 'click' ) => {
		function onEvent() {
			node.removeEventListener( triggerEvent, onEvent );
			setTimeout( () => {
				setStepIndex( index + 2 );
			}, 400 );
		}
		node.addEventListener( triggerEvent, onEvent );
	}, [] );
	useEffect( () => {
		return () => {
			currentStep = stepIndex;
		};
	});
	const steps = useRef([
		{
			target: '.SplitPane',
			content: t('two-panes'),
			placement: 'auto',
			disableBeacon: true
		},
		{
			target: '.react-monaco-editor-container',
			content: t('monaco-editor'),
			placement: 'top-start',
			disableBeacon: true
		},
		{
			target: '#Lesson',
			content: t('live-preview'),
			placement: 'left-start'
		},
		{
			target: '.line-buttons-jump',
			content: t('click-button-to-jump'),
			styles: HIDE_NEXT_BUTTON,
			disableOverlayClose: true,
			hideCloseButton: true
		},
		{
			target: '.react-monaco-editor-container',
			content: t('back-in-editor'),
			placement: 'top-start',
			disableBeacon: true
		},
		{
			target: '.react-monaco-editor-container',
			content: t('polaroid-hover'),
			placement: 'auto',
			disableBeacon: true
		},
		{
			target: '.react-monaco-editor-container',
			content: t('polaroid-lightbulb'),
			placement: 'top-start',
			disableOverlayClose: true,
			hideCloseButton: true
		},
		{
			target: '.react-monaco-editor-container',
			content: t('polaroid-double-click'),
			placement: 'top-start',
			disableOverlayClose: true,
			hideCloseButton: true
		},
		{
			target: '#Lesson',
			content: t('polaroid-wizard'),
			placement: 'top-start'
		},
		{
			target: '#linting-and-spelling',
			content: t('linting-and-spelling')
		},
		{
			target: '#keyboard-shortcuts',
			content: t('keyboard-shortcuts')
		},
		{
			target: '#markdown-help',
			content: t('markdown-help')
		},
		{
			target: '#animation-help',
			content: t('animation-help')
		},
		{
			target: '#translate-lesson',
			content: t('translate-lesson')
		},
		{
			target: '#link-export',
			content: t('link-export')
		},
		{
			target: '#link-settings',
			content: t('link-settings')
		},
		{
			target: '#link-docs',
			content: t('link-docs')
		},
		{
			target: '#change-online-mode',
			content: t('change-online-mode')
		},
		{
			target: '#header-role-in-preview',
			content: t('header-role-in-preview')
		},
		{
			target: '#header-preview-button',
			content: t('header-preview-button')
		}
	]);

	const handleCallback = useCallback( ( data ) => {
		const { action, index, status, type } = data;
		if ( [ EVENTS.STEP_AFTER ].includes( type ) ) {
			// Update state to advance the tour
			switch ( index ) {
				case 2: {
					setStepIndex( index + ( action === ACTIONS.PREV ? -1 : 1 ) );
					const node = document.querySelector( steps.current[ index ].target );
					addNextHandler( node, index );
				}
				break;
				case 3:
					setStepIndex( index + ( action === ACTIONS.PREV ? -1 : 1 ) );
					pasteInsertion({
						text: '<Polaroid image="https://bit.ly/2OlDrIY" />'
					});
				break;
				default:
					setStepIndex( index + ( action === ACTIONS.PREV ? -1 : 1 ) );
				break;
			}
		}
		else if ([ STATUS.FINISHED, STATUS.SKIPPED ].includes( status ) ) {
			// Need to set our running state to false, so we can restart if we click start again.
			setRun( false );
			currentStep = 0;
		}
		if ( type === EVENTS.TOUR_END ) {
			setRun( false );
			onFinish();
		}
	}, [ onFinish, pasteInsertion, steps, addNextHandler ] );
	return (
		<Joyride
			run={run}
			stepIndex={stepIndex}
			showProgress
			disableScrolling
			continuous
			spotlightPadding={5}
			spotlightClicks
			steps={steps.current}
			callback={handleCallback}
			styles={{
				options: {
					zIndex: 1100
				}
			}}
		/>
	);
};


// EXPORTS //

export default connect( mapStateToProps, { pasteInsertion } )( EditorTutorial );

function mapStateToProps() {
	return {};
}
