"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=t(function(O,n){
var c=require('@stdlib/blas-ext-base-gsumpw/dist').ndarray;function d(r,e,a,v){return r<=0?NaN:c(r,e,a,v)/r}n.exports=d
});var i=t(function(R,s){
var f=require('@stdlib/strided-base-stride2offset/dist'),m=u();function w(r,e,a){return m(r,e,a,f(r,a))}s.exports=w
});var q=t(function(b,o){
var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=i(),x=u();y(p,"ndarray",x);o.exports=p
});var g=q();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
