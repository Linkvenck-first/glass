(window.webpackJsonppagefly=window.webpackJsonppagefly||[]).push([[6],{126:function(t,n,e){"use strict";n.__esModule=!0;var r=a(e(476)),o=a(e(219)),i="function"==typeof o.default&&"symbol"==typeof r.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};function a(t){return t&&t.__esModule?t:{default:t}}n.default="function"==typeof o.default&&"symbol"===i(r.default)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":void 0===t?"undefined":i(t)}},178:function(t,n){n.f={}.propertyIsEnumerable},187:function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},188:function(t,n,e){t.exports={default:e(478),__esModule:!0}},216:function(t,n,e){var r=e(178),o=e(26),i=e(16),a=e(51),c=e(12),l=e(60),u=Object.getOwnPropertyDescriptor;n.f=e(7)?u:function(t,n){if(t=i(t),n=a(n,!0),l)try{return u(t,n)}catch(t){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},217:function(t,n){n.f=Object.getOwnPropertySymbols},218:function(t,n,e){var r=e(0),o=e(2),i=e(17),a=e(220),c=e(11).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:a.f(t)})}},219:function(t,n,e){t.exports={default:e(474),__esModule:!0}},220:function(t,n,e){n.f=e(1)},221:function(t,n,e){var r=e(9),o=e(2),i=e(25);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],a={};a[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",a)}},240:function(t,n,e){var r=e(58),o=e(30).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},241:function(t,n,e){var r=e(28)("meta"),o=e(6),i=e(12),a=e(11).f,c=0,l=Object.isExtensible||function(){return!0},u=!e(25)(function(){return l(Object.preventExtensions({}))}),s=function(t){a(t,r,{value:{i:"O"+ ++c,w:{}}})},p=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!l(t))return"F";if(!n)return"E";s(t)}return t[r].i},getWeak:function(t,n){if(!i(t,r)){if(!l(t))return!0;if(!n)return!1;s(t)}return t[r].w},onFreeze:function(t){return u&&p.NEED&&l(t)&&!i(t,r)&&s(t),t}}},324:function(t,n,e){"use strict";e.d(n,"a",function(){return f}),e.d(n,"b",function(){return b});var r=e(125),o=e.n(r),i=e(126),a=e.n(i),c=e(99),l=e.n(c),u=(e(140),e(42)),s=e.n(u),p=e(161),f=function(t){return h({url:t})},d=new(e.n(p).a);function b(t){var n=t.url;return new s.a(function(e){var r=d.get(n);r?e(r):h(t).then(function(t){d.set(n,t),e(t)})})}function h(t){var n=t.method,e=t.url,r=t.params,i=t.credentials,c=t.mode,u=t.redirect,s=t.referrer,p=t.cache,f=t.headers,d={method:n||"GET",cache:p||"no-cache",headers:l()({Accept:"application/json","Content-Type":"application/json"},f),credentials:i||"same-origin",mode:c||"cors",redirect:u||"follow",referrer:s||"no-referrer"};return n&&"GET"!==n&&(d.body=r instanceof FormData?r:"object"===(void 0===r?"undefined":a()(r))?o()(r):r),fetch(e,d).then(function(t){return t.json()}).then(function(t){return t}).catch(console.log)}},325:function(t,n,e){t.exports={default:e(469),__esModule:!0}},363:function(t,n,e){var r=e(16),o=e(240).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(r(t))}},364:function(t,n,e){var r=e(14);t.exports=Array.isArray||function(t){return"Array"==r(t)}},464:function(t,n,e){var r=e(9);r(r.S,"Object",{create:e(49)})},465:function(t,n,e){e(464);var r=e(2).Object;t.exports=function(t,n){return r.create(t,n)}},466:function(t,n,e){t.exports={default:e(465),__esModule:!0}},467:function(t,n,e){var r=e(6),o=e(4),i=function(t,n){if(o(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(13)(Function.call,e(216).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return i(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:i}},468:function(t,n,e){var r=e(9);r(r.S,"Object",{setPrototypeOf:e(467).set})},469:function(t,n,e){e(468),t.exports=e(2).Object.setPrototypeOf},470:function(t,n,e){e(218)("observable")},471:function(t,n,e){e(218)("asyncIterator")},472:function(t,n,e){var r=e(45),o=e(217),i=e(178);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var a,c=e(t),l=i.f,u=0;c.length>u;)l.call(t,a=c[u++])&&n.push(a);return n}},473:function(t,n,e){"use strict";var r=e(0),o=e(12),i=e(7),a=e(9),c=e(59),l=e(241).KEY,u=e(25),s=e(31),p=e(18),f=e(28),d=e(1),b=e(220),h=e(218),x=e(472),y=e(364),m=e(4),g=e(6),v=e(16),w=e(51),_=e(26),k=e(49),E=e(363),O=e(216),S=e(11),j=e(45),P=O.f,M=S.f,z=E.f,A=r.Symbol,N=r.JSON,D=N&&N.stringify,F=d("_hidden"),T=d("toPrimitive"),C={}.propertyIsEnumerable,I=s("symbol-registry"),J=s("symbols"),B=s("op-symbols"),G=Object.prototype,K="function"==typeof A,W=r.QObject,Y=!W||!W.prototype||!W.prototype.findChild,L=i&&u(function(){return 7!=k(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=P(G,n);r&&delete G[n],M(t,n,e),r&&t!==G&&M(G,n,r)}:M,Q=function(t){var n=J[t]=k(A.prototype);return n._k=t,n},R=K&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},U=function(t,n,e){return t===G&&U(B,n,e),m(t),n=w(n,!0),m(e),o(J,n)?(e.enumerable?(o(t,F)&&t[F][n]&&(t[F][n]=!1),e=k(e,{enumerable:_(0,!1)})):(o(t,F)||M(t,F,_(1,{})),t[F][n]=!0),L(t,n,e)):M(t,n,e)},q=function(t,n){m(t);for(var e,r=x(n=v(n)),o=0,i=r.length;i>o;)U(t,e=r[o++],n[e]);return t},H=function(t){var n=C.call(this,t=w(t,!0));return!(this===G&&o(J,t)&&!o(B,t))&&(!(n||!o(this,t)||!o(J,t)||o(this,F)&&this[F][t])||n)},V=function(t,n){if(t=v(t),n=w(n,!0),t!==G||!o(J,n)||o(B,n)){var e=P(t,n);return!e||!o(J,n)||o(t,F)&&t[F][n]||(e.enumerable=!0),e}},X=function(t){for(var n,e=z(v(t)),r=[],i=0;e.length>i;)o(J,n=e[i++])||n==F||n==l||r.push(n);return r},Z=function(t){for(var n,e=t===G,r=z(e?B:v(t)),i=[],a=0;r.length>a;)!o(J,n=r[a++])||e&&!o(G,n)||i.push(J[n]);return i};K||(c((A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=f(arguments.length>0?arguments[0]:void 0),n=function(e){this===G&&n.call(B,e),o(this,F)&&o(this[F],t)&&(this[F][t]=!1),L(this,t,_(1,e))};return i&&Y&&L(G,t,{configurable:!0,set:n}),Q(t)}).prototype,"toString",function(){return this._k}),O.f=V,S.f=U,e(240).f=E.f=X,e(178).f=H,e(217).f=Z,i&&!e(17)&&c(G,"propertyIsEnumerable",H,!0),b.f=function(t){return Q(d(t))}),a(a.G+a.W+a.F*!K,{Symbol:A});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)d($[tt++]);for(var nt=j(d.store),et=0;nt.length>et;)h(nt[et++]);a(a.S+a.F*!K,"Symbol",{for:function(t){return o(I,t+="")?I[t]:I[t]=A(t)},keyFor:function(t){if(!R(t))throw TypeError(t+" is not a symbol!");for(var n in I)if(I[n]===t)return n},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),a(a.S+a.F*!K,"Object",{create:function(t,n){return void 0===n?k(t):q(k(t),n)},defineProperty:U,defineProperties:q,getOwnPropertyDescriptor:V,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),N&&a(a.S+a.F*(!K||u(function(){var t=A();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))})),"JSON",{stringify:function(t){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(e=n=r[1],(g(n)||void 0!==t)&&!R(t))return y(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!R(n))return n}),r[1]=n,D.apply(N,r)}}),A.prototype[T]||e(5)(A.prototype,T,A.prototype.valueOf),p(A,"Symbol"),p(Math,"Math",!0),p(r.JSON,"JSON",!0)},474:function(t,n,e){e(473),e(52),e(471),e(470),t.exports=e(2).Symbol},475:function(t,n,e){e(46),e(47),t.exports=e(220).f("iterator")},476:function(t,n,e){t.exports={default:e(475),__esModule:!0}},477:function(t,n,e){var r=e(9);r(r.S+r.F*!e(7),"Object",{defineProperty:e(11).f})},478:function(t,n,e){e(477);var r=e(2).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},479:function(t,n,e){var r=e(48),o=e(56);e(221)("getPrototypeOf",function(){return function(t){return o(r(t))}})},480:function(t,n,e){e(479),t.exports=e(2).Object.getPrototypeOf},93:function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return P}),e.d(n,"ArticleListStyled",function(){return A}),e.d(n,"SearchStyled",function(){return N}),e.d(n,"ManagerBox",function(){return D}),e.d(n,"Button",function(){return F});var r=e(104),o=e.n(r),i=e(3),a=e.n(i),c=e(10),l=e.n(c),u=e(94),s=e.n(u),p=e(97),f=e.n(p),d=e(98),b=e.n(d),h=e(96),x=e.n(h),y=e(95),m=e.n(y),g=e(24),v=e.n(g),w=e(107),_=e.n(w),k=e(324),E=o()(["\n\t& {\n\t\tmargin-top: 10px;\n\t}\n\n\t& table {\n\t\tmargin-top: 10px;\n\t\tdisplay: table;\n\t\twidth: 100%;\n\t\tmax-width: 100%;\n\t\tbackground-color: transparent;\n\t\tborder-collapse: collapse;\n\t\tborder-spacing: 0;\n\t\tborder-color: grey;\n\t}\n\n\t& table tbody > tr:nth-child(odd) > td,\n\t& table tbody > tr:nth-child(odd) > th {\n\t\tbackground-color: #f9f9f9;\n\t}\n\n\t& table th,\n\t& table td {\n\t\tpadding: 8px;\n\t\tline-height: 18px;\n\t\ttext-align: left;\n\t\tvertical-align: top;\n\t}\n\n\t& table td {\n\t\tborder-top: 1px solid #ddd;\n\t}\n\n\t& table button {\n\t\tdisplay: inline-block;\n\t\tpadding: 0px 5px;\n\t\tmargin-bottom: 0;\n\t\tfont-size: 11px;\n\t\tline-height: 18px;\n\t\ttext-align: center;\n\t\tvertical-align: middle;\n\t\tcursor: pointer;\n\t\tbackground-color: white;\n\t\tcolor: #333;\n\t\tborder: 1px solid #b3b3b3;\n\t\t-webkit-border-radius: 3px;\n\t\t-moz-border-radius: 3px;\n\t\tborder-radius: 3px;\n\t\tbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n\t\topacity: 0.5;\n\t}\n"],["\n\t& {\n\t\tmargin-top: 10px;\n\t}\n\n\t& table {\n\t\tmargin-top: 10px;\n\t\tdisplay: table;\n\t\twidth: 100%;\n\t\tmax-width: 100%;\n\t\tbackground-color: transparent;\n\t\tborder-collapse: collapse;\n\t\tborder-spacing: 0;\n\t\tborder-color: grey;\n\t}\n\n\t& table tbody > tr:nth-child(odd) > td,\n\t& table tbody > tr:nth-child(odd) > th {\n\t\tbackground-color: #f9f9f9;\n\t}\n\n\t& table th,\n\t& table td {\n\t\tpadding: 8px;\n\t\tline-height: 18px;\n\t\ttext-align: left;\n\t\tvertical-align: top;\n\t}\n\n\t& table td {\n\t\tborder-top: 1px solid #ddd;\n\t}\n\n\t& table button {\n\t\tdisplay: inline-block;\n\t\tpadding: 0px 5px;\n\t\tmargin-bottom: 0;\n\t\tfont-size: 11px;\n\t\tline-height: 18px;\n\t\ttext-align: center;\n\t\tvertical-align: middle;\n\t\tcursor: pointer;\n\t\tbackground-color: white;\n\t\tcolor: #333;\n\t\tborder: 1px solid #b3b3b3;\n\t\t-webkit-border-radius: 3px;\n\t\t-moz-border-radius: 3px;\n\t\tborder-radius: 3px;\n\t\tbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n\t\topacity: 0.5;\n\t}\n"]),O=o()(["\n\t& input {\n\t\tdisplay: inline-block;\n\t\tborder-radius: 3px 0 0 3px;\n\t\tposition: relative;\n\t\tmargin-bottom: 0;\n\t\tvertical-align: top;\n\t\tfont-size: 13px;\n\t\tbackground-color: #fff;\n\t\tborder: 1px solid #ccc;\n\t\t-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n\t\t-moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n\t\tbox-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n\t\t-webkit-transition: border linear 0.2s, box-shadow linear 0.2s;\n\t\t-moz-transition: border linear 0.2s, box-shadow linear 0.2s;\n\t\t-o-transition: border linear 0.2s, box-shadow linear 0.2s;\n\t\ttransition: border linear 0.2s, box-shadow linear 0.2s;\n\t}\n\n\t& button {\n\t\tdisplay: inline-block;\n\t\tpadding: 4px 12px;\n\t\tmargin-bottom: 0;\n\t\tfont-size: 13px;\n\t\tline-height: 18px;\n\t\ttext-align: center;\n\t\tvertical-align: middle;\n\t\tcursor: pointer;\n\t\tbackground-color: white;\n\t\tcolor: #333;\n\t\tborder: 1px solid #b3b3b3;\n\t\tborder-left: 0px;\n\t\t-webkit-border-radius: 3px;\n\t\t-moz-border-radius: 3px;\n\t\tborder-radius: 0px 3px 3px 0px;\n\t\tbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n\t}\n\n\t& button:hover,\n\t& button:active,\n\t& button:focus {\n\t\toutline: none;\n\t}\n\n\t& button:hover {\n\t\tbackground-color: #f3f3f3;\n\t}\n"],["\n\t& input {\n\t\tdisplay: inline-block;\n\t\tborder-radius: 3px 0 0 3px;\n\t\tposition: relative;\n\t\tmargin-bottom: 0;\n\t\tvertical-align: top;\n\t\tfont-size: 13px;\n\t\tbackground-color: #fff;\n\t\tborder: 1px solid #ccc;\n\t\t-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n\t\t-moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n\t\tbox-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n\t\t-webkit-transition: border linear 0.2s, box-shadow linear 0.2s;\n\t\t-moz-transition: border linear 0.2s, box-shadow linear 0.2s;\n\t\t-o-transition: border linear 0.2s, box-shadow linear 0.2s;\n\t\ttransition: border linear 0.2s, box-shadow linear 0.2s;\n\t}\n\n\t& button {\n\t\tdisplay: inline-block;\n\t\tpadding: 4px 12px;\n\t\tmargin-bottom: 0;\n\t\tfont-size: 13px;\n\t\tline-height: 18px;\n\t\ttext-align: center;\n\t\tvertical-align: middle;\n\t\tcursor: pointer;\n\t\tbackground-color: white;\n\t\tcolor: #333;\n\t\tborder: 1px solid #b3b3b3;\n\t\tborder-left: 0px;\n\t\t-webkit-border-radius: 3px;\n\t\t-moz-border-radius: 3px;\n\t\tborder-radius: 0px 3px 3px 0px;\n\t\tbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n\t}\n\n\t& button:hover,\n\t& button:active,\n\t& button:focus {\n\t\toutline: none;\n\t}\n\n\t& button:hover {\n\t\tbackground-color: #f3f3f3;\n\t}\n"]),S=o()(["\n\tmargin-top: 10px;\n\n\t& .hidden {\n\t\tdisplay: none;\n\t}\n"],["\n\tmargin-top: 10px;\n\n\t& .hidden {\n\t\tdisplay: none;\n\t}\n"]),j=o()(["\n\t& {\n\t\tdisplay: inline-block;\n\t\tpadding: 4px 12px;\n\t\tmargin-bottom: 0;\n\t\tfont-size: 13px;\n\t\tline-height: 18px;\n\t\ttext-align: center;\n\t\tvertical-align: middle;\n\t\tcursor: pointer;\n\t\tbackground-color: white;\n\t\tcolor: #333;\n\t\tborder: 1px solid #b3b3b3;\n\t\t-webkit-border-radius: 3px;\n\t\t-moz-border-radius: 3px;\n\t\tborder-radius: 3px;\n\t\tbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n\t}\n\n\t&.active {\n\t\tbackground-color: #f3f3f3;\n\t}\n\n\t&:hoverhover,\n\t&:active,\n\t&:focus {\n\t\toutline: none;\n\t}\n\n\t&:hover {\n\t\tbackground-color: #f3f3f3;\n\t}\n"],["\n\t& {\n\t\tdisplay: inline-block;\n\t\tpadding: 4px 12px;\n\t\tmargin-bottom: 0;\n\t\tfont-size: 13px;\n\t\tline-height: 18px;\n\t\ttext-align: center;\n\t\tvertical-align: middle;\n\t\tcursor: pointer;\n\t\tbackground-color: white;\n\t\tcolor: #333;\n\t\tborder: 1px solid #b3b3b3;\n\t\t-webkit-border-radius: 3px;\n\t\t-moz-border-radius: 3px;\n\t\tborder-radius: 3px;\n\t\tbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n\t}\n\n\t&.active {\n\t\tbackground-color: #f3f3f3;\n\t}\n\n\t&:hoverhover,\n\t&:active,\n\t&:focus {\n\t\toutline: none;\n\t}\n\n\t&:hover {\n\t\tbackground-color: #f3f3f3;\n\t}\n"]),P=function(t){function n(){var t,e,r,o;f()(this,n);for(var i=arguments.length,a=Array(i),c=0;c<i;c++)a[c]=arguments[c];return e=r=x()(this,(t=n.__proto__||s()(n)).call.apply(t,[this].concat(a))),r.state={type:"articles"},o=e,x()(r,o)}return m()(n,t),b()(n,[{key:"render",value:function(){var t=this;return v.a.createElement(D,null,v.a.createElement(F,{className:"articles"===this.state.type?"active":"",onClick:function(n){return t.setState({type:"articles"})}},"Articles"),v.a.createElement(F,{className:"modules"===this.state.type?"active":"",onClick:function(n){return t.setState({type:"modules"})}},"Modules"),v.a.createElement(M,{type:this.state.type}))}}]),n}(g.Component),M=function(t){function n(){var t,e,r,o,i,c=this;f()(this,n);for(var u=arguments.length,p=Array(u),d=0;d<u;d++)p[d]=arguments[d];return e=r=x()(this,(t=n.__proto__||s()(n)).call.apply(t,[this].concat(p))),r.state={data:[]},r.fetchData=(i=l()(a.a.mark(function t(n){var e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(k.b)({url:"index.php?pb3ajax=1&task=listPageBuilderArticles&type="+n});case 2:e=t.sent,r.setState({data:e});case 5:case"end":return t.stop()}},t,c)})),function(t){return i.apply(this,arguments)}),o=e,x()(r,o)}return m()(n,t),b()(n,[{key:"componentDidMount",value:function(){this.fetchData(this.props.type)}},{key:"componentDidUpdate",value:function(t){t.type!==this.props.type&&this.fetchData(this.props.type)}},{key:"render",value:function(){var t=this.props.type,n=this.state.data;return v.a.createElement("div",null,v.a.createElement(z,{articles:n,type:t}))}}]),n}(v.a.Component),z=function(t){function n(){return f()(this,n),x()(this,(n.__proto__||s()(n)).apply(this,arguments))}return m()(n,t),b()(n,[{key:"renderArticle",value:function(t,n,e){return v.a.createElement("tr",{key:n},v.a.createElement("td",null,t.id),v.a.createElement("td",null,v.a.createElement("a",{href:"index.php?option=com_content&task=article.edit&id="+t.id},t.title)),v.a.createElement("td",null,"articles"===e?t.cTitle:t.position),v.a.createElement("td",null,v.a.createElement("button",{disabled:!0},v.a.createElement("i",{className:("1"===t.state?"fa fa-check":"fa fa-remove")+" "}))))}},{key:"render",value:function(){var t=this,n=this.props,e=n.type,r=n.articles;return v.a.createElement(A,null,v.a.createElement("table",null,v.a.createElement("thead",null,v.a.createElement("tr",null,v.a.createElement("th",{width:"10%"},"ID"),v.a.createElement("th",{width:"30%"},"Title"),v.a.createElement("th",{width:"30%"},"articles"===e?"Category":"Position"),v.a.createElement("th",{width:"30%"},"State"))),v.a.createElement("tbody",null,r.map(function(n,r){return t.renderArticle(n,r,e)})),v.a.createElement("tfoot",null,v.a.createElement("tr",null,v.a.createElement("td",{colSpan:"12",width:"100%"})))))}}]),n}(g.Component),A=_.a.div(E),N=_.a.div(O),D=_.a.div(S),F=_.a.div(j)},94:function(t,n,e){t.exports={default:e(480),__esModule:!0}},95:function(t,n,e){"use strict";n.__esModule=!0;var r=a(e(325)),o=a(e(466)),i=a(e(126));function a(t){return t&&t.__esModule?t:{default:t}}n.default=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+(void 0===n?"undefined":(0,i.default)(n)));t.prototype=(0,o.default)(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(r.default?(0,r.default)(t,n):t.__proto__=n)}},96:function(t,n,e){"use strict";n.__esModule=!0;var r,o=e(126),i=(r=o)&&r.__esModule?r:{default:r};n.default=function(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==(void 0===n?"undefined":(0,i.default)(n))&&"function"!=typeof n?t:n}},97:function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},98:function(t,n,e){"use strict";n.__esModule=!0;var r,o=e(188),i=(r=o)&&r.__esModule?r:{default:r};n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()}}]);