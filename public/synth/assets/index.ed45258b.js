import{S as je,i as ze,s as Ge,e as y,t as B,a as T,b as fe,c as u,d as Ve,f as We,g as Ze,h as pe,R as z,j as G,k as V,l as C,m as W,n as Ue,o as Z,p as J,q as E,r as D,u as Je,v as X,w as Y,x as Xe,y as Ye,V as xe,M as $e,T as ge,z as Ce,A as et,B as tt,C as Ee,D as st,E as nt,F as Ne,G as Be,H as rt,I as lt}from"./vendor.0f20ef37.js";const ot=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))g(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&g(n)}).observe(document,{childList:!0,subtree:!0});function e(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function g(l){if(l.ep)return;l.ep=!0;const a=e(l);fetch(l.href,a)}};ot();const{window:at}=et;function De(s){let t,e,g,l,a;return{c(){t=y("div"),e=B(s[8]),T(t,"class","copy-message svelte-bvyevl")},m(n,f){fe(n,t,f),u(t,e),a=!0},p(n,f){(!a||f[0]&256)&&Ve(e,n[8])},i(n){a||(We(()=>{l&&l.end(1),g=tt(t,Ee,{y:10,duration:500}),g.start()}),a=!0)},o(n){g&&g.invalidate(),l=Ze(t,Ee,{y:10,duration:500,delay:500}),a=!1},d(n){n&&pe(t),n&&l&&l.end()}}}function ut(s){let t,e,g;return{c(){t=y("button"),t.innerHTML=`stop
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-bvyevl"><rect width="16" height="16" fill="black"></rect></svg>`,T(t,"class","transport-btn svelte-bvyevl"),Ne(t,"background","#f77")},m(l,a){fe(l,t,a),e||(g=J(t,"click",s[14]),e=!0)},p:Be,d(l){l&&pe(t),e=!1,g()}}}function it(s){let t,e,g;return{c(){t=y("button"),t.innerHTML=`play

<svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-bvyevl"><path d="M19 11.5L0.249999 22.3253L0.25 0.674682L19 11.5Z" fill="black"></path></svg>`,T(t,"class","transport-btn svelte-bvyevl"),Ne(t,"background","rgb(255, 215, 0)")},m(l,a){fe(l,t,a),e||(g=J(t,"click",s[12]),e=!0)},p:Be,d(l){l&&pe(t),e=!1,g()}}}function ft(s){let t,e,g,l,a,n,f,p,m,b,w,i,P,d,_,x,L,F,ne,q,$,N,K,re,M,H,ee,O,le,R,te,oe,Q,ae,A,o,v,S,j,c,se,I,ue,de,h=s[8]&&De(s);function _e(r,k){return r[7]?ut:it}let ie=_e(s),U=ie(s);function He(r){s[19](r)}let ye={range:"min",min:30,max:1e3,float:!0};s[0]!==void 0&&(ye.values=s[0]),_=new z({props:ye}),G.push(()=>V(_,"values",He));function Oe(r){s[20](r)}let we={range:"min",min:0,max:1760,float:!0};s[1]!==void 0&&(we.values=s[1]),q=new z({props:we}),G.push(()=>V(q,"values",Oe));function Ie(r){s[21](r)}let ve={range:"min",min:0,max:1,float:!0,step:.001};s[5]!==void 0&&(ve.values=s[5]),M=new z({props:ve}),G.push(()=>V(M,"values",Ie));function Fe(r){s[22](r)}let ke={range:"min",min:0,max:1,float:!0,step:.01};s[2]!==void 0&&(ke.values=s[2]),R=new z({props:ke}),G.push(()=>V(R,"values",Fe));function Ke(r){s[23](r)}let Se={range:"min",min:-.5,max:1,float:!0,step:.01};s[3]!==void 0&&(Se.values=s[3]),A=new z({props:Se}),G.push(()=>V(A,"values",Ke));function Qe(r){s[24](r)}let Te={range:"min",min:0,max:1,float:!0,step:.001};return s[4]!==void 0&&(Te.values=s[4]),c=new z({props:Te}),G.push(()=>V(c,"values",Qe)),{c(){t=y("main"),e=y("header"),g=y("h1"),l=y("a"),l.textContent=`${s[9]}`,a=C(),n=y("input"),f=C(),p=y("button"),h&&h.c(),m=B(`\r
\r
            copy params`),b=C(),U.c(),w=C(),i=y("div"),P=y("label"),d=B(`BPM\r
            `),W(_.$$.fragment),L=C(),F=y("label"),ne=B(`PITCH\r
            `),W(q.$$.fragment),N=C(),K=y("label"),re=B(`LENGTH\r
            `),W(M.$$.fragment),ee=C(),O=y("label"),le=B(`RANDOM\r
            `),W(R.$$.fragment),oe=C(),Q=y("label"),ae=B(`RAMP\r
            `),W(A.$$.fragment),v=C(),S=y("label"),j=B(`STRESS\r
            `),W(c.$$.fragment),T(l,"href","https://emu.media/synth"),T(l,"class","svelte-bvyevl"),T(g,"class","svelte-bvyevl"),T(n,"class","svelte-bvyevl"),T(p,"class","copy-btn svelte-bvyevl"),T(e,"class","svelte-bvyevl"),T(P,"for","bpm"),T(i,"class","params svelte-bvyevl"),T(t,"class","svelte-bvyevl")},m(r,k){fe(r,t,k),u(t,e),u(e,g),u(g,l),u(e,a),u(e,n),Ue(n,s[6]),u(e,f),u(e,p),h&&h.m(p,null),u(p,m),u(e,b),U.m(e,null),u(t,w),u(t,i),u(i,P),u(P,d),Z(_,P,null),u(i,L),u(i,F),u(F,ne),Z(q,F,null),u(i,N),u(i,K),u(K,re),Z(M,K,null),u(i,ee),u(i,O),u(O,le),Z(R,O,null),u(i,oe),u(i,Q),u(Q,ae),Z(A,Q,null),u(i,v),u(i,S),u(S,j),Z(c,S,null),I=!0,ue||(de=[J(at,"keydown",s[11]),J(n,"input",s[18]),J(n,"keydown",s[10]),J(p,"click",s[13])],ue=!0)},p(r,k){k[0]&64&&n.value!==r[6]&&Ue(n,r[6]),r[8]?h?(h.p(r,k),k[0]&256&&E(h,1)):(h=De(r),h.c(),E(h,1),h.m(p,m)):h&&(st(),D(h,1,1,()=>{h=null}),Je()),ie===(ie=_e(r))&&U?U.p(r,k):(U.d(1),U=ie(r),U&&(U.c(),U.m(e,null)));const Pe={};!x&&k[0]&1&&(x=!0,Pe.values=r[0],X(()=>x=!1)),_.$set(Pe);const qe={};!$&&k[0]&2&&($=!0,qe.values=r[1],X(()=>$=!1)),q.$set(qe);const Le={};!H&&k[0]&32&&(H=!0,Le.values=r[5],X(()=>H=!1)),M.$set(Le);const Me={};!te&&k[0]&4&&(te=!0,Me.values=r[2],X(()=>te=!1)),R.$set(Me);const Re={};!o&&k[0]&8&&(o=!0,Re.values=r[3],X(()=>o=!1)),A.$set(Re);const Ae={};!se&&k[0]&16&&(se=!0,Ae.values=r[4],X(()=>se=!1)),c.$set(Ae)},i(r){I||(E(h),E(_.$$.fragment,r),E(q.$$.fragment,r),E(M.$$.fragment,r),E(R.$$.fragment,r),E(A.$$.fragment,r),E(c.$$.fragment,r),I=!0)},o(r){D(h),D(_.$$.fragment,r),D(q.$$.fragment,r),D(M.$$.fragment,r),D(R.$$.fragment,r),D(A.$$.fragment,r),D(c.$$.fragment,r),I=!1},d(r){r&&pe(t),h&&h.d(),U.d(),Y(_),Y(q),Y(M),Y(R),Y(A),Y(c),ue=!1,Xe(de)}}}let ce=0,he=.1,me=.5,be=0;function pt(s){let t=s;return t.match(/\hehe\b/)&&(t=t.replace(/\hehe\b/g,"he he")),t.match(/\haha\b/)&&(t=t.replace(/\haha\b/g,"ha ha")),t.match(/\lmao\b/)&&(t=t.replace(/\lmao\b/g,"ell em ay oh")),t.match(/\bok\b/)&&(t=t.replace(/\bok\b/g,"oh kay")),t.match(/\!/)&&(t=t.replace(/\!/g,"")),t.match(/\?/)&&(t=t.replace(/\?/g,"")),t.match(/\:/)&&(t=t.replace(/\:/g,"")),t.match(/\)/)&&(t=t.replace(/\)/g,"")),t.match(/\bomg\b/)&&(t=t.replace(/\bomg\b/g,"oh my god")),t}function gt(s,t,e){let g=!1,l=!1,a,n=new URLSearchParams(window.location.search),f=[n.get("bpm")||100],p=[n.get("pitch")||110],m=[n.get("random")||0],b=[n.get("ramp")||0],w=[n.get("stress")||.5],i=[n.get("length")||.7],P=60/f[0]/2*i[0],d=n.get("phrase")||"the elephant took a bite!",_=null,x="emu.media/synth";const L=Ye(()=>{history.replaceState({},"","?"+n.toString())},500);function F(o){o.keyCode===13&&!l&&q()}function ne(o){o.keyCode===27&&ee()}function q(){O(d,null,{synth:N,bpm:180,hi:300,lo:280,t:"32n"})}function $(){const v=`${window.location.toString().split("?")[0]}?${n.toString()}`;navigator.clipboard?navigator.clipboard.writeText(v).then(()=>{e(8,_="copied to clipboard"),window.setTimeout(()=>e(8,_=null),500)},()=>{e(8,_="something went wrong"),window.setTimeout(()=>e(8,_=null),500)}):(e(8,_="something went wrong"),window.setTimeout(()=>e(8,_=null),500))}new xe(0).toDestination();let N=new $e({oscillator:{type:"amsawtooth"},envelope:{attack:ce,decay:he,sustain:me,release:be},filter:{Q:9,type:"lowpass",frequency:8e3},filterEnvelope:{attack:ce,decay:he,sustain:me,release:be,baseFrequency:1200}}).toDestination();function K(o,v,S){const j=Math.random()*o.hi/2*m[0];if(v){const c=p[0]+p[0]*w[0]+j;o.synth.triggerAttackRelease(c,P,S),o.synth.frequency.rampTo(c+c*b[0],P,S)}else{const c=p[0]+j;o.synth.triggerAttackRelease(c,P,S),o.synth.frequency.rampTo(c+c*b[0],P,S)}}["hello there","the elephant took a bite!","i love you","haha","hahahahahahahahahaha","omg haha","lmao","hehe","ur an idiot :)","how's it going?","wonderful","hi","yo","indubitably","absolutely tremendous"].sort((o,v)=>o.length<v.length?1:-1);function re(){e(16,ge.bpm.value=f[0],Ce),rt(),ge.start(),g=!0}function M(o){let v=lt.stresses(o).split(/[ \/]/);return v.push("end"),v}function H(){a.stop(),a.dispose(),e(7,l=!1)}function ee(){a&&H()}function O(o,v,S,j){g||re(),l&&H(),e(7,l=o),S.bpm;const c=M(pt(o));a=new nt(function(se,I){if(I==="end"){v&&v();return}K(S,I==="1",se)},c),a.loop=!0,a.start(.1)}function le(){d=this.value,e(6,d)}function R(o){f=o,e(0,f)}function te(o){p=o,e(1,p)}function oe(o){i=o,e(5,i)}function Q(o){m=o,e(2,m)}function ae(o){b=o,e(3,b)}function A(o){w=o,e(4,w)}return s.$$.update=()=>{s.$$.dirty[0]&131073&&(n.set("bpm",f[0]),e(17,n),e(0,f),e(1,p),e(5,i),e(2,m),e(3,b),e(4,w),e(6,d),L()),s.$$.dirty[0]&131074&&(n.set("pitch",p[0]),e(17,n),e(0,f),e(1,p),e(5,i),e(2,m),e(3,b),e(4,w),e(6,d),L()),s.$$.dirty[0]&131104&&(n.set("length",i[0]),e(17,n),e(0,f),e(1,p),e(5,i),e(2,m),e(3,b),e(4,w),e(6,d),L()),s.$$.dirty[0]&131076&&(n.set("random",m[0]),e(17,n),e(0,f),e(1,p),e(5,i),e(2,m),e(3,b),e(4,w),e(6,d),L()),s.$$.dirty[0]&131080&&(n.set("ramp",b[0]),e(17,n),e(0,f),e(1,p),e(5,i),e(2,m),e(3,b),e(4,w),e(6,d),L()),s.$$.dirty[0]&131088&&(n.set("stress",w[0]),e(17,n),e(0,f),e(1,p),e(5,i),e(2,m),e(3,b),e(4,w),e(6,d),L()),s.$$.dirty[0]&64&&(e(6,d),ee()),s.$$.dirty[0]&131136&&(n.set("phrase",d),e(17,n),e(0,f),e(1,p),e(5,i),e(2,m),e(3,b),e(4,w),e(6,d),L()),s.$$.dirty[0]&33&&(P=60/f[0]/2*i[0]),s.$$.dirty[0]&65537&&ge.bpm.rampTo(+f,.1)},N.envelope.set({attack:ce}),N.envelope.set({decay:he}),N.envelope.set({sustain:me}),N.envelope.set({release:be}),[f,p,m,b,w,i,d,l,_,x,F,ne,q,$,H,O,Ce,n,le,R,te,oe,Q,ae,A]}class ct extends je{constructor(t){super();ze(this,t,gt,ft,Ge,{sayPhrase:15},null,[-1,-1])}get sayPhrase(){return this.$$.ctx[15]}}new ct({target:document.getElementById("app")});
