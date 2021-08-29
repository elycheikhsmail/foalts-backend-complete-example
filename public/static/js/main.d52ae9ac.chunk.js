(this["webpackJsonpfrontend-app"]=this["webpackJsonpfrontend-app"]||[]).push([[0],{13:function(e,t,n){e.exports={title:"CredentialsForm_title__1tO69",error:"CredentialsForm_error__2AL0x",formGroup:"CredentialsForm_formGroup__rLGVk",separator:"CredentialsForm_separator__1QBoF",btn:"CredentialsForm_btn__3dSMn"}},14:function(e,t,n){e.exports={container:"Story_container__1XefJ",author:"Story_author__3_o9a",mainContent:"Story_mainContent__2Pj_3",title:"Story_title__2xZRm",authorName:"Story_authorName__3aVrq",deletion:"Story_deletion__27ckn",avatar:"Story_avatar__1cMeH"}},16:function(e,t,n){e.exports={container:"ProfileHeader_container__2R0D7",avatar:"ProfileHeader_avatar__2o4uw",author:"ProfileHeader_author__3I847",formGroup:"ProfileHeader_formGroup__3vCj7"}},20:function(e,t,n){e.exports={formGroup:"NewStory_formGroup__1c2Y9"}},33:function(e,t,n){e.exports={container:"ErrorBox_container__3Ph0K"}},34:function(e,t,n){e.exports={navbar:"Navbar_navbar__CLYHD"}},36:function(e,t,n){e.exports={container:"Feed_container__3UySO"}},37:function(e,t,n){e.exports={container:"LogIn_container__348lj"}},38:function(e,t,n){e.exports={container:"Profile_container__WdMDr"}},39:function(e,t,n){e.exports={container:"SignUp_container__cE499"}},45:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(32),s=n.n(c),i=(n(45),n(3)),o=n(12),u=n(4),l=n(13),j=n.n(l),p=n(0);function b(e){var t=Object(r.useState)(""),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),o=Object(i.a)(s,2),u=o[0],l=o[1],b="signup"===e.type?"Sign up":"Log in";return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:j.a.title,children:b}),e.error&&Object(p.jsx)("div",{className:j.a.error,children:"login"===e.type?"Authentication failed.":"Registration failed."}),Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c(""),l(""),e.onSubmit({email:a,password:u})},children:[Object(p.jsxs)("div",{className:j.a.formGroup,children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{type:"email",name:"email",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(p.jsxs)("div",{className:j.a.formGroup,children:[Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"password",name:"password",value:u,onChange:function(e){return l(e.target.value)}})]}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"submit",value:b,className:"".concat(j.a.btn," btn btnPrimary")})})]}),Object(p.jsx)("div",{className:j.a.separator}),Object(p.jsx)("div",{children:Object(p.jsx)("form",{action:"/api/auth/google",method:"get",children:Object(p.jsx)("input",{type:"submit",value:"".concat(b," with Google"),className:"".concat(j.a.btn," btn")})})})]})}var h=n(33),d=n.n(h);function f(){return Object(p.jsx)("div",{className:"".concat(d.a.container," box"),children:"An error has occurred. Please try refreshing the page."})}var O=n(14),x=n.n(O);function m(e){return Object(p.jsxs)("div",{className:"".concat(x.a.container," box"),children:[!e.hideImage&&Object(p.jsx)("div",{className:x.a.author,children:Object(p.jsx)("img",{src:"api/profile/avatar?userId=".concat(e.story.author.id),className:x.a.avatar,alt:"avatar"})}),Object(p.jsxs)("div",{className:x.a.mainContent,children:[Object(p.jsx)("div",{className:x.a.title,children:e.story.title}),Object(p.jsxs)("div",{children:[Object(p.jsx)("a",{href:e.story.link,children:e.story.link}),Object(p.jsxs)("span",{className:x.a.authorName,children:[" - ",e.story.author.name]})]})]}),e.onDelete&&Object(p.jsx)("div",{className:x.a.deletion,children:Object(p.jsx)("button",{onClick:e.onDelete,className:"btn btnSmall",children:"X"})})]})}var v=n(20),g=n.n(v);function _(e){var t=Object(r.useState)(""),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),o=Object(i.a)(s,2),u=o[0],l=o[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Add a story"}),Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c(""),l(""),e.onCreate({title:a,link:u})},children:[Object(p.jsxs)("div",{className:g.a.formGroup,children:[Object(p.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(p.jsx)("input",{type:"text",name:"title",value:a,onChange:function(e){return c(e.target.value)},required:!0})]}),Object(p.jsxs)("div",{className:g.a.formGroup,children:[Object(p.jsx)("label",{htmlFor:"link",children:"Link:"}),Object(p.jsx)("input",{type:"url",name:"link",value:u,onChange:function(e){return l(e.target.value)},required:!0})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"submit",className:"btn",children:"Submit"})})]})]})}var y=n(2),S=n.n(y),N=n(5),w=n(11),k=n.n(w);function C(e){return F.apply(this,arguments)}function F(){return(F=Object(N.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/api/auth/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return L.apply(this,arguments)}function L(){return(L=Object(N.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/api/auth/logout");case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){return U.apply(this,arguments)}function U(){return(U=Object(N.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/api/auth/signup",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return I.apply(this,arguments)}function I(){return(I=Object(N.a)(S.a.mark((function e(t,n){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).set("name",t),n&&r.set("avatar",n),e.next=5,k.a.post("/api/profile",r,{headers:{"content-type":"multipart/form-data"}});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return H.apply(this,arguments)}function H(){return(H=Object(N.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/stories",{params:{authorId:t}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return B.apply(this,arguments)}function B(){return(B=Object(N.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/api/stories",t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e){return M.apply(this,arguments)}function M(){return(M=Object(N.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete("/api/stories/".concat(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=n(34),R=n.n(q);function T(e){var t=Object(u.g)();function n(){return(n=Object(N.a)(S.a.mark((function n(){return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P();case 2:e.onLogOut(),t.push("/");case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(p.jsxs)("div",{className:R.a.navbar,children:[Object(p.jsx)("div",{}),e.currentUser?Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)(o.b,{to:"/",className:"btn btnPrimary",children:"Feed"}),Object(p.jsx)(o.b,{to:"/profile",className:"btn btnPrimary",children:"Profile"}),Object(p.jsx)("button",{onClick:function(){return n.apply(this,arguments)},className:"btn",children:"Log out"})]}):Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)(o.b,{to:"/login",className:"btn btnPrimary",children:"Log in"}),Object(p.jsx)(o.b,{to:"/signup",className:"btn btnPrimary",children:"Sign up"})]})]})}var Y=n(36),V=n.n(Y);function X(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(i.a)(c,2),o=s[0],u=s[1],l=Object(r.useState)(!1),j=Object(i.a)(l,2),b=j[0],h=j[1];return Object(r.useEffect)((function(){n||E().then((function(e){u(e),a(!0)})).catch((function(e){console.log(e),h(!0)}))})),Object(p.jsxs)("div",{className:V.a.container,children:[b&&Object(p.jsx)(f,{}),o.map((function(e){return Object(p.jsx)(m,{story:e},e.id)}))]})}var K=n(37),Q=n.n(K);function W(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(u.g)();function o(){return(o=Object(N.a)(S.a.mark((function t(n){var r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(!1),t.prev=1,t.next=4,C(n);case 4:r=t.sent,e.onLogIn(r),s.push("/"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),c(!0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}return Object(p.jsx)("div",{className:"".concat(Q.a.container," box"),children:Object(p.jsx)(b,{error:a,type:"login",onSubmit:function(e){return o.apply(this,arguments)}})})}var Z=n(23),z=n(16),$=n.n(z);function ee(e){var t=Object(r.useState)(e.username),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(null),o=Object(i.a)(s,2),u=o[0],l=o[1];return Object(r.useEffect)((function(){c(e.username)}),[e.username]),Object(p.jsxs)("div",{className:$.a.container,children:[Object(p.jsx)("div",{className:$.a.author,children:Object(p.jsx)("img",{src:"/api/profile/avatar?".concat(e.avatarCacheId),className:$.a.avatar,alt:"avatar"})}),Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onUpdate(a,u)},children:[Object(p.jsxs)("div",{className:$.a.formGroup,children:[Object(p.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(p.jsx)("input",{type:"text",name:"name",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(p.jsxs)("div",{className:$.a.formGroup,children:[Object(p.jsx)("label",{htmlFor:"avatar",children:"Avatar: "}),Object(p.jsx)("input",{type:"file",name:"avatar",onChange:function(e){return l(e.target.files?e.target.files[0]:null)}})]}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"submit",value:"Update profile",className:"btn btnSmall btnPrimary"})})]})})]})}var te=n(38),ne=n.n(te);function re(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)([]),o=Object(i.a)(s,2),u=o[0],l=o[1],j=Object(r.useState)(!1),b=Object(i.a)(j,2),h=b[0],d=b[1],O=Object(r.useState)(Date.now()),x=Object(i.a)(O,2),v=x[0],g=x[1];function y(){E(e.currentUser.id).then((function(e){l(e),c(!0)})).catch((function(e){console.log(e),d(!0)}))}function w(){return(w=Object(N.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A(t);case 3:return e.next=5,y();case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),d(!0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function k(){return(k=Object(N.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J(t.id);case 3:return e.next=5,y();case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),d(!0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function C(){return(C=Object(N.a)(S.a.mark((function t(n,r){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D(n,r);case 3:g(Date.now()),e.onProfileChange(Object(Z.a)(Object(Z.a)({},e.currentUser),{},{name:n})),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0),d(!0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){a||y()})),Object(p.jsxs)("div",{className:ne.a.container,children:[h&&Object(p.jsx)(f,{}),Object(p.jsx)(ee,{onUpdate:function(e,t){return C.apply(this,arguments)},username:e.currentUser.name,avatarCacheId:v}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Your stories"}),u.map((function(e){return Object(p.jsx)(m,{hideImage:!0,story:e,onDelete:function(){return function(e){return k.apply(this,arguments)}(e)}},e.id)}))]}),Object(p.jsx)(_,{onCreate:function(e){return w.apply(this,arguments)}})]})}var ae=n(39),ce=n.n(ae);function se(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(u.g)();function o(){return(o=Object(N.a)(S.a.mark((function t(n){var r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G(n);case 3:r=t.sent,e.onSignUp(r),s.push("/"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),c(!0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}return Object(p.jsx)("div",{className:"".concat(ce.a.container," box"),children:Object(p.jsx)(b,{error:a,type:"signup",onSubmit:function(e){return o.apply(this,arguments)}})})}var ie=n(40);function oe(){var e=Object(r.useState)(function(){var e=ie.parse(document.cookie).user;if(!e)return null;try{return JSON.parse(e)}catch(t){return null}}()),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(p.jsx)(o.a,{children:Object(p.jsx)("div",{children:Object(p.jsxs)(u.d,{children:[Object(p.jsx)(u.b,{exact:!0,path:"/login",children:Object(p.jsx)(W,{onLogIn:a})}),Object(p.jsx)(u.b,{exact:!0,path:"/profile",children:n?Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)(T,{currentUser:n,onLogOut:function(){return a(null)}}),Object(p.jsx)(re,{currentUser:n,onProfileChange:a})]}):Object(p.jsx)(u.a,{to:"/login"})}),Object(p.jsx)(u.b,{exact:!0,path:"/signup",children:Object(p.jsx)(se,{onSignUp:a})}),Object(p.jsxs)(u.b,{exact:!0,path:"/",children:[Object(p.jsx)(T,{currentUser:n,onLogOut:function(){return a(null)}}),Object(p.jsx)(X,{})]}),Object(p.jsx)(u.b,{path:"*",children:Object(p.jsx)(u.a,{to:"/"})})]})})})}var ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(oe,{})}),document.getElementById("root")),ue()}},[[74,1,2]]]);
//# sourceMappingURL=main.d52ae9ac.chunk.js.map