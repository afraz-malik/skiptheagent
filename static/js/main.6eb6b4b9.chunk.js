(this.webpackJsonpskiptheagent=this.webpackJsonpskiptheagent||[]).push([[2],{23:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u}));var r=function(e){return{type:"SET_URL",payload:e}},a=function(e){return{type:"SIGN_UP_START",payload:e}},c=function(e){return{type:"SIGN_IN_START",payload:e}},u=function(e){return{type:"SIGN_IN_SUCCESS",payload:e}}},51:function(e,t,n){},59:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(27),u=n.n(c),o=(n(51),function(e){e&&e instanceof Function&&n.e(13).then(n.bind(null,114)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,u=t.getTTFB;n(e),r(e),a(e),c(e),u(e)}))}),s=n(20),i={url:null},l={user:null},p=Object(s.b)({URLReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_URL":return Object.assign({},e,{url:t.payload});default:return e}},SignUpReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN_SUCCESS":return Object.assign({},e,{user:t.payload});default:return e}}}),d=n(43),b=n.n(d),f=n(46),j=n(14),h=n.n(j),O=n(19),x=n(23),m=n(44),g=n(25);n(63),n(53),n(64);g.a.initializeApp({apiKey:"AIzaSyBu1x4tu6iZPxhkANVuOxzJtjcLBzKW5lc",authDomain:"skiptheagent-react.firebaseapp.com",projectId:"skiptheagent-react",storageBucket:"skiptheagent-react.appspot.com",messagingSenderId:"470859456457",appId:"1:470859456457:web:db0de858f2e69e70b1d218",measurementId:"G-N1ZG0Z7E9P"}),g.a.analytics();var y=g.a.auth(),v=g.a.firestore(),S=function(){var e=Object(m.a)(h.a.mark((function e(t,n){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=v.doc("users/".concat(t.uid)),e.next=3,r.get();case 3:if(e.sent.exists){e.next=10;break}return r.set({displayName:n,email:t.email,createdAt:new Date}).then((function(e){alert("Success")})).catch((function(e){alert(e.message)})),t.updateProfile({displayName:n}).then((function(e){return console.log("displayname set")})).catch((function(e){return console.log(e)})),e.abrupt("return",r);case 10:console.log("not overwrited");case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=h.a.mark(U),k=h.a.mark(_),I=h.a.mark(P),N=h.a.mark(z);function U(e){var t,n;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.next=3,y.createUserWithEmailAndPassword(t.email,t.password).then((function(e){n=e.user})).catch((function(e){return alert(e.message)}));case 3:if(!n){r.next=8;break}return r.next=6,S(n,t.name);case 6:return r.next=8,Object(O.c)(Object(x.c)({name:t.name,email:t.email}));case 8:case"end":return r.stop()}}),w)}function _(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.d)("SIGN_UP_START",U);case 2:case"end":return e.stop()}}),k)}function P(e){var t,n;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.next=3,y.signInWithEmailAndPassword(t.email,t.password).then((function(e){n=e.user,alert("ok")})).catch((function(e){return alert(e.message)}));case 3:if(!n){r.next=6;break}return r.next=6,Object(O.c)(Object(x.c)({name:n.displayName,email:n.email}));case 6:case"end":return r.stop()}}),I)}function z(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.d)("SIGN_IN_START",P);case 2:case"end":return e.stop()}}),N)}var R=h.a.mark(T);function T(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)([Object(O.b)(_),Object(O.b)(z)]);case 2:case"end":return e.stop()}}),R)}var A=Object(f.a)(),C=[A,b.a],E=Object(s.d)(p,s.a.apply(void 0,C));A.run(T);var G=n(26),L=n(36),B=n(37),D=n(39),F=n(38),J=n(35),W=n(9),Z=(n(40),n(41),n(59),n(8)),K=function(){return Object(Z.jsx)("div",{className:"SpinnerOverlay",children:Object(Z.jsx)("div",{className:"SpinnerContainer"})})},M=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,117))})),V=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,120))})),q=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,121))})),H=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,122))})),Q=Object(r.lazy)((function(){return n.e(9).then(n.bind(null,115))})),X=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,118))})),Y=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,119))})),$=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(5)]).then(n.bind(null,116))})),ee=function(e){Object(D.a)(n,e);var t=Object(F.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"componentDidMount",value:function(){console.log(y.currentUser),this.props.setUrl("/skiptheagent-react/")}},{key:"render",value:function(){var e=y.currentUser,t=this.props.url;return Object(Z.jsx)(J.a,{children:Object(Z.jsx)(r.Suspense,{fallback:Object(Z.jsx)(K,{}),children:Object(Z.jsxs)(W.d,{children:[Object(Z.jsx)(W.b,{exact:!0,path:"".concat(t),component:M}),Object(Z.jsx)(W.b,{exact:!0,path:"".concat(t,"listing"),component:V}),Object(Z.jsx)(W.b,{exact:!0,path:"".concat(t,"login"),render:function(){return e?Object(Z.jsx)(W.a,{to:"".concat(t,"dashboard")}):Object(Z.jsx)(q,{})}}),Object(Z.jsx)(W.b,{exact:!0,path:"".concat(t,"register"),render:function(){return e?Object(Z.jsx)(W.a,{to:"".concat(t,"dashboard")}):Object(Z.jsx)(H,{})}}),Object(Z.jsx)(W.b,{exact:!0,path:"".concat(t,"forget"),component:Q}),Object(Z.jsx)(W.b,{exact:!0,path:"".concat(t,"ownership"),component:X}),Object(Z.jsx)(W.b,{exact:!0,path:"".concat(t,"details"),component:Y}),Object(Z.jsx)(W.b,{path:"".concat(t,"dashboard"),component:$})]})})})}}]),n}(a.a.Component),te=Object(G.b)((function(e){return{url:e.URLReducer.url,user:e.SignUpReducer.user}}),(function(e){return{setUrl:function(t){return e(Object(x.a)(t))}}}))(ee);u.a.render(Object(Z.jsx)(G.a,{store:E,children:Object(Z.jsx)(a.a.StrictMode,{children:Object(Z.jsx)(te,{})})}),document.getElementById("root")),o()}},[[62,3,4]]]);
//# sourceMappingURL=main.6eb6b4b9.chunk.js.map