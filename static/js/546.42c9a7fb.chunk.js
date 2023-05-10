"use strict";(self.webpackChunktweets_test=self.webpackChunktweets_test||[]).push([[546],{5750:function(n,e,t){t.r(e),t.d(e,{default:function(){return jn}});var r=t(4165),o=t(5861),i=t(9439),a=t(2791),s=t(1243).Z.create({baseURL:"https://6437cc410c58d3b145798156.mockapi.io/api"});function l(){return(l=(0,o.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/users");case 2:if(e=n.sent,(t=e.data).length){n.next=6;break}throw new Error("Sorry, there are no users.");case 6:return n.abrupt("return",t);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var c,d,u,p,f,x={fetchUsers:function(){return l.apply(this,arguments)}},h=x,C=t(4270),g=t(7107),b=t(4507),m=t(3239),w=t(3682),v=t(184),j=(0,g.Z)({palette:{primary:{main:"#5736A3"}}}),y=function(){return(0,v.jsx)(w.x,{position:"fixed",top:0,bottom:0,left:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",height:"100%",children:(0,v.jsx)(b.Z,{theme:j,children:(0,v.jsx)(m.Z,{color:"primary"})})})},Z=t(7689),k=t(6856),S=t(168),z=t(7691),O=t(1087),H=t(1186),L=t(4874),T=(0,z.default)(O.rU)(c||(c=(0,S.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: ","px;\n  \n  text-transform: uppercase;\n\n  color: ",";\n  transition: ",";\n          \n  :hover{\n    color: ",";\n  }\n\n  "," {\n    font-size: ",";\n  }\n\n  "," {\n    font-size: ",";\n  }\n"])),H.r.space[3],H.r.colors.mainText,H.r.transition.main,H.r.colors.accent,(0,L.up)("mobile"),H.r.fontSizes.s,(0,L.up)("tablet"),H.r.fontSizes.m),V=(z.default.svg(d||(d=(0,S.Z)(["\n  fill: currentColor;\n"]))),function(n){var e,t,r=n.children,o=null!==(e=null===(t=(0,Z.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return console.log(o,"backLinkHref"),(0,v.jsxs)(T,{to:o,children:[(0,v.jsx)(k.KYK,{size:26}),r]})}),E=12,M="show all",F="follow",I="following",U=z.default.select(u||(u=(0,S.Z)(["\n    padding: 14px;\n    margin-bottom: ","px;\n    border-radius: ",";\n    border: none;\n    outline: none;\n    box-shadow: ",";\n    \n    cursor: pointer;\n\n    font-weight: ",";\n    text-transform: uppercase;\n\n    color: ",";\n    background-color: ",";\n\n    transition: ",";\n\n    :hover{\n        background-color: ",";\n    }\n\n    "," {\n        font-size: ",";\n    }\n\n    "," {\n        font-size: ",";\n    }\n"])),H.r.space[3],H.r.radii.button,H.r.shadows.button,H.r.fontWeights.semiBold,H.r.colors.mainText,H.r.colors.secondaryText,H.r.transition.main,H.r.colors.accent,(0,L.up)("mobile"),H.r.fontSizes.s,(0,L.up)("tablet"),H.r.fontSizes.m),R=function(n){var e=n.onChange;return(0,v.jsxs)(U,{onChange:e,defaultValue:"show all",children:[(0,v.jsx)("option",{value:M,children:"Show all"}),(0,v.jsx)("option",{value:F,children:"Follow"}),(0,v.jsx)("option",{value:I,children:"Followings"})]})};var Y=["title","titleId"];function B(){return B=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},B.apply(this,arguments)}function N(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function A(n,e){var t=n.title,r=n.titleId,o=N(n,Y);return a.createElement("svg",B({width:76,height:22,viewBox:"0 0 76 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},o),t?a.createElement("title",{id:r},t):null,p||(p=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 0H33.5019L42.3182 11L33.5019 22H0V0ZM15.1088 9.8781C15.0565 9.83654 15.0048 9.79507 14.9535 9.75385C14.8238 9.6497 14.6962 9.54717 14.5649 9.44886C14.2066 9.17794 13.8174 8.96215 13.3711 8.86598C12.8783 8.75925 12.3808 8.72055 11.8893 8.86832C11.1882 9.07825 10.7002 9.53565 10.3777 10.1725C10.1099 10.7026 10.0385 11.2644 10.1087 11.8484C10.1647 12.3058 10.3134 12.7304 10.586 13.1068C11.0049 13.685 11.5762 14.0193 12.2904 14.1072C12.9331 14.187 13.5556 14.1072 14.1447 13.8281C14.3459 13.7325 14.3459 13.7308 14.3459 13.5107V13.5067C14.3459 13.4531 14.346 13.3997 14.3461 13.3462C14.3464 13.2395 14.3466 13.133 14.3459 13.0259C14.3457 13.0044 14.346 12.9861 14.3463 12.9704C14.347 12.9258 14.3473 12.903 14.3359 12.8914C14.3238 12.8792 14.2986 12.8795 14.247 12.8801C14.2341 12.8803 14.2195 12.8805 14.203 12.8805H12.3344C12.3177 12.8805 12.3029 12.8806 12.2898 12.8808C12.2375 12.8814 12.212 12.8817 12.1998 12.8694C12.1882 12.8576 12.1887 12.8345 12.1897 12.7892C12.19 12.7741 12.1904 12.7566 12.1904 12.7362C12.1896 12.2436 12.1899 11.7511 12.1901 11.2585L12.1901 11.2539C12.1903 11.0092 12.1904 10.7644 12.1904 10.5196C12.1904 10.5107 12.1906 10.5016 12.1909 10.4925C12.1914 10.4741 12.192 10.4556 12.1904 10.4375C12.1868 10.3941 12.2023 10.3707 12.2499 10.3754C12.2682 10.3769 12.287 10.3764 12.3057 10.3759L12.3219 10.3755L12.3332 10.3754H17.0571C17.0881 10.3754 17.1143 10.3812 17.1095 10.4199C17.1074 10.4432 17.1222 10.4589 17.1374 10.4749C17.1558 10.4943 17.1747 10.5142 17.1643 10.5489C17.1552 10.5789 17.1575 10.6115 17.1598 10.6443C17.1609 10.6591 17.1619 10.6739 17.1619 10.6885L17.1618 11.5304C17.1616 12.6528 17.1614 13.7756 17.1643 14.8977C17.1643 14.9892 17.1357 15.0466 17.0655 15.1041C16.1859 15.8254 15.1969 16.3297 14.0781 16.5795C13.4163 16.7273 12.7462 16.7683 12.069 16.7144C11.2692 16.651 10.5086 16.4481 9.8064 16.0635C8.51741 15.3574 7.70568 14.2855 7.33196 12.8863C7.16771 12.2683 7.11772 11.6385 7.17009 11.0028C7.36648 8.64549 9.03991 6.80654 11.2823 6.2952C11.9226 6.1486 12.5689 6.12749 13.2211 6.17088C13.721 6.20489 14.2126 6.2823 14.6934 6.42303C15.4135 6.63531 16.049 7.00122 16.6275 7.47034C16.6953 7.52546 16.762 7.58059 16.8274 7.63688C16.9108 7.70725 16.9131 7.74712 16.8405 7.83391C16.4763 8.26785 16.112 8.70081 15.7466 9.13357L15.7458 9.13444C15.564 9.35105 15.3822 9.56766 15.1992 9.78311C15.1945 9.7891 15.1899 9.7953 15.1851 9.80159C15.165 9.82856 15.1435 9.85718 15.1088 9.8781ZM28.1735 7.62631C27.0725 6.63413 25.7609 6.16149 24.4053 6.15093C23.7792 6.15211 23.3115 6.20254 22.8151 6.33037C21.375 6.70215 20.2479 7.49965 19.4992 8.77331C18.7304 10.0798 18.5744 11.4813 19.0041 12.9227C19.4849 14.5341 20.5097 15.7069 22.0951 16.3602C23.3127 16.8609 24.5743 16.9278 25.8466 16.5971C27.3248 16.2136 28.4579 15.3656 29.2006 14.0427C29.8266 12.9274 29.9945 11.7311 29.7612 10.4821C29.5517 9.35971 29.028 8.39802 28.1735 7.62631ZM24.0839 8.83313C23.34 8.84955 22.5735 9.26941 22.0939 10.1455C21.7678 10.7401 21.6916 11.3816 21.8154 12.0443C21.913 12.5673 22.1427 13.0306 22.5235 13.4106C23.1175 14.004 23.8447 14.2374 24.6778 14.1424C25.5395 14.045 26.1799 13.6088 26.5905 12.8593C26.9392 12.2213 27.0118 11.5388 26.8488 10.8363C26.5798 9.67051 25.5931 8.82961 24.0839 8.83313Z",fill:"white",fillOpacity:.3})),f||(f=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M42.3182 0H76V22H42.3182V0ZM53.6266 11.2735V6.29027C53.6266 6.27294 53.6264 6.25775 53.6262 6.24444C53.6255 6.19689 53.6251 6.1733 53.637 6.16178C53.6487 6.15043 53.6722 6.15078 53.7189 6.15147C53.727 6.15159 53.7358 6.15172 53.7454 6.1518C53.7511 6.15185 53.7572 6.15188 53.7635 6.15188C54.3317 6.1511 54.9004 6.15136 55.4689 6.15162C55.7531 6.15175 56.0373 6.15188 56.3213 6.15188C56.3281 6.15188 56.3349 6.15214 56.3416 6.15241C56.355 6.15293 56.3681 6.15344 56.3808 6.15188C56.4451 6.14484 56.4653 6.17534 56.4593 6.23398C56.4578 6.24961 56.4583 6.26525 56.4588 6.28089L56.4592 6.2929L56.4593 6.30434V16.2591C56.4593 16.2694 56.4594 16.279 56.4596 16.288C56.4597 16.2976 56.4599 16.3065 56.4601 16.3147C56.4611 16.3616 56.4616 16.3857 56.4496 16.3978C56.4371 16.4105 56.4107 16.4102 56.3567 16.4096C56.3428 16.4094 56.3271 16.4092 56.3094 16.4092C55.7467 16.41 55.184 16.4097 54.6217 16.4095H54.6194C54.338 16.4093 54.0566 16.4092 53.7754 16.4092C53.7675 16.4092 53.7596 16.4089 53.7516 16.4087C53.7358 16.4081 53.7199 16.4076 53.704 16.4092C53.6374 16.4186 53.6219 16.3846 53.6266 16.3271C53.6282 16.3068 53.6277 16.286 53.6272 16.2651C53.6269 16.2545 53.6266 16.2439 53.6266 16.2333V11.2735ZM67.7353 6.15222H63.5101H63.5086C62.1011 6.15222 60.6936 6.15222 59.2872 6.15105C59.2765 6.15105 59.2658 6.15118 59.2553 6.15131C59.2342 6.15157 59.2134 6.15183 59.192 6.15105C59.1444 6.1487 59.1277 6.17099 59.1313 6.21438C59.1321 6.22763 59.1318 6.24036 59.1316 6.25326C59.1314 6.25977 59.1313 6.26633 59.1313 6.27302V8.65381C59.1313 8.72193 59.129 8.75306 59.1436 8.76713C59.1585 8.78139 59.1909 8.77812 59.261 8.77812H61.9152C62.0015 8.77812 62.0444 8.77812 62.0656 8.79911C62.0866 8.81979 62.0866 8.86083 62.0866 8.94232V16.2829C62.0866 16.3505 62.0824 16.3819 62.0964 16.3963C62.1103 16.4107 62.1422 16.4084 62.2139 16.4084H62.2496H64.761C64.8406 16.4084 64.8802 16.4084 64.8998 16.389C64.9193 16.3698 64.9193 16.3317 64.9193 16.2559V8.91534C64.9193 8.84117 64.9146 8.80714 64.9297 8.79165C64.9449 8.77604 64.9803 8.7793 65.0609 8.7793H67.7627C67.8793 8.7793 67.8793 8.7793 67.8805 8.66553V8.63035V6.29648C67.8805 6.21469 67.885 6.17866 67.8689 6.16306C67.8529 6.14756 67.8166 6.15222 67.7353 6.15222Z",fill:"white",fillOpacity:.3})))}var G,P,W,J,K,_,q,D,Q,X=a.forwardRef(A),$=(t.p,t.p+"static/media/bg.010ab3c33bc13f300d33.png"),nn=t.p+"static/media/bg@2x.014134acdd84a401f00a.png",en=z.default.li(G||(G=(0,S.Z)(["\n    position: relative;\n    width: 380px;\n    padding-top: 28px;\n    padding-bottom: 36px;\n    border-radius: ",";\n    box-shadow: ",";\n\n    text-align: center;\n\n    background: ",";\n\n    transition: ",';\n\n    ::after {\n        content: "";\n        position: absolute;\n        width: 100%;\n        left: 0;\n        top: 214px;\n        height: 8px;\n        box-shadow: ',";\n        background: ",";\n    }\n\n    :hover{\n       box-shadow: ","; \n    }\n\n    &.none {\n        display: none;\n    }\n"])),H.r.radii.normal,H.r.shadows.box,H.r.colors.gradient,H.r.transition.main,H.r.shadows.line,H.r.colors.secondaryText,H.r.shadows.innerAvatar),tn=(0,z.default)(X)(P||(P=(0,S.Z)(["\n    position: absolute;\n    left: 20px;\n    top: 20px;\n"]))),rn=z.default.div(W||(W=(0,S.Z)(["\n    margin: 0 auto 18px;\n    width: 308px;\n    height: 168px;\n    margin-bottom: 88px;\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-size: contain;\n\n    @media (-webkit-min-device-pixel-ratio: 2),\n       (min--moz-device-pixel-ratio: 2),\n       (o-min-device-pixel-ratio: 2/1),\n       (min-device-pixel-ratio: 2),\n       (min-resolution: 192dpi),\n       (min-resolution: 2dppx) {\n            background-image: url(",");\n    }\n"])),$,nn),on=z.default.p(J||(J=(0,S.Z)(["\n    margin-bottom: 16px;\n    font-size: ",";\n    text-align: center;\n    text-transform: uppercase;\n\n    color: ",";\n\n    :last-of-type {\n        margin-bottom: 26px;\n    }\n"])),H.r.fontSizes.m,H.r.colors.secondaryText),an=z.default.button(K||(K=(0,S.Z)(["\n    min-width: 196px;\n    padding: 14px 39px;\n    border-radius: ",";\n    border: none;\n    box-shadow: ",";\n    cursor: pointer;\n\n    font-size: ",";\n    font-weight: ",";\n    text-transform: uppercase;\n\n    color: ",";\n    background-color: ",";  \n        \n    opacity: 1;\n    transition: opacity ",";\n\n    &:hover {\n        opacity: 0.8;\n    }    \n"])),H.r.radii.button,H.r.shadows.button,H.r.fontSizes.s,H.r.fontWeights.semiBold,H.r.colors.mainText,(function(n){return"following"===n.children?H.r.colors.accent:H.r.colors.secondaryText}),H.r.transition.main),sn=z.default.div(_||(_=(0,S.Z)(["\n    position: absolute;\n    z-index: 100;\n    top: 178px;\n    left: calc(50% - 40px);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 80px;\n    height: 80px;\n    border-radius: ",";\n    box-shadow: ",";\n\n    background: ",";\n"])),H.r.radii.round,H.r.shadows.avatar,H.r.colors.secondaryText),ln=z.default.div(q||(q=(0,S.Z)(["\n    width: 62px;\n    height: 62px;\n    border-radius: ",";\n    box-shadow: ",";\n    overflow: hidden;\n\n    background: ",";\n"])),H.r.radii.round,H.r.shadows.innerAvatar,H.r.colors.background),cn=function(n){var e=n.name,t=n.avatar;return(0,v.jsx)(sn,{children:(0,v.jsx)(ln,{children:(0,v.jsx)("img",{src:t,alt:e,width:"62px",height:"62px"})})})},dn=function(n){return new Intl.NumberFormat("en-US").format(n)},un=function(n){var e=n.name,t=n.tweets,r=n.initialFollowers,o=n.avatar,s=n.filter,l=function(n,e){var t=(0,a.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem(n)))&&void 0!==t?t:e})),r=(0,i.Z)(t,2),o=r[0],s=r[1];return(0,a.useEffect)((function(){window.localStorage.setItem(n,JSON.stringify(o))}),[n,o]),[o,s]}("".concat(e),r),c=(0,i.Z)(l,2),d=c[0],u=c[1],p=function(n,e){return n===e?"follow":"following"}(d,r);return(0,v.jsxs)(en,{className:"show all"===s||p===s?"":"none",children:[(0,v.jsx)(tn,{}),(0,v.jsx)(rn,{}),(0,v.jsx)(cn,{name:e,avatar:o}),(0,v.jsxs)(on,{children:[" ",t," tweets"]}),(0,v.jsxs)(on,{children:[" ",dn(d)," followers"]}),(0,v.jsx)(an,{type:"button",onClick:function(){u(d===r?function(n){return n+1}:function(n){return n-1})},children:p})]})},pn=function(n){var e=n.displayedUsers,t=n.filter;return(0,v.jsx)(w.x,{display:"flex",flexWrap:"wrap",gridGap:"48px",mb:"32px",as:"ul",children:null===e||void 0===e?void 0:e.map((function(n){var e=n.id,r=n.user,o=n.tweets,i=n.followers,a=n.avatar;return(0,v.jsx)(un,{name:r,tweets:o,initialFollowers:i,avatar:a,filter:t},e)}))})},fn=t(2920),xn=t(2784),hn=z.default.div(D||(D=(0,S.Z)(["\n    position: absolute; \n    bottom: 57px; \n    left: 0;\n    right: 0;\n    display: flex;\n    justify-content: center;\n    margin-bottom: 32px;\n"]))),Cn=(0,g.Z)({palette:{primary:{main:"#EBD8FF"}}}),gn=function(n){var e=n.page,t=n.pages,r=n.onClick;return(0,v.jsx)(hn,{children:(0,v.jsx)(b.Z,{theme:Cn,children:(0,v.jsx)(xn.Z,{spacing:3,children:(0,v.jsx)(fn.Z,{color:"primary",size:"large",count:t||1,page:e,onChange:r})})})})},bn=t(1213),mn=function(){window.scrollTo({top:0,behavior:"smooth"})},wn=z.default.button(Q||(Q=(0,S.Z)(["\n    position: fixed;\n    z-index: 100;\n    right: 32px;\n    bottom: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    border: none;\n    cursor: pointer;\n    color: ",";\n    background-color: ",";\n    \n    transition: ",";\n    &:hover{\n        background-color: ",";\n        transform: translateY(-3px);\n        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n        box-shadow: 0 5px 10px rgba(87, 54, 163, 0.8);\n    };\n    &:active {\n        transform: translateY(-1px);\n        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n        box-shadow: 0 5px 10px rgba(87, 54, 163, 0.8);\n    }\n"])),H.r.colors.mainText,H.r.colors.secondaryText,H.r.transition,H.r.colors.accent),vn=function(){var n=(0,a.useState)(!1),e=(0,i.Z)(n,2),t=e[0],r=e[1];return window.addEventListener("scroll",(function(){var n=window.scrollY;r(n>100)})),(0,v.jsx)(v.Fragment,{children:t&&(0,v.jsx)(wn,{onClick:mn,"aria-label":"scroll-up",children:(0,v.jsx)(bn.GYO,{size:18})})})};function jn(){var n=(0,a.useState)([]),e=(0,i.Z)(n,2),t=e[0],s=e[1],l=(0,a.useState)(!1),c=(0,i.Z)(l,2),d=c[0],u=c[1],p=(0,a.useState)("show all"),f=(0,i.Z)(p,2),x=f[0],g=f[1],b=(0,a.useState)(1),m=(0,i.Z)(b,2),j=m[0],Z=m[1];(0,a.useEffect)((function(){function n(){return n=(0,o.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h.fetchUsers();case 3:e=n.sent,s(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:return n.prev=10,u(!1),n.finish(10);case 13:case 14:case"end":return n.stop()}}),n,null,[[0,7,10,13]])}))),n.apply(this,arguments)}u(!0),function(){n.apply(this,arguments)}()}),[]);var k=Math.ceil(t.length/E);console.log(k,"total pages");var S=(0,a.useMemo)((function(){var n=(j-1)*E,e=n+E,r=t.slice(n,e);return console.log(r,"displayed users"),r}),[t,j]);return(0,v.jsxs)(w.x,{p:"32px 0 128px",minHeight:"100%",as:"main",children:[(0,v.jsx)(C.q,{children:(0,v.jsx)("title",{children:"Tweets"})}),(0,v.jsxs)(w.x,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,v.jsx)(V,{children:"Go back"}),(0,v.jsx)(R,{onChange:function(n){g(n.target.value),console.log(x,"filter")}})]}),d&&(0,v.jsx)(y,{}),(0,v.jsx)(pn,{displayedUsers:S,filter:x,isLoading:d}),(0,v.jsx)(gn,{page:j,pages:k,onClick:function(n,e){Z(e)}}),(0,v.jsx)(vn,{})]})}}}]);
//# sourceMappingURL=546.42c9a7fb.chunk.js.map