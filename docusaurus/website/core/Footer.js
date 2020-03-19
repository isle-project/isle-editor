/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
	docUrl(doc, language) {
		const baseUrl = this.props.config.baseUrl;
		const docsUrl = this.props.config.docsUrl;
		const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
		const langPart = `${language ? `${language}/` : ''}`;
		return `${baseUrl}${docsPart}${langPart}${doc}`;
	}

	pageUrl(doc, language) {
		const baseUrl = this.props.config.baseUrl;
		return baseUrl + (language ? `${language}/` : '') + doc;
	}

	render() {
		return (
			<footer className="nav-footer" id="footer">
				<section className="sitemap">
					<a href={this.props.config.baseUrl} className="nav-home">
						{this.props.config.footerIcon && (
							<img
								src={this.props.config.baseUrl + this.props.config.footerIcon}
								alt={this.props.config.title}
								width="66"
								height="58"
							/>
						)}
					</a>
					<div>
						<h5>Docs</h5>
						<a href={this.docUrl('overview/intro', this.props.language)}>
							Getting Started
						</a>
						<a href={this.docUrl('overview/components', this.props.language)}>
							Components
						</a>
					</div>
					<div>
						<h5>Community</h5>
						<a href="https://github.com/isle-project/isle-editor/issues">Submit a bug report or feature request</a>
						<a href="https://discourse.isledocs.com">Go to the discussion forum</a>
					</div>
					<div>
						<h5>More</h5>
						<a href={`${this.props.config.baseUrl}blog`}>Blog</a>
						<a href="https://github.com/isle-project">GitHub</a>
						<a
							className="github-button"
							href={this.props.config.repoUrl}
							data-icon="octicon-star"
							data-count-href="/facebook/docusaurus/stargazers"
							data-show-count="true"
							data-count-aria-label="# stargazers on GitHub"
							aria-label="Star this project on GitHub">
							Star
						</a>
					</div>
				</section>
				<a
					href="http://stat.cmu.edu/isle"
					target="_blank"
					rel="noreferrer noopener"
					className="fbOpenSource">
				>
					<img
						src={`${this.props.config.baseUrl}img/isle_logo.png`}
						alt="Integrated Statistics Learning Environment"
						width="250"
						height="auto"
					/>
				</a>
				<section className="copyright">{this.props.config.copyright}</section>
			</footer>
		);
	}
}

module.exports = Footer;
