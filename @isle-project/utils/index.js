// MODULES //

import add from '@isle-project/utils/add';
import animatePosition from '@isle-project/utils/animate-position';
import base64toBlob from '@isle-project/utils/base64-to-blob';
import beforeUnload from '@isle-project/utils/before-unload';
import blobToBase64 from '@isle-project/utils/blob-to-base64';
import by from '@isle-project/utils/by';
import by2 from '@isle-project/utils/by2';
import camelcase from '@isle-project/utils/camelcase';
import closeHintButtons from '@isle-project/utils/close-hint-buttons';
import divide from '@isle-project/utils/divide';
import escapeLaTeX from '@isle-project/utils/escape-latex';
import extractCategoriesFromValues from '@isle-project/utils/extract-categories-from-values';
import extractUsedCategories from '@isle-project/utils/extract-used-categories';
import factor from '@isle-project/utils/factor-variable';
import saveAs from '@isle-project/utils/file-saver';
import formatError from '@isle-project/utils/format-error';
import formatTime from '@isle-project/utils/format-time';
import getLastAction from '@isle-project/utils/get-last-action';
import html2clipboard from '@isle-project/utils/html-to-clipboard';
import imgToStr from '@isle-project/utils/image-to-str';
import isElectron from '@isle-project/utils/is-electron';
import isHidden from '@isle-project/utils/is-hidden';
import isLineButtons from '@isle-project/utils/is-line-buttons';
import isLineWrapper from '@isle-project/utils/is-line-wrapper';
import isUserInCohort from '@isle-project/utils/is-user-in-cohort';
import convertJSONtoJSX from '@isle-project/utils/json-to-jsx';
import createCSSRuleSet from '@isle-project/utils/jsx-to-css';
import kernelSmoothDensity from '@isle-project/utils/kernel-smooth-density';
import calculateLinearRegressionCoefficients from '@isle-project/utils/linear-regression/calculate_coefficients.js';
import loadBinaryImage from '@isle-project/utils/load-binary-image';
import mmult from '@isle-project/utils/mmult';
import multiply from '@isle-project/utils/multiply';
import obsToVar from '@isle-project/utils/obs-to-var';
import permute from '@isle-project/utils/permute';
import pixelsToNumber from '@isle-project/utils/pixels-to-number';
import randomName from '@isle-project/utils/randomname';
import renderTime from '@isle-project/utils/render-time';
import retrieveUserGroup from '@isle-project/utils/retrieve-user-group';
import scrollTo from '@isle-project/utils/scroll-to';
import spellChecker from '@isle-project/utils/spell-checker';
import statistic from '@isle-project/utils/statistic';
import stopDefaultAndPropagation from '@isle-project/utils/stop-default-and-propagation';
import stopPropagation from '@isle-project/utils/stop-propagation';
import subtract from '@isle-project/utils/subtract';
import svg from '@isle-project/utils/svg';
import toNumber from '@isle-project/utils/to-number';
import today from '@isle-project/utils/today';
import transpose from '@isle-project/utils/transpose';
import uid from '@isle-project/utils/uid';
import updateLesson from '@isle-project/utils/update-lesson';
import zIndexAdjustment from '@isle-project/utils/z-index-adjustment';
import zScore from '@isle-project/utils/zscore';


// MAIN //

const scope = {
	add,
	animatePosition,
	base64toBlob,
	beforeUnload,
	blobToBase64,
	by,
	by2,
	camelcase,
	closeHintButtons,
	divide,
	escapeLaTeX,
	extractCategoriesFromValues,
	extractUsedCategories,
	factor,
	saveAs,
	formatError,
	formatTime,
	getLastAction,
	html2clipboard,
	imgToStr,
	isElectron,
	isHidden,
	isLineButtons,
	isLineWrapper,
	isUserInCohort,
	convertJSONtoJSX,
	createCSSRuleSet,
	kernelSmoothDensity,
	calculateLinearRegressionCoefficients,
	loadBinaryImage,
	mmult,
	multiply,
	obsToVar,
	permute,
	pixelsToNumber,
	randomName,
	renderTime,
	retrieveUserGroup,
	scrollTo,
	spellChecker,
	statistic,
	stopDefaultAndPropagation,
	stopPropagation,
	subtract,
	svg,
	toNumber,
	today,
	transpose,
	uid,
	updateLesson,
	zIndexAdjustment,
	zScore
};


// EXPORTS //

export default scope;
