(this.webpackJsonpcp_analyzer=this.webpackJsonpcp_analyzer||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(9),r=c.n(i),l=(c(15),c(8)),n=c(2),o=(c(16),c(4)),d=c(10),j=c.n(d),h=c(3),u=c.n(h),b=c(0);var O=function(){var e=Object(s.useState)(""),t=Object(n.a)(e,2),c=t[0],i=t[1],r=Object(s.useState)(""),d=Object(n.a)(r,2),h=d[0],O=d[1],v=Object(s.useState)(!1),x=Object(n.a)(v,2),m=x[0],p=x[1],f=Object(s.useState)(!1),g=Object(n.a)(f,2),_=g[0],S=g[1],y=Object(s.useState)({}),N=Object(n.a)(y,2),C=N[0],T=N[1],w=Object(s.useState)({}),A=Object(n.a)(w,2),D=A[0],M=A[1],E=Object(s.useState)({}),F=Object(n.a)(E,2),k=F[0],K=F[1],U=Object(s.useState)(0),L=Object(n.a)(U,2),P=L[0],R=L[1],Y=Object(s.useState)(0),z=Object(n.a)(Y,2),B=z[0],H=z[1],I=Object(s.useState)(0),W=Object(n.a)(I,2),J=W[0],G=W[1],V=Object(s.useState)(a.a.useMemo((function(){return[]}),[])),q=Object(n.a)(V,2),Q=q[0],X=q[1],Z=Object(s.useState)(),$=Object(n.a)(Z,2),ee=$[0],te=$[1],ce=Object(s.useState)(),se=Object(n.a)(ce,2),ae=se[0],ie=se[1],re=Object(s.useState)(),le=Object(n.a)(re,2),ne=le[0],oe=le[1],de=Object(s.useState)(""),je=Object(n.a)(de,2),he=je[0],ue=je[1];Object(s.useEffect)((function(){void 0!=u.a.get("cc")&&void 0!=u.a.get("cf")&&(i(u.a.get("cc")),O(u.a.get("cf")))}),[]),Object(s.useEffect)((function(){X((function(){var e=[];for(var t in null===(c=C[0])||void 0===c?void 0:c.solvedTimeline){var c,s=t.replaceAll("\\",""),a=(s=s.replaceAll("<","")).split("/");new Date(a[0]+"/"+a[1]+"/20"+a[2]);e.push([s,C[0].solvedTimeline[t]])}return e.reverse(),[{label:"Codechef",data:e.slice(0,Math.min(e.length,15))}]})),te((function(){var e=[];for(var t in null===(c=C[0])||void 0===c?void 0:c.submissionsTimeline){var c,s=t.replaceAll("\\",""),a=(s=s.replaceAll("<","")).split("/");new Date(a[0]+"/"+a[1]+"/20"+a[2]);e.push([s,C[0].submissionsTimeline[t]])}return e.reverse(),[{label:"Codechef",data:e.slice(0,Math.min(e.length,15))}]}))}),[,C]),Object(s.useEffect)((function(){ie((function(){for(var e=[],t=new Set,c=0;c<(null===k||void 0===k||null===(s=k.result)||void 0===s?void 0:s.length);c++){var s,a=new Date(1e3*k.result[c].creationTimeSeconds),i=a.getDate().toString()+"/"+(1==(a.getMonth()+1).toString().length?"0"+(a.getMonth()+1).toString():(a.getMonth()+1).toString())+"/"+a.getFullYear().toString().substr(2,2);t.add(i),i in e?e[i]+=1:e[i]=1}var r,n=[],o=Object(l.a)(Array.from(t).reverse());try{for(o.s();!(r=o.n()).done;){i=r.value;n.push([i,e[i]])}}catch(he){o.e(he)}finally{o.f()}return n.reverse(),[{label:"Codeforces",data:n.slice(0,Math.min(n.length,15)).reverse()}]})),oe((function(){for(var e=[],t=new Set,c=0;c<(null===k||void 0===k||null===(s=k.result)||void 0===s?void 0:s.length);c++){var s;if("OK"===k.result[c].verdict){var a=new Date(1e3*k.result[c].creationTimeSeconds),i=a.getDate().toString()+"/"+(1==(a.getMonth()+1).toString().length?"0"+(a.getMonth()+1).toString():(a.getMonth()+1).toString())+"/"+a.getFullYear().toString().substr(2,2);t.add(i),i in e?e[i]+=1:e[i]=1}}var r,n=[],o=Object(l.a)(Array.from(t).reverse());try{for(o.s();!(r=o.n()).done;){i=r.value;n.push([i,e[i]])}}catch(he){o.e(he)}finally{o.f()}return n.reverse(),[{label:"Codeforces",data:n.slice(0,Math.min(n.length,15)).reverse()}]}))}),[,k]);var be=a.a.useMemo((function(){return[{primary:!0,type:"ordinal",position:"bottom"},{type:"linear",position:"left"}]}),[]),Oe=function(e){var t=new Date;return e.getDate()==t.getDate()&&e.getMonth()==t.getMonth()&&e.getFullYear()==t.getFullYear()};return Object(s.useEffect)((function(){for(var e=0,t=0,c=0,s=0;s<(null===k||void 0===k||null===(a=k.result)||void 0===a?void 0:a.length);s++){var a,i=new Date(1e3*k.result[s].creationTimeSeconds);"OK"===k.result[s].verdict&&e++,Oe(i)&&(c+=1,"OK"===k.result[s].verdict&&t++)}H(c),G(e),R(t)}),[k]),Object(b.jsx)("div",{className:"App",children:m?_?Object(b.jsxs)("div",{className:"loader__container",children:[Object(b.jsx)(j.a,{size:25}),Object(b.jsx)("h4",{className:"load__text",children:"Collecting Data . . ."})]}):Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"cc__container",children:[Object(b.jsx)("img",{src:"https://cdn.codechef.com/sites/all/themes/abessive/cc-logo.png",className:"cc__logo"}),Object(b.jsx)("h2",{style:{margin:"20px",opacity:"0.5"},children:C[0].username}),Object(b.jsx)("h2",{className:"cc__rating",children:C[0].rating}),Object(b.jsxs)("div",{className:"cc__info",children:[Object(b.jsx)("div",{class:"circular",id:"solveToday",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"circular__h2",children:C[0].solvedToday}),Object(b.jsx)("p",{className:"circular__p",children:"Solved Today"})]})}),Object(b.jsx)("div",{class:"circular",id:"submitToday",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"circular__h2",children:C[0].submissionsToday}),Object(b.jsx)("p",{className:"circular__p",children:"Submissions Today"})]})}),Object(b.jsx)("div",{class:"circular",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"circular__h2",children:C[0].submissions.length}),Object(b.jsx)("p",{className:"circular__p",children:"Total Submissions"})]})}),Object(b.jsx)("div",{class:"circular",id:"fullSolve",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"circular__h2",children:C[0].fullySolved}),Object(b.jsx)("p",{className:"circular__p",children:"Fully Solved"})]})}),Object(b.jsx)("div",{class:"circular",id:"partSolve",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"circular__h2",children:C[0].partiallySolved}),Object(b.jsx)("p",{className:"circular__p",children:"Partially Solved"})]})})]})]}),Object(b.jsxs)("div",{className:"cc__container",children:[Object(b.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Codeforces_logo.svg/1200px-Codeforces_logo.svg.png",className:"cf__logo"}),Object(b.jsxs)("h2",{style:{marginTop:"30px",opacity:"0.5"},children:[D.result[0].firstName," ",D.result[0].lastName]}),Object(b.jsx)("h2",{className:"cf__rating",children:D.result[0].rating}),Object(b.jsxs)("div",{className:"cc__info",children:[Object(b.jsx)("div",{class:"circular",id:"solveToday",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"circular__h2",children:P}),Object(b.jsx)("p",{className:"circular__p",children:"Solved Today"})]})}),Object(b.jsx)("div",{class:"circular",id:"submitToday",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"circular__h2",children:B}),Object(b.jsx)("p",{className:"circular__p",children:"Submissions Today"})]})}),Object(b.jsx)("div",{class:"circular",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"circular__h2",children:k.result.length}),Object(b.jsx)("p",{className:"circular__p",children:"Total Submissions"})]})}),Object(b.jsx)("div",{class:"circular",id:"fullSolve",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"circular__h2",children:J}),Object(b.jsx)("p",{className:"circular__p",children:"Solved"})]})})]})]})]}),Object(b.jsxs)("div",{className:"graphs",children:[Object(b.jsxs)("div",{className:"graph__container",children:[Object(b.jsx)("h2",{style:{textAlign:"left",opacity:"0.5"},children:"CC Solved"}),Object(b.jsx)("div",{style:{overflow:"auto"},children:Object(b.jsx)("div",{style:{height:"400px",margin:"40px auto"},children:Object(b.jsx)(o.Chart,{data:Q,axes:be,tooltip:!0})})})]}),Object(b.jsxs)("div",{className:"graph__container",children:[Object(b.jsx)("h2",{style:{textAlign:"left",opacity:"0.5"},children:"CC Submissions"}),Object(b.jsx)("div",{style:{overflow:"auto"},children:Object(b.jsx)("div",{style:{height:"400px",margin:"40px auto"},children:Object(b.jsx)(o.Chart,{data:ee,axes:be,tooltip:!0})})})]}),Object(b.jsxs)("div",{className:"graph__container",children:[Object(b.jsx)("h2",{style:{textAlign:"left",opacity:"0.5"},children:"CF Submissions"}),Object(b.jsx)("div",{style:{overflow:"auto"},children:Object(b.jsx)("div",{style:{height:"450px",margin:"40px auto"},children:Object(b.jsx)(o.Chart,{data:ae,axes:be,tooltip:!0})})})]}),Object(b.jsxs)("div",{className:"graph__container",children:[Object(b.jsx)("h2",{style:{textAlign:"left",opacity:"0.5"},children:"CF Solved"}),Object(b.jsx)("div",{style:{overflow:"auto"},children:Object(b.jsx)("div",{style:{height:"450px",margin:"40px auto"},children:Object(b.jsx)(o.Chart,{data:ne,axes:be,tooltip:!0})})})]})]}),Object(b.jsxs)("p",{style:{margin:"40px auto",textAlign:"center"},children:["Made with \u2764\ufe0f by ",Object(b.jsx)("a",{href:"http://sahilsaha.me",target:"_blank",children:"Sahil Saha"})]})]}):Object(b.jsxs)("div",{className:"form__container",children:[Object(b.jsxs)("div",{className:"form",children:[Object(b.jsx)("h2",{children:"Enter your usernames!"}),Object(b.jsx)("input",{type:"text",onChange:function(e){return i(e.target.value)},value:c,placeholder:"Codechef Username"}),Object(b.jsx)("input",{type:"text",onChange:function(e){return O(e.target.value)},value:h,placeholder:"Codeforces Username"}),Object(b.jsx)("button",{onClick:function(e){e&&e.preventDefault(),function(){if(""===c||""===h)ue("Usernames can't be empty");else{ue(""),u.a.set("cc",c),u.a.set("cf",h),p(!0),S(!0);var e=Object({NODE_ENV:"production",PUBLIC_URL:"/CP-tracker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).BASE_URL||"https://cp-apis.herokuapp.com";fetch(e+"/?username="+c).then((function(e){return e.json()})).then((function(e){T(e),S(!1)})).catch((function(e){ue("CC username not found"),p(!1),S(!1)})),fetch("https://codeforces.com/api/user.info?handles="+h).then((function(e){return e.json()})).then((function(e){M(e),"FAILED"===e.status&&(ue("CF username not found"),p(!1),S(!1))})),fetch("https://codeforces.com/api/user.status?handle="+h).then((function(e){return e.json()})).then((function(e){K(e)}))}}()},type:"submit",id:"submit",children:"Let's Go"}),Object(b.jsx)("p",{className:"err",children:he})]}),Object(b.jsxs)("p",{style:{margin:"20px auto",textAlign:"center"},children:["Made with \u2764\ufe0f by ",Object(b.jsx)("a",{href:"http://sahilsaha.me",target:"_blank",children:"Sahil Saha"})]})]})})};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.cbb0c0cb.chunk.js.map