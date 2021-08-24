(this["webpackJsonpmeme-service"]=this["webpackJsonpmeme-service"]||[]).push([[0],{72:function(n,e,t){"use strict";t.r(e);t(0);var r,o,i,c,a,s,d,u,l,m,b,j,x,p,h,f,g,O,v,w,k,y,F,z=t(10),C=t.n(z),E=t(21),G=t(30),A=t(6),M=t(4),R=t(3),S=R.d.div(r||(r=Object(M.a)(["\n  background-color: ",";\n  margin: 0 auto;\n  display: flex;\n"])),(function(n){return n.theme.colors.grey})),T=R.d.main(o||(o=Object(M.a)(["\n  overflow-y: scroll;\n  height: 100vh;\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n"]))),D=R.d.h1(i||(i=Object(M.a)(["\n  margin-top: 50px;\n  margin-bottom: 0px;\n  font-weight: bold;\n  font-size: 42px;\n  text-align: center;\n"]))),I=R.d.footer(c||(c=Object(M.a)(["\n    text-align: center;\n    color: ",";\n    font-size: 18px;\n    margin-bottom: 50px;\n\n    @media (max-width: ",") {\n        font-size: 16px;\n    }\n\n    @media (max-width: ",") {\n        font-size: 14px;\n    \n    }\n    @media (max-width: ",") {\n        font-size: 12px;\n    }\n\n    @media (max-width: ",") {\n        font-size: 10px;\n    }\n"])),(function(n){return n.theme.colors.darkGrey}),(function(n){return n.theme.breakpoints.big}),(function(n){return n.theme.breakpoints.medium}),(function(n){return n.theme.breakpoints.mobile}),(function(n){return n.theme.breakpoints.small})),N=t(2),B=function(n){var e=n.title,t=n.copyright;return Object(N.jsxs)(I,{children:[Object(N.jsx)("p",{children:Object(N.jsx)("strong",{children:e})}),t]})},H=Object(R.e)(a||(a=Object(M.a)(["\n  from {\n    mask-position: 150%;\n  }\n  \n  to {\n    mask-position: -50%;\n  }\n"]))),J=R.d.h1(s||(s=Object(M.a)(["\n  font-size: 2.5rem;\n  line-height: 120%;\n\n  &:hover{\n  mask-image: linear-gradient(-75deg, rgba(0,0,0,.6) 30%, #000 50%, rgba(0,0,0,.6) 70%);\n  mask-size: 180%;\n  animation: "," 1s ease-in-out infinite;\n}\n"])),H),U=R.d.div(d||(d=Object(M.a)(["\n  height: 100vh;\n  width: 20%;\n  background-color: ",";\n  padding: 30px;\n  text-align: center;\n  box-shadow: inset 0 -7em 5em rgba(0, 0, 0, 0.1), 0 0 0 0px rgb(255, 255, 255),\n    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);\n"])),(function(n){return n.theme.colors.white})),V=R.d.ul(u||(u=Object(M.a)(["\n  margin-top: 3rem;\n  padding-left: 0px;\n  list-style-type: none;\n  text-decoration: none;\n  transition: 0.3s ease;\n"]))),L=R.d.li(l||(l=Object(M.a)(["\n  font-size: 30px;\n  line-height: 200%;\n  font-weight: bold;\n  color: ",";\n  transition: 0.3s ease-in-out;\n\n  &:hover {\n    font-size: 36px;\n    color: ",";\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.colors.tealDark}),(function(n){return n.theme.colors.green})),W="active",q=Object(R.d)(G.b).attrs((function(){return{activeClassName:W}}))(m||(m=Object(M.a)(["\n  text-decoration: none;\n  color: teal;\n  padding: 5px 30px;\n\n  &."," {\n    background: ",";\n  }\n"])),W,(function(n){return n.theme.colors.grey})),K=function(){return Object(N.jsxs)(U,{children:[Object(N.jsx)(J,{children:"MEMES SERVICE"}),Object(N.jsx)("nav",{children:Object(N.jsxs)(V,{children:[Object(N.jsx)(L,{children:Object(N.jsx)(q,{to:"/hot",children:"HOT"})}),Object(N.jsx)(L,{children:Object(N.jsx)(q,{to:"/regular",children:"REGULAR"})}),Object(N.jsx)(L,{children:Object(N.jsx)(q,{to:"/favourites",children:"FAVOURITES"})})]})})]})},P=t(40),Q=t.p+"static/media/mem1.e91f993f.jpg",X=t.p+"static/media/mem2.b4a230ad.jpg",Y=t.p+"static/media/mem3.8945bcb6.jpg",Z=t.p+"static/media/mem4.c0d518cd.jpg",$=t(67),_=[{id:$("mem-"),title:"Memory",upvotes:9,downvotes:1,img:Q,favourite:!0},{id:$("mem-"),title:"States",upvotes:3,downvotes:0,img:X,favourite:!1},{id:$("mem-"),title:"Teacher",upvotes:4,downvotes:2,img:Y,favourite:!0},{id:$("mem-"),title:"Function",upvotes:7,downvotes:0,img:Z,favourite:!1}],nn=Object(P.b)({name:"memes",initialState:_,reducers:{upvote:function(n,e){n.find((function(n){return n.id===e.payload})).upvotes++},downvote:function(n,e){n.find((function(n){return n.id===e.payload})).downvotes++},toggleFavourite:function(n,e){var t=n.find((function(n){return n.id===e.payload}));t.favourite=!t.favourite}}}),en=Object(P.a)({reducer:{memes:nn.reducer}}),tn=nn.actions,rn=tn.upvote,on=tn.downvote,cn=tn.toggleFavourite,an=t(49),sn=t.n(an),dn=Object(R.d)(sn.a)(b||(b=Object(M.a)(["\n  && {\n    font-size: 34px;\n    color: ",";\n    flex: 1 1 10%;\n    transition: 0.4s ease-in-out;\n\n    ","\n  }\n\n  &:hover {\n    cursor: pointer;\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.darkGrey}),(function(n){return n.favourite&&Object(R.c)(j||(j=Object(M.a)(["\n        color: ",";\n      "])),(function(n){return n.theme.colors.orange}))}),(function(n){return n.theme.colors.orange})),un=R.d.h1(x||(x=Object(M.a)(["\n  color: ",";\n  font-weight: 600;\n  font-size: 32px;\n  line-height: 120%;\n  padding: 20px;\n  margin: 0 0 0 10%;\n  text-align: center;\n  flex: 1 1 90%;\n\n  @media (max-width: ",") {\n    font-size: 24px;\n    padding: 36px 0 18px;\n  }\n  @media (max-width: ",") {\n    font-size: 18px;\n    line-height: 22px;\n    padding: 24px 0 12px;\n    margin: 0;\n  }\n"])),(function(n){return n.theme.colors.tealDark}),(function(n){return n.theme.breakpoints.mobile}),(function(n){return n.theme.breakpoints.small})),ln=R.d.div(p||(p=Object(M.a)(["\n  display: flex;\n  align-items: center;\n"]))),mn=R.d.div(h||(h=Object(M.a)(["\n  width: 50%;\n  margin: 30px auto;\n  padding: 20px 60px;\n  background-color: ",";\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n  border-radius: 10px;\n  display: grid;\n"])),(function(n){return n.theme.colors.white})),bn=R.d.img(f||(f=Object(M.a)(["\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n  margin-bottom: 20px;\n  border-radius: 10px;\n  transition: filter 0.5s, transform 0.5s;\n\n  &:hover {\n    transform: scale(1.01);\n  }\n"]))),jn=R.d.button(g||(g=Object(M.a)(["\n  width: 40%;\n  border: none;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;\n  padding: 10px 20px;\n  margin: 10px 10px;\n  background: ",";\n  color: ",";\n  font-weight: bold;\n  transition: 0.4s ease-in-out;\n\n  &:hover {\n    background: ",";\n    color: ",";\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.color||"black"}),(function(n){return n.color}),(function(n){return n.theme.colors.white})),xn=R.d.div(O||(O=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n"]))),pn=R.d.ul(v||(v=Object(M.a)(["\n  list-style-type: none;\n  padding-left: 0px;\n"]))),hn=Object(R.e)(w||(w=Object(M.a)(["\n\t\tfrom {\n\t\t\t\t-webkit-transform: rotate(0deg);\n\t\t}\n\t\tto {\n\t\t\t\t-webkit-transform: rotate(359deg);\n\t\t}\n"]))),fn=R.d.img(k||(k=Object(M.a)(["\n  margin: auto;\n  width: 30%;\n\n  &:hover {\n    animation: "," 1s ease-in-out infinite;\n  }\n"])),hn),gn=R.d.p(y||(y=Object(M.a)(["\n  margin: auto;\n  padding-top: 2rem;\n  font-size: 2rem;\n"]))),On=t(91),vn=t.p+"static/media/NotFound.4ffa18b6.png",wn=function(n){var e=n.mem,t=n.img,r=n.fav,o=Object(E.b)();return Object(N.jsx)("li",{children:Object(N.jsxs)(mn,{children:[Object(N.jsxs)(ln,{children:[Object(N.jsx)(un,{children:e.title}),Object(N.jsx)(On.a,{title:r?"Remove from Favourites":"Add to Favourites",children:Object(N.jsx)(dn,{favourite:r,onClick:function(){return o(cn(e.id))}})})]}),Object(N.jsx)("div",{children:Object(N.jsx)(bn,{src:t,alt:"img"})}),Object(N.jsxs)(xn,{children:[Object(N.jsxs)(jn,{onClick:function(){return o(rn(e.id))},color:function(n){return n.theme.colors.green},children:["\ud83d\udc4d Cool: ",e.upvotes]}),Object(N.jsxs)(jn,{onClick:function(){return o(on(e.id))},color:function(n){return n.theme.colors.red},children:["\ud83d\udc4e Crap: ",e.downvotes]})]})]})},e.id)},kn=function(n){var e=n.memes;return 0===e.length?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(gn,{children:"Oops! No memes found :("}),Object(N.jsx)(fn,{src:vn,alt:"img"})]}):Object(N.jsx)(pn,{children:e.map((function(n){var e=n.img,t=n.favourite;return Object(N.jsx)(wn,{mem:n,img:e,fav:t})}))})},yn=function(n){var e=n.header,t=n.memes;return Object(N.jsxs)(S,{children:[Object(N.jsx)(K,{}),Object(N.jsxs)(T,{children:[Object(N.jsx)(D,{children:e||"Memes"}),Object(N.jsx)(kn,{memes:t}),Object(N.jsx)(B,{title:"Thanks for your visit and have a nice day :)",copyright:"Copyright by Micha\u0142 Adamczyk 2021 \xa9 Wszelkie prawa zastrze\u017cone!"})]})]})},Fn=function(){var n=Object(E.c)((function(n){return n.memes})),e=n.filter((function(n){return n.upvotes-n.downvotes>5})),t=n.filter((function(n){return n.upvotes-n.downvotes<=5})),r=n.filter((function(n){return n.favourite}));return Object(N.jsx)(G.a,{children:Object(N.jsxs)(A.d,{children:[Object(N.jsx)(A.b,{path:"/hot",render:function(){return Object(N.jsx)(yn,{header:"Hot",memes:e})}}),Object(N.jsx)(A.b,{path:"/regular",render:function(){return Object(N.jsx)(yn,{header:"Regular",memes:t})}}),Object(N.jsx)(A.b,{path:"/favourites",render:function(){return Object(N.jsx)(yn,{header:"Favourites",memes:r})}}),Object(N.jsx)(A.b,{path:"/",render:function(){return Object(N.jsx)(A.a,{to:"/regular"})}})]})})},zn=Object(R.b)(F||(F=Object(M.a)(["\n    html {\n        box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n    \n    body {\n        font-family: 'Montserrat', sans-serif;\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.darkerGrey}));C.a.render(Object(N.jsx)(E.a,{store:en,children:Object(N.jsxs)(R.a,{theme:{colors:{teal:"#008080",tealDark:"#007070",concrete:"#F2F2F2",red:"#FF6347",green:"#228B22",plugGray:"#C4C4C4",darkerGrey:"#333333",darkGrey:"#7E839A",grey:"#E4E6F0",lightGrey:"#F5F5FA",white:"#FFFFFF",orange:"#FFA500"},breakpoints:{large:"1384px",big:"1036px",medium:"890px",mobile:"768px"}},children:[Object(N.jsx)(zn,{}),Object(N.jsx)(Fn,{})]})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.e5ff7b95.chunk.js.map