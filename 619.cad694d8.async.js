(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[619],{8212:function(re,L,r){"use strict";r.d(L,{Z:function(){return y}});var d=r(28991),u=r(67294),e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},Y=e,T=r(27029),p=function(k,le){return u.createElement(T.Z,(0,d.Z)((0,d.Z)({},k),{},{ref:le,icon:Y}))};p.displayName="EditOutlined";var y=u.forwardRef(p)},70347:function(){},47828:function(){},91894:function(re,L,r){"use strict";r.d(L,{Z:function(){return ut}});var d=r(22122),u=r(96156),e=r(67294),Y=r(94184),T=r.n(Y),p=r(65632),y=function(i,E){var C={};for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&E.indexOf(c)<0&&(C[c]=i[c]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,c=Object.getOwnPropertySymbols(i);v<c.length;v++)E.indexOf(c[v])<0&&Object.prototype.propertyIsEnumerable.call(i,c[v])&&(C[c[v]]=i[c[v]]);return C},I=function(E){var C=E.prefixCls,c=E.className,v=E.hoverable,pe=v===void 0?!0:v,ie=y(E,["prefixCls","className","hoverable"]);return e.createElement(p.C,null,function(me){var ye=me.getPrefixCls,ge=ye("card",C),F=T()("".concat(ge,"-grid"),c,(0,u.Z)({},"".concat(ge,"-grid-hoverable"),pe));return e.createElement("div",(0,d.Z)({},ie,{className:F}))})},k=I,le=function(i,E){var C={};for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&E.indexOf(c)<0&&(C[c]=i[c]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,c=Object.getOwnPropertySymbols(i);v<c.length;v++)E.indexOf(c[v])<0&&Object.prototype.propertyIsEnumerable.call(i,c[v])&&(C[c[v]]=i[c[v]]);return C},fe=function(E){return e.createElement(p.C,null,function(C){var c=C.getPrefixCls,v=E.prefixCls,pe=E.className,ie=E.avatar,me=E.title,ye=E.description,ge=le(E,["prefixCls","className","avatar","title","description"]),F=c("card",v),Ue=T()("".concat(F,"-meta"),pe),Se=ie?e.createElement("div",{className:"".concat(F,"-meta-avatar")},ie):null,Ze=me?e.createElement("div",{className:"".concat(F,"-meta-title")},me):null,De=ye?e.createElement("div",{className:"".concat(F,"-meta-description")},ye):null,Ie=Ze||De?e.createElement("div",{className:"".concat(F,"-meta-detail")},Ze,De):null;return e.createElement("div",(0,d.Z)({},ge,{className:Ue}),Se,Ie)})},_=fe,b=r(98423),oe=r(16004),h=r(71230),x=r(15746),ve=r(97647),ot=function(i,E){var C={};for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&E.indexOf(c)<0&&(C[c]=i[c]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,c=Object.getOwnPropertySymbols(i);v<c.length;v++)E.indexOf(c[v])<0&&Object.prototype.propertyIsEnumerable.call(i,c[v])&&(C[c[v]]=i[c[v]]);return C};function it(i){var E=i.map(function(C,c){return e.createElement("li",{style:{width:"".concat(100/i.length,"%")},key:"action-".concat(c)},e.createElement("span",null,C))});return E}var ct=e.forwardRef(function(i,E){var C,c,v=e.useContext(p.E_),pe=v.getPrefixCls,ie=v.direction,me=e.useContext(ve.Z),ye=function(Ae){var H;(H=i.onTabChange)===null||H===void 0||H.call(i,Ae)},ge=function(){var Ae;return e.Children.forEach(i.children,function(H){H&&H.type&&H.type===k&&(Ae=!0)}),Ae},F=i.prefixCls,Ue=i.className,Se=i.extra,Ze=i.headStyle,De=Ze===void 0?{}:Ze,Ie=i.bodyStyle,Pe=Ie===void 0?{}:Ie,We=i.title,ke=i.loading,Je=i.bordered,Ve=Je===void 0?!0:Je,dt=i.size,Re=i.type,He=i.cover,Te=i.actions,Ee=i.tabList,ft=i.children,Qe=i.activeTabKey,vt=i.defaultActiveTabKey,pt=i.tabBarExtraContent,mt=i.hoverable,Xe=i.tabProps,we=Xe===void 0?{}:Xe,Ye=ot(i,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),S=pe("card",F),yt=Pe.padding===0||Pe.padding==="0px"?{padding:24}:void 0,A=e.createElement("div",{className:"".concat(S,"-loading-block")}),gt=e.createElement("div",{className:"".concat(S,"-loading-content"),style:yt},e.createElement(h.Z,{gutter:8},e.createElement(x.Z,{span:22},A)),e.createElement(h.Z,{gutter:8},e.createElement(x.Z,{span:8},A),e.createElement(x.Z,{span:15},A)),e.createElement(h.Z,{gutter:8},e.createElement(x.Z,{span:6},A),e.createElement(x.Z,{span:18},A)),e.createElement(h.Z,{gutter:8},e.createElement(x.Z,{span:13},A),e.createElement(x.Z,{span:9},A)),e.createElement(h.Z,{gutter:8},e.createElement(x.Z,{span:4},A),e.createElement(x.Z,{span:3},A),e.createElement(x.Z,{span:16},A))),_e=Qe!==void 0,Et=(0,d.Z)((0,d.Z)({},we),(C={},(0,u.Z)(C,_e?"activeKey":"defaultActiveKey",_e?Qe:vt),(0,u.Z)(C,"tabBarExtraContent",pt),C)),qe,et=Ee&&Ee.length?e.createElement(oe.Z,(0,d.Z)({size:"large"},Et,{className:"".concat(S,"-head-tabs"),onChange:ye}),Ee.map(function(Me){return e.createElement(oe.Z.TabPane,{tab:Me.tab,disabled:Me.disabled,key:Me.key})})):null;(We||Se||et)&&(qe=e.createElement("div",{className:"".concat(S,"-head"),style:De},e.createElement("div",{className:"".concat(S,"-head-wrapper")},We&&e.createElement("div",{className:"".concat(S,"-head-title")},We),Se&&e.createElement("div",{className:"".concat(S,"-extra")},Se)),et));var Ct=He?e.createElement("div",{className:"".concat(S,"-cover")},He):null,ht=e.createElement("div",{className:"".concat(S,"-body"),style:Pe},ke?gt:ft),bt=Te&&Te.length?e.createElement("ul",{className:"".concat(S,"-actions")},it(Te)):null,xt=(0,b.Z)(Ye,["onTabChange"]),tt=dt||me,Ot=T()(S,(c={},(0,u.Z)(c,"".concat(S,"-loading"),ke),(0,u.Z)(c,"".concat(S,"-bordered"),Ve),(0,u.Z)(c,"".concat(S,"-hoverable"),mt),(0,u.Z)(c,"".concat(S,"-contain-grid"),ge()),(0,u.Z)(c,"".concat(S,"-contain-tabs"),Ee&&Ee.length),(0,u.Z)(c,"".concat(S,"-").concat(tt),tt),(0,u.Z)(c,"".concat(S,"-type-").concat(Re),!!Re),(0,u.Z)(c,"".concat(S,"-rtl"),ie==="rtl"),c),Ue);return e.createElement("div",(0,d.Z)({ref:E},xt,{className:Ot}),qe,Ct,ht,bt)}),st=ct,ze=st;ze.Grid=k,ze.Meta=_;var ut=ze},58024:function(re,L,r){"use strict";var d=r(38663),u=r.n(d),e=r(70347),Y=r.n(e),T=r(18106),p=r(13062),y=r(89032)},97272:function(re,L,r){"use strict";r.d(L,{Z:function(){return kt}});var d=r(22122),u=r(96156),e=r(67294),Y=r(94184),T=r.n(Y),p=r(42550),y=r(65632),I=function(t,n){var l={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(l[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(l[a[o]]=t[a[o]]);return l},k=function(n,l){var a=n.prefixCls,o=n.component,g=o===void 0?"article":o,Z=n.className,O=n["aria-label"],B=n.setContentRef,z=n.children,w=I(n,["prefixCls","component","className","aria-label","setContentRef","children"]),J=e.useContext(y.E_),V=J.getPrefixCls,ae=J.direction,D=l;B&&(D=(0,p.sQ)(l,B));var q=g,Q=V("typography",a),M=T()(Q,(0,u.Z)({},"".concat(Q,"-rtl"),ae==="rtl"),Z);return e.createElement(q,(0,d.Z)({className:M,"aria-label":O,ref:D},w),z)},le=e.forwardRef(k);le.displayName="Typography";var fe=le,_=fe,b=r(90484),oe=r(98423),h=r(28481),x=r(21770),ve=r(50344),ot=r(20640),it=r.n(ot),ct=r(8212),st=r(79508),ze=r(99165),ut=r(48717),i=r(8410),E=r(42051),C=r(34952),c=r(79370),v=r(61580),pe=r(15105),ie=r(28991),me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},ye=me,ge=r(27029),F=function(n,l){return e.createElement(ge.Z,(0,ie.Z)((0,ie.Z)({},n),{},{ref:l,icon:ye}))};F.displayName="EnterOutlined";var Ue=e.forwardRef(F),Se=r(94418),Ze=r(96159),De=function(n){var l=n.prefixCls,a=n["aria-label"],o=n.className,g=n.style,Z=n.direction,O=n.maxLength,B=n.autoSize,z=B===void 0?!0:B,w=n.value,J=n.onSave,V=n.onCancel,ae=n.onEnd,D=n.component,q=n.enterIcon,Q=q===void 0?e.createElement(Ue,null):q,M=e.useRef(),U=e.useRef(!1),ne=e.useRef(),K=e.useState(w),Ne=(0,h.Z)(K,2),ce=Ne[0],Le=Ne[1];e.useEffect(function(){Le(w)},[w]),e.useEffect(function(){if(M.current&&M.current.resizableTextArea){var R=M.current.resizableTextArea.textArea;R.focus();var N=R.value.length;R.setSelectionRange(N,N)}},[]);var Ce=function(N){var j=N.target;Le(j.value.replace(/[\n\r]/g,""))},P=function(){U.current=!0},ee=function(){U.current=!1},te=function(N){var j=N.keyCode;U.current||(ne.current=j)},he=function(){J(ce.trim())},Ke=function(N){var j=N.keyCode,Ge=N.ctrlKey,je=N.altKey,se=N.metaKey,X=N.shiftKey;ne.current===j&&!U.current&&!Ge&&!je&&!se&&!X&&(j===pe.Z.ENTER?(he(),ae==null||ae()):j===pe.Z.ESC&&V())},be=function(){he()},$e=D?"".concat(l,"-").concat(D):"",$=T()(l,"".concat(l,"-edit-content"),(0,u.Z)({},"".concat(l,"-rtl"),Z==="rtl"),o,$e);return e.createElement("div",{className:$,style:g},e.createElement(Se.Z,{ref:M,maxLength:O,value:ce,onChange:Ce,onKeyDown:te,onKeyUp:Ke,onCompositionStart:P,onCompositionEnd:ee,onBlur:be,"aria-label":a,rows:1,autoSize:z}),Q!==null?(0,Ze.Tm)(Q,{className:"".concat(l,"-edit-content-confirm")}):null)},Ie=De;function Pe(t,n){return e.useMemo(function(){var l=!!t;return[l,(0,d.Z)((0,d.Z)({},n),l&&(0,b.Z)(t)==="object"?t:null)]},[t])}var We=function(t,n){var l=e.useRef(!1);e.useEffect(function(){l.current?t():l.current=!0},n)};function ke(t){var n=(0,b.Z)(t);return n==="string"||n==="number"}function Je(t){var n=0;return t.forEach(function(l){ke(l)?n+=String(l).length:n+=1}),n}function Ve(t,n){for(var l=0,a=[],o=0;o<t.length;o+=1){if(l===n)return a;var g=t[o],Z=ke(g),O=Z?String(g).length:1,B=l+O;if(B>n){var z=n-l;return a.push(String(g).slice(0,z)),a}a.push(g),l=B}return t}var dt=0,Re=1,He=2,Te=3,Ee=4,ft=function(n){var l=n.enabledMeasure,a=n.children,o=n.text,g=n.width,Z=n.rows,O=n.onEllipsis,B=e.useState([0,0,0]),z=(0,h.Z)(B,2),w=z[0],J=z[1],V=e.useState(dt),ae=(0,h.Z)(V,2),D=ae[0],q=ae[1],Q=(0,h.Z)(w,3),M=Q[0],U=Q[1],ne=Q[2],K=e.useState(0),Ne=(0,h.Z)(K,2),ce=Ne[0],Le=Ne[1],Ce=e.useRef(null),P=e.useRef(null),ee=e.useMemo(function(){return(0,ve.Z)(o)},[o]),te=e.useMemo(function(){return Je(ee)},[ee]),he=e.useMemo(function(){return!l||D!==Te?a(ee,!1):a(Ve(ee,U),U<te)},[l,D,a,ee,U,te]);(0,i.Z)(function(){l&&g&&te&&(q(Re),J([0,Math.ceil(te/2),te]))},[l,g,o,te,Z]),(0,i.Z)(function(){var $;D===Re&&Le((($=Ce.current)===null||$===void 0?void 0:$.offsetHeight)||0)},[D]),(0,i.Z)(function(){var $,R;if(ce){if(D===Re){var N=(($=P.current)===null||$===void 0?void 0:$.offsetHeight)||0,j=Z*ce;N<=j?(q(Ee),O(!1)):q(He)}else if(D===He)if(M!==ne){var Ge=((R=P.current)===null||R===void 0?void 0:R.offsetHeight)||0,je=Z*ce,se=M,X=ne;M===ne-1?X=M:Ge<=je?se=U:X=U;var St=Math.ceil((se+X)/2);J([se,St,X])}else q(Te),O(!0)}},[D,M,ne,Z,ce]);var Ke={width:g,whiteSpace:"normal",margin:0,padding:0},be=function(R,N,j){return e.createElement("span",{"aria-hidden":!0,ref:N,style:(0,d.Z)({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none"},j)},R)},$e=function(R,N){var j=Ve(ee,R);return be(a(j,!0),N,Ke)};return e.createElement(e.Fragment,null,he,l&&D!==Te&&D!==Ee&&e.createElement(e.Fragment,null,be("lg",Ce,{wordBreak:"keep-all",whiteSpace:"nowrap"}),D===Re?be(a(ee,!1),P,Ke):$e(U,P)))},Qe=ft,vt=function(n){var l=n.title,a=n.enabledEllipsis,o=n.isEllipsis,g=n.children;return!l||!a?g:e.createElement(v.Z,{title:l,visible:o?void 0:!1},g)},pt=vt,mt=function(t,n){var l={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(l[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(l[a[o]]=t[a[o]]);return l};function Xe(t,n){var l=t.mark,a=t.code,o=t.underline,g=t.delete,Z=t.strong,O=t.keyboard,B=t.italic,z=n;function w(J,V){!J||(z=e.createElement(V,{},z))}return w(Z,"strong"),w(o,"u"),w(g,"del"),w(a,"code"),w(l,"mark"),w(O,"kbd"),w(B,"i"),z}function we(t,n,l){return t===!0||t===void 0?n:t||l&&n}function Ye(t){return Array.isArray(t)?t:[t]}var S="...",yt=e.forwardRef(function(t,n){var l=t.prefixCls,a=t.className,o=t.style,g=t.type,Z=t.disabled,O=t.children,B=t.ellipsis,z=t.editable,w=t.copyable,J=t.component,V=t.title,ae=mt(t,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),D=e.useContext(y.E_),q=D.getPrefixCls,Q=D.direction,M=(0,E.E)("Text")[0],U=e.useRef(null),ne=e.useRef(null),K=q("typography",l),Ne=(0,oe.Z)(ae,["mark","code","delete","underline","strong","keyboard","italic"]),ce=Pe(z),Le=(0,h.Z)(ce,2),Ce=Le[0],P=Le[1],ee=(0,x.Z)(!1,{value:P.editing}),te=(0,h.Z)(ee,2),he=te[0],Ke=te[1],be=P.triggerType,$e=be===void 0?["icon"]:be,$=function(s){var f;s&&((f=P.onStart)===null||f===void 0||f.call(P)),Ke(s)};We(function(){var m;he||(m=ne.current)===null||m===void 0||m.focus()},[he]);var R=function(s){s==null||s.preventDefault(),$(!0)},N=function(s){var f;(f=P.onChange)===null||f===void 0||f.call(P,s),$(!1)},j=function(){var s;(s=P.onCancel)===null||s===void 0||s.call(P),$(!1)},Ge=Pe(w),je=(0,h.Z)(Ge,2),se=je[0],X=je[1],St=e.useState(!1),Zt=(0,h.Z)(St,2),at=Zt[0],Pt=Zt[1],Rt=e.useRef(),Tt=function(){clearTimeout(Rt.current)},Ht=function(s){var f;s==null||s.preventDefault(),s==null||s.stopPropagation(),it()(X.text||String(O)||""),Pt(!0),Tt(),Rt.current=setTimeout(function(){Pt(!1)},3e3),(f=X.onCopy)===null||f===void 0||f.call(X,s)};e.useEffect(function(){return Tt},[]);var Gt=e.useState(!1),Mt=(0,h.Z)(Gt,2),Nt=Mt[0],Ft=Mt[1],Jt=e.useState(!1),Lt=(0,h.Z)(Jt,2),Dt=Lt[0],Vt=Lt[1],Qt=e.useState(!1),It=(0,h.Z)(Qt,2),Xt=It[0],Yt=It[1],_t=e.useState(!1),wt=(0,h.Z)(_t,2),At=wt[0],qt=wt[1],ea=e.useState(!1),Kt=(0,h.Z)(ea,2),$t=Kt[0],ta=Kt[1],aa=Pe(B,{expandable:!1}),jt=(0,h.Z)(aa,2),xe=jt[0],W=jt[1],ue=xe&&!Xt,Bt=W.rows,Be=Bt===void 0?1:Bt,nt=e.useMemo(function(){return!ue||W.suffix!==void 0||W.onEllipsis||W.expandable||Ce||se},[ue,W,Ce,se]);(0,i.Z)(function(){xe&&!nt&&(Ft((0,c.G)("webkitLineClamp")),Vt((0,c.G)("textOverflow")))},[nt,xe]);var de=e.useMemo(function(){return nt?!1:Be===1?Dt:Nt},[nt,Dt,Nt]),zt=ue&&(de?$t:At),na=ue&&Be===1&&de,rt=ue&&Be>1&&de,ra=function(s){var f;Yt(!0),(f=W.onExpand)===null||f===void 0||f.call(W,s)},la=e.useState(0),Ut=(0,h.Z)(la,2),oa=Ut[0],ia=Ut[1],ca=function(s){var f=s.offsetWidth;ia(f)},sa=function(s){var f;qt(s),At!==s&&((f=W.onEllipsis)===null||f===void 0||f.call(W,s))};e.useEffect(function(){var m=U.current;if(xe&&de&&m){var s=rt?m.offsetHeight<m.scrollHeight:m.offsetWidth<m.scrollWidth;$t!==s&&ta(s)}},[xe,de,O,rt]);var lt=W.tooltip===!0?O:W.tooltip,Wt=e.useMemo(function(){var m=function(f){return["string","number"].includes((0,b.Z)(f))};if(!(!xe||de)){if(m(O))return O;if(m(V))return V;if(m(lt))return lt}},[xe,de,V,lt,zt]);if(he)return e.createElement(Ie,{value:typeof O=="string"?O:"",onSave:N,onCancel:j,onEnd:P.onEnd,prefixCls:K,className:a,style:o,direction:Q,component:J,maxLength:P.maxLength,autoSize:P.autoSize,enterIcon:P.enterIcon});var ua=function(){var s=W.expandable,f=W.symbol;if(!s)return null;var G;return f?G=f:G=M.expand,e.createElement("a",{key:"expand",className:"".concat(K,"-expand"),onClick:ra,"aria-label":M.expand},G)},da=function(){if(!!Ce){var s=P.icon,f=P.tooltip,G=(0,ve.Z)(f)[0]||M.edit,Oe=typeof G=="string"?G:"";return $e.includes("icon")?e.createElement(v.Z,{key:"edit",title:f===!1?"":G},e.createElement(C.Z,{ref:ne,className:"".concat(K,"-edit"),onClick:R,"aria-label":Oe},s||e.createElement(ct.Z,{role:"button"}))):null}},fa=function(){if(!!se){var s=X.tooltips,f=X.icon,G=Ye(s),Oe=Ye(f),Fe=at?we(G[1],M.copied):we(G[0],M.copy),ma=at?M.copied:M.copy,ya=typeof Fe=="string"?Fe:ma;return e.createElement(v.Z,{key:"copy",title:Fe},e.createElement(C.Z,{className:T()("".concat(K,"-copy"),at&&"".concat(K,"-copy-success")),onClick:Ht,"aria-label":ya},at?we(Oe[1],e.createElement(st.Z,null),!0):we(Oe[0],e.createElement(ze.Z,null),!0)))}},va=function(s){return[s&&ua(),da(),fa()]},pa=function(s){return[s&&e.createElement("span",{"aria-hidden":!0,key:"ellipsis"},S),W.suffix,va(s)]};return e.createElement(ut.Z,{onResize:ca,disabled:!ue||de},function(m){var s;return e.createElement(pt,{title:lt,enabledEllipsis:ue,isEllipsis:zt},e.createElement(_,(0,d.Z)({className:T()((s={},(0,u.Z)(s,"".concat(K,"-").concat(g),g),(0,u.Z)(s,"".concat(K,"-disabled"),Z),(0,u.Z)(s,"".concat(K,"-ellipsis"),xe),(0,u.Z)(s,"".concat(K,"-single-line"),ue&&Be===1),(0,u.Z)(s,"".concat(K,"-ellipsis-single-line"),na),(0,u.Z)(s,"".concat(K,"-ellipsis-multiple-line"),rt),s),a),style:(0,d.Z)((0,d.Z)({},o),{WebkitLineClamp:rt?Be:void 0}),component:J,ref:(0,p.sQ)(m,U,n),direction:Q,onClick:$e.includes("text")?R:null,"aria-label":Wt,title:V},Ne),e.createElement(Qe,{enabledMeasure:ue&&!de,text:O,rows:Be,width:oa,onEllipsis:sa},function(f,G){var Oe=f;f.length&&G&&Wt&&(Oe=e.createElement("span",{key:"show-content","aria-hidden":!0},Oe));var Fe=Xe(t,e.createElement(e.Fragment,null,Oe,pa(G)));return Fe})))})}),A=yt,gt=function(t,n){var l={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(l[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(l[a[o]]=t[a[o]]);return l},_e=function(n,l){var a=n.ellipsis,o=gt(n,["ellipsis"]),g=e.useMemo(function(){return a&&(0,b.Z)(a)==="object"?(0,oe.Z)(a,["expandable","rows"]):a},[a]);return e.createElement(A,(0,d.Z)({ref:l},o,{ellipsis:g,component:"span"}))},Et=e.forwardRef(_e),qe=function(t,n){var l={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(l[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(l[a[o]]=t[a[o]]);return l},et=function(n,l){var a=n.ellipsis,o=n.rel,g=qe(n,["ellipsis","rel"]),Z=e.useRef(null);e.useImperativeHandle(l,function(){return Z.current});var O=(0,d.Z)((0,d.Z)({},g),{rel:o===void 0&&g.target==="_blank"?"noopener noreferrer":o});return delete O.navigate,e.createElement(A,(0,d.Z)({},O,{ref:Z,ellipsis:!!a,component:"a"}))},Ct=e.forwardRef(et),ht=r(93355),bt=function(t,n){var l={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(l[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(l[a[o]]=t[a[o]]);return l},xt=(0,ht.a)(1,2,3,4,5),tt=function(n,l){var a=n.level,o=a===void 0?1:a,g=bt(n,["level"]),Z;return xt.indexOf(o)!==-1?Z="h".concat(o):Z="h1",e.createElement(A,(0,d.Z)({ref:l},g,{component:Z}))},Ot=e.forwardRef(tt),Me=function(n,l){return e.createElement(A,(0,d.Z)({ref:l},n,{component:"div"}))},Ae=e.forwardRef(Me),H=_;H.Text=Et,H.Link=Ct,H.Title=Ot,H.Paragraph=Ae;var kt=H},402:function(re,L,r){"use strict";var d=r(38663),u=r.n(d),e=r(47828),Y=r.n(e),T=r(22385),p=r(47673)},20640:function(re,L,r){"use strict";var d=r(11742),u={"text/plain":"Text","text/html":"Url",default:"Text"},e="Copy to clipboard: #{key}, Enter";function Y(p){var y=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return p.replace(/#{\s*key\s*}/g,y)}function T(p,y){var I,k,le,fe,_,b,oe=!1;y||(y={}),I=y.debug||!1;try{le=d(),fe=document.createRange(),_=document.getSelection(),b=document.createElement("span"),b.textContent=p,b.style.all="unset",b.style.position="fixed",b.style.top=0,b.style.clip="rect(0, 0, 0, 0)",b.style.whiteSpace="pre",b.style.webkitUserSelect="text",b.style.MozUserSelect="text",b.style.msUserSelect="text",b.style.userSelect="text",b.addEventListener("copy",function(x){if(x.stopPropagation(),y.format)if(x.preventDefault(),typeof x.clipboardData=="undefined"){I&&console.warn("unable to use e.clipboardData"),I&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var ve=u[y.format]||u.default;window.clipboardData.setData(ve,p)}else x.clipboardData.clearData(),x.clipboardData.setData(y.format,p);y.onCopy&&(x.preventDefault(),y.onCopy(x.clipboardData))}),document.body.appendChild(b),fe.selectNodeContents(b),_.addRange(fe);var h=document.execCommand("copy");if(!h)throw new Error("copy command was unsuccessful");oe=!0}catch(x){I&&console.error("unable to copy using execCommand: ",x),I&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(y.format||"text",p),y.onCopy&&y.onCopy(window.clipboardData),oe=!0}catch(ve){I&&console.error("unable to copy using clipboardData: ",ve),I&&console.error("falling back to prompt"),k=Y("message"in y?y.message:e),window.prompt(k,p)}}finally{_&&(typeof _.removeRange=="function"?_.removeRange(fe):_.removeAllRanges()),b&&document.body.removeChild(b),le()}return oe}re.exports=T},79370:function(re,L,r){"use strict";r.d(L,{G:function(){return Y}});var d=r(98924),u=function(p){if((0,d.Z)()&&window.document.documentElement){var y=Array.isArray(p)?p:[p],I=window.document.documentElement;return y.some(function(k){return k in I.style})}return!1},e=function(p,y){if(!u(p))return!1;var I=document.createElement("div"),k=I.style[p];return I.style[p]=y,I.style[p]!==k};function Y(T,p){return!Array.isArray(T)&&p!==void 0?e(T,p):u(T)}},11742:function(re){re.exports=function(){var L=document.getSelection();if(!L.rangeCount)return function(){};for(var r=document.activeElement,d=[],u=0;u<L.rangeCount;u++)d.push(L.getRangeAt(u));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null;break}return L.removeAllRanges(),function(){L.type==="Caret"&&L.removeAllRanges(),L.rangeCount||d.forEach(function(e){L.addRange(e)}),r&&r.focus()}}}}]);
