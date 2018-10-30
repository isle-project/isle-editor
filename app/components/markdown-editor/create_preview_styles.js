// MAIN //

function createPreviewStyles( fontSize ) {
	fontSize = Number( fontSize );
	return `.editor-preview-active {
				font-size: ${fontSize}px !important;
			}
			.editor-preview-active h1 {
				font-size: ${fontSize + 24}px !important;
			}
			.editor-preview-active h2 {
				font-size: ${fontSize + 16}px !important;
			}
			.editor-preview-active h3 {
				font-size: ${fontSize + 8}px !important;
			}
			.editor-preview-active h4 {
				font-size: ${fontSize + 4}px !important;
			}
			.title-tag {
				font-size: 72px !important;
			}
			.subtitle-tag {
				font-size: 48px !important;
				align
			}
			.editor-preview-active blockquote {
				font-size: ${fontSize + 3.5}px;
				padding: 10px 20px;
				margin: 0px 0px 20px;
				border-left: 5px solid rgb(238, 238, 238);
			}
		</style>`;
}


// EXPORTS //

export default createPreviewStyles;
