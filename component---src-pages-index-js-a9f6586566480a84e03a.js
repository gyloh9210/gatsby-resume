(self.webpackChunkmy_resume_site=self.webpackChunkmy_resume_site||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,c,l,u;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(!i(e[c],o[c]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!i(c.value[1],o.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!i(e[l[c]],o[l[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(7294),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),m.canUseDOM?t(c):r&&(c=r(c))}var m=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(m,"canUseDOM",s),m}}},3820:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Fe}});var n=r(7294),a=JSON.parse('{"u2":"Gim Yong","Sp":"I am a Full Stack developer from Malaysia who have almost 10 years of web development experience. I have worked in many kind of industries: job portal, logistic, b2b e-Commerce, medical platform, advertising digital platform and social media. I am comfortable with PHP, Node.js, React and Typescript. I am a fast learner and always pick up the pace in learning new stuffs.","PY":["Mandarin","English","Malay"]}'),i=JSON.parse('{"Uh":["PHP","JavaScript","Node.js","TypeScript"],"Ec":["React","Express.js","Laravel","nestJs"],"ff":["Scrum","Agile"],"DF":["RDS","EC2","Redshift","Cloudwatch","Elastic Beanstalk","DynamoDb","Lambda","S3","ECS"]}'),o=JSON.parse('{"v":[{"certificate":"Diploma","programme":"Game Technology","college":"KDU","grade":"CGPA 3.02"},{"certificate":"Degree","programme":"Computing Studies","major":"Software development & multimedia","university":"Northumbria University","grade":"First Class Honor"}]}'),s=JSON.parse('{"k":[{"year":"2013","title":"intern","company":"SearchNEasy","responsibilities":["design and develop web modules for the existing CMS"],"tech_stack":["PHP","jQuery","JavaScript"],"projects":["created a comment module","created a user role management for admin","created a drag-and-drop feature for allowing admin to customize setting"]},{"year":"2012","title":"intern","company":"iCloud System","responsibilities":["design and develop websites"],"projects":[],"tech_stack":["jQuery","JavaScript"]},{"year":"2014","title":"Software Engineer, Executive Level 2","company":"JobStreet","responsibilities":["work in a scrum team","develop modules of frontend and backend","review peer level\'s code","pair with QA and write test cases"],"projects":["Converted non-responsive web pages to responsive by using Bootstrap","Integrated with Facebook API for getting friend list and where are they working at. User can ask for a job referral thru the Messenger API.","Preprocessed raw data stored in csv and stored them into a NoSQL database","Implemented a monitor tool of indexing user activity logs and provided data visualization with ELK setup","Enhance job search with related job suggestion by analysing the relevant keywords"],"tech_stack":["PHP","jQuery","Node.js","JavaScript","Bootstrap 3","AWS","ELK","Laravel"]},{"year":"2018","title":"Angular Developer","company":"Kerry Logistic","responsibilities":["implement features in the logistic booking system","implement RESTful API"],"projects":["Implemented an interactive dashboard for visualizing estimated shipment volumes which delivered in certain timeframes","Integrated with a third party GPS API and stored the GPS logs in a database","Set up a CI/CD pipeline with Jenkin","Built a mobile app which user could visualize the shipment volumes in chart presentation","Integrated with Baidu map API and Google Map API for mapping the waypoints of truck drivers"],"tech_stack":[".NET Framework","C#","AngularJS","AWS"]},{"year":"2019","title":"Software Developer","company":"Monitor ERP System","responsibilities":["Work with a team and deliver web modules","Generate reports with SQL queries"],"projects":["Built a web app which allowed user to customize a presentation of web report","Built a purchase requisition web app","Build a simple web app for allowing user to manage stock inventory and integrated with the existing ERP"],"tech_stack":[".NET Framework","C#","Vue","React"]},{"year":"2020","title":"Senior Software Engineer","company":"Food Market Hub","responsibilities":["Work with a scrum team and deliver modules in backend and frontend for the procurement and inventory system","Provide peer-level code review"],"projects":["Introduced the unit tests to the team and enforced as part of the definition of done","Created an auto-deployment pipeline for QA environment with Github workflow action","Implemented a security authorization for API resources checking","Integrated with Stripe Payout API for allowing vendors getting paid in the system"],"tech_stack":["PHP","Laravel","Vue"]},{"year":"2021 - Present","title":"Senior Software Engineer","company":"ORA group","responsibilities":["Work closely with stakeholders in a fairly small engineering team","Manage task assignments for freelancers to meet project\'s timeline","Provide peer-level code review","Provide tech support and brainstorm ad-hoc solutions","Execute deployments","Implement new features and enhancements to the eCommerce platform"],"projects":["Implemented Buy Now Pay Layer (Atome) payment option in the backend system","Implemented custom useful features in the CMS (Eg: schedule consultation, order filter, report export, slack notification)","Implemented server downtime alarms with Uptime Robot","Troubleshooted and reduced the stripe webhook error rate successfully from 20% to less than 1%","Deploy AWS ECS and Redis as part of the event driven architecture","Transition synchronous 3rd party services into events and distribute into queues","Work in various microservices. Eg: working on shopify order creation module in order service","Implement stripe 3d authentication in vue project","Set up websites with various of AWS services, Eg: ECS, Elastic Beanstalk, S3","Send SNS events from the eCommerce platform. Eg: order created, order paid, appointment booked, etc","Send transactional email with mailgun","Integrate with third party EMR system, Eg: patient registration, patient update","Decouple the legacy system into microservices"],"tech_stack":["PHP","AWS","Laravel","Vue","Typescript"]}]}'),c=JSON.parse('[{"company":"Cherish (social network for art creators)","active_period":"2022 - Present","tech_stacks":["Node.js","nestJs","graphql","prisma","TypeScript"],"projects":["Implement user blocking feature","Implement unit tests with jest","Implement rate limit to graphql request"]},{"company":"Contente (Social media but for chiropractors)","active_period":"2021 - 2022","tech_stacks":["Node.js","React","TypeScript","JavaScript","AWS"],"projects":["Implementd segment event tracking","Setup CI/CD pipeline with Github Action","Created charts for visualizing a business performance","Preprocessed data in cronjobs and thne utilized it for data visualization for understanding the leads","Implement media upload and text upload with microservices and sns. Eg: Push a notification to asset service for associating a media to a post","Implement a wysiwyg editor"]},{"company":"Intrinsik (Medical SaaS platform for orthopedics & dental)","active_period":"2021","tech_stacks":["Node.js","JavaScript","ExpressJs"],"projects":["Increased the test coverage by implementing test cases and also refactor the codebase along"]},{"company":"Dropee (B2B e-Commerce)","active_period":"2020","tech_stacks":["PHP","Laravel","JavaScript","jQuery"],"projects":["Created an access control list module - it allowed management role to control what access can grant to a user by different domain","Created a CMS module - it allowed management role to create new custom pages with content and metadata","Created an user management - it allowed supplier role to manage user in different domains"]},{"company":"ORA group (Pharmaceutical e-Commerce)","active_period":"2021","tech_stacks":["PHP","Vue","Laravel","AWS"],"projects":["Implemented a discount module in the checkout","Integrated with 3rd party webhook (Zapier, Insider, Slack, Klaviyo) in various of order events","Set up web servers wtih AWS Elastic Beanstalk","Enhanced the questionnaire by saving answers one by one instead of all at once"]},{"company":"IPon9 (Trademark registration system)","active_period":"2016","tech_stacks":["PHP","Laravel","jQuery"],"projects":["Built a system which allows user to manage the trademark registration"]},{"company":"ridegogoapp (Rides marketplace)","active_period":"2018","tech_stacks":["PHP","Laravel","React"],"projects":["Built a platform which allows user to post ride sharing post. It has a simple post management and admin could create posts."]},{"company":"metaproperty (Property site)","active_period":"2019","tech_stacks":["PHP","Laravel","jQuery","JavaScript"],"projects":["It is a property site which allows sellers to post a property for sell or for rent. Agents who see posts interesting can advertise further and impose commission later on."]},{"company":"GrubLokal (Food marketplace)","link":"https://drive.google.com/file/d/1j6Jt93h2rAp83m3c7BPCk68o9MMTe87F/view","active_period":"2020","tech_stacks":["PHP","Laravel","Vue"],"projects":["It was a marketplace where seller can post food and connect with buyer. There was a page for admin to approving or rejecting posts."]}]'),l=r.p+"static/profile-e7a6d2513d18ec3ce5f5c2c279e686dd.jpg",u=r(4694),m=r(5697),p=r.n(m);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function v(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var E=["style"];function S(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=w(t.slice(0,n)),i=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=i:e[a]=i,e}),{})}var T=!1;try{T=!0}catch(Je){}function k(e){return e&&"object"===h(e)&&e.prefix&&e.iconName&&e.icon?e:u.parse.icon?u.parse.icon(e):null===e?null:e&&"object"===h(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function N(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?y({},e,t):{}}var O=["forwardedRef"];function j(e){var t=e.forwardedRef,r=b(e,O),n=r.icon,a=r.mask,i=r.symbol,o=r.className,s=r.title,c=r.titleId,l=k(n),m=N("classes",[].concat(v(function(e){var t,r=e.beat,n=e.fade,a=e.flash,i=e.spin,o=e.spinPulse,s=e.spinReverse,c=e.pulse,l=e.fixedWidth,u=e.inverse,m=e.border,p=e.listItem,d=e.flip,f=e.size,h=e.rotation,b=e.pull,v=(y(t={"fa-beat":r,"fa-fade":n,"fa-flash":a,"fa-spin":i,"fa-spin-reverse":s,"fa-spin-pulse":o,"fa-pulse":c,"fa-fw":l,"fa-inverse":u,"fa-border":m,"fa-li":p,"fa-flip-horizontal":"horizontal"===d||"both"===d,"fa-flip-vertical":"vertical"===d||"both"===d},"fa-".concat(f),null!=f),y(t,"fa-rotate-".concat(h),null!=h&&0!==h),y(t,"fa-pull-".concat(b),null!=b),y(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(v).map((function(e){return v[e]?e:null})).filter((function(e){return e}))}(r)),v(o.split(" ")))),p=N("transform","string"==typeof r.transform?u.parse.transform(r.transform):r.transform),d=N("mask",k(a)),h=(0,u.icon)(l,f(f(f(f({},m),p),d),{},{symbol:i,title:s,titleId:c}));if(!h)return function(){var e;!T&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",l),null;var g=h.abstract,w={ref:t};return Object.keys(r).forEach((function(e){j.defaultProps.hasOwnProperty(e)||(w[e]=r[e])})),I(g[0],w)}j.displayName="FontAwesomeIcon",j.propTypes={beat:p().bool,border:p().bool,className:p().string,fade:p().bool,flash:p().bool,mask:p().oneOfType([p().object,p().array,p().string]),fixedWidth:p().bool,inverse:p().bool,flip:p().oneOf(["horizontal","vertical","both"]),icon:p().oneOfType([p().object,p().array,p().string]),listItem:p().bool,pull:p().oneOf(["right","left"]),pulse:p().bool,rotation:p().oneOf([0,90,180,270]),size:p().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p().bool,spinPulse:p().bool,spinReverse:p().bool,symbol:p().oneOfType([p().bool,p().string]),title:p().string,transform:p().oneOfType([p().string,p().object]),swapOpacity:p().bool},j.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var A,P,C,x,I=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),i=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=S(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[w(t)]=n}return e}),{attrs:{}}),o=n.style,s=void 0===o?{}:o,c=b(n,E);return i.attrs.style=f(f({},i.attrs.style),s),t.apply(void 0,[r.tag,f(f({},i.attrs),c)].concat(v(a)))}.bind(null,n.createElement),_=r(8014),L=r(7190),M=r(4839),R=r.n(M),D=r(2993),z=r.n(D),B=r(6494),H=r.n(B),F="bodyAttributes",J="htmlAttributes",W="titleAttributes",q={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},U=(Object.keys(q).map((function(e){return q[e]})),"charset"),Y="cssText",G="href",K="http-equiv",Q="innerHTML",V="itemprop",$="name",Z="property",X="rel",ee="src",te="target",re={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ne="defaultTitle",ae="defer",ie="encodeSpecialCharacters",oe="onChangeClientState",se="titleTemplate",ce=Object.keys(re).reduce((function(e,t){return e[re[t]]=t,e}),{}),le=[q.NOSCRIPT,q.SCRIPT,q.STYLE],ue="data-react-helmet",me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pe=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},de=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},he=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},ye=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},be=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ve=function(e){var t=Te(e,q.TITLE),r=Te(e,se);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Te(e,ne);return t||n||void 0},ge=function(e){return Te(e,oe)||function(){}},we=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return fe({},e,t)}),{})},Ee=function(e,t){return t.filter((function(e){return void 0!==e[q.BASE]})).map((function(e){return e[q.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Se=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&Ae("Helmet: "+e+' should be of type "Array". Instead found type "'+me(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],c=s.toLowerCase();-1===t.indexOf(c)||r===X&&"canonical"===e[r].toLowerCase()||c===X&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==Q&&s!==Y&&s!==V||(r=s)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var s=i[o],c=H()({},n[s],a[s]);n[s]=c}return e}),[]).reverse()},Te=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},ke=(A=Date.now(),function(e){var t=Date.now();t-A>16?(A=t,e(t)):setTimeout((function(){ke(e)}),0)}),Ne=function(e){return clearTimeout(e)},Oe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ke:r.g.requestAnimationFrame||ke,je="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Ne:r.g.cancelAnimationFrame||Ne,Ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Pe=null,Ce=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,m=e.title,p=e.titleAttributes;_e(q.BODY,n),_e(q.HTML,a),Ie(m,p);var d={baseTag:Le(q.BASE,r),linkTags:Le(q.LINK,i),metaTags:Le(q.META,o),noscriptTags:Le(q.NOSCRIPT,s),scriptTags:Le(q.SCRIPT,l),styleTags:Le(q.STYLE,u)},f={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(f[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),c(e,f,h)},xe=function(e){return Array.isArray(e)?e.join(""):e},Ie=function(e,t){void 0!==e&&document.title!==e&&(document.title=xe(e)),_e(q.TITLE,t)},_e=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(ue),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var m=i.length-1;m>=0;m--)r.removeAttribute(i[m]);a.length===i.length?r.removeAttribute(ue):r.getAttribute(ue)!==o.join(",")&&r.setAttribute(ue,o.join(","))}},Le=function(e,t){var r=document.head||document.querySelector(q.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===Q)r.innerHTML=t.innerHTML;else if(n===Y)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(ue,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},Me=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},Re=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[re[r]||r]=e[r],t}),t)},De=function(e,t,r){switch(e){case q.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(a={key:e})[ue]=!0,i=Re(r,a),[n.createElement(q.TITLE,i,e)];var e,r,a,i},toString:function(){return function(e,t,r,n){var a=Me(r),i=xe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+be(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+be(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case F:case J:return{toComponent:function(){return Re(t)},toString:function(){return Me(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var a,i=((a={key:r})[ue]=!0,a);return Object.keys(t).forEach((function(e){var r=re[e]||e;if(r===Q||r===Y){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),n.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===Q||e===Y)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+be(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===le.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},ze=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,m=void 0===u?"":u,p=e.titleAttributes;return{base:De(q.BASE,t,n),bodyAttributes:De(F,r,n),htmlAttributes:De(J,a,n),link:De(q.LINK,i,n),meta:De(q.META,o,n),noscript:De(q.NOSCRIPT,s,n),script:De(q.SCRIPT,c,n),style:De(q.STYLE,l,n),title:De(q.TITLE,{title:m,titleAttributes:p},n)}},Be=R()((function(e){return{baseTag:Ee([G,te],e),bodyAttributes:we(F,e),defer:Te(e,ae),encode:Te(e,ie),htmlAttributes:we(J,e),linkTags:Se(q.LINK,[X,G],e),metaTags:Se(q.META,[$,U,K,Z,V],e),noscriptTags:Se(q.NOSCRIPT,[Q],e),onChangeClientState:ge(e),scriptTags:Se(q.SCRIPT,[ee,Q],e),styleTags:Se(q.STYLE,[Y],e),title:ve(e),titleAttributes:we(W,e)}}),(function(e){Pe&&je(Pe),e.defer?Pe=Oe((function(){Ce(e,(function(){Pe=null}))})):(Ce(e),Pe=null)}),ze)((function(){return null})),He=(P=Be,x=C=function(e){function t(){return pe(this,t),ye(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!z()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case q.SCRIPT:case q.NOSCRIPT:return{innerHTML:t};case q.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return fe({},n,((t={})[r.type]=[].concat(n[r.type]||[],[fe({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case q.TITLE:return fe({},a,((t={})[n.type]=o,t.titleAttributes=fe({},i),t));case q.BODY:return fe({},a,{bodyAttributes:fe({},i)});case q.HTML:return fe({},a,{htmlAttributes:fe({},i)})}return fe({},a,((r={})[n.type]=fe({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=fe({},t);return Object.keys(e).forEach((function(t){var n;r=fe({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,a={};return n.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,i=n.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[ce[r]||r]=e[r],t}),t)}(he(n,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case q.LINK:case q.META:case q.NOSCRIPT:case q.SCRIPT:case q.STYLE:a=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=he(e,["children"]),a=fe({},r);return t&&(a=this.mapChildrenToProps(t,a)),n.createElement(P,a)},de(t,null,[{key:"canUseDOM",set:function(e){P.canUseDOM=e}}]),t}(n.Component),C.propTypes={base:p().object,bodyAttributes:p().object,children:p().oneOfType([p().arrayOf(p().node),p().node]),defaultTitle:p().string,defer:p().bool,encodeSpecialCharacters:p().bool,htmlAttributes:p().object,link:p().arrayOf(p().object),meta:p().arrayOf(p().object),noscript:p().arrayOf(p().object),onChangeClientState:p().func,script:p().arrayOf(p().object),style:p().arrayOf(p().object),title:p().string,titleAttributes:p().object,titleTemplate:p().string},C.defaultProps={defer:!0,encodeSpecialCharacters:!0},C.peek=P.peek,C.rewind=function(){var e=P.rewind();return e||(e=ze({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},x);He.renderStatic=He.rewind;var Fe=function(){var e=s.k.sort((function(e,t){return e.year<t.year?1:-1})),t=c.sort((function(e,t){return e.active_period<t.active_period?1:-1}));return n.createElement("main",null,n.createElement(He,{title:"Gim Yong's Resume"}),n.createElement("div",{className:"container is-fluid mb-5 mt-5"},n.createElement("div",{className:"columns"},n.createElement("div",{className:"column is-4-desktop is-12-mobile"},n.createElement("p",{className:"is-size-3"},a.u2),n.createElement("p",{className:"is-size-4"},"Software Engineer")),n.createElement("div",{className:"column is-12-mobile"},n.createElement("figure",{className:"image is-128x128 centerImage"},n.createElement("img",{src:l,className:"is-rounded"}))),n.createElement("div",{className:"column is-12-mobile"},n.createElement("div",{className:"column has-text-right"},n.createElement("p",{className:"is-size-6"},n.createElement(j,{icon:_.GrN,size:"1x",className:"icon"}),"Penang, Malaysia"),n.createElement("p",{className:"is-size-6"},n.createElement(j,{icon:_.FU$,size:"1x",className:"icon mt-2"}),n.createElement("a",{href:"mailto:ronaldoloh92@gmail.com"},"ronaldoloh92@gmail.com")),n.createElement("p",{className:"is-size-6"},n.createElement(j,{icon:L.D9H,size:"1x",className:"icon mt-2"}),n.createElement("a",{href:"https://www.linkedin.com/in/loh-gim-yong-71299699",target:"_blank"},"LinkedIn")),n.createElement("p",{className:"is-size-6"},n.createElement(j,{icon:L.zhw,size:"1x",className:"icon mt-2"}),n.createElement("a",{href:"https://github.com/gyloh9210",target:"_blank"},"GitHub Profile")))))),n.createElement("div",{className:"container is-fluid"},n.createElement("div",{className:"columns"},n.createElement("div",{className:"column"},n.createElement("div",{className:"divider"}," ")))),n.createElement("div",{className:"container mt-3"},n.createElement("div",{className:"columns"},n.createElement("div",{className:"column is-6 is-12-mobile"},n.createElement("div",{className:"card"},n.createElement("header",{className:"card-header"},n.createElement("p",{className:"card-header-title"},"Introduction")),n.createElement("div",{className:"card-content"},n.createElement("div",{className:"content"},a.Sp)))),n.createElement("div",{className:"column is-6 is-12-mobile"},n.createElement("div",{className:"card"},n.createElement("header",{className:"card-header"},n.createElement("p",{className:"card-header-title"},"Skills")),n.createElement("div",{className:"card-content"},n.createElement("div",{className:"content"},n.createElement("p",{className:"title is-5 mb-1"},"Programming languages"),i.Uh.join(", "),n.createElement("p",{className:"title is-5 mb-1 mt-5"},"Frameworks"),i.Ec.join(", "),n.createElement("p",{className:"title is-5 mb-1 mt-5"},"Methodologies"),i.ff.join(", "),n.createElement("p",{className:"title is-5 mb-1 mt-5"},"AWS"),i.DF.join(", ")))))),n.createElement("div",{className:"columns"},n.createElement("div",{className:"column is-6 is-12-mobile"},n.createElement("div",{className:"card"},n.createElement("header",{className:"card-header"},n.createElement("p",{className:"card-header-title"},"Educations")),n.createElement("div",{className:"card-content"},n.createElement("div",{className:"content"},o.v.map((function(e,t){return n.createElement("div",{key:"education_"+t},n.createElement("p",{className:"title is-4 mb-1 mt-1"},e.certificate," in ",e.programme),n.createElement("p",{className:"subtitle is-6 mt-1 mb-5"},e.grade))})))))),n.createElement("div",{className:"column is-6 is-12-mobile"},n.createElement("div",{className:"card"},n.createElement("header",{className:"card-header"},n.createElement("p",{className:"card-header-title"},"Languages")),n.createElement("div",{className:"card-content"},n.createElement("div",{className:"content"},a.PY.join(", ")))))),n.createElement("div",{className:"columns"},n.createElement("div",{className:"column is-12-mobile"},n.createElement("div",{className:"card"},n.createElement("header",{className:"card-header"},n.createElement("p",{className:"card-header-title"},"Experiences"))),n.createElement("div",{className:"card-content"},n.createElement("div",{className:"content"},e.map((function(e,t){return n.createElement("div",{key:"experience_"+t,className:"mb-5"},n.createElement("p",{className:"title is-5 mb-1 is-spaced exp-title"},e.company+", "+e.year+" - ",n.createElement("span",{className:"is-italic"},e.title)),n.createElement("p",{className:"subtitle is-6 mb-1 has-text-weight-semibold"},"Responsibilities"),e.responsibilities.map((function(e,t){return n.createElement("p",{key:"exp_res_"+t,className:"my-1"},"- ",e)})),n.createElement("p",{className:"subtitle is-6 mb-1 has-text-weight-semibold mt-3"},"Projects"),e.projects.map((function(e,t){return n.createElement("p",{key:"exp_pro_"+t,className:"my-1"},"- ",e)})),n.createElement("p",{className:"subtitle is-6 mt-3"},n.createElement("span",{className:"has-text-weight-semibold"},"Tech stack:")," ",e.tech_stack.join(", ")))})))))),n.createElement("div",{className:"columns"},n.createElement("div",{className:"column"},n.createElement("div",{className:"card"},n.createElement("header",{className:"card-header"},n.createElement("p",{className:"card-header-title"},"Freelance Experiences"))),n.createElement("div",{className:"card-content"},n.createElement("div",{className:"content"},t.map((function(e,t){return n.createElement("div",{key:"free_experience_"+t,className:"mb-5"},n.createElement("p",{className:"title is-5 mb-1 is-spaced exp-title"},e.company+", "+e.active_period),n.createElement("p",{className:"subtitle is-6 mb-1 has-text-weight-semibold"},"Projects"),e.projects.map((function(e,t){return n.createElement("p",{key:"free_exp_pro"+t,className:"my-1"},"- ",e)})),n.createElement("p",{className:"subtitle is-6 mt-3"},n.createElement("span",{className:"has-text-weight-semibold"},"Tech stack:")," ",e.tech_stacks.join(", ")))}))))))),n.createElement("footer",{className:"footer"},n.createElement("div",{className:"content has-text-centered"},n.createElement("p",null,"Copyright © 2022 by Gim Yong"))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a9f6586566480a84e03a.js.map