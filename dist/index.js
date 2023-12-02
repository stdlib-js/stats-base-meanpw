"use strict";var a=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=a(function(l,t){
var v=require('@stdlib/blas-ext-base-gsumpw/dist');function w(r,e,u){return r<=0?NaN:r===1||u===0?e[0]:v(r,e,u)/r}t.exports=w
});var p=a(function(O,s){
var o=require('@stdlib/blas-ext-base-gsumpw/dist').ndarray;function f(r,e,u,n){return r<=0?NaN:r===1||u===0?e[n]:o(r,e,u,n)/r}s.exports=f
});var q=a(function(R,m){
var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=i(),d=p();y(c,"ndarray",d);m.exports=c
});var g=q();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
