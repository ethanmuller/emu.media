import{S as He,i as Oe,s as Ce,R as D,b as I,a as K,e as m,c as A,t as j,d as z,f as N,g as re,h as i,j as Le,m as F,l as ee,k as U,n as V,o as W,p as ie,q as G,r as De,u as Ie,V as Ke,M as je,T as oe,v as qe,w as ze,x as Fe,y as Me,z as Ue,A as Ve,B as We}from"./vendor.b1238036.js";const Ge=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))f(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&f(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function f(s){if(s.ep)return;s.ep=!0;const l=a(s);fetch(s.href,l)}};Ge();const{window:Qe}=ze;function Ze(t){let e,a,f;return{c(){e=m("button"),e.innerHTML=`stop
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1wlmamn"><rect width="16" height="16" fill="black"></rect></svg>`,N(e,"class","svelte-1wlmamn")},m(s,l){re(s,e,l),a||(f=ee(e,"click",t[11]),a=!0)},p:Me,d(s){s&&ie(e),a=!1,f()}}}function Je(t){let e,a,f;return{c(){e=m("button"),e.innerHTML=`play

<svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1wlmamn"><path d="M19 11.5L0.249999 22.3253L0.25 0.674682L19 11.5Z" fill="black"></path></svg>`,Ue(e,"background","rgb(255, 215, 0)"),N(e,"class","svelte-1wlmamn")},m(s,l){re(s,e,l),a||(f=ee(e,"click",t[10]),a=!0)},p:Me,d(s){s&&ie(e),a=!1,f()}}}function Xe(t){let e,a,f,s,l,o,c,u,_,P,p,y,R,b,w,$,Q,Z,k,te,S,J,E,B,X,T,Y,ne,H,se,L,x,r,g,q,h,d,O,C,le;function de(n,v){return n[7]?Ze:Je}let ae=de(t),M=ae(t);function Pe(n){t[15](n)}let me={range:"min",min:30,max:1e3,float:!0};t[0]!==void 0&&(me.values=t[0]),p=new D({props:me}),I.push(()=>K(p,"values",Pe));function Re(n){t[16](n)}let he={range:"min",min:0,max:1760,float:!0};t[1]!==void 0&&(he.values=t[1]),$=new D({props:he}),I.push(()=>K($,"values",Re));function Ae(n){t[17](n)}let ce={range:"min",min:0,max:1,float:!0,step:.001};t[5]!==void 0&&(ce.values=t[5]),S=new D({props:ce}),I.push(()=>K(S,"values",Ae));function Ne(n){t[18](n)}let _e={range:"min",min:0,max:1,float:!0,step:.01};t[2]!==void 0&&(_e.values=t[2]),T=new D({props:_e}),I.push(()=>K(T,"values",Ne));function Be(n){t[19](n)}let be={range:"min",min:-.5,max:1,float:!0,step:.01};t[3]!==void 0&&(be.values=t[3]),L=new D({props:be}),I.push(()=>K(L,"values",Be));function Ee(n){t[20](n)}let ve={range:"min",min:0,max:1,float:!0,step:.001};return t[4]!==void 0&&(ve.values=t[4]),h=new D({props:ve}),I.push(()=>K(h,"values",Ee)),{c(){e=m("main"),a=m("div"),f=m("h1"),f.innerHTML='<a href="https://emu.media/synth" class="svelte-1wlmamn">https://emu.media/synth</a>',s=A(),l=m("input"),o=A(),M.c(),c=A(),u=m("div"),_=m("label"),P=j(`BPM\r
            `),z(p.$$.fragment),R=A(),b=m("label"),w=j(`PITCH\r
            `),z($.$$.fragment),Z=A(),k=m("label"),te=j(`LENGTH\r
            `),z(S.$$.fragment),E=A(),B=m("label"),X=j(`RANDOM\r
            `),z(T.$$.fragment),ne=A(),H=m("label"),se=j(`RAMP\r
            `),z(L.$$.fragment),r=A(),g=m("label"),q=j(`STRESS\r
            `),z(h.$$.fragment),N(f,"class","svelte-1wlmamn"),N(l,"class","svelte-1wlmamn"),N(a,"class","phrase svelte-1wlmamn"),N(_,"for","bpm"),N(u,"class","params svelte-1wlmamn"),N(e,"class","svelte-1wlmamn")},m(n,v){re(n,e,v),i(e,a),i(a,f),i(a,s),i(a,l),Le(l,t[6]),i(a,o),M.m(a,null),i(e,c),i(e,u),i(u,_),i(_,P),F(p,_,null),i(u,R),i(u,b),i(b,w),F($,b,null),i(u,Z),i(u,k),i(k,te),F(S,k,null),i(u,E),i(u,B),i(B,X),F(T,B,null),i(u,ne),i(u,H),i(H,se),F(L,H,null),i(u,r),i(u,g),i(g,q),F(h,g,null),O=!0,C||(le=[ee(Qe,"keydown",t[9]),ee(l,"input",t[14]),ee(l,"keydown",t[8])],C=!0)},p(n,v){v[0]&64&&l.value!==n[6]&&Le(l,n[6]),ae===(ae=de(n))&&M?M.p(n,v):(M.d(1),M=ae(n),M&&(M.c(),M.m(a,null)));const ye={};!y&&v[0]&1&&(y=!0,ye.values=n[0],U(()=>y=!1)),p.$set(ye);const we={};!Q&&v[0]&2&&(Q=!0,we.values=n[1],U(()=>Q=!1)),$.$set(we);const $e={};!J&&v[0]&32&&(J=!0,$e.values=n[5],U(()=>J=!1)),S.$set($e);const ke={};!Y&&v[0]&4&&(Y=!0,ke.values=n[2],U(()=>Y=!1)),T.$set(ke);const Se={};!x&&v[0]&8&&(x=!0,Se.values=n[3],U(()=>x=!1)),L.$set(Se);const Te={};!d&&v[0]&16&&(d=!0,Te.values=n[4],U(()=>d=!1)),h.$set(Te)},i(n){O||(V(p.$$.fragment,n),V($.$$.fragment,n),V(S.$$.fragment,n),V(T.$$.fragment,n),V(L.$$.fragment,n),V(h.$$.fragment,n),O=!0)},o(n){W(p.$$.fragment,n),W($.$$.fragment,n),W(S.$$.fragment,n),W(T.$$.fragment,n),W(L.$$.fragment,n),W(h.$$.fragment,n),O=!1},d(n){n&&ie(e),M.d(),G(p),G($),G(S),G(T),G(L),G(h),C=!1,De(le)}}}let ue=0,fe=.1,pe=.5,ge=0;function Ye(t){let e=t;return e.match(/\hehe\b/)&&(e=e.replace(/\hehe\b/g,"he he")),e.match(/\haha\b/)&&(e=e.replace(/\haha\b/g,"ha ha")),e.match(/\lmao\b/)&&(e=e.replace(/\lmao\b/g,"ell em ay oh")),e.match(/\bok\b/)&&(e=e.replace(/\bok\b/g,"oh kay")),e.match(/\!/)&&(e=e.replace(/\!/g,"")),e.match(/\?/)&&(e=e.replace(/\?/g,"")),e.match(/\:/)&&(e=e.replace(/\:/g,"")),e.match(/\)/)&&(e=e.replace(/\)/g,"")),e.match(/\bomg\b/)&&(e=e.replace(/\bomg\b/g,"oh my god")),e}function xe(t,e,a){let f=!1,s=!1,l;const o=new URLSearchParams(window.location.search);let c=[o.get("bpm")||120],u=[o.get("pitch")||440],_=[o.get("random")||0],P=[o.get("ramp")||0],p=[o.get("stress")||.5],y=[o.get("length")||.7],R=60/c[0]/2*y[0],b=o.get("phrase")||"the elephant took a bite!";const w=Ie(()=>{history.replaceState({},"","?"+o.toString())},500);function $(r){r.keyCode===13&&!s&&Z()}function Q(r){r.keyCode===27&&B()}function Z(){X(b,null,{synth:k,bpm:180,hi:300,lo:280,t:"32n"})}new Ke(0).toDestination();let k=new je({oscillator:{type:"amsawtooth"},envelope:{attack:ue,decay:fe,sustain:pe,release:ge},filter:{Q:9,type:"lowpass"},filterEnvelope:{attack:ue,decay:fe,sustain:pe,release:ge,baseFrequency:1200}}).toDestination();function te(r,g,q){const h=Math.random()*r.hi/2*_[0];if(g){const d=u[0]+u[0]*p[0]+h;r.synth.triggerAttackRelease(d,R,q),r.synth.frequency.rampTo(d+d*P[0],R,q)}else{const d=u[0]+h;r.synth.triggerAttackRelease(d,R,q),r.synth.frequency.rampTo(d+d*P[0],R,q)}}["hello there","the elephant took a bite!","i love you","haha","hahahahahahahahahaha","omg haha","lmao","hehe","ur an idiot :)","how's it going?","wonderful","hi","yo","indubitably","absolutely tremendous"].sort((r,g)=>r.length<g.length?1:-1);function S(){a(13,oe.bpm.value=c[0],qe),Ve(),oe.start(),f=!0}function J(r){let g=We.stresses(r).split(/[ \/]/);return g.push("end"),g}function E(){l.stop(),l.dispose(),a(7,s=!1)}function B(){l&&E()}function X(r,g,q,h){f||S(),s&&E(),a(7,s=r),q.bpm;const d=J(Ye(r));l=new Fe(function(O,C){if(C==="end"){g&&g();return}te(q,C==="1",O)},d),l.loop=!0,l.start(.1)}function T(){b=this.value,a(6,b)}function Y(r){c=r,a(0,c)}function ne(r){u=r,a(1,u)}function H(r){y=r,a(5,y)}function se(r){_=r,a(2,_)}function L(r){P=r,a(3,P)}function x(r){p=r,a(4,p)}return t.$$.update=()=>{t.$$.dirty[0]&1&&(o.set("bpm",c[0]),w()),t.$$.dirty[0]&2&&(o.set("pitch",u[0]),w()),t.$$.dirty[0]&32&&(o.set("length",y[0]),w()),t.$$.dirty[0]&4&&(o.set("random",_[0]),w()),t.$$.dirty[0]&8&&(o.set("ramp",P[0]),w()),t.$$.dirty[0]&16&&(o.set("stress",p[0]),w()),t.$$.dirty[0]&64&&(a(6,b),B()),t.$$.dirty[0]&64&&(o.set("phrase",b),w()),t.$$.dirty[0]&33&&(R=60/c[0]/2*y[0]),t.$$.dirty[0]&8193&&oe.bpm.rampTo(+c,.1)},k.envelope.set({attack:ue}),k.envelope.set({decay:fe}),k.envelope.set({sustain:pe}),k.envelope.set({release:ge}),[c,u,_,P,p,y,b,s,$,Q,Z,E,X,qe,T,Y,ne,H,se,L,x]}class et extends He{constructor(e){super();Oe(this,e,xe,Xe,Ce,{sayPhrase:12},null,[-1,-1])}get sayPhrase(){return this.$$.ctx[12]}}new et({target:document.getElementById("app")});
