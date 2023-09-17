"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936,710],{37:function(e,n,t){t.d(n,{or:function(){return o},r6:function(){return a},mZ:function(){return s},eF:function(){return c},HB:function(){return r}});var i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjkxMTcxYjhjZTRjZGU5MGVmNTg4ZGExMWM1MjJkZSIsInN1YiI6IjY0ZjI2Y2Y0Y2FhNTA4MDE0YzhjNTUwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tkhPtd_rA2592Ltmf18lfBaxnKNFebdqiWffqOCHY_I"}},r=function(){return fetch("https://api.themoviedb.org/3/trending/movie/week?language=en-US",i).then((function(e){return e.json()}))},o=function(e){var n="https://api.themoviedb.org/3/search/movie?query=".concat(e,"&language=en-US&page=1");return fetch(n,i).then((function(e){return e.json()}))},s=function(e){var n="https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US");return fetch(n,i).then((function(e){return e.json()}))},c=function(e){var n="https://api.themoviedb.org/3/movie/".concat(e,"/reviews");return fetch(n,i).then((function(e){return e.json()}))},a=function(e){var n="https://api.themoviedb.org/3/movie/".concat(e,"/credits");return fetch(n,i).then((function(e){return e.json()}))}},710:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var i="NotFound_errorMessage__24Hhg",r=t(184),o=function(e){var n=e.message;return(0,r.jsxs)("div",{className:i,children:[" ",n," "]})}},936:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var i=t(439),r=t(689),o=t(791),s=t(37),c=t(87),a="MovieCard_mainInfo__aUYgo",u="MovieCard_poster__B9RSd",d="MovieCard_addInfo__UyJnl",h=t(965),l=t(184),f=function(e){var n=e.movies,t=n.genres,i=n.vote_average,s=n.original_title,f=n.release_date,v=n.overview,j=n.poster_path,m=i?"".concat(Math.round(10*i),"%"):"Absent!",g=f?f.slice(0,4):"Absent!",x=t.map((function(e){return e.name})).join(", "),p=j?"https://image.tmdb.org/t/p/w500".concat(j):"https://upload.wikimedia.org/wikipedia/commons/c/c8/ImageNA.svg";return(0,l.jsxs)("section",{children:[(0,l.jsxs)("div",{className:a,children:[(0,l.jsx)("div",{children:(0,l.jsx)("img",{src:p,className:u,alt:s})}),(0,l.jsxs)("div",{children:[" ",(0,l.jsxs)("h1",{children:[s,"(",g,")"]}),(0,l.jsxs)("p",{children:["User Scores: ",m]}),(0,l.jsx)("h2",{children:"Overview:"}),(0,l.jsx)("p",{children:v||"Information is absent!"}),(0,l.jsx)("h2",{children:"Genres:"}),(0,l.jsx)("p",{children:x||"Information is absent!"})]})]}),(0,l.jsx)("h3",{className:d,children:"Additional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]}),(0,l.jsx)(o.Suspense,{fallback:(0,l.jsx)(h.Z,{}),children:(0,l.jsx)(r.j3,{})})]})},v=t(710),j="Button_backLink__2-Ckv",m=function(e){var n=e.location;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c.rU,{to:n,className:j,children:"\u2b05 Back to"})})},g="idle",x="pending",p="rejected",_="resolved",I=function(){var e,n,t=(0,r.TH)(),c=(0,o.useRef)(null!==(e=null===(n=t.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),a=(0,r.UO)().movieId,u=(0,o.useState)({}),d=(0,i.Z)(u,2),j=d[0],I=d[1],b=(0,o.useState)(g),k=(0,i.Z)(b,2),w=k[0],M=k[1],N=(0,o.useState)(null),Z=(0,i.Z)(N,2),U=Z[0],J=Z[1];return console.log(t),console.log(c),(0,o.useEffect)((function(){M(x),(0,s.mZ)(a).then((function(e){if(!e)return M(p),void J("Movie details not found!");I(e),M(_),J("")}))}),[a]),(0,l.jsxs)("div",{children:[(0,l.jsx)(m,{location:c.current}),w===x&&(0,l.jsx)(h.Z,{}),w===p&&(0,l.jsx)(v.default,{message:U}),w===_&&(0,l.jsx)(f,{movies:j})]})}}}]);
//# sourceMappingURL=936.c33d7308.chunk.js.map