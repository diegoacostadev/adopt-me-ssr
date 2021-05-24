parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"2tnM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react");const t=(0,e.createContext)(["green",()=>{}]);var r=t;exports.default=r;
},{}],"Ztkr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react"),t=require("react/jsx-runtime");function a(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class s extends e.Component{constructor(...e){super(...e),a(this,"state",{active:0}),a(this,"handleIndexClick",e=>{this.setState({active:+e.target.dataset.index})})}render(){const{active:e}=this.state,{images:a}=this.props;return(0,t.jsxs)("div",{className:"carousel",children:[(0,t.jsx)("img",{src:a[e],alt:"animal"}),(0,t.jsx)("div",{className:"carousel-smaller",children:a.map((a,s)=>(0,t.jsx)("img",{src:a,onClick:this.handleIndexClick,"data-index":s,className:s===e?"active":"",alt:"animal thumbnail"},a))})]})}}a(s,"defaultProps",{images:["http://pets-images.dev-apis.com/pets/none.jpg"]});var i=s;exports.default=i;
},{}],"mD05":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react"),r=require("react-router-dom"),t=require("react/jsx-runtime");function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}class s extends e.Component{constructor(...e){super(...e),o(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0,redirect:!1}}componentDidCatch(e,r){console.error("ErrorBoundary caught an error",e,r)}componentDidUpdate(){this.state.hasError&&setTimeout(()=>this.setState({redirect:!0}),5e3)}render(){return this.state.redirect?(0,t.jsx)(r.Redirect,{to:"/"}):this.state.hasError?(0,t.jsxs)("h2",{children:["There was an error with this listing. ",(0,t.jsx)(r.Link,{to:"/",children:"Click here"})," ","to back to the home page or wait five seconds."]}):this.props.children}}var i=s;exports.default=i;
},{}],"KnKP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react"),r=require("react-dom"),t=require("react/jsx-runtime");let u;const c=({children:c})=>{u=u||document.getElementById("modal");const n=(0,e.useRef)(null);return n.current||(n.current=document.createElement("div")),(0,e.useEffect)(()=>(u.appendChild(n.current),()=>u.removeChild(n.current)),[]),(0,r.createPortal)((0,t.jsx)("div",{children:c}),n.current)};var n=c;exports.default=n;
},{}],"C/Dc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=p;var e=require("react"),t=require("react-router-dom"),r=a(require("./ThemeContext")),o=a(require("./Carousel")),s=a(require("./ErrorBoundary")),n=a(require("./Modal")),i=require("react/jsx-runtime");function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class u extends e.Component{constructor(...e){super(...e),d(this,"state",{loading:!0,showModal:!1}),d(this,"toggleModal",()=>this.setState({showModal:!this.state.showModal})),d(this,"adopt",()=>window.location="http://bit.ly/pet-adopt")}async componentDidMount(){const e=await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`),t=await e.json();this.setState(Object.assign({loading:!1},t.pets[0]))}render(){if(this.state.loading)return(0,i.jsx)("h2",{children:"loading … "});const{animal:e,breed:t,city:s,state:a,description:c,name:l,images:d,showModal:u}=this.state;return(0,i.jsxs)("div",{className:"details",children:[(0,i.jsx)(o.default,{images:d}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:l}),(0,i.jsx)("h2",{children:`${e} — ${t} — ${s}, ${a}`}),(0,i.jsx)(r.default.Consumer,{children:([e])=>(0,i.jsxs)("button",{onClick:this.toggleModal,style:{backgroundColor:e},children:["Adopt ",l]})}),(0,i.jsx)("p",{children:c}),u?(0,i.jsx)(n.default,{children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("h1",{children:["Would you like to adopt ",l,"?"]}),(0,i.jsxs)("div",{className:"buttons",children:[(0,i.jsx)("button",{onClick:this.adopt,children:"Yes"}),(0,i.jsx)("button",{onClick:this.toggleModal,children:"No"})]})]})}):null]})]})}}const h=(0,t.withRouter)(u);function p(e){return(0,i.jsx)(s.default,{children:(0,i.jsx)(h,l({},e))})}
},{"./ThemeContext":"2tnM","./Carousel":"Ztkr","./ErrorBoundary":"mD05","./Modal":"KnKP"}],"/HkA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;var e=require("react");const t={};function a(a){const[s,n]=(0,e.useState)([]),[o,r]=(0,e.useState)("unloaded");return(0,e.useEffect)(()=>{a?t[a]?n(t[a]):async function(){n([]),r("loading");const e=await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${a}`),s=await e.json();t[a]=s.breeds||[],n(t[a]),r("loaded")}():n([])},[a]),[s,o]}
},{}],"qepC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react-router-dom"),s=require("react/jsx-runtime");const t=t=>{const{name:r,animal:i,breed:a,images:n,location:c,id:l}=t;let d="http://pets-images.dev-apis.com/pets/none.jpg";return n.length&&(d=n[0]),(0,s.jsxs)(e.Link,{to:`/details/${l}`,className:"pet",children:[(0,s.jsx)("div",{className:"image-container",children:(0,s.jsx)("img",{src:d,alt:r})}),(0,s.jsxs)("div",{className:"info",children:[(0,s.jsx)("h1",{children:r}),(0,s.jsx)("h2",{children:`${i} — ${a} — ${c}`})]})]})};var r=t;exports.default=r;
},{}],"r5l1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("./Pet")),t=require("react/jsx-runtime");function a(e){return e&&e.__esModule?e:{default:e}}const r=({pets:a})=>(0,t.jsx)("div",{className:"search",children:a.length?a.map(a=>(0,t.jsx)(e.default,{animal:a.animal,name:a.name,breed:a.breed,images:a.images,location:`${a.city}, ${a.state}`,id:a.id},a.id)):(0,t.jsx)("h1",{children:"No Pets Found"})});var s=r;exports.default=s;
},{"./Pet":"qepC"}],"n0tu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react"),t=s(require("./ThemeContext")),a=s(require("./useBreedList")),r=s(require("./Results")),l=require("react/jsx-runtime");function s(e){return e&&e.__esModule?e:{default:e}}const n=["bird","cat","dog","rabbit","reptile"],i=()=>{const[s,i]=(0,e.useState)(""),[o,u]=(0,e.useState)(""),[d,c]=(0,e.useState)(""),[h,p]=(0,e.useState)([]),[x]=(0,a.default)(s),[v,j]=(0,e.useContext)(t.default);async function m(){const e=await fetch(`http://pets-v2.dev-apis.com/pets?animal=${s}&location=${o}&breed=${d}`),t=await e.json();p(t.pets)}return(0,e.useEffect)(()=>{m()},[]),(0,l.jsxs)("div",{className:"search-params",children:[(0,l.jsxs)("form",{onSubmit:e=>{e.preventDefault(),m()},children:[(0,l.jsxs)("label",{htmlFor:"location",children:["Location",(0,l.jsx)("input",{id:"location",value:o,placeholder:"Location",onChange:e=>u(e.target.value)})]}),(0,l.jsxs)("label",{htmlFor:"animal",children:["Animal",(0,l.jsxs)("select",{id:"animal",value:s,onChange:e=>i(e.target.value),onBlur:e=>i(e.target.value),children:[(0,l.jsx)("option",{}),n.map(e=>(0,l.jsx)("option",{value:e,children:e},e))]})]}),(0,l.jsxs)("label",{htmlFor:"breed",children:["Breed",(0,l.jsxs)("select",{disabled:!x.length,id:"breed",value:d,onChange:e=>c(e.target.value),onBlur:e=>c(e.target.value),children:[(0,l.jsx)("option",{}),x.map(e=>(0,l.jsx)("option",{value:e,children:e},e))]})]}),(0,l.jsxs)("label",{htmlFor:"theme",children:["Theme",(0,l.jsxs)("select",{value:v,onChange:e=>j(e.target.value),onBlur:e=>j(e.target.value),children:[(0,l.jsx)("option",{value:"peru",children:"Peru"}),(0,l.jsx)("option",{value:"darkblue",children:"Dark Blue"}),(0,l.jsx)("option",{value:"chartreuse",children:"Chartreuse"}),(0,l.jsx)("option",{value:"mediumorchid",children:"Medium Orchid"})]})]}),(0,l.jsx)("button",{style:{backgroundColor:v},children:"Submit"})]}),(0,l.jsx)(r.default,{pets:h})]})};var o=i;exports.default=o;
},{"./ThemeContext":"2tnM","./useBreedList":"/HkA","./Results":"r5l1"}],"eBcb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react"),r=require("react-router-dom"),t=u(require("./Details")),d=u(require("./SearchParams")),i=u(require("./ThemeContext")),s=require("react/jsx-runtime");function u(e){return e&&e.__esModule?e:{default:e}}const a=()=>{const u=(0,e.useState)("darkblue");return(0,s.jsx)(e.StrictMode,{children:(0,s.jsx)(i.default.Provider,{value:u,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("header",{children:(0,s.jsx)(r.Link,{to:"/",children:"Adopt Me!"})}),(0,s.jsxs)(r.Switch,{children:[(0,s.jsx)(r.Route,{path:"/details/:id",children:(0,s.jsx)(t.default,{})}),(0,s.jsx)(r.Route,{path:"/",children:(0,s.jsx)(d.default,{})})]})]})})})};var l=a;exports.default=l;
},{"./Details":"C/Dc","./SearchParams":"n0tu","./ThemeContext":"2tnM"}],"Focm":[function(require,module,exports) {
"use strict";var e=u(require("express")),t=require("react-dom/server"),r=require("react-router-dom"),s=u(require("fs")),i=u(require("../src/App")),n=require("react/jsx-runtime");function u(e){return e&&e.__esModule?e:{default:e}}const d=process.env.PORT||3e3,o=s.default.readFileSync("dist/index.html").toString(),l=o.split("not rendered"),c=(0,e.default)();c.use("/dist",e.default.static("dist")),c.use((e,s)=>{s.write(l[0]);const u={},d=(0,n.jsx)(r.StaticRouter,{url:e.url,context:u,children:(0,n.jsx)(i.default,{})}),o=(0,t.renderToNodeStream)(d);o.pipe(s,{end:!1}),o.on("end",()=>{s.status(u||200),s.write(l[1]),s.end()})}),console.log(`listening on http://localhost:${d}`),c.listen(d);
},{"../src/App":"eBcb"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map