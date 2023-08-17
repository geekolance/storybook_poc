/*! For license information please see components-InformationContainer-InformationContainer-stories.e9086100.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkak_storybook_poc=self.webpackChunkak_storybook_poc||[]).push([[171],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./src/components/InformationContainer/InformationContainer.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},PrimaryWithoutIcon:function(){return PrimaryWithoutIcon},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return InformationContainer_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),InfoContainer=function InfoContainer(props){var text=props.text,icon=props.icon;return(0,jsx_runtime.jsxs)("div",{className:"info-container",children:[icon&&(0,jsx_runtime.jsx)("img",{src:icon,className:"info-icon"}),text]})};InfoContainer.__docgenInfo={description:"",methods:[],displayName:"InfoContainer"};var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_PrimaryWithoutIcon$p,_PrimaryWithoutIcon$p2,_PrimaryWithoutIcon$p3,figma_black=__webpack_require__("./src/assets/figma-black.png"),InformationContainer_stories={title:"Components/InfoContainer",component:InfoContainer,args:{children:"Button"}},Primary=function Primary(){return(0,jsx_runtime.jsx)(InfoContainer,{text:"Info Text",icon:figma_black})},PrimaryWithoutIcon=function PrimaryWithoutIcon(){return(0,jsx_runtime.jsx)(InfoContainer,{text:"Info Text"})};Primary.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Primary.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'() => <InfoContainer text="Info Text" icon={figmaBlack} />'},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})}),PrimaryWithoutIcon.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},PrimaryWithoutIcon.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_PrimaryWithoutIcon$p=PrimaryWithoutIcon.parameters)||void 0===_PrimaryWithoutIcon$p?void 0:_PrimaryWithoutIcon$p.docs),{},{source:(0,objectSpread2.Z)({originalSource:'() => <InfoContainer text="Info Text" />'},null===(_PrimaryWithoutIcon$p2=PrimaryWithoutIcon.parameters)||void 0===_PrimaryWithoutIcon$p2||null===(_PrimaryWithoutIcon$p3=_PrimaryWithoutIcon$p2.docs)||void 0===_PrimaryWithoutIcon$p3?void 0:_PrimaryWithoutIcon$p3.source)})});var __namedExportsOrder=["Primary","PrimaryWithoutIcon"];Primary.__docgenInfo={description:"",methods:[],displayName:"Primary"},PrimaryWithoutIcon.__docgenInfo={description:"",methods:[],displayName:"PrimaryWithoutIcon"}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/assets/figma-black.png":function(module){module.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIISURBVHgBvVVLTgJBEC1wSNzBkJC4HBMg7MQTOJ5AOAFwAnHpCjmBcgO4AZ5Alu5kSfjEceeGZNiZ8PM9aD5pZpgxRl/SdE919+vqqteFyB8icmzSAo7NO4D8lDydTtuRSOQRw7wch4N1zX6/X/eaPPEhfsHwDM1F+1Q9carZLDQ7lUpNxuPxq84V1Q0grrFfLpf1wWBgop2z4buh7I2NbbFYFGlDX0MEE4Hk9IQ/s9nsSQIwGo3aOKyLYcIwjHwYcoc/Xou9gJsmVO8ezOkGxPxBhcZBo/cTtfkGXhbQ09tntbwk65s6DFMgOWMXi8XeZJ2ssLgEeVc3GroBxIUNMTxs7103LztpdjFHGebVWsr2OpAcm26xif3dcDjcJlWFi2QMwSVtuVzOms/nvKXNB6c/Ki8prrzbJ9YOb23GvV7P4S1WXhqGpa/1VUs2my15zPHwq82YnosKFaTrHKzVDbh+VT19UcrwijmJOmjMD6XYRKgqgeREJpPh87clBHB4B14XEe4DnRsexGVF7PKpw3tHZKdzlgV6jW+LikFuOn4H+6oFrYqrbpOHcFmwMQxyjHAfvmpBGW3JL+GrFpZezX6x2hCNvktIHNTzZDJpwnvWdNs0zY94PP6Fel3DdxnT7nQ6vXcBCQG/2kK1eFXFCvLQlJDw/Q+lapDcElWBzw5fZthE/gu+AcUV6Sz5ahL/AAAAAElFTkSuQmCC"}}]);