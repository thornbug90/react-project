(this["webpackJsonpreact-project-1"]=this["webpackJsonpreact-project-1"]||[]).push([[0],{21:function(t,e,n){"use strict";n(0);var r=n.p+"static/media/preloader.aed4c9cc.svg",s=n(1);e.a=function(t){return Object(s.jsx)("img",{src:r,alt:""})}},23:function(t,e,n){"use strict";n.d(e,"b",(function(){return j})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return p}));var r=n(4),s=n.n(r),i=n(11),c=n(2),a=n(8),o="SET_USER_AUTH_DATA",u={userId:null,email:null,login:null,isAuth:!1},l=function(t,e,n,r){return{type:o,payload:{userId:t,email:e,login:n,isAuth:r}}},j=function(){return function(){var t=Object(i.a)(s.a.mark((function t(e){var n,r,i,c,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.authMe();case 2:0===(n=t.sent).resultCode&&(r=n.data,i=r.id,c=r.email,o=r.login,e(l(i,c,o,!0)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(t,e,n,r){return function(){var c=Object(i.a)(s.a.mark((function i(c){var o;return s.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,a.a.login(t,e,n);case 2:0===(o=s.sent).resultCode?c(j()):r(o.messages[0]);case 4:case"end":return s.stop()}}),i)})));return function(t){return c.apply(this,arguments)}}()},p=function(){return function(){var t=Object(i.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.logout();case 2:0===t.sent.resultCode&&e(l(u));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;return e.type===o?Object(c.a)(Object(c.a)({},t),e.payload):t}},30:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return g})),n.d(e,"e",(function(){return O}));var r=n(4),s=n.n(r),i=n(11),c=n(22),a=n(2),o=n(8),u="ADD-POST",l="DELETE_POST",j="SET_USER_PROFILE",d="SET_STATUS",p={posts:[{id:1,message:"Hi, how are you?",likes:15},{id:2,message:"My first post",likes:20}],profile:null,status:""},f=function(t){return{type:u,newPostText:t}},b=function(t){return{type:d,status:t}},h=function(t){return function(){var e=Object(i.a)(s.a.mark((function e(n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.getProfile(t);case 2:r=e.sent,n({type:j,profile:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(t){return function(){var e=Object(i.a)(s.a.mark((function e(n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.getStatus(t);case 2:r=e.sent,n(b(r.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(t){return function(){var e=Object(i.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.updateStatus(t);case 2:0===e.sent.data.resultCode&&n(b(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:var n={id:3,message:e.newPostText,likes:2};return Object(a.a)(Object(a.a)({},t),{},{posts:[].concat(Object(c.a)(t.posts),[n])});case l:return Object(a.a)(Object(a.a)({},t),{},{posts:t.posts.filter((function(t){return t.id!==e.postId}))});case j:return Object(a.a)(Object(a.a)({},t),{},{profile:e.profile});case d:return Object(a.a)(Object(a.a)({},t),{},{status:e.status});default:return t}}},32:function(t,e,n){"use strict";e.a=n.p+"static/media/users.fb653606.png"},35:function(t,e,n){t.exports={paginator:"Paginator_paginator__18P4_",pageNumber:"Paginator_pageNumber__xOsKi",selectedPage:"Paginator_selectedPage__3SIki"}},36:function(t,e,n){t.exports={descriptionWrapper:"ProfileInfo_descriptionWrapper__RisAz",photo:"ProfileInfo_photo__3YYCg",descriptionContent:"ProfileInfo_descriptionContent__A5GkY"}},40:function(t,e,n){t.exports={postsBlock:"MyPosts_postsBlock__2ifKf",posts:"MyPosts_posts__3tZ1c"}},41:function(t,e,n){t.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},44:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(2),s=n(16),i=n(17),c=n(18),a=n(19),o=n(0),u=n.n(o),l=n(3),j=n(12),d=n(1),p=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var e=function(e){Object(c.a)(o,e);var n=Object(a.a)(o);function o(){return Object(s.a)(this,o),n.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(t,Object(r.a)({},this.props)):Object(d.jsx)(l.a,{to:"/login"})}}]),o}(u.a.Component);return Object(j.b)(p)(e)}},56:function(t,e,n){"use strict";n.d(e,"b",(function(){return c}));var r=n(22),s=n(2),i={dialogs:[{id:1,name:"Ekaterina",img:"https://cdn.imgbin.com/10/14/1/imgbin-female-avatar-best-yYYaN63pH07CPxi6N6b1MeiDR.jpg"},{id:2,name:"Dima",img:"https://evasailing.com/templates/rt_sienna/custom/images/boy-512.png"},{id:3,name:"Grisha",img:"https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png"},{id:4,name:"Vika",img:"https://png.pngtree.com/png-vector/20190221/ourmid/pngtree-female-user-vector-avatar-icon-png-image_691518.jpg"}],messages:[{id:1,message:"Hi! What`s up?"},{id:2,message:"I`m fine, I got a job!)"},{id:3,message:"Congratulations!"}]},c=function(t){return{type:"SEND-MESSAGE",newMessageText:t}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;if("SEND-MESSAGE"===e.type){var n={id:4,message:e.newMessageText};return Object(s.a)(Object(s.a)({},t),{},{messages:[].concat(Object(r.a)(t.messages),[n])})}return t}},57:function(t,e,n){"use strict";var r=n(0),s=n.n(r),i=n(12),c=n(30),a=n(2),o=n(40),u=n.n(o),l=n(45),j=n(1),d=function(t){var e=t.addPost,n=s.a.createRef(),r=Object(l.a)({initialValues:{newPostText:""},onSubmit:function(t,n){var r=t.newPostText,s=n.resetForm;e(r),s()}}),i=r.handleChange,c=r.handleSubmit,a=r.values,o=r.isValid,u=r.dirty;return Object(j.jsx)("form",{onSubmit:c,children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("input",{id:"newPostText",name:"newPostText",type:"text",placeholder:"Post your message",onChange:i,ref:n,value:a.newPostText})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",disabled:!o||!u,children:"Add post"})})]})})},p=n(65),f=n.n(p),b=function(t){var e=t.message,n=t.likes;return Object(j.jsxs)("div",{className:f.a.item,children:[Object(j.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/194/194938.png",alt:""}),e,Object(j.jsx)("div",{children:Object(j.jsxs)("span",{children:["Like ",n]})})]})},h=function(t){console.log("RENDER");var e=t.posts.map((function(t){var e=t.id,n=t.message,r=t.likes;return Object(j.jsx)(b,{message:n,likes:r,id:e},e)}));return Object(j.jsxs)("div",{className:u.a.postsBlock,children:[Object(j.jsx)("h3",{children:"My posts"}),Object(j.jsx)(d,Object(a.a)({},t)),Object(j.jsx)("div",{className:u.a.posts,children:e})]})},g=Object(i.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){return t(Object(c.a)(e))}}}))(h),O=n(36),m=n.n(O),v=n(21),x=n(32),w=n(13),_=function(t){var e=Object(r.useState)(!1),n=Object(w.a)(e,2),s=n[0],i=n[1],c=Object(r.useState)(t.status),a=Object(w.a)(c,2),o=a[0],u=a[1];Object(r.useEffect)((function(){u(t.status)}),[t.status]);return Object(j.jsx)("div",{children:s?Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{"data-testid":"input",autoFocus:!0,onChange:function(t){u(t.currentTarget.value)},onBlur:function(){i(!1),t.updateStatus(o)},value:o}),Object(j.jsxs)("div",{children:[300-o.length,"/300"]})]}):Object(j.jsx)("div",{children:Object(j.jsx)("span",{"data-testid":"span",onClick:function(){i(!0)},children:o||"Status is empty"})})})},P=function(t){var e=t.profile,n=t.status,r=t.updateStatus;return e?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:"https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFub3JhbWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",alt:""})}),Object(j.jsxs)("div",{className:m.a.descriptionWrapper,children:[Object(j.jsx)("div",{className:m.a.photo,children:e.photos.large?Object(j.jsx)("img",{src:e.photos.large,alt:""}):Object(j.jsx)("img",{src:x.a,alt:""})}),Object(j.jsxs)("div",{className:m.a.descriptionContent,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Status:"}),Object(j.jsx)(_,{status:n,updateStatus:r})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"My name:"})," ",e.fullName]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"About me:"}),e.aboutMe]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Contacts:"}),Object(j.jsx)("img",{src:"https://img.icons8.com/office/30/000000/facebook-new.png",alt:""}),Object(j.jsx)("img",{src:"https://img.icons8.com/office/30/000000/instagram-new.png",alt:""}),Object(j.jsx)("img",{src:"https://img.icons8.com/office/30/000000/youtube-play.png",alt:""}),Object(j.jsx)("img",{src:"https://img.icons8.com/office/30/000000/twitter.png",alt:""})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"I am looking for a job:"}),e.lookingForAJob?Object(j.jsx)("img",{src:"https://img.icons8.com/office/40/000000/binoculars.png",alt:""}):Object(j.jsx)("img",{src:"https://img.icons8.com/color/48/000000/man-with-money-skin-type-3.png",alt:""})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Job description:"}),e.lookingForAJobDescription]})]})]})]}):Object(j.jsx)(v.a,{})};e.a=function(t){var e=t.profile,n=t.status,r=t.updateStatus;return Object(j.jsxs)("div",{children:[Object(j.jsx)(P,{profile:e,status:n,updateStatus:r}),Object(j.jsx)(g,{})]})}},6:function(t,e,n){t.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",active:"Navbar_active__3mbhk",head:"Navbar_head__3PbiD",name:"Navbar_name__3nKwt",friends:"Navbar_friends__3-QW_",caption:"Navbar_caption__s1sVd"}},62:function(t,e,n){t.exports={img:"Users_img__3OuDf"}},65:function(t,e,n){t.exports={item:"Post_item__ihtu9"}},78:function(t,e,n){},8:function(t,e,n){"use strict";n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var r=n(59).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"3e0b2939-9c10-403f-95ed-db554510011f"}}),s={getUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))}},i={getProfile:function(t){return r.get("profile/".concat(t)).then((function(t){return t.data}))},getStatus:function(t){return r.get("profile/status/".concat(t))},updateStatus:function(t){return r.put("profile/status/",{status:t})}},c={followUsers:function(t){return r.post("follow/".concat(t),{}).then((function(t){return t.data}))},unfollowUsers:function(t){return r.delete("follow/".concat(t)).then((function(t){return t.data}))}},a={authMe:function(){return r.get("auth/me").then((function(t){return t.data}))},login:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:t,password:e,rememberMe:n}).then((function(t){return t.data}))},logout:function(){return r.delete("auth/login").then((function(t){return t.data}))}}},99:function(t,e,n){"use strict";n.r(e);var r=function(t){t&&t instanceof Function&&n.e(7).then(n.bind(null,249)).then((function(e){var n=e.getCLS,r=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),r(t),s(t),i(t),c(t)}))},s=n(0),i=n.n(s),c=n(29),a=n.n(c),o=n(16),u=n(17),l=n(18),j=n(19),d=n(3),p=n(7),f=n(12),b=(n(78),n(20)),h=n(60),g=n(2),O=n(23),m="INITIALIZED_SUCCESS",v={initialized:!1},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;return e.type===m?Object(g.a)(Object(g.a)({},t),{},{initialized:!0}):t},w=n(56),_=n(30),P={friends:[{id:1,name:"John",img:"https://w7.pngwing.com/pngs/409/621/png-transparent-computer-icons-avatar-male-user-profile-others-logo-monochrome-silhouette.png"},{id:2,name:"Mia",img:"https://cdn6.aptoide.com/imgs/f/4/c/f4c2d35ee761f9be3bbeff8750d67c63_icon.png"},{id:3,name:"Margaret",img:"https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png"}]},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;return t},y=n(4),S=n.n(y),C=n(11),N=n(22),T=n(8),E=function(t,e,n,r){return t.map((function(t){return t[n]===e?Object(g.a)(Object(g.a)({},t),r):t}))},I="FOLLOW",A="UNFOLLOW",U="SET_USERS",F="SET_CURRENT_PAGE",M="SET_TOTAL_COUNT",z="TOGGLE_IS_FETCHING",D="TOGGLE_IS_FOLLOWING_IN_PROGRESS",L={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},R=function(t){return{type:I,userId:t}},G=function(t){return{type:A,userId:t}},W=function(t){return{type:F,currentPage:t}},B=function(t){return{type:z,isFetching:t}},H=function(t,e){return{type:D,isFetching:t,id:e}},J=function(){var t=Object(C.a)(S.a.mark((function t(e,n,r,s){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(H(!0,n)),t.next=3,r(n);case 3:0===t.sent.resultCode&&e(s(n)),e(H(!1,n));case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,s){return t.apply(this,arguments)}}(),V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case I:return Object(g.a)(Object(g.a)({},t),{},{users:E(t.users,e.userId,"id",{followed:!0})});case A:return Object(g.a)(Object(g.a)({},t),{},{users:E(t.users,e.userId,"id",{followed:!1})});case U:return Object(g.a)(Object(g.a)({},t),{},{users:e.users});case F:return Object(g.a)(Object(g.a)({},t),{},{currentPage:e.currentPage});case M:return Object(g.a)(Object(g.a)({},t),{},{totalUsersCount:e.totalCount});case z:return Object(g.a)(Object(g.a)({},t),{},{isFetching:e.isFetching});case D:return Object(g.a)(Object(g.a)({},t),{},{followingInProgress:e.isFetching?[].concat(Object(N.a)(t.followingInProgress),[e.id]):t.followingInProgress.filter((function(t){return t!==e.id}))});default:return t}},Y=Object(b.b)({profilePage:_.b,dialogsPage:w.a,sidebarFriends:k,usersPage:V,auth:O.a,app:x}),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.c,Z=Object(b.d)(Y,K(Object(b.a)(h.a))),X=n(6),q=n.n(X),Q=n(1),$=function(){return Object(Q.jsxs)("nav",{className:q.a.nav,children:[Object(Q.jsx)("div",{className:q.a.item,children:Object(Q.jsx)(p.b,{to:"/profile",className:function(t){return t.isActive?q.a.active:q.a.item},children:"Profile"})}),Object(Q.jsx)("div",{className:q.a.item,children:Object(Q.jsx)(p.b,{to:"/dialogs",className:function(t){return t.isActive?q.a.active:q.a.item},children:"Messages"})}),Object(Q.jsx)("div",{className:q.a.item,children:Object(Q.jsx)(p.b,{to:"/users",className:function(t){return t.isActive?q.a.active:q.a.item},children:"Users"})}),Object(Q.jsx)("div",{className:q.a.item,children:Object(Q.jsx)(p.b,{to:"/news",className:function(t){return t.isActive?q.a.active:q.a.item},children:"News"})}),Object(Q.jsx)("div",{className:q.a.item,children:Object(Q.jsx)(p.b,{to:"/music",className:function(t){return t.isActive?q.a.active:q.a.item},children:"Music"})}),Object(Q.jsx)("div",{className:q.a.item,children:Object(Q.jsx)(p.b,{to:"/settings",className:function(t){return t.isActive?q.a.active:q.a.item},children:"Settings"})})]})},tt=n(44),et=n(31),nt=n(13),rt=n(35),st=n.n(rt),it=n(61),ct=n.n(it),at=function(t){for(var e=t.totalUsersCount,n=t.pageSize,r=t.currentPage,i=t.onPageChanged,c=t.portionSize,a=void 0===c?10:c,o=Object(s.useState)(1),u=Object(nt.a)(o,2),l=u[0],j=u[1],d=Math.ceil(e/n),p=[],f=1;f<=d;f+=1)p.push(f);var b=Math.ceil(d/a),h=(l-1)*a+1,g=l*a;return Object(Q.jsxs)("div",{className:st.a.paginator,children:[l>1&&Object(Q.jsx)("button",{onClick:function(){return j(l-1)},children:"PREV"}),p.filter((function(t){return t>=h&&t<=g})).map((function(t){return Object(Q.jsx)("span",{className:ct()(Object(et.a)({},st.a.selectedPage,r===t),st.a.pageNumber),onClick:function(){return i(t)},children:t},t)})),b>l&&Object(Q.jsx)("button",{onClick:function(){return j(l+1)},children:"NEXT"})]})},ot=n(62),ut=n.n(ot),lt=n(32),jt=function(t){var e=t.user,n=t.followThunk,r=t.unfollowThunk,s=t.followingInProgress;return Object(Q.jsxs)("div",{children:[Object(Q.jsxs)("span",{children:[Object(Q.jsx)("div",{children:Object(Q.jsx)(p.b,{to:"/profile/".concat(e.id),children:Object(Q.jsx)("img",{src:null!==e.photos.small?e.photos.small:lt.a,className:ut.a.img,alt:""})})}),Object(Q.jsx)("div",{children:e.followed?Object(Q.jsx)("button",{disabled:s.some((function(t){return t===e.id})),onClick:function(){r(e.id)},children:"Unfollow"}):Object(Q.jsx)("button",{disabled:s.some((function(t){return t===e.id})),onClick:function(){n(e.id)},children:"Follow"})})]}),Object(Q.jsx)("span",{children:Object(Q.jsxs)("span",{children:[Object(Q.jsx)("div",{children:e.name}),Object(Q.jsx)("div",{children:e.status})]})})]},e.id)},dt=function(t){var e=t.totalUsersCount,n=t.pageSize,r=t.currentPage,s=t.onPageChanged,i=t.users,c=t.followThunk,a=t.unfollowThunk,o=t.followingInProgress;return Object(Q.jsxs)("div",{children:[Object(Q.jsx)(at,{totalUsersCount:e,pageSize:n,currentPage:r,onPageChanged:s}),i.map((function(t){return Object(Q.jsx)(jt,{user:t,followThunk:c,unfollowThunk:a,followingInProgress:o})}))]})},pt=n(21),ft=n(66),bt=Object(ft.a)((function(t){return t.usersPage.users}),(function(t){return t.filter((function(t){return!0}))})),ht=function(t){return t.usersPage.pageSize},gt=function(t){return t.usersPage.totalUsersCount},Ot=function(t){return t.usersPage.currentPage},mt=function(t){return t.usersPage.isFetching},vt=function(t){return t.usersPage.followingInProgress},xt=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).onPageChanged=function(e){t.props.getUsersThunk(e,t.props.pageSize)},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(Q.jsxs)(Q.Fragment,{children:[this.props.isFetching?Object(Q.jsx)(pt.a,{}):null,Object(Q.jsx)(dt,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,followThunk:this.props.followThunk,unfollowThunk:this.props.unfollowThunk,followingInProgress:this.props.followingInProgress})]})}}]),n}(i.a.Component),wt=Object(b.c)(tt.a,Object(f.b)((function(t){return{users:bt(t),pageSize:ht(t),totalUsersCount:gt(t),currentPage:Ot(t),isFetching:mt(t),followingInProgress:vt(t)}}),{followThunk:function(t){return function(){var e=Object(C.a)(S.a.mark((function e(n){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=T.c.followUsers.bind(T.c),J(n,t,r,R);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},unfollowThunk:function(t){return function(){var e=Object(C.a)(S.a.mark((function e(n){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=T.c.unfollowUsers.bind(T.c),J(n,t,r,G);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getUsersThunk:function(t,e){return function(){var n=Object(C.a)(S.a.mark((function n(r){var s;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(B(!0)),r(W(t)),n.next=4,T.d.getUsers(t,e);case 4:s=n.sent,r(B(!1)),r((c=s.items,{type:U,users:c})),r((i=s.totalCount,{type:M,totalCount:i}));case 8:case"end":return n.stop()}var i,c}),n)})));return function(t){return n.apply(this,arguments)}}()},setCurrentPage:W,toggleFollowingInProgress:H}))(xt),_t=n(57),Pt=n(41),kt=n.n(Pt),yt=function(t){var e=t.isAuth,n=t.login,r=t.logout;return Object(Q.jsxs)("header",{className:kt.a.header,children:[Object(Q.jsx)("img",{src:"https://www.pikpng.com/pngl/b/88-889337_kingfisher-logo-png.png",alt:""}),Object(Q.jsx)("div",{className:kt.a.loginBlock,children:e?Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("div",{children:n}),Object(Q.jsx)("button",{type:"button",onClick:r,children:"Logout"})]}):Object(Q.jsx)(p.b,{to:"/login",children:Object(Q.jsx)("button",{type:"button",children:"Login"})})})]})},St=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(Q.jsx)(yt,Object(g.a)({},this.props))}}]),n}(i.a.Component),Ct=Object(f.b)((function(t){return{isAuth:t.auth.isAuth,login:t.auth.login}}),{logout:O.d})(St),Nt=i.a.lazy((function(){return n.e(4).then(n.bind(null,251))})),Tt=i.a.lazy((function(){return n.e(6).then(n.bind(null,250))})),Et=i.a.lazy((function(){return Promise.all([n.e(2),n.e(5)]).then(n.bind(null,252))})),It=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(Q.jsxs)("div",{className:"app-wrapper",children:[Object(Q.jsx)(Ct,{}),Object(Q.jsx)($,{}),Object(Q.jsx)("div",{className:"app-wrapper-content",children:Object(Q.jsx)(i.a.Suspense,{fallback:Object(Q.jsx)(pt.a,{}),children:Object(Q.jsxs)(d.d,{children:[Object(Q.jsx)(d.b,{path:"profile",element:Object(Q.jsx)(Tt,{}),children:Object(Q.jsx)(d.b,{path:"/profile/:id",element:Object(Q.jsx)(_t.a,{})})}),Object(Q.jsx)(d.b,{path:"/dialogs",element:Object(Q.jsx)(Nt,{})}),Object(Q.jsx)(d.b,{path:"/login",element:Object(Q.jsx)(Et,{})}),Object(Q.jsx)(d.b,{path:"/users",element:Object(Q.jsx)(wt,{})})]})})})]}):Object(Q.jsx)(pt.a,{})}}]),n}(i.a.Component),At=Object(f.b)((function(t){return{initialized:t.app.initialized}}),{initializeApp:function(){return function(t){var e=t(Object(O.b)());Promise.all([e]).then((function(){t({type:m})}))}}})(It),Ut=function(){return Object(Q.jsx)(p.a,{children:Object(Q.jsx)(f.a,{store:Z,children:Object(Q.jsx)(At,{})})})};a.a.render(Object(Q.jsx)(Ut,{}),document.getElementById("root")),r()}},[[99,1,3]]]);
//# sourceMappingURL=main.cb7b24be.chunk.js.map