/* eslint-disable jsx-a11y/no-static-element-interactions, react/no-danger, import/no-unresolved */

/**
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

// MODULES //

import React, { useState } from 'react';
import { translate } from '@docusaurus/Translate';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import CopyToClipboard from 'react-copy-to-clipboard';
import vsLight from 'prism-react-renderer/themes/vsLight';
import clsx from 'clsx';
import replace from '@stdlib/string/replace';
import markdownToHTML from 'app/utils/markdown-to-html';
import styles from './styles.module.css';
import './load_globals.js';


// FUNCTIONS //

/**
 * Prevents the propagation of the event to avoid triggering Algolia when typing `/`.
 *
 * @private
 * @param {SyntheticEvent} event
 */
function preventPropagation( event ) {
	event.stopPropagation();
}


// VARIABLES //

const RE_STR_RAW = /String.raw`([^`]+)`/;

/**
 * Transforms code by wrapping it inside a Provider and Lesson component.
 *
 * @private
 * @param {string} code - code to transform
 * @returns {string} transformed code
 */
const transformCode = ( code ) => {
	try {
		code = markdownToHTML( code );
	} catch ( err ) {
		console.error( err ); // eslint-disable-line no-console
	}
	code = code.replace( RE_STR_RAW, ( x, p1 ) => {
		return `String.raw({ raw: '${replace( p1, '\\', '\\\\' )}' })`;  // eslint-disable-line i18next/no-literal-string
	});
	return '<Provider session={session}><Lesson className="Lesson" >'+code+'</Lesson></Provider>;';
};


// MAIN //

/**
 * A playground component.
 */
function Playground({ children, theme, ...props }) {
	const [ copied, setCopied ] = useState( false );
	theme = theme || vsLight;
	return (
		<LiveProvider
			code={children.replace(/\n$/, '')}
			theme={theme}
			{...props}
			transformCode={transformCode}
		>
			<div
				className={clsx(
					styles.playgroundHeader,
					styles.playgroundEditorHeader,
				)}
			>
				{translate({
					id: 'playground.live-editor',
					message: 'Live Editor',
					description: 'Heading of live editor'
				})}
				<CopyToClipboard text={children} >
					<button
						type="button"
						className={clsx(styles.btnCopy)}
						onClick={() => {
							setCopied( true );
						}}
					>
						{ copied ? 'Copied' : 'Copy' }
					</button>
				</CopyToClipboard>
			</div>
			<LiveEditor
				className={styles.playgroundEditor}
				onKeyDown={preventPropagation}
			/>
			<div
				className={clsx(
					styles.playgroundHeader,
					styles.playgroundPreviewHeader,
				)}
			>
				{translate({
					id: 'playground.result',
					message: 'Result',
					description: 'Heading of output pane'
				})}
			</div>
			<div className={styles.playgroundPreview} onKeyDown={preventPropagation} >
				<LivePreview />
				<LiveError />
			</div>
		</LiveProvider>
	);
}


// EXPORTS //

export default Playground;
