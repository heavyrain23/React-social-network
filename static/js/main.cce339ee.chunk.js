(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){},13:function(e,t,a){e.exports={nav:"Navbar_nav__1HRaK",item:"Navbar_item__3tAJA",activeLink:"Navbar_activeLink__106eJ"}},131:function(e,t,a){e.exports=a.p+"static/media/preloader.6e7c9db7.svg"},132:function(e,t,a){e.exports={preloader:"preloader_preloader__3D30a"}},133:function(e,t,a){e.exports={profileWrapper:"Profile_profileWrapper__1XqVo"}},160:function(e,t,a){e.exports=a(289)},18:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1aw07",mainPhoto:"ProfileInfo_mainPhoto__26io5",editPic:"ProfileInfo_editPic__odyG7",profileContainer:"ProfileInfo_profileContainer__2BQak",contactsContainer:"ProfileInfo_contactsContainer__1r-HS",statusContainer:"ProfileInfo_statusContainer__3lADf"}},244:function(e,t,a){},245:function(e,t,a){},27:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__D74bV",dialog:"Dialogs_dialog__2sE2v",active:"Dialogs_active__29_Gx",submitForm:"Dialogs_submitForm__1mVnw",messages:"Dialogs_messages__2QBbV"}},28:function(e,t,a){e.exports={userContainer:"users_userContainer__2fuy5",userItem:"users_userItem__2nZ2a",userPhoto:"users_userPhoto__23ONa",selectedPage:"users_selectedPage__aG5gf",userInfo:"users_userInfo__1Wmxn",button:"users_button__1kdmC"}},288:function(e,t,a){},289:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(6),r=a(7),o=a.n(r),s=a(12),i=a(43),c=a(8),u=a(123).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"3d37f6a3-c0fc-407a-bc64-64abd36c2415"}}),l={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return u.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return u.post("follow/".concat(e))},unfollow:function(e){return u.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),m.getProfile(e)}},m={getProfile:function(e){return u.get("profile/"+e)},getStatus:function(e){return u.get("profile/status/"+e)},updateStatus:function(e){return u.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),u.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return u.put("profile",e)}},f=function(){return u.get("auth/me")},p=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return u.post("auth/login",{email:e,password:t,rememberMe:a,captcha:n})},d=function(){return u.delete("auth/login")},g=function(){return u.get("security/get-captcha-url")},E=a(15),h={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},v=function(e){return{type:"SET_STATUS",status:e}},b=function(e){return function(){var t=Object(s.a)(o.a.mark(function t(a){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.getProfile(e);case 2:n=t.sent,a({type:"SET_USER_PROFILE",profile:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:5,message:t.newPostText,likesCount:0};return Object(c.a)({},e,{posts:[].concat(Object(i.a)(e.posts),[a]),newPostText:""});case"SET_STATUS":return Object(c.a)({},e,{status:t.status});case"SET_USER_PROFILE":return Object(c.a)({},e,{profile:t.profile});case"DELETE_POST":return Object(c.a)({},e,{posts:e.posts.filter(function(e){return e.id!=t.postId})});case"SAVE_PHOTO_SUCCESS":return Object(c.a)({},e,{profile:Object(c.a)({},e.profile,{photos:t.photos})});default:return e}},P={dialogs:[{id:1,name:"Dmitry"},{id:2,name:"Andrey"},{id:3,name:"Viktoria"},{id:4,name:"Valera"},{id:5,name:"Anton"}],messages:[{id:1,message:"Hi"},{id:2,message:"how are u"},{id:3,message:"yo nigga"},{id:4,message:"whats up man"}]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var a=t.newMessageBody;return Object(c.a)({},e,{messages:[].concat(Object(i.a)(e.messages),[{id:6,message:a}])});default:return e}},w={},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;arguments.length>1&&arguments[1];return e},C=function(e,t,a,n){return e.map(function(e){return e[a]===t?Object(c.a)({},e,n):e})},j={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},y=function(e){return{type:"FOLLOW",userId:e}},k=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},N=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},I=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},T=function(){var e=Object(s.a)(o.a.mark(function e(t,a,n,r){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(I(!0,a)),e.next=3,n(a);case 3:0==e.sent.data.resultCode&&t(r(a)),t(I(!1,a));case 6:case"end":return e.stop()}},e)}));return function(t,a,n,r){return e.apply(this,arguments)}}(),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(c.a)({},e,{users:C(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(c.a)({},e,{users:C(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(c.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(c.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(c.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(c.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(c.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!=t.userId})});default:return e}},A={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},U=function(e,t,a,n){return{type:"samurai-network/auth/SET_USER_DATA",payload:{userId:e,email:t,login:a,isAuth:n}}},F=function(e){return{type:"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},L=function(){return function(){var e=Object(s.a)(o.a.mark(function e(t){var a,n,r,s,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,r=n.id,s=n.login,i=n.email,t(U(r,i,s,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},M=function(){return function(){var e=Object(s.a)(o.a.mark(function e(t){var a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:a=e.sent,n=a.data.url,t(F(n));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"samurai-network/auth/SET_USER_DATA":case"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS":return Object(c.a)({},e,t.payload);default:return e}},R=a(124),B=a(122),G={initialized:!1},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(c.a)({},e,{initialized:!0});default:return e}},H=Object(n.c)({profilePage:_,dialogsPage:O,sidebar:S,usersPage:x,auth:D,form:B.a,app:z}),V=Object(n.e)(H,Object(n.a)(R.a));window.store=V;var W=V,J=a(0),K=a.n(J),Z=a(127),q=a.n(Z),Q=(a(244),a(22)),X=a(23),Y=a(25),$=a(24),ee=a(26),te=(a(245),a(13)),ae=a.n(te),ne=a(293),re=function(){return K.a.createElement("nav",{className:ae.a.nav},K.a.createElement("div",{className:ae.a.item},K.a.createElement(ne.a,{to:"/profile",activeClassName:ae.a.activeLink},"Profile")),K.a.createElement("div",{className:ae.a.item},K.a.createElement(ne.a,{to:"/dialogs",activeClassName:ae.a.activeLink},"Messages")),K.a.createElement("div",{className:ae.a.item},K.a.createElement(ne.a,{to:"/users",activeClassName:ae.a.activeLink},"Users")),K.a.createElement("div",{className:ae.a.item},K.a.createElement(ne.a,{to:"/news",activeClassName:ae.a.activeLink},"News")),K.a.createElement("div",{className:ae.a.item},K.a.createElement(ne.a,{to:"/music",activeClassName:ae.a.activeLink},"Music")),K.a.createElement("div",{className:ae.a.item},K.a.createElement(ne.a,{to:"/settings",activeClassName:ae.a.activeLink},"Settings")))},oe=a(128),se=a(294),ie=a(27),ce=a.n(ie),ue=function(e){var t="/dialogs/"+e.id;return K.a.createElement("div",{className:ce.a.dialog+" "+ce.a.active},K.a.createElement(ne.a,{to:t},e.name))},le=function(e){return K.a.createElement("div",{className:ce.a.dialog},e.message)},me=a(291),fe=a(120),pe=a(121),de=a(54),ge=a(30),Ee=a.n(ge),he=function(e){if(!e)return"Field is required"},ve=function(e){return function(t){if(t.length>e)return"Max length is ${maxLength} symbols"}},be=function(e){e.input;var t=e.meta,a=t.touched,n=t.error,r=e.children,o=a&&n;return K.a.createElement("div",{className:Ee.a.formControl+" "+(o?Ee.a.error:"")},K.a.createElement("div",null,r),o&&K.a.createElement("span",null,n))},_e=function(e){var t=e.input,a=(e.meta,e.child,Object(de.a)(e,["input","meta","child"]));return K.a.createElement(be,e,K.a.createElement("textarea",Object.assign({},t,a)))},Pe=function(e){var t=e.input,a=(e.meta,e.child,Object(de.a)(e,["input","meta","child"]));return K.a.createElement(be,e,K.a.createElement("input",Object.assign({},t,a)))},Oe=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return K.a.createElement("div",null,K.a.createElement(fe.a,Object.assign({placeholder:e,name:t,validate:a,component:n},r))," ",o)},we=a(129),Se=a.n(we),Ce=ve(50),je=Object(pe.a)({form:"dialog-add-message-form"})(function(e){return K.a.createElement("form",{onSubmit:e.handleSubmit},K.a.createElement("div",null,K.a.createElement(fe.a,{component:_e,validate:[he,Ce],placeholder:"Enter your message",name:"newMessageBody"})),K.a.createElement("div",null,K.a.createElement("button",{className:Se.a.button},"Send")))}),ye=function(e){var t=e.dialogsPage,a=t.dialogs.map(function(e){return K.a.createElement(ue,{name:e.name,key:e.id,id:e.id})}),n=t.messages.map(function(e){return K.a.createElement(le,{message:e.message,key:e.id})});t.newMessageBody;return e.isAuth?K.a.createElement("div",{className:ce.a.dialogs},K.a.createElement("div",{ClassName:ce.a.dialogsItems},a),K.a.createElement("div",{className:ce.a.messages},K.a.createElement("div",null,n)),K.a.createElement("div",{className:ce.a.submitForm},K.a.createElement(je,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}}))):K.a.createElement(me.a,{to:"/login"})},ke=a(9),Ne=function(e){return{isAuth:e.auth.isAuth}},Ie=Object(n.d)(Object(ke.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{sendMessage:function(t){e(function(e){return{type:"SEND_MESSAGE",newMessageBody:e}}(t))}}}),function(e){var t=function(t){function a(){return Object(Q.a)(this,a),Object(Y.a)(this,Object($.a)(a).apply(this,arguments))}return Object(ee.a)(a,t),Object(X.a)(a,[{key:"render",value:function(){return this.props.isAuth?K.a.createElement(e,this.props):K.a.createElement(me.a,{to:"/login"})}}]),a}(K.a.Component);return Object(ke.b)(Ne)(t)})(ye),Te=a(66),xe=a(37),Ae=a(38),Ue=a.n(Ae),Fe=a(130),Le=a.n(Fe),Me=function(e){for(var t=e.totalItemsCount,a=e.pageSize,n=e.currentPage,r=e.onPageChanged,o=e.portionSize,s=void 0===o?10:o,i=Math.ceil(t/a),c=[],u=1;u<=i;u++)c.push(u);var l=Math.ceil(i/s),m=Object(J.useState)(1),f=Object(xe.a)(m,2),p=f[0],d=f[1],g=(p-1)*s+1,E=p*s;return K.a.createElement("div",{className:Ue.a.paginator},p>1&&K.a.createElement("button",{className:Ue.a.button,onClick:function(){d(p-1)}},"PREV"),c.filter(function(e){return e>=g&&e<=E}).map(function(e){return K.a.createElement("span",{className:Le()(Object(Te.a)({},Ue.a.selectedPage,n===e),Ue.a.pageNumber),key:e,onClick:function(t){r(e)}},e)}),l>p&&K.a.createElement("button",{className:Ue.a.button,onClick:function(){d(p+1)}},"NEXT"))},De=a(28),Re=a.n(De),Be=a(70),Ge=a.n(Be),ze=function(e){var t=e.user,a=e.followingInProgress,n=e.unfollow,r=e.follow;return K.a.createElement("div",{className:Re.a.userContainer},K.a.createElement("div",{className:Re.a.userItem},K.a.createElement("span",null,K.a.createElement("div",null,K.a.createElement(ne.a,{to:"/profile/"+t.id},K.a.createElement("img",{src:null!=t.photos.small?t.photos.small:Ge.a,className:Re.a.userPhoto})))),K.a.createElement("span",{className:Re.a.userInfoContainer},K.a.createElement("span",{className:Re.a.userInfo},K.a.createElement("div",null,t.name),K.a.createElement("div",null,t.status)),K.a.createElement("span",{className:Re.a.userCountry},K.a.createElement("div",null,"user.location.country"),K.a.createElement("div",null,"user.location.city"))),K.a.createElement("div",{className:Re.a.container},t.followed?K.a.createElement("button",{className:Re.a.button,disabled:a.some(function(e){return e===t.id}),onClick:function(){n(t.id)}},"Unfollow"):K.a.createElement("button",{className:Re.a.button,disabled:a.some(function(e){return e===t.id}),onClick:function(){r(t.id)}},"Follow"))))},He=function(e){var t=e.currentPage,a=e.totalUsersCount,n=e.pageSize,r=e.onPageChanged,o=e.users,s=Object(de.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return K.a.createElement("div",null,K.a.createElement(Me,{currentPage:t,onPageChanged:r,totalItemsCount:a,pageSize:n}),K.a.createElement("div",null,o.map(function(e){return K.a.createElement(ze,{user:e,followingInProgress:s.followingInProgress,key:e.id,unfollow:s.unfollow,follow:s.follow})})))},Ve=a(131),We=a.n(Ve),Je=a(132),Ke=a.n(Je),Ze=function(e){return K.a.createElement("div",{className:Ke.a.preloader},K.a.createElement("img",{src:We.a}))},qe=function(e){return e.usersPage.users},Qe=function(e){return e.usersPage.pageSize},Xe=function(e){return e.usersPage.totalUsersCount},Ye=function(e){return e.usersPage.currentPage},$e=function(e){return e.usersPage.isFetching},et=function(e){return e.usersPage.followingInProgress},tt=function(e){function t(){var e,a;Object(Q.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(Y.a)(this,(e=Object($.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){var t=a.props.pageSize;a.props.getUsers(e,t)},a}return Object(ee.a)(t,e),Object(X.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,a=e.pageSize;this.props.getUsers(t,a)}},{key:"render",value:function(){return K.a.createElement(K.a.Fragment,null,this.props.isFetching?K.a.createElement(Ze,null):null,K.a.createElement(He,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(K.a.Component),at=Object(n.d)(Object(ke.b)(function(e){return{users:qe(e),pageSize:Qe(e),totalUsersCount:Xe(e),currentPage:Ye(e),isFetching:$e(e),followingInProgress:et(e)}},{follow:function(e){return function(){var t=Object(s.a)(o.a.mark(function t(a){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:T(a,e,l.follow.bind(l),y);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(s.a)(o.a.mark(function t(a){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:T(a,e,l.unfollow.bind(l),y);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:k,toggleFollowingProgress:I,getUsers:function(e,t){return function(){var a=Object(s.a)(o.a.mark(function a(n){var r;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n(N(!0)),n(k(e)),a.next=4,l.getUsers(e,t);case 4:r=a.sent,n(N(!1)),n({type:"SET_USERS",users:r.items}),n({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 8:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}}))(tt),nt=a(18),rt=a.n(nt),ot=function(e){var t=Object(J.useState)(!1),a=Object(xe.a)(t,2),n=a[0],r=a[1],o=Object(J.useState)(e.status),s=Object(xe.a)(o,2),i=s[0],c=s[1];Object(J.useEffect)(function(){c(e.status)},[e.status]);return K.a.createElement("div",null,K.a.createElement("div",{className:rt.a.statusContainer},!n&&K.a.createElement("div",null,K.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"Status...")),n&&K.a.createElement("div",null,K.a.createElement("input",{onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(i)},value:i}))))},st=Object(pe.a)({form:"edit-profile"})(function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return K.a.createElement("form",{onSubmit:t},K.a.createElement("div",null,K.a.createElement("button",null,"save")),n&&K.a.createElement("div",{className:Ee.a.formSummaryError},n),K.a.createElement("div",null,K.a.createElement("b",null,"Full name"),": ",Oe("Full name","fullName",[],Pe)),K.a.createElement("div",null,K.a.createElement("b",null,"Looking for a job"),": ",Oe("","lookingForAJob",[],Pe,{type:"checkbox"})),K.a.createElement("div",null,K.a.createElement("b",null,"My professional skills"),":",Oe("My professional skills","lookingForAJobDescription",[],_e)),K.a.createElement("div",null,K.a.createElement("b",null,"About me"),":",Oe("About me","aboutMe",[],_e)),K.a.createElement("div",null,K.a.createElement("b",null,"Contacts"),": ",Object.keys(a.contacts).map(function(e){return K.a.createElement("div",{key:e,className:rt.a.contact},K.a.createElement("b",null,e,": ",Oe(e,"contacts."+e,[],Pe)))})))}),it=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return K.a.createElement("div",{className:rt.a.profileContainer},K.a.createElement("div",{className:rt.a.profileInfoContainer},a&&K.a.createElement("div",null,K.a.createElement("button",{className:rt.a.editPic,onClick:n},"edit")),K.a.createElement("div",null,K.a.createElement("b",null,"Full name"),": ",t.fullName),K.a.createElement("div",null,K.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&K.a.createElement("div",null,K.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),K.a.createElement("div",null," ",K.a.createElement("b",null,"About me"),": ",t.aboutMe)),K.a.createElement("div",{className:rt.a.contactsContainer},K.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map(function(e){return K.a.createElement(ct,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))},ct=function(e){var t=e.contactTitle,a=e.contactValue;return K.a.createElement("div",{className:rt.a.contact},K.a.createElement("b",null,t),": ",a)},ut=function(e){var t=e.profile,a=e.status,n=e.updateStatus,r=e.isOwner,o=e.savePhoto,s=e.saveProfile,i=Object(J.useState)(!1),c=Object(xe.a)(i,2),u=c[0],l=c[1];if(!t)return K.a.createElement(Ze,null);return K.a.createElement("div",null,K.a.createElement("div",{className:rt.a.descriptionBlock},K.a.createElement("img",{src:t.photos.large||Ge.a,className:rt.a.mainPhoto}),r&&K.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}}),u?K.a.createElement(st,{initialValues:t,profile:t,onSubmit:function(e){s(e).then(function(){l(!1)})}}):K.a.createElement(it,{goToEditMode:function(){l(!0)},profile:t,isOwner:r}),K.a.createElement(ot,{status:a,updateStatus:n})))},lt=a(73),mt=a.n(lt),ft=a(45),pt=a.n(ft),dt=function(e){return K.a.createElement("div",{className:pt.a.item},K.a.createElement("div",{className:pt.a.userItem},K.a.createElement("img",{className:pt.a.icon,src:"https://media.wnyc.org/i/800/0/c/85/2019/05/RadioHour-AvaDuverney-4x3.jpg",alt:""}),K.a.createElement("div",null,"User Name")),K.a.createElement("div",{className:pt.a.message}," ",e.message," "),K.a.createElement("span",{className:pt.a.like},"Like ",e.likeCount))},gt=ve(10),Et=Object(pe.a)({form:"ProfileAddNewPostForm"})(function(e){return K.a.createElement("form",{onSubmit:e.handleSubmit},K.a.createElement("div",null,K.a.createElement(fe.a,{name:"newPostText",component:_e,validate:[he,gt]})),K.a.createElement("div",null,K.a.createElement("button",{className:mt.a.button},"Add post")))}),ht=function(e){var t=e.posts.map(function(e){return K.a.createElement(dt,{key:e.id,message:e.message,likesCount:e.likesCount})});K.a.createRef();return K.a.createElement("div",{className:mt.a.postsBlock},K.a.createElement("h3",null,"My posts"),K.a.createElement("div",null," ",K.a.createElement(Et,{onSubmit:function(t){e.addPost(t.newPostText)}})),K.a.createElement("div",{className:mt.a.posts},K.a.createElement("div",null," ",t)))},vt=Object(ke.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}})(ht),bt=a(133),_t=a.n(bt),Pt=function(e){return K.a.createElement("div",{className:_t.a.profileWrapper},K.a.createElement(ut,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile}),K.a.createElement(vt,null))},Ot=function(e){function t(){return Object(Q.a)(this,t),Object(Y.a)(this,Object($.a)(t).apply(this,arguments))}return Object(ee.a)(t,e),Object(X.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return K.a.createElement(Pt,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(K.a.Component),wt=Object(n.d)(Object(ke.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}},{getUserProfile:b,getStatus:function(e){return function(){var t=Object(s.a)(o.a.mark(function t(a){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.getStatus(e);case 2:n=t.sent,a(v(n.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(s.a)(o.a.mark(function t(a){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.updateStatus(e);case 2:0===t.sent.data.resultCode&&a(v(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(s.a)(o.a.mark(function t(a){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.savePhoto(e);case 2:0===(n=t.sent).data.resultCode&&a({type:"SAVE_PHOTO_SUCCESS",photos:n.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(s.a)(o.a.mark(function t(a,n){var r,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.userId,t.next=3,m.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}a(b(r)),t.next=10;break;case 8:return a(Object(E.a)("edit-profile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 10:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()}}),se.a)(Ot),St=a(55),Ct=a.n(St),jt=function(e){return K.a.createElement("header",{className:Ct.a.header},K.a.createElement("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}),K.a.createElement("div",{className:Ct.a.loginBlock},e.isAuth?K.a.createElement("div",{className:Ct.a.loginText}," ",K.a.createElement("button",{className:Ct.a.button,onClick:e.logout},"Log out")," ",K.a.createElement("div",null," ",e.login)," "):K.a.createElement(ne.a,{to:"/login"},"Login")))},yt=function(e){function t(){return Object(Q.a)(this,t),Object(Y.a)(this,Object($.a)(t).apply(this,arguments))}return Object(ee.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){return K.a.createElement(jt,this.props)}}]),t}(K.a.Component),kt=Object(ke.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(s.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:0===e.sent.data.resultCode&&t(U(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(yt),Nt=(a(288),Object(pe.a)({form:"login"})(function(e){var t=e.handleSubmit,a=e.error,n=e.captchaUrl;return K.a.createElement("div",null,K.a.createElement("form",{onSubmit:t},Oe("Email","email",[he],Pe),Oe("Password","password",[he],Pe,{type:"password"}),Oe(null,"rememberMe",[],Pe,{type:"checkbox"},"remember me"),n&&K.a.createElement("img",{src:n}),n&&Oe("Symbols from image","captcha",[he],Pe,{}),a&&K.a.createElement("div",{className:Ee.a.formsSummarError},a),K.a.createElement("div",null,K.a.createElement("button",{className:Ee.a.loginButton},"Login"))))})),It=Object(ke.b)(function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}},{login:function(e,t,a,n){return function(){var r=Object(s.a)(o.a.mark(function r(s){var i,c;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p(e,t,a,n);case 2:0===(i=r.sent).data.resultCode?s(L()):(10===i.data.resultCode&&s(M()),c=i.data.messages.length>0?i.data.messages[0]:"Some error",s(Object(E.a)("login",{_error:c})));case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}})(function(e){return e.isAuth?K.a.createElement(me.a,{to:"/profile"}):K.a.createElement("div",{className:Ee.a.loginContainer},K.a.createElement("h1",null,"Login"),K.a.createElement(Nt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))}),Tt=function(e){function t(){return Object(Q.a)(this,t),Object(Y.a)(this,Object($.a)(t).apply(this,arguments))}return Object(ee.a)(t,e),Object(X.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?K.a.createElement("div",{className:"app-wrapper"},K.a.createElement(kt,null),K.a.createElement(re,null),K.a.createElement("div",{className:"app-wrapper-content"},K.a.createElement(oe.a,{path:"/dialogs",render:function(){return K.a.createElement(Ie,null)}}),K.a.createElement(oe.a,{path:"/profile/:userId?",render:function(){return K.a.createElement(wt,null)}}),K.a.createElement(oe.a,{path:"/users",render:function(){return K.a.createElement(at,null)}}),K.a.createElement(oe.a,{path:"/login",render:function(){return K.a.createElement(It,null)}}))):K.a.createElement(Ze,null)}}]),t}(J.Component),xt=Object(n.d)(se.a,Object(ke.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(L());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(Tt),At=a(292);q.a.render(K.a.createElement(At.a,null,K.a.createElement(ke.a,{store:W},K.a.createElement(xt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},30:function(e,t,a){e.exports={formControl:"FormsControls_formControl__1STgr",loginButton:"FormsControls_loginButton__VjfrZ",loginContainer:"FormsControls_loginContainer__2ytBK",error:"FormsControls_error__3DmmO",formsSummarError:"FormsControls_formsSummarError__mjt6O"}},38:function(e,t,a){e.exports={paginator:"Paginator_paginator__2FbuL",pageNumber:"Paginator_pageNumber__1VKsj",selectedPage:"Paginator_selectedPage__1fbgU",button:"Paginator_button__2h8_s"}},45:function(e,t,a){e.exports={item:"Post_item__wFqiF",userItem:"Post_userItem__Za2k4",message:"Post_message__10vBm",like:"Post_like__2DNRf"}},55:function(e,t,a){e.exports={header:"Header_header__3zGS0",loginBlock:"Header_loginBlock__2P3FW",button:"Header_button__5jmKj",loginText:"Header_loginText__3BVlx"}},70:function(e,t,a){e.exports=a.p+"static/media/user.ec4f02e3.png"},73:function(e,t,a){e.exports={item:"MyPosts_item__1RMY0",postsBlock:"MyPosts_postsBlock__qieyW",posts:"MyPosts_posts__25zau",button:"MyPosts_button__3Fih6"}}},[[160,1,2]]]);
//# sourceMappingURL=main.cce339ee.chunk.js.map