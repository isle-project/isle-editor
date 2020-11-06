// MODULES //

import React from 'react';
import Provider from 'components/provider';
import Session from 'session';
import 'css/lesson.css';
import './i18n.js';

import Loadable from 'components/internal/loadable';
import EnlargeableGrid from 'components/enlargeable-grid';
import TeX from 'components/tex';
import Dashboard from 'components/dashboard';
import CheckboxInput from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import ProportionsInput from 'components/input/proportions';
import SelectInput from 'components/input/select';
import SliderInput from 'components/input/slider';
import TextInput from 'components/input/text';
import TextArea from 'components/input/text-area';
import VoiceInput from 'components/input/voice';

import Accordion from 'components/accordion';
import Animated from 'components/animated';
import Background from 'components/background';
import BeaconTooltip from 'components/beacon-tooltip';
import Bibliography from 'components/bibliography';
import Citation from 'components/citation';
import Clock from 'components/clock';
import Collapse from 'components/collapse';
import ColorPicker from 'components/color-picker';
import DataExplorer from 'components/data-explorer';
import DataTable from 'components/data-table';
import DataSampler from 'components/data-sampler';
import DateDisplay from 'components/date-display';
import DensityPlot from 'components/d3/density-plot';
import DraggableGrid from 'components/draggable-grid';
import DraggableList from 'components/draggable-list';
import Expire from 'components/expire';
import FeedbackButtons from 'components/feedback';
import ImageQuestion from 'components/questions/image';
import FlippableCard from 'components/flippable-card';
import FreeTextSurvey from 'components/free-text-survey';
import FreeTextQuestion from 'components/questions/free-text';
import Gate from 'components/gate';
import Generator from 'components/generator';
import Container from 'components/container';
import IFrame from 'components/iframe';
import Image from 'components/image';
import Joyride from 'components/joyride';
import JSShell from 'components/js-shell';
import KeyControls from 'components/key-controls';
import Lesson from 'components/internal/lesson';
import LearnCausalityDiagram from 'components/learn/causality-diagram';
import LearnCrossValidation from 'components/learn/cross-validation';
import LearnDiceThrowing from 'components/learn/dice-throwing';
import LearnBetaDistribution from 'components/learn/distribution-beta';
import LearnBinomialDistribution from 'components/learn/distribution-binomial';
import LearnChisquareDistribution from 'components/learn/distribution-chisquare';
import LearnExponentialDistribution from 'components/learn/distribution-exponential';
import LearnFDistribution from 'components/learn/distribution-f';
import LearnGammaDistribution from 'components/learn/distribution-gamma';
import LearnGeometricDistribution from 'components/learn/distribution-geometric';
import LearnHypergeometricDistribution from 'components/learn/distribution-hypergeometric';
import LearnNegativeBinomialDistribution from 'components/learn/distribution-negative-binomial';
import LearnNormalDistribution from 'components/learn/distribution-normal';
import LearnPoissonDistribution from 'components/learn/distribution-poisson';
import LearnTDistribution from 'components/learn/distribution-t';
import LearnUniformDistribution from 'components/learn/distribution-uniform';
import LearnStandardize from 'components/learn/standardize';
import LearnContinuousCLT from 'components/learn/clt-continuous';
import LearnDiscreteCLT from 'components/learn/clt-discrete';
import LearnNetworks from 'components/learn/networks';
import LearnSampleCLT from 'components/learn/clt-sample';
import LearnConfidenceCoverageBinomial from 'components/learn/confidence-coverage-binomial';
import LearnConfidenceCoverageNormal from 'components/learn/confidence-coverage-normal';
import LearnConfidenceCoverageSample from 'components/learn/confidence-coverage-sample';
import LearnContinuousDistribution from 'components/learn/continuous-distribution';
import LearnDiscreteDistribution from 'components/learn/discrete-distribution';
import LearnMeanTest from 'components/learn/hypothesis-testing-mean';
import LearnProportionTest from 'components/learn/hypothesis-testing-proportion';
import LearnMeanVSMedian from 'components/learn/mean-vs-median';
import LearnStatisticalModels from 'components/learn/statistical-models';
import LearnSOTU from 'components/learn/sotu';
import LearnConditionalProbability from 'components/learn/conditional-probability';
import LearnVennDiagramBuilder from 'components/learn/venn-diagram-builder';
import LearnWordVennDiagram from 'components/learn/word-venn-diagram';
import LearnImagePixelPicker from 'components/learn/image-pixel-picker';
import LessonSubmit from 'components/lesson-submit';
import LikertScale from 'components/likert-scale';
import Link from 'components/link';
import MatchListQuestion from 'components/questions/match-list';
import Metrics from 'components/metrics/db';
import MetricsContingencyTable from 'components/metrics/contingency-table';
import MultiCards from 'components/multi-cards';
import MultipleChoiceMatrix from 'components/questions/multiple-choice-matrix';
import MultipleChoiceQuestion from 'components/questions/multiple-choice';
import MultipleChoiceSurvey from 'components/multiple-choice-survey';
import NetworkPlot from 'components/d3/network-plot';
import News from 'components/news';
import NumberQuestion from 'components/questions/number';
import NumberSurvey from 'components/number-survey';
import OrderQuestion from 'components/questions/order';
import Pages from 'components/pages';
import Panel from 'components/panel';
import Plotly from 'components/plotly';
import Polaroid from 'components/polaroid';
import QRCode from 'components/qrcode';
import StickyNote from 'components/sticky-note';
import Preload from 'components/preload';
import ProportionsSurvey from 'components/proportions-survey';
import QuestionForm from 'components/questions/question-form';
import Quiz from 'components/questions/quiz';
import RandomVideo from 'components/random-video';
import RangeQuestion from 'components/questions/range';
import Reaction from 'components/reaction';
import RealTimeMetrics from 'components/metrics/realtime';
import Recorder from 'components/recorder';
import Revealer from 'components/revealer';
import RPlot from 'components/r/plot';
import RHelp from 'components/r/help';
import RShell from 'components/r/shell';
import RTable from 'components/r/table';
import ROutput from 'components/r/output';
import Runner from 'components/runner';
import Seal from 'components/seal';
import ScrollingText from 'components/scrolling-text';
import SelectQuestion from 'components/questions/select';
import SelectQuestionMatrix from 'components/questions/select-matrix';
import ShapedForm from 'components/shaped-form';
import ShapedImage from 'components/shaped-image';
import Sketchpad from 'components/sketchpad';
import Slider from 'components/slider';
import Spinner from 'components/internal/spinner';
import StatusBar from 'components/internal/statusbar';
import TextEditor from 'components/text-editor';
import Toolbar from 'components/internal/toolbar';
import Sunburst from 'components/d3/sunburst';
import Switch from 'components/switch';
import Table from 'components/table';

import Text from 'components/text';
import TimedButton from 'components/timed-button';
import Timer from 'components/timer';
import Tooltip from 'components/tooltip';
import SortableTree from 'components/sortable-tree';
import Typewriter from 'components/typewriter';
import Unveil from 'components/unveil';

import VideoLecture from 'components/video-lecture';
import VideoPlayer from 'components/video-player';
import VoiceControl from 'components/internal/voice-control';
import Weather from 'components/weather';
import Wikipedia from 'components/wikipedia';
import WordCloud from 'components/word-cloud';


// VARIABLES //

const session = new Session({}, true );

const Components = {
	session,
	Provider,
	Loadable,
	EnlargeableGrid,
	TeX,
	Dashboard,
	CheckboxInput,
	NumberInput,
	ProportionsInput,
	SelectInput,
	SliderInput,
	TextInput,
	TextArea,
	VoiceInput,

	Accordion,
	Animated,
	Background,
	BeaconTooltip,
	Bibliography,
	Citation,
	Clock,
	Collapse,
	ColorPicker,
	DataExplorer,
	DataTable,
	DataSampler,
	DateDisplay,
	DensityPlot,
	DraggableGrid,
	DraggableList,
	Expire,
	FeedbackButtons,
	ImageQuestion,
	FlippableCard,
	FreeTextSurvey,
	FreeTextQuestion,
	Gate,
	Generator,
	Container,
	IFrame,
	Image,
	Joyride,
	JSShell,
	KeyControls,
	Lesson,
	LearnCausalityDiagram,
	LearnCrossValidation,
	LearnDiceThrowing,
	LearnBetaDistribution,
	LearnBinomialDistribution,
	LearnChisquareDistribution,
	LearnExponentialDistribution,
	LearnFDistribution,
	LearnGammaDistribution,
	LearnGeometricDistribution,
	LearnHypergeometricDistribution,
	LearnNegativeBinomialDistribution,
	LearnNormalDistribution,
	LearnPoissonDistribution,
	LearnTDistribution,
	LearnUniformDistribution,
	LearnStandardize,
	LearnContinuousCLT,
	LearnDiscreteCLT,
	LearnNetworks,
	LearnSampleCLT,
	LearnConfidenceCoverageBinomial,
	LearnConfidenceCoverageNormal,
	LearnConfidenceCoverageSample,
	LearnContinuousDistribution,
	LearnDiscreteDistribution,
	LearnMeanTest,
	LearnProportionTest,
	LearnMeanVSMedian,
	LearnStatisticalModels,
	LearnSOTU,
	LearnConditionalProbability,
	LearnVennDiagramBuilder,
	LearnWordVennDiagram,
	LearnImagePixelPicker,
	LessonSubmit,
	LikertScale,
	Link,
	MatchListQuestion,
	Metrics,
	MetricsContingencyTable,
	MultiCards,
	MultipleChoiceMatrix,
	MultipleChoiceQuestion,
	MultipleChoiceSurvey,
	NetworkPlot,
	News,
	NumberQuestion,
	NumberSurvey,
	OrderQuestion,
	Pages,
	Panel,
	Plotly,
	Polaroid,
	QRCode,
	StickyNote,
	Preload,
	ProportionsSurvey,
	QuestionForm,
	Quiz,
	RandomVideo,
	RangeQuestion,
	Reaction,
	RealTimeMetrics,
	Recorder,
	Revealer,
	RPlot,
	RHelp,
	RShell,
	RTable,
	ROutput,
	Runner,
	Seal,
	ScrollingText,
	SelectQuestion,
	SelectQuestionMatrix,
	ShapedForm,
	ShapedImage,
	Sketchpad,
	Slider,
	Spinner,
	StatusBar,
	TextEditor,
	Toolbar,
	Sunburst,
	Switch,
	Table,

	Text,
	TimedButton,
	Timer,
	Tooltip,
	SortableTree,
	Typewriter,
	Unveil,

	VideoLecture,
	VideoPlayer,
	VoiceControl,
	Weather,
	Wikipedia,
	WordCloud
};


// EXPORTS //

export default Components;
