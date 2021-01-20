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
				<Image alt="Answering Questions" src={`${location.origin}/screenshots/answering_question.gif`} width={600} height={198} />
			</div>

			<h3>{t('questions-p2')}</h3>

			<p>{t('questions-p3')}</p>

			<h3>{t('questions-p4')}</h3>

			<div className="centered" style={{ width: 'fit-content' }} >
				<Image alt={t('questions-p4')} src={`${location.origin}/screenshots/feedback_buttons.png`} width={184} height={53} />
			</div>

			<p>{t('questions-p5')}</p>

			<h3>{t('questions-p6')}</h3>

			<p>{t('questions-p7')}</p>

			<div className="centered" style={{ width: 'fit-content' }} >
				<Image alt="Next Question Navigation" src="https://isle.stat.cmu.edu/data-explorers_question_nav_next.gif" width={600} height={209} />
			</div>

			<div className="centered" style={{ width: 'fit-content' }} >
				<Image alt="Question Number Navigation" src="https://isle.stat.cmu.edu/data-explorers_question_nav_num.gif" width={600} height={300} />
			</div>

		</div>
	);
};


// EXPORTS //

export default main;
