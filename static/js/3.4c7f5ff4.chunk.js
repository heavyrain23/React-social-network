(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{291:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,o=!1,r=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(i){o=!0,r=i}finally{try{n||null==s.return||s.return()}finally{if(o)throw r}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",function(){return n})},293:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1aw07",mainPhoto:"ProfileInfo_mainPhoto__26io5",editPic:"ProfileInfo_editPic__odyG7",profileContainer:"ProfileInfo_profileContainer__2BQak",contactsContainer:"ProfileInfo_contactsContainer__1r-HS",statusContainer:"ProfileInfo_statusContainer__3lADf"}},294:function(e,t,a){e.exports=a.p+"static/media/user.ec4f02e3.png"},297:function(e,t,a){e.exports={item:"MyPosts_item__1RMY0",postsBlock:"MyPosts_postsBlock__qieyW",posts:"MyPosts_posts__25zau",button:"MyPosts_button__3Fih6"}},298:function(e,t,a){e.exports={item:"Post_item__wFqiF",userItem:"Post_userItem__Za2k4",message:"Post_message__10vBm",like:"Post_like__2DNRf"}},299:function(e,t,a){e.exports={profileWrapper:"Profile_profileWrapper__1XqVo"}},302:function(e,t,a){"use strict";a.r(t);var n=a(47),o=a(48),r=a(50),l=a(49),s=a(51),i=a(0),c=a.n(i),u=a(291),m=a(293),f=a.n(m),p=a(60),d=function(e){var t=Object(i.useState)(!1),a=Object(u.a)(t,2),n=a[0],o=a[1],r=Object(i.useState)(e.status),l=Object(u.a)(r,2),s=l[0],m=l[1];Object(i.useEffect)(function(){m(e.status)},[e.status]);return c.a.createElement("div",null,c.a.createElement("div",{className:f.a.statusContainer},!n&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"Status...")),n&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(s)},value:s}))))},b=a(294),E=a.n(b),v=a(21),h=a(119),P=a(29),_=a.n(P),g=Object(h.a)({form:"edit-profile"})(function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement("button",null,"save")),n&&c.a.createElement("div",{className:_.a.formSummaryError},n),c.a.createElement("div",null,c.a.createElement("b",null,"Full name"),": ",Object(v.c)("Full name","fullName",[],v.a)),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),": ",Object(v.c)("","lookingForAJob",[],v.a,{type:"checkbox"})),c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),":",Object(v.c)("My professional skills","lookingForAJobDescription",[],v.b)),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),":",Object(v.c)("About me","aboutMe",[],v.b)),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),": ",Object.keys(a.contacts).map(function(e){return c.a.createElement("div",{key:e,className:f.a.contact},c.a.createElement("b",null,e,": ",Object(v.c)(e,"contacts."+e,[],v.a)))})))}),k=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return c.a.createElement("div",{className:f.a.profileContainer},c.a.createElement("div",{className:f.a.profileInfoContainer},a&&c.a.createElement("div",null,c.a.createElement("button",{className:f.a.editPic,onClick:n},"edit")),c.a.createElement("div",null,c.a.createElement("b",null,"Full name"),": ",t.fullName),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&c.a.createElement("div",null,c.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),c.a.createElement("div",null," ",c.a.createElement("b",null,"About me"),": ",t.aboutMe)),c.a.createElement("div",{className:f.a.contactsContainer},c.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map(function(e){return c.a.createElement(y,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))},y=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("div",{className:f.a.contact},c.a.createElement("b",null,t),": ",a)},O=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,r=e.savePhoto,l=e.saveProfile,s=Object(i.useState)(!1),m=Object(u.a)(s,2),b=m[0],v=m[1];if(!t)return c.a.createElement(p.a,null);return c.a.createElement("div",null,c.a.createElement("div",{className:f.a.descriptionBlock},c.a.createElement("img",{src:t.photos.large||E.a,className:f.a.mainPhoto}),o&&c.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&r(e.target.files[0])}}),b?c.a.createElement(g,{initialValues:t,profile:t,onSubmit:function(e){l(e).then(function(){v(!1)})}}):c.a.createElement(k,{goToEditMode:function(){v(!0)},profile:t,isOwner:o}),c.a.createElement(d,{status:a,updateStatus:n})))},j=a(89),N=a(297),w=a.n(N),S=a(298),C=a.n(S),I=function(e){return c.a.createElement("div",{className:C.a.item},c.a.createElement("div",{className:C.a.userItem},c.a.createElement("img",{className:C.a.icon,src:"https://media.wnyc.org/i/800/0/c/85/2019/05/RadioHour-AvaDuverney-4x3.jpg",alt:""}),c.a.createElement("div",null,"User Name")),c.a.createElement("div",{className:C.a.message}," ",e.message," "),c.a.createElement("span",{className:C.a.like},"Like ",e.likeCount))},A=a(84),M=a(38),F=Object(M.a)(10),x=Object(h.a)({form:"ProfileAddNewPostForm"})(function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(A.a,{name:"newPostText",component:v.b,validate:[M.b,F]})),c.a.createElement("div",null,c.a.createElement("button",{className:w.a.button},"Add post")))}),T=function(e){var t=e.posts.map(function(e){return c.a.createElement(I,{key:e.id,message:e.message,likesCount:e.likesCount})});c.a.createRef();return c.a.createElement("div",{className:w.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement("div",null," ",c.a.createElement(x,{onSubmit:function(t){e.addPost(t.newPostText)}})),c.a.createElement("div",{className:w.a.posts},c.a.createElement("div",null," ",t)))},B=a(15),D=Object(B.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(t){e(Object(j.a)(t))}}})(T),J=a(299),U=a.n(J),R=function(e){return c.a.createElement("div",{className:U.a.profileWrapper},c.a.createElement(O,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile}),c.a.createElement(D,null))},V=a(290),W=a(7),q=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement(R,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(c.a.Component);t.default=Object(W.d)(Object(B.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}},{getUserProfile:j.d,getStatus:j.c,updateStatus:j.g,savePhoto:j.e,saveProfile:j.f}),V.a)(q)}}]);
//# sourceMappingURL=3.4c7f5ff4.chunk.js.map