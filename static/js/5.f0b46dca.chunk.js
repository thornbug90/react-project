(this["webpackJsonpreact-project-1"]=this["webpackJsonpreact-project-1"]||[]).push([[5],{122:function(e,r,t){e.exports={formWrapper:"Login_formWrapper__1pUmm",error:"Login_error__17Wu6"}},252:function(e,r,t){"use strict";t.r(r);var a=t(12),i=(t(0),t(122)),s=t.n(i),n=t(3),o=t(45),c=t(248),m=t(1),l=function(e){var r=e.login,t=c.a().shape({email:c.b().email("Invalid email").required("Required"),password:c.b().min(4).max(10).required()}),a=Object(o.a)({initialValues:{email:"",password:"",rememberMe:!1},logInSchema:t,onSubmit:function(e,t){!function(e,t,a){r(e.email,e.password,e.rememberMe,a),t(!1)}(e,t.setSubmitting,t.setStatus)}}),i=a.handleChange,n=a.handleSubmit,l=a.values,u=a.status;return Object(m.jsxs)("form",{onSubmit:n,children:[Object(m.jsx)("div",{className:"form-control",children:Object(m.jsx)("input",{id:"email",type:"text",name:"email",placeholder:"E-mail",value:l.email,onChange:i})}),Object(m.jsx)("div",{className:"form-control",children:Object(m.jsx)("input",{id:"password",type:"password",name:"password",placeholder:"Password",value:l.password,onChange:i})}),Object(m.jsxs)("div",{className:"form-control",children:[Object(m.jsx)("input",{id:"rememberMe",type:"checkbox",name:"rememberMe",value:l.rememberMe}),Object(m.jsx)("label",{htmlFor:"rememberMe",children:"Remember me"})]}),Object(m.jsx)("div",{className:s.a.error,children:u}),Object(m.jsx)("button",{type:"submit",children:"Login"})]})},u=function(e){var r=e.isAuth,t=e.login;return r?Object(m.jsx)(n.a,{to:"/profile"}):Object(m.jsxs)("div",{className:s.a.formWrapper,children:[Object(m.jsx)("h1",{children:"Login"}),Object(m.jsx)(l,{login:t})]})},b=t(23);r.default=Object(a.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:b.c})(u)}}]);
//# sourceMappingURL=5.f0b46dca.chunk.js.map