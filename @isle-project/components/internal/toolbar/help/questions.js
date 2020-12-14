// MODULES //

import React from 'react';
import Image from '@isle-project/components/image';


// MAIN //

const main = ({ t }) => {
	return (
		<div>
			<h2 style={{ textAlign: 'center' }}>{t('questions-title')}</h2>
			<p>{t('questions-p1')}</p>

			<div className="centered" style={{ width: 'fit-content' }} >
				<Image alt="Answering Questions" src="https://isle.stat.cmu.edu/data-explorers_answering_question.gif" width="400px" height="auto" />
			</div>

			<h3>{t('questions-p2')}</h3>

			<p>{t('questions-p3')}</p>

			<h3>{t('questions-p4')}</h3>

			<div className="centered" style={{ width: 'fit-content' }} >
				<Image alt={t('questions-p4')} src="https://isle.stat.cmu.edu/data-explorers_feedback_buttons.png" width="200px" height="auto" />
			</div>

			<p>{t('questions-p5')}</p>

			<h3>{t('questions-p6')}</h3>

			<p>{t('questions-p7')}</p>

			<div className="centered" style={{ width: 'fit-content' }} >
				<Image alt="Next Question Navigation" src="https://isle.stat.cmu.edu/data-explorers_question_nav_next.gif" width="400px" height="auto" />
			</div>

			<div className="centered" style={{ width: 'fit-content' }} >
				<Image alt="Question Number Navigation" src="https://isle.stat.cmu.edu/data-explorers_question_nav_num.gif" width="400px" height="auto" />
			</div>

		</div>
	);
};


// EXPORTS //

export default main;
