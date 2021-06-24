// MAIN //

const createHTML = ( title, body ) => `<!doctype html>
<html lang=en>
	<head>
		<meta charset=utf-8>
		<title>${title}</title>
		<link rel="shortcut icon" href="favicon.ico" />
		<style media="screen" type="text/css">
			body {
				font-family: 'Open Sans', sans-serif;
				font-size: 12pt;
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
				font-size: 26pt;
				font-weight: bold;
				letter-spacing: 1px;
			}

			h2 {
				font-size: 20pt;
				color: #3c763d;
				font-weight: 600;
			}

			h3 {
				font-size: 18pt;
				color: #2e4468;
				font-weight: 600;
			}

			h4 {
				font-size: 15pt;
				color: #ca5800;
				font-weight: 600;
			}

			h5 {
				font-size: 12pt;
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

			blockquote {
				font-size: 22px;
				padding: 10px 20px;
				margin: 0px 0px 20px;
				border-left: 5px solid lightgray;
				background-color: rgb(238, 238, 238);
			}

			.img-tooltip {
				top: 24px;
				right: 24px;
				width: max-content;
				background-color: lightgray;
				color: black;
				border-radius: 5px;
				text-align: left;
				opacity: 0;
				padding: 15px;
				position: fixed;
				font-size: 22px;
				-webkit-transition: opacity 0.5s;
				-moz-transition: opacity 0.5s;
				-ms-transition: opacity 0.5s;
				-o-transition: opacity 0.5s;
				transition: opacity 0.5s;
				z-index: 9999;
			}

			.img-container {
				position: relative;
			}

			.img-container:hover .img-tooltip {
				opacity: 1;
			}
		</style>
		<script>
			MathJax = {
				loader: { load: [] }
				options: {}
				tex: {
					inlineMath: [
						['$', '$'],
						[ '\\(', '\\)' ]
					],
					displayMath: [
						['$$', '$$'],
						['\\[', '\\]']
					]
				}
			};
		</script>
		<script src="https://kit.fontawesome.com/3a7c01b4b9.js" crossorigin="anonymous"></script>
		<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>
	</head>
	<body>
	${body}
	</body>
</html>`;


// EXPORTS //

export default createHTML;
