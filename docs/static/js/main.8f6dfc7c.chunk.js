(this["webpackJsonpgithub-users"]=this["webpackJsonpgithub-users"]||[]).push([[0],{130:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(12),r=n.n(i),s=n(26),j=n(51),o=n(15),l=n(46),b=n.n(l),h=n(63),u=n(193),d=n(214),x=n(199),O=n(197),p=n(76),m=n(50),f=n.n(m),g=n(198),v=n(135),y=n(200),w=n(213),A=n(3),C=Object(u.a)((function(e){return{img:{maxWidth:200}}})),I=function(e){var t=e.data,n=e.repositories,c=C(),a=t.login,i=t.avatar_url,r=t.type;return Object(A.jsxs)("div",{children:[Object(A.jsx)(w.a,{xsDown:!0,children:Object(A.jsx)("div",{children:Object(A.jsxs)(d.a,{style:{backgroundColor:"#e9c46a"},children:[Object(A.jsx)(O.a,{expandIcon:Object(A.jsx)(f.a,{}),children:Object(A.jsx)(g.a,{container:!0,justify:"center",alignItems:"center",direction:"row",children:Object(A.jsx)(g.a,{item:!0,xs:12,children:Object(A.jsxs)(g.a,{container:!0,children:[Object(A.jsx)(g.a,{item:!0,xs:3,style:{textAlign:"center"},children:Object(A.jsx)(p.a,{children:"UserName"})}),Object(A.jsx)(g.a,{item:!0,xs:3,style:{textAlign:"center"},children:Object(A.jsx)(p.a,{children:"Avatar"})}),Object(A.jsx)(g.a,{item:!0,xs:3,style:{textAlign:"center"},children:Object(A.jsx)(p.a,{children:"Respositorios"})}),Object(A.jsx)(g.a,{item:!0,xs:2,style:{textAlign:"center"},children:Object(A.jsx)(p.a,{children:"Organizacion"})})]})})})}),Object(A.jsx)(x.a,{style:{marginLeft:"150px"},children:Object(A.jsx)(g.a,{container:!0,children:Object(A.jsx)(g.a,{item:!0,xs:12,children:Object(A.jsxs)(g.a,{container:!0,children:[Object(A.jsx)(g.a,{item:!0,xs:2,children:Object(A.jsx)(p.a,{children:a})}),Object(A.jsx)(g.a,{item:!0,xs:3,style:{textAlign:"center"},children:Object(A.jsx)("img",{src:i,alt:"alt",className:c.img})}),Object(A.jsx)(g.a,{item:!0,xs:3,children:n.map((function(e){return Object(A.jsx)(v.a,{style:{textAlign:"center"},children:Object(A.jsx)(y.a,{primary:e.name})},e.name)}))}),Object(A.jsx)(g.a,{item:!0,xs:3,style:{textAlign:"center"},children:"User"===r?Object(A.jsx)(p.a,{children:"No"}):Object(A.jsx)(p.a,{children:"Si"})})]})})})})]})})}),Object(A.jsx)(w.a,{smUp:!0,children:Object(A.jsxs)("div",{style:{marginTop:"50px"},children:[Object(A.jsxs)(d.a,{style:{backgroundColor:"#e9c46a"},children:[Object(A.jsx)(O.a,{expandIcon:Object(A.jsx)(f.a,{}),children:Object(A.jsx)(p.a,{children:"UserName"})}),Object(A.jsx)(x.a,{children:Object(A.jsx)(p.a,{variant:"h6",color:"initial",children:a})})]}),Object(A.jsxs)(d.a,{style:{backgroundColor:"#e9c46a"},children:[Object(A.jsx)(O.a,{expandIcon:Object(A.jsx)(f.a,{}),children:Object(A.jsx)(p.a,{children:"Avatar"})}),Object(A.jsx)(x.a,{children:Object(A.jsx)("img",{src:i,alt:"alt",className:c.img})})]}),Object(A.jsxs)(d.a,{style:{backgroundColor:"#e9c46a"},children:[Object(A.jsx)(O.a,{expandIcon:Object(A.jsx)(f.a,{}),children:Object(A.jsx)(p.a,{children:"Repositorios"})}),Object(A.jsx)(x.a,{children:n.map((function(e){return Object(A.jsx)(v.a,{style:{textAlign:"center"},children:Object(A.jsx)(y.a,{primary:e.name})},e.name)}))})]}),Object(A.jsxs)(d.a,{style:{backgroundColor:"#e9c46a"},children:[Object(A.jsx)(O.a,{expandIcon:Object(A.jsx)(f.a,{}),children:Object(A.jsx)(p.a,{children:"Organizaciones"})}),Object(A.jsx)(x.a,{children:"User"===r?Object(A.jsx)(p.a,{children:"No"}):Object(A.jsx)(p.a,{children:"Si"})})]})]})})]})},k=function(e){var t=e.user;Object(c.useEffect)((function(){d()}),[]);var n=Object(c.useState)({}),a=Object(s.a)(n,2),i=a[0],r=a[1],j=Object(c.useState)([]),o=Object(s.a)(j,2),l=o[0],u=o[1],d=function(){var e=Object(h.a)(b.a.mark((function e(){var n,c,a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.next=8,fetch(c.repos_url);case 8:return a=e.sent,e.next=11,a.json();case 11:i=e.sent,r(c),u(i);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(A.jsx)("div",{children:Object(A.jsx)(I,{data:i,repositories:l})})},S=n(98),N=n(211),U=n(201),L=function(e){var t=e.setuser,n=Object(c.useState)([]),a=Object(s.a)(n,2),i=a[0],r=a[1],j=Object(u.a)((function(e){return{gridContainer:{height:"10vh",width:"100vw",margin:"20px"}}}))();return Object(A.jsxs)("div",{children:[Object(A.jsx)(p.a,{variant:"h3",align:"center",style:{marginTop:"50px",color:"white"},children:"Search GitHub Users"}),Object(A.jsx)("form",{onSubmit:function(e){e.preventDefault(),t((function(e){return[].concat(Object(S.a)(e),[i])}))},children:Object(A.jsxs)(g.a,{container:!0,className:j.gridContainer,justify:"center",alignItems:"center",children:[Object(A.jsx)(N.a,{type:"text",variant:"outlined",value:i,label:"user...",onChange:function(e){r(e.target.value)},style:{width:"300px",minWidth:100}}),Object(A.jsx)(U.a,{variant:"contained",type:"submit",size:"large",style:{backgroundColor:"#2a9d8f",color:"white",marginLeft:"10px"},children:"Search users"})]})})]})},E=n(202),_=n(203),B=n(134),T=n(93),z=n.n(T),G=n(34),R=n(56);n(133),n(127);R.a.initializeApp({apiKey:"AIzaSyDNqrUwD_ILvBzZLQFxSZN-uNJIpF7TGds",authDomain:"github-users-c9ab9.firebaseapp.com",projectId:"github-users-c9ab9",storageBucket:"github-users-c9ab9.appspot.com",messagingSenderId:"574642476488",appId:"1:574642476488:web:c45ccb04c54589f735dcfd"});R.a.firestore();var D=new R.a.auth.GithubAuthProvider,H="[Auth] Login",P="[Auth] Logout",W=function(){return{type:P}},F=n(204),J=n(97),M=n(212),X=n(205),Z=n(136),q=n(206),K=n(207),Q=n(209),V=n(208),Y=Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},modal:{display:"flex",alignItems:"center",justifyContent:"center"},root2:{maxWidth:345},media:{height:240,width:340}}})),$=function(){var e=Y(),t=a.a.useState(null),n=Object(s.a)(t,2),c=n[0],i=n[1],r=Boolean(c),j=a.a.useState(!1),o=Object(s.a)(j,2),l=o[0],u=o[1],d=Object(G.c)((function(e){return e.auth})),x=d.email,O=d.photoURL,m=Object(G.b)();return Object(A.jsxs)("div",{className:e.root,children:[Object(A.jsx)(E.a,{position:"static",style:{height:"10vh",backgroundColor:"#264653"},children:Object(A.jsxs)(_.a,{children:[Object(A.jsx)(p.a,{variant:"h6",className:e.title,children:"GitHub Users"}),Object(A.jsxs)("div",{children:[Object(A.jsx)(B.a,{onClick:function(e){i(e.currentTarget)},color:"inherit",children:Object(A.jsx)(z.a,{})}),Object(A.jsxs)(J.a,{id:"menu-appbar",anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:r,onClose:function(){i(null)},children:[Object(A.jsx)(F.a,{onClick:function(){u(!0)},children:"Profile"}),Object(A.jsx)(F.a,{onClick:function(){m(function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.auth().signOut();case 2:t(W());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]})]})]})}),Object(A.jsx)(M.a,{className:e.modal,open:l,onClose:function(){u(!1)},closeAfterTransition:!0,BackdropComponent:X.a,BackdropProps:{timeout:500},children:Object(A.jsx)(Z.a,{in:l,children:Object(A.jsx)("div",{className:e.paper,children:Object(A.jsx)(q.a,{className:e.root2,children:Object(A.jsxs)(K.a,{children:[Object(A.jsx)(V.a,{className:e.media,image:O,title:"Contemplative Reptile"}),Object(A.jsxs)(Q.a,{children:[Object(A.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Email:"}),Object(A.jsx)(p.a,{variant:"body2",color:"textSecondary",component:"p",children:x})]})]})})})})})]})},ee=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(A.jsxs)("div",{children:[Object(A.jsx)($,{}),Object(A.jsx)(L,{setuser:a}),n.map((function(e,t){return Object(A.jsx)(k,{user:e},t)}))]})},te=n(39),ne=n(75),ce=["isAuthenticated","component"],ae=function(e){var t=e.isAuthenticated,n=e.component,c=Object(ne.a)(e,ce);return Object(A.jsx)(o.b,Object(te.a)(Object(te.a)({},c),{},{component:function(e){return t?Object(A.jsx)(n,Object(te.a)({},e)):Object(A.jsx)(o.a,{to:"/auth/login"})}}))},ie=["isAuthenticated","component"],re=function(e){var t=e.isAuthenticated,n=e.component,c=Object(ne.a)(e,ie);return Object(A.jsx)(o.b,Object(te.a)(Object(te.a)({},c),{},{component:function(e){return t?Object(A.jsx)(o.a,{to:"/"}):Object(A.jsx)(n,Object(te.a)({},e))}}))},se=n(94),je=n.n(se),oe=function(){var e=Object(G.b)();return Object(A.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},children:Object(A.jsxs)("div",{children:[Object(A.jsx)(p.a,{variant:"h1",color:"initial",children:"Hello, this is my app!"}),Object(A.jsx)(U.a,{type:"submit",onClick:function(){e((function(e){R.a.auth().signInWithPopup(D)}))},variant:"contained",style:{backgroundColor:"#2a9d8f",color:"white",width:"35vw",height:"10vh"},startIcon:Object(A.jsx)(je.a,{}),children:"LOGIN WHITH GITHUB"})]})})},le=function(){return Object(A.jsx)("div",{children:Object(A.jsxs)(o.d,{children:[Object(A.jsx)(o.b,{exact:!0,path:"/auth/login",component:oe}),Object(A.jsx)(o.a,{to:"/auth/login"})]})})},be=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(G.b)();return Object(c.useEffect)((function(){R.a.auth().onAuthStateChanged((function(e){var t,n;(null===e||void 0===e?void 0:e.uid)?(a(!0),i((t=e.email,n=e.photoURL,{type:H,payload:{email:t,photoURL:n}})),console.log(e)):a(!1)}))}),[i,n]),Object(A.jsx)(j.a,{children:Object(A.jsx)("div",{children:Object(A.jsxs)(o.d,{children:[Object(A.jsx)(re,{path:"/auth",component:le,isAuthenticated:n}),Object(A.jsx)(ae,{exact:!0,path:"/",component:ee,isAuthenticated:n}),Object(A.jsx)(o.a,{to:"/auth/login"})]})})})},he=n(57),ue=n(95),de="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.c,xe=Object(he.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return t.payload;case P:return{};default:return e}}}),Oe=Object(he.d)(xe,de(Object(he.a)(ue.a))),pe=n(210),me=n(96),fe=Object(me.a)({typography:{fontFamily:["Poppins","sans-serif"]}}),ge=function(){return Object(A.jsx)(G.a,{store:Oe,children:Object(A.jsx)(pe.a,{theme:fe,children:Object(A.jsx)(be,{})})})};n(130);r.a.render(Object(A.jsx)(ge,{}),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.8f6dfc7c.chunk.js.map