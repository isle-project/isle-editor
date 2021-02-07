/* eslint-disable jsx-a11y/no-static-element-interactions */

/**
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

// MODULES //

import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import CopyToClipboard from 'react-copy-to-clipboard';
import clsx from 'clsx';
import styles from './styles.module.css';
import './load_datasets.js';


// FUNCTIONS //

function preventPropagation( event ) {
	// Prevent propagation to avoid triggering Algolia when typing `/`:
	event.stopPropagation();
}


// MAIN //

function Playground({ children, theme, transformCode, ...props }) {
	const [ copied, setCopied ] = useState( false );
	return (
		<LiveProvider
			code={children.replace(/\n$/, '')}
			theme={theme}
			transformCode={( code ) => {
				return '<Provider session={session}><Lesson className="Lesson" >'+code+'</Lesson></Provider>;';
			}}
			{...props}>
			<div
				className={clsx(
					styles.playgroundHeader,
					styles.playgroundEditorHeader,
				)}
			>
				Live Editor
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
				)}>
				Result
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
