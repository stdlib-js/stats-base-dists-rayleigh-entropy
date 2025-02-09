// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n){return n!=n}var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var e="function"==typeof Symbol?Symbol:void 0,a="function"==typeof e?e.toStringTag:"";var i=r&&"symbol"==typeof Symbol.toStringTag?function(n){var r,e,i,f,u;if(null==n)return t.call(n);e=n[a],u=a,r=null!=(f=n)&&o.call(f,u);try{n[a]=void 0}catch(r){return t.call(n)}return i=t.call(n),r?n[a]=e:delete n[a],i}:function(n){return t.call(n)},f="function"==typeof Uint32Array;var u="function"==typeof Uint32Array?Uint32Array:null;var y,c="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var n,r,t;if("function"!=typeof u)return!1;try{r=new u(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(f&&t instanceof Uint32Array||"[object Uint32Array]"===i(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?c:function(){throw new Error("not implemented")};var l=y,v="function"==typeof Float64Array;var p="function"==typeof Float64Array?Float64Array:null;var A,U="function"==typeof Float64Array?Float64Array:void 0;A=function(){var n,r,t;if("function"!=typeof p)return!1;try{r=new p([1,3.14,-3.14,NaN]),t=r,n=(v&&t instanceof Float64Array||"[object Float64Array]"===i(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?U:function(){throw new Error("not implemented")};var w=A,b="function"==typeof Uint8Array;var m="function"==typeof Uint8Array?Uint8Array:null;var d,h="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var n,r,t;if("function"!=typeof m)return!1;try{r=new m(r=[1,3.14,-3.14,256,257]),t=r,n=(b&&t instanceof Uint8Array||"[object Uint8Array]"===i(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?h:function(){throw new Error("not implemented")};var N=d,s="function"==typeof Uint16Array;var F="function"==typeof Uint16Array?Uint16Array:null;var S,j="function"==typeof Uint16Array?Uint16Array:void 0;S=function(){var n,r,t;if("function"!=typeof F)return!1;try{r=new F(r=[1,3.14,-3.14,65536,65537]),t=r,n=(s&&t instanceof Uint16Array||"[object Uint16Array]"===i(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?j:function(){throw new Error("not implemented")};var E,g={uint16:S,uint8:N};(E=new g.uint16(1))[0]=4660;var I=52===new g.uint8(E.buffer)[0],T=!0===I?1:0,O=new w(1),x=new l(O.buffer);function G(n){return O[0]=n,x[T]}var P=!0===I?1:0,V=new w(1),Y=new l(V.buffer);var _=1023,k=Number.NEGATIVE_INFINITY;var q=.6931471803691238,z=1.9082149292705877e-10,B=0x40000000000000,C=.3333333333333333,D=1048575,H=2146435072,J=1048576,K=1072693248;function L(r){var t,o,e,a,i,f,u,y,c,l,v,p;return 0===r?k:n(r)||r<0?NaN:(i=0,(o=G(r))<J&&(i-=54,o=G(r*=B)),o>=H?r+r:(i+=(o>>20)-_|0,i+=(y=(o&=D)+614244&1048576|0)>>20|0,u=(r=function(n,r){return V[0]=n,Y[P]=r>>>0,V[0]}(r,o|y^K))-1,(D&2+o)<3?0===u?0===i?0:i*q+i*z:(f=u*u*(.5-C*u),0===i?u-f:i*q-(f-i*z-u)):(y=o-398458|0,c=440401-o|0,a=(v=(p=(l=u/(2+u))*l)*p)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(v),e=p*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(v),f=e+a,(y|=c)>0?(t=.5*u*u,0===i?u-(t-l*(t+f)):i*q-(t-(l*(t+f)+i*z)-u)):0===i?u-l*(u-f):i*q-(l*(u-f)-i*z-u))))}function M(r){return n(r)||r<=0?NaN:1+L(r/1.4142135623730951)+.28860783245076643}export{M as default};
//# sourceMappingURL=mod.js.map
