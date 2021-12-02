import{S as Oe,i as Be,s as De,R as D,b as H,a as I,e as d,c as M,t as K,d as j,f as P,g as ae,h as i,j as qe,m as z,l as U,k as F,n as V,o as G,p as re,q as Q,r as He,V as Ie,M as Ke,T as ie,u as Le,v as je,w as Me,x as ze,y as Fe,z as Ve}from"./vendor.209d5099.js";const Ge=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))u(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function r(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(l){if(l.ep)return;l.ep=!0;const a=r(l);fetch(l.href,a)}};Ge();function Qe(n){let e,r,u;return{c(){e=d("button"),e.innerHTML=`stop
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-e9ket1"><rect width="16" height="16" fill="black"></rect></svg>`,P(e,"class","svelte-e9ket1")},m(l,a){ae(l,e,a),r||(u=U(e,"click",n[11]),r=!0)},p:Me,d(l){l&&re(e),r=!1,u()}}}function We(n){let e,r,u;return{c(){e=d("button"),e.innerHTML=`play

<svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-e9ket1"><path d="M19 11.5L0.249999 22.3253L0.25 0.674682L19 11.5Z" fill="black"></path></svg>`,ze(e,"background","rgb(255, 215, 0)"),P(e,"class","svelte-e9ket1")},m(l,a){ae(l,e,a),r||(u=U(e,"click",n[10]),r=!0)},p:Me,d(l){l&&re(e),r=!1,u()}}}function Ze(n){let e,r,u,l,a,p,R,o,m,v,f,S,q,A,X,_,T,Y,N,x,h,C,W,E,ee,y,Z,te,O,ne,s,g,k,L,c,w,B,J,le,ge;function de(t,b){return t[3]?Qe:We}let se=de(n),$=se(n);function Pe(t){n[15](t)}let he={range:"min",min:30,max:1e3,float:!0};n[0]!==void 0&&(he.values=n[0]),f=new D({props:he}),H.push(()=>I(f,"values",Pe));function Re(t){n[16](t)}let ce={range:"min",min:0,max:1760,float:!0};n[4]!==void 0&&(ce.values=n[4]),_=new D({props:ce}),H.push(()=>I(_,"values",Re));function Ae(t){n[17](t)}let me={range:"min",min:0,max:1,float:!0,step:.001};n[1]!==void 0&&(me.values=n[1]),h=new D({props:me}),H.push(()=>I(h,"values",Ae));function Ne(t){n[18](t)}let _e={range:"min",min:0,max:1,float:!0,step:.01};n[5]!==void 0&&(_e.values=n[5]),y=new D({props:_e}),H.push(()=>I(y,"values",Ne));function Ce(t){n[19](t)}let be={range:"min",min:-.5,max:1,float:!0,step:.01};n[7]!==void 0&&(be.values=n[7]),s=new D({props:be}),H.push(()=>I(s,"values",Ce));function Ee(t){n[20](t)}let ve={range:"min",min:0,max:1,float:!0,step:.001};return n[6]!==void 0&&(ve.values=n[6]),w=new D({props:ve}),H.push(()=>I(w,"values",Ee)),{c(){e=d("main"),r=d("div"),u=d("h1"),u.textContent="phrhythm",l=M(),a=d("input"),p=M(),$.c(),R=M(),o=d("div"),m=d("label"),v=K(`BPM\r
            `),j(f.$$.fragment),q=M(),A=d("label"),X=K(`PITCH\r
            `),j(_.$$.fragment),Y=M(),N=d("label"),x=K(`LENGTH\r
            `),j(h.$$.fragment),W=M(),E=d("label"),ee=K(`RANDOM\r
            `),j(y.$$.fragment),te=M(),O=d("label"),ne=K(`RAMP\r
            `),j(s.$$.fragment),k=M(),L=d("label"),c=K(`STRESS\r
            `),j(w.$$.fragment),P(u,"class","svelte-e9ket1"),P(a,"class","svelte-e9ket1"),P(r,"class","phrase svelte-e9ket1"),P(m,"for","bpm"),P(o,"class","params svelte-e9ket1"),P(e,"class","svelte-e9ket1")},m(t,b){ae(t,e,b),i(e,r),i(r,u),i(r,l),i(r,a),qe(a,n[2]),i(r,p),$.m(r,null),i(e,R),i(e,o),i(o,m),i(m,v),z(f,m,null),i(o,q),i(o,A),i(A,X),z(_,A,null),i(o,Y),i(o,N),i(N,x),z(h,N,null),i(o,W),i(o,E),i(E,ee),z(y,E,null),i(o,te),i(o,O),i(O,ne),z(s,O,null),i(o,k),i(o,L),i(L,c),z(w,L,null),J=!0,le||(ge=[U(window,"keydown",n[9]),U(a,"input",n[14]),U(a,"keydown",n[8])],le=!0)},p(t,b){b[0]&4&&a.value!==t[2]&&qe(a,t[2]),se===(se=de(t))&&$?$.p(t,b):($.d(1),$=se(t),$&&($.c(),$.m(r,null)));const ye={};!S&&b[0]&1&&(S=!0,ye.values=t[0],F(()=>S=!1)),f.$set(ye);const ke={};!T&&b[0]&16&&(T=!0,ke.values=t[4],F(()=>T=!1)),_.$set(ke);const we={};!C&&b[0]&2&&(C=!0,we.values=t[1],F(()=>C=!1)),h.$set(we);const $e={};!Z&&b[0]&32&&(Z=!0,$e.values=t[5],F(()=>Z=!1)),y.$set($e);const Se={};!g&&b[0]&128&&(g=!0,Se.values=t[7],F(()=>g=!1)),s.$set(Se);const Te={};!B&&b[0]&64&&(B=!0,Te.values=t[6],F(()=>B=!1)),w.$set(Te)},i(t){J||(V(f.$$.fragment,t),V(_.$$.fragment,t),V(h.$$.fragment,t),V(y.$$.fragment,t),V(s.$$.fragment,t),V(w.$$.fragment,t),J=!0)},o(t){G(f.$$.fragment,t),G(_.$$.fragment,t),G(h.$$.fragment,t),G(y.$$.fragment,t),G(s.$$.fragment,t),G(w.$$.fragment,t),J=!1},d(t){t&&re(e),$.d(),Q(f),Q(_),Q(h),Q(y),Q(s),Q(w),le=!1,He(ge)}}}let oe=0,ue=.1,fe=.5,pe=0;function Je(n){let e=n;return e.match(/\hehe\b/)&&(e=e.replace(/\hehe\b/g,"he he")),e.match(/\haha\b/)&&(e=e.replace(/\haha\b/g,"ha ha")),e.match(/\lmao\b/)&&(e=e.replace(/\lmao\b/g,"ell em ay oh")),e.match(/\bok\b/)&&(e=e.replace(/\bok\b/g,"oh kay")),e.match(/\!/)&&(e=e.replace(/\!/g,"")),e.match(/\?/)&&(e=e.replace(/\?/g,"")),e.match(/\:/)&&(e=e.replace(/\:/g,"")),e.match(/\)/)&&(e=e.replace(/\)/g,"")),e.match(/\bomg\b/)&&(e=e.replace(/\bomg\b/g,"oh my god")),e}function Ue(n,e,r){let u=!1,l=!1,a,p=[440],R=[0],o=[.5],m=[.3],v=[120],f=[.5],S=60/v[0]/2*f[0],q="the elephant took a bite!";function A(s){s.keyCode===13&&!l&&_()}function X(s){s.keyCode===27&&C()}function _(){W(q,null,{synth:T,bpm:180,hi:300,lo:280,t:"32n"})}new Ie(0).toDestination();let T=new Ke({oscillator:{type:"amsawtooth"},envelope:{attack:oe,decay:ue,sustain:fe,release:pe},filter:{Q:9,type:"lowpass"},filterEnvelope:{attack:oe,decay:ue,sustain:fe,release:pe,baseFrequency:1200}}).toDestination();function Y(s,g,k){const L=Math.random()*s.hi/2*R[0];if(g){const c=p[0]+p[0]*o[0]+L;s.synth.triggerAttackRelease(c,S,k),s.synth.frequency.rampTo(c+c*m[0],S,k)}else{const c=p[0]+L;s.synth.triggerAttackRelease(c,S,k),s.synth.frequency.rampTo(c+c*m[0],S,k)}}["hello there","the elephant took a bite!","i love you","haha","hahahahahahahahahaha","omg haha","lmao","hehe","ur an idiot :)","how's it going?","wonderful","hi","yo","indubitably","absolutely tremendous"].sort((s,g)=>s.length<g.length?1:-1);function N(){r(13,ie.bpm.value=v[0],Le),Fe(),ie.start(),u=!0}function x(s){let g=Ve.stresses(s).split(/[ \/]/);return g.push("end"),g}function h(){a.stop(),a.dispose(),r(3,l=!1)}function C(){a&&h()}function W(s,g,k,L){u||N(),l&&h(),r(3,l=s),k.bpm;const c=x(Je(s));a=new je(function(w,B){if(B==="end"){g&&g();return}Y(k,B==="1",w)},c),a.loop=!0,a.start(.1)}function E(){q=this.value,r(2,q)}function ee(s){v=s,r(0,v)}function y(s){p=s,r(4,p)}function Z(s){f=s,r(1,f)}function te(s){R=s,r(5,R)}function O(s){m=s,r(7,m)}function ne(s){o=s,r(6,o)}return n.$$.update=()=>{n.$$.dirty[0]&3&&(S=60/v[0]/2*f[0]),n.$$.dirty[0]&8193&&ie.bpm.rampTo(+v,.1),n.$$.dirty[0]&4&&(console.log(q),C())},T.envelope.set({attack:oe}),T.envelope.set({decay:ue}),T.envelope.set({sustain:fe}),T.envelope.set({release:pe}),[v,f,q,l,p,R,o,m,A,X,_,h,W,Le,E,ee,y,Z,te,O,ne]}class Xe extends Oe{constructor(e){super();Be(this,e,Ue,Ze,De,{sayPhrase:12},null,[-1,-1])}get sayPhrase(){return this.$$.ctx[12]}}new Xe({target:document.getElementById("app")});