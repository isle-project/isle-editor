(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{2618:function(_,e,t){"use strict";e.a=function _(e,t,r){if(!(r<=0)){var s=(t-e.scrollTop)/r*10;setTimeout((function(){e.scrollTop=e.scrollTop+s,e.scrollTop!==t&&_(e,t,r-10)}),10)}}},4870:function(_){_.exports=JSON.parse('[{"command":"handleEvaluationClick","trigger":["run","evaluate","execute"],"description":"Run the code"},{"command":"resetConsole","trigger":"reset","description":"Reset the console text"}]')},4871:function(_){_.exports=JSON.parse('{"log":{"marginLeft":"8px","marginBottom":"0px","fontFamily":"monospace","color":"darkgreen","whiteSpace":"pre-wrap"},"error":{"marginLeft":"8px","marginBottom":"0px","fontFamily":"monospace","color":"red","fontWeight":800,"whiteSpace":"pre-wrap"},"info":{"marginLeft":"8px","marginBottom":"0px","fontFamily":"monospace","color":"darkcyan","whiteSpace":"pre-wrap"},"warn":{"marginLeft":"8px","marginBottom":"0px","fontFamily":"monospace","color":"darkorange","whiteSpace":"pre-wrap"},"default":{"marginLeft":"8px","marginBottom":"0px","fontFamily":"monospace","color":"darkslategrey"}}')},6440:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(global){var core_js_modules_es6_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(423),core_js_modules_es6_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(440),core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(438),core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(528),core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(543),core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(444),core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(414),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(418),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(427),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(420),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(421),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(419),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(413),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__),_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(406),_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13__),core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(666),core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_14__),core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(417),core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__),core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(428),core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__),react__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__),react_dom__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(23),react_dom__WEBPACK_IMPORTED_MODULE_18___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_18__),prop_types__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(404),prop_types__WEBPACK_IMPORTED_MODULE_19___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_19__),react_i18next__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(4097),react_json_tree__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(4813),react_json_tree__WEBPACK_IMPORTED_MODULE_21___default=__webpack_require__.n(react_json_tree__WEBPACK_IMPORTED_MODULE_21__),_stdlib_assert_has_own_property__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(430),_stdlib_assert_has_own_property__WEBPACK_IMPORTED_MODULE_22___default=__webpack_require__.n(_stdlib_assert_has_own_property__WEBPACK_IMPORTED_MODULE_22__),_stdlib_assert_is_array__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__(451),_stdlib_assert_is_array__WEBPACK_IMPORTED_MODULE_23___default=__webpack_require__.n(_stdlib_assert_is_array__WEBPACK_IMPORTED_MODULE_23__),_stdlib_assert_is_regexp__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__(1535),_stdlib_assert_is_regexp__WEBPACK_IMPORTED_MODULE_24___default=__webpack_require__.n(_stdlib_assert_is_regexp__WEBPACK_IMPORTED_MODULE_24__),_stdlib_assert_is_object_like__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__(917),_stdlib_assert_is_object_like__WEBPACK_IMPORTED_MODULE_25___default=__webpack_require__.n(_stdlib_assert_is_object_like__WEBPACK_IMPORTED_MODULE_25__),_stdlib_math_base_special_max__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__(492),_stdlib_math_base_special_max__WEBPACK_IMPORTED_MODULE_26___default=__webpack_require__.n(_stdlib_math_base_special_max__WEBPACK_IMPORTED_MODULE_26__),_stdlib_string_replace__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__(598),_stdlib_string_replace__WEBPACK_IMPORTED_MODULE_27___default=__webpack_require__.n(_stdlib_string_replace__WEBPACK_IMPORTED_MODULE_27__),react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__(433),react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__(873),react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__(862),_isle_project_components_internal_chat_button__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__(689),_isle_project_components_hint_button__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__(826),codemirror__WEBPACK_IMPORTED_MODULE_33__=__webpack_require__(2780),codemirror__WEBPACK_IMPORTED_MODULE_33___default=__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_33__),_isle_project_utils_scroll_to__WEBPACK_IMPORTED_MODULE_34__=__webpack_require__(2618),_isle_project_utils_uid__WEBPACK_IMPORTED_MODULE_35__=__webpack_require__(609),_isle_project_components_overlay_trigger__WEBPACK_IMPORTED_MODULE_36__=__webpack_require__(819),_isle_project_components_internal_voice_control__WEBPACK_IMPORTED_MODULE_37__=__webpack_require__(962),_isle_project_session_context_js__WEBPACK_IMPORTED_MODULE_38__=__webpack_require__(467),_voice_commands_json__WEBPACK_IMPORTED_MODULE_39__=__webpack_require__(4870),_voice_commands_json__WEBPACK_IMPORTED_MODULE_39___namespace=__webpack_require__.t(4870,1),_console_styles_json__WEBPACK_IMPORTED_MODULE_40__=__webpack_require__(4871),_console_styles_json__WEBPACK_IMPORTED_MODULE_40___namespace=__webpack_require__.t(4871,1),_isle_project_constants_actions_js__WEBPACK_IMPORTED_MODULE_41__=__webpack_require__(473),_isle_project_locales__WEBPACK_IMPORTED_MODULE_42__=__webpack_require__(425),codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_43__=__webpack_require__(4872),codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_43___default=__webpack_require__.n(codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_43__),codemirror_theme_elegant_css__WEBPACK_IMPORTED_MODULE_44__=__webpack_require__(90),codemirror_theme_elegant_css__WEBPACK_IMPORTED_MODULE_44___default=__webpack_require__.n(codemirror_theme_elegant_css__WEBPACK_IMPORTED_MODULE_44__),codemirror_theme_paraiso_light_css__WEBPACK_IMPORTED_MODULE_45__=__webpack_require__(91),codemirror_theme_paraiso_light_css__WEBPACK_IMPORTED_MODULE_45___default=__webpack_require__.n(codemirror_theme_paraiso_light_css__WEBPACK_IMPORTED_MODULE_45__),_js_shell_css__WEBPACK_IMPORTED_MODULE_46__=__webpack_require__(326),_js_shell_css__WEBPACK_IMPORTED_MODULE_46___default=__webpack_require__.n(_js_shell_css__WEBPACK_IMPORTED_MODULE_46__);function ownKeys(_,e){var t=Object.keys(_);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(_);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(_,e).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(_){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(t),!0).forEach((function(e){_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default()(_,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(e){Object.defineProperty(_,e,Object.getOwnPropertyDescriptor(t,e))}))}return _}function _createSuper(_){var e=_isNativeReflectConstruct();return function(){var t,r=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11___default()(_);if(e){var s=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11___default()(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10___default()(this,t)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(_){return!1}}Object(_isle_project_locales__WEBPACK_IMPORTED_MODULE_42__.a)("R"),Object(_isle_project_locales__WEBPACK_IMPORTED_MODULE_42__.a)("SolutionButton");var RE_CONSOLE=/console\.(error|warn|debug|log|info)/g,uid=Object(_isle_project_utils_uid__WEBPACK_IMPORTED_MODULE_35__.a)("js-shell"),THEME={scheme:"bright",author:"chris kempson (http://chriskempson.com)",base00:"#000000",base01:"#303030",base02:"#505050",base03:"#b0b0b0",base04:"#d0d0d0",base05:"#e0e0e0",base06:"#f5f5f5",base07:"#ffffff",base08:"#fb0120",base09:"#fc6d24",base0A:"#fda331",base0B:"#a1c659",base0C:"#76c7b7",base0D:"#6fb3d2",base0E:"#d381c3",base0F:"#be643c"},showSolutionButton=function(_,e,t,r,s){var o=_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_30__.a,{id:"tooltip"},void 0,s("SolutionButton:solution-available-tooltip"));return!_||r<1?_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()(_isle_project_components_overlay_trigger__WEBPACK_IMPORTED_MODULE_36__.a,{placement:"top",positionLeft:100,overlay:o,rootClose:!0},void 0,_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()("span",{style:{display:"inline-block",marginLeft:"4px"}},void 0,_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_28__.a,{variant:"warning",size:"sm",disabled:!0,style:{pointerEvents:"none"}},void 0,s(t?"SolutionButton:hide-solution":"SolutionButton:show-solution")))):_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_28__.a,{variant:"warning",size:"sm",onClick:e},void 0,s(t?"SolutionButton:hide-solution":"SolutionButton:show-solution"))};function makeLog(_,e){var t=_.type||"default",r=_console_styles_json__WEBPACK_IMPORTED_MODULE_40__[t];return _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()("p",{style:r},e,_.msg)}var _ref=_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()("i",{className:"fas fa-times"}),_ref2=_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()("span",{}),_ref3=_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()("br",{}),JSShell=function(_Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(JSShell,_Component);var _super=_createSuper(JSShell);function JSShell(props,context){var _this;if(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this,JSShell),_this=_super.call(this,props),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this),"resetConsole",(function(){_this.setState({log:[]})})),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this),"handleSolutionClick",(function(){var _=_this.editor.getValue(),e=_this.props.solution.replace(/\\n/g,"\n");(!1===_this.state.solutionOpen?(_this.editor.setOption("theme","paraiso-light"),_this.editor.setOption("readOnly",!0)):(_this.editor.setOption("theme","elegant"),_this.editor.setOption("readOnly",!1)),_!==e)?(_this.context.log({id:_this.id,type:_isle_project_constants_actions_js__WEBPACK_IMPORTED_MODULE_41__.pb,value:_}),_this.setState({lastSolution:_,solutionOpen:!_this.state.solutionOpen}),_this.editor.setValue(e,1)):(_this.setState({solutionOpen:!_this.state.solutionOpen}),_this.editor.setValue(_this.state.lastSolution||e,1))})),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this),"handleEvaluationClick",(function(){var currentCode=_this.editor.getValue();currentCode=_stdlib_string_replace__WEBPACK_IMPORTED_MODULE_27___default()(currentCode,RE_CONSOLE,"print.$1");var session=_this.context;session.log({id:_this.id,type:_isle_project_constants_actions_js__WEBPACK_IMPORTED_MODULE_41__.qb,value:currentCode});try{_this.props.check?(currentCode+=";"+_this.props.check,eval(currentCode)):eval(currentCode)}catch(err){var errObj={type:"error",msg:err.message},log=_this.state.log;log.push(errObj),_this.setState({log:log})}_this.props.onEvaluate(currentCode)})),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this),"innerConsole",(function(){global.print={error:_this.printFactory("error"),warn:_this.printFactory("warn"),info:_this.printFactory("info"),log:_this.printFactory("log"),debug:_this.printFactory("debug")}})),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this),"printFactory",(function(_){var e=_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this);return function(){for(var t=[],r=0;r<arguments.length;r++){var s=arguments[r];_stdlib_assert_is_regexp__WEBPACK_IMPORTED_MODULE_24___default()(s)?t.push(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()("span",{className:"js-shell-console-output"},r,s.toString())):_stdlib_assert_is_object_like__WEBPACK_IMPORTED_MODULE_25___default()(s)?t.push(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()(react_json_tree__WEBPACK_IMPORTED_MODULE_21___default.a,{data:s,theme:{extend:THEME,tree:{padding:"0.2em",backgroundColor:"#f3f2f3"}}},r)):t.push(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()("span",{className:"js-shell-console-output"},r,String(s)))}var o={type:_,msg:t},i=e.state.log;i.push(o),e.setState({log:i})}})),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this),"logHint",(function(_){_this.context.log({id:_this.id,type:_isle_project_constants_actions_js__WEBPACK_IMPORTED_MODULE_41__.rb,value:_})})),_this.state={log:[],exhaustedHints:0===props.hints.length,solutionOpen:!1},_this.id=props.id||uid(props),_this.props.vars)for(var key in _this.props.vars)_stdlib_assert_has_own_property__WEBPACK_IMPORTED_MODULE_22___default()(_this.props.vars,key)&&(global[key]=_this.props.vars[key]);return _this}return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(JSShell,[{key:"componentDidMount",value:function(){this.editor=codemirror__WEBPACK_IMPORTED_MODULE_33___default()(this.editorDiv,{mode:"javascript",theme:"elegant",lineNumbers:!0,lineWrapping:!0}),this.editor.setValue(this.props.code,-1),this.editor.on("change",this.props.onChange),this.props.disabled&&(this.editor.setOption("readOnly",!0),this.editor.renderer.$cursorLayer.element.style.opacity=0,this.editor.textInput.getElement().disabled=!0),this.innerConsole(),this.props.precompute&&this.handleEvaluationClick()}},{key:"componentDidUpdate",value:function(_){if(this.props.code!==_.code)this.editor.setValue(this.props.code,1),this.props.precompute&&this.handleEvaluationClick();else if(this.props.disabled!==_.disabled)this.props.disabled?this.editor.setOption("readOnly",!0):this.editor.setOption("readOnly",!1);else{var e=react_dom__WEBPACK_IMPORTED_MODULE_18___default.a.findDOMNode(this),t=e.closest?e.closest(".spectacle-content"):null;if(t){var r=window.getComputedStyle(t).getPropertyValue("transform"),s=/matrix\(([0-9.]*)/.exec(r);if(_stdlib_assert_is_array__WEBPACK_IMPORTED_MODULE_23___default()(s)&&s.length>1){var o=s[1];e.style.transform="scale(".concat(1/o,")")}}}this.scrollToBottom()}},{key:"componentWillUnmount",value:function(){global.print=null}},{key:"showHints",value:function(){var _=this;return _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()(_isle_project_components_hint_button__WEBPACK_IMPORTED_MODULE_32__.a,{hints:this.props.hints,disabled:this.props.disabled,onClick:this.logHint,onFinished:function(){_.setState({exhaustedHints:!0})}})}},{key:"scrollToBottom",value:function(){Object(_isle_project_utils_scroll_to__WEBPACK_IMPORTED_MODULE_34__.a)(this.consoleOutput,this.consoleOutput.scrollHeight,1e3)}},{key:"renderLogs",value:function(){for(var _=this.state.log,e=[],t=0;t<_.length;t++){var r=_[t];e.push(makeLog(r,t))}return e}},{key:"renderResetButton",value:function(){return _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()("button",{className:"js-shell-reset",onClick:this.resetConsole},void 0,_ref)}},{key:"render",value:function(){var _=this,e=this.props.hints.length,t=_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()(react_bootstrap_ButtonToolbar__WEBPACK_IMPORTED_MODULE_29__.a,{style:{float:"right",marginTop:"8px"}},void 0,e>0?this.showHints():null,this.props.solution&&!this.props.disabled?showSolutionButton(this.state.exhaustedHints,this.handleSolutionClick,this.state.solutionOpen,this.state.nEvaluations,this.props.t):null,this.props.chat?_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()("span",{style:{display:"inline-block",marginLeft:"4px"}},void 0,_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()(_isle_project_components_internal_chat_button__WEBPACK_IMPORTED_MODULE_31__.a,{for:this.id})):null,_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()(_isle_project_components_internal_voice_control__WEBPACK_IMPORTED_MODULE_37__.a,{reference:this,id:this.props.voiceID,commands:_voice_commands_json__WEBPACK_IMPORTED_MODULE_39__})),r=_objectSpread({lineHeight:"1.2em",maxHeight:"".concat(1.2*_stdlib_math_base_special_max__WEBPACK_IMPORTED_MODULE_26___default()(5,this.props.lines),"em"),height:"".concat(1.2*this.props.lines,"em")},this.props.style),s=react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{className:"js-shell-edit",style:r,ref:function(e){_.editorDiv=e}});return _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()("div",{id:this.id},void 0,_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()("div",{className:"js-shell"},void 0,s,_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()("div",{className:"js-shell-toolbar ".concat(this.props.className)},void 0,this.props.disabled?_ref2:_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_13___default()(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_28__.a,{variant:"primary",size:"sm",style:{marginTop:"8px",marginBottom:"8px"},onClick:this.handleEvaluationClick},void 0,this.props.t("evaluate")),t,_ref3),this.props.disabled?null:this.renderResetButton(),react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div",{ref:function(e){_.consoleOutput=e},className:"js-shell-console"},this.renderLogs())))}}]),JSShell}(react__WEBPACK_IMPORTED_MODULE_17__.Component);JSShell.defaultProps={code:"",solution:"",hints:[],precompute:!1,chat:!1,check:null,disabled:!1,lines:5,className:"",style:{},vars:null,voiceID:null,onChange:function(){},onEvaluate:function(){}},JSShell.contextType=_isle_project_session_context_js__WEBPACK_IMPORTED_MODULE_38__.a,__webpack_exports__.default=Object(react_i18next__WEBPACK_IMPORTED_MODULE_20__.a)("R")(JSShell)}.call(this,__webpack_require__(22))},689:function(_,e,t){"use strict";var r=t(408),s=Object(r.a)((function(){return t.e(166).then(t.bind(null,1029))}));e.a=s},826:function(_,e,t){"use strict";var r=t(408),s=Object(r.a)((function(){return t.e(194).then(t.bind(null,1173))}));e.a=s}}]);