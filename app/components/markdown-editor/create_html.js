// MAIN //

const createHTML = ( title, body, fontSize ) => `<!doctype html>
<html lang=en>
	<head>
		<meta charset=utf-8>
		<title>${title}</title>
		<link rel="shortcut icon" href="favicon.ico" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.css" integrity="sha384-B41nY7vEWuDrE9Mr+J2nBL0Liu+nl/rBXTdpQal730oTHdlrlXHzYMOhDU60cwde" crossorigin="anonymous">
		<link href='https://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet' type='text/css' />
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet" />
		<style media="screen" type="text/css">
			body {
				font-family: 'Open Sans', sans-serif;
				font-size: ${fontSize}px !important;
				margin-left: auto;
				margin-right: auto;
				padding: 10px;
				width: 100%;
				max-width: 1200px;
				height: 100%;
				display: block;
			}

			h1 {
				color: #2e4468;
				font-size: ${fontSize + 24}px !important;
				font-weight: bold;
				letter-spacing: 1px;
			}

			h2 {
				font-size: ${fontSize + 16}px !important;
				color: #3c763d;
				font-weight: 600;
			}

			h3 {
				font-size: ${fontSize + 8}px !important;
				color: #2e4468;
				font-weight: 600;
			}

			h4 {
				font-size: ${fontSize + 4}px !important;
				color: #ca5800;
				font-weight: 600;
			}

			tr {
				display: table-row;
				vertical-align: inherit;
				border-color: inherit;
			}

			th {
				color: #464a4c;
				background-color: #eceeef;
				padding: .3rem;
				border-top: 1px solid #eceeef;
				text-align: left;
				font-weight: bold;
			}

			th, td {
				display: table-cell;
			}

			td {
				padding: .3rem;
				vertical-align: top;
				border-top: 1px solid #eceeef;
			}

			thead {
				display: table-header-group;
				vertical-align: middle;
			}

			table {
				width: 100%;
				max-width: 100%;
				margin-bottom: 1rem;
				display: table;
				border-spacing: 2px;
				border-color: grey;
				text-align: left;
			}

			a {
				color: #2e4468;
			}

			pre {
				display: block;
				padding: 9.5px;
				margin: 0 0 10px;
				line-height: 1.42857143;
				color: #333;
				word-break: break-all;
				word-wrap: break-word;
				border: 1px solid #ccc;
				border-radius: 4px;
			}

			code {
				white-space: pre-wrap;
			}

			.center {
				width: 50%;
				display: block;
				margin: 0 auto;
				text-align: center;
			}

			blockquote {
				font-size: ${fontSize + 3.5}px;
				padding: 10px 20px;
				margin: 0px 0px 20px;
				border-left: 5px solid rgb(238, 238, 238);
			}

			.tooltip {
				top: 0%;
				right: -10%;
				background-color: lightgray;
				color: black;
				border-radius: 5px;
				opacity: 0;
				padding: 15px;
				position: absolute;
				-webkit-transition: opacity 0.5s;
				-moz-transition: opacity 0.5s;
				-ms-transition: opacity 0.5s;
				-o-transition: opacity 0.5s;
				transition: opacity 0.5s;
			}

			.img-container {
				position: relative;
			}

			.img-container:hover .tooltip {
				opacity: 1;
			}

			.json-markup {
				font-size: 20px;
				white-space: pre;
			}

			.json-markup-key {
				font-weight: bold;
			}

			.json-markup-bool {
				color: lightcoral;
			}

			.json-markup-string {
				color: darkgreen;
			}

			.json-markup-null {
				color: gray;
			}

			.json-markup-number {
				color: steelblue;
			}
		</style>
		<script src="https://use.fontawesome.com/1ef7eff9d5.js"></script>
	</head>
	<body>
	${body}
	</body>
</html>`;


// EXPORTS //

export default createHTML;
